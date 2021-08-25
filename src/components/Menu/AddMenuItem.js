import { useState, useEffect } from "react"
import { Form, Button, Dropdown, Row, Col, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './AddMenuItem.css';
import axios from "axios";

function AddMenuItem(props) {
    const [catval, setcatval] = useState([]);
    const [idval, setidval] = useState();
    const [imgidval, setimgidval] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const [formValues, setFormValues] = useState({
        title: '',
        category: '',
        price: '',
        imgURL: '',

    })

    function addItem(event) {
        event.preventDefault();
        //alert("Submitted!" + " title: " + formValues.title + " category: " + formValues.category + " price: " + formValues.price + formValues.imgURL);
        const postdata = {
            name: formValues.title,
            actualPrice: Number(formValues.price),
            sellingPrice: Number(formValues.price),
            itemType: "VEG",
            categoryId: Number(idval),
            imageId: imgidval
        }
        console.log(postdata)
        axios.post("https://food-app-timesinternet.herokuapp.com/api/staff/item", postdata)
            .then((res) => {
                console.log(res);
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false)
                }, 1500);
                setFormValues({
                    title: '',
                    category: '',
                    price: '',
                    imgURL: '',

                })
            })
            .catch(console.error());

    }

    function handleInputChange(event) {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }
    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/category").then((res) => {
            setcatval(res.data)
            console.log(res.data)
        })
            .catch(console.error());
    }, [])


    function handleDropdownChange(event) {
        setidval(event)
        setFormValues((prev) => {
            return {
                ...prev,
                category: parseInt(event)
            }

        })

    }
    function handleFileChange(event) {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.files[0].name
            }
        })
    }
    // Image upload

    const [formImage, setFormImage] = useState({
        selectedImage: null
    })

    function imageInputHandler(event) {
        setFormImage({ selectedImage: event.target.files[0] });
    }

    function onImageUpload() {
        const formData = new FormData();
        formData.append("itemImage", formImage.selectedImage);
        axios.post("https://food-app-timesinternet.herokuapp.com/api/staff/item/image", formData)
            .then((resp) => {
                setimgidval(resp.data.id)
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false)
                }, 1500);
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="menuitemform">
            <div className="menuitem">
                <div style={{ width: "50%", margin: "auto" }}>
                    <Form onSubmit={addItem}>
                        <h3 className="menuitemtitle">Add Menu Item</h3>
                        {showAlert &&
                            <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                                Uploaded!
                            </Alert>
                        }
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control type="text" placeholder="Item Name..." name="title" onChange={handleInputChange} value={formValues.title} />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Add Item Image</Form.Label>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Control onChange={imageInputHandler} type="file" accept="image/png, image/gif, image/jpeg" />
                                </Col>
                                <Col>
                                    <Button onClick={onImageUpload}>Upload</Button>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Dropdown onSelect={handleDropdownChange} style={{ marginBottom: "16px" }} >
                            <Dropdown.Toggle variant="success" id="category" >
                                Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu ">
                                {
                                    catval.map((val, index) => {
                                        return <Dropdown.Item key={index} eventKey={val.id}>{val.name}</Dropdown.Item>
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Item Price</Form.Label>
                            <Form.Control type="text" placeholder="Price..." name="price" onChange={handleInputChange} value={formValues.price} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add Item
                        </Button>
                    </Form>

                    <img src={formValues.imgURL} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AddMenuItem