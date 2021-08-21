import { useEffect, useState } from "react";
import { Form, Button, Alert, Image, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const UpdateRestaurant = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [address, setAddress] = useState({
        line1: "",
        line2: "",
        pincode: "",
        city: "",
        state: "",

    })
    const [formImage, setFormImage] = useState({
        selectedImage: null
    })

    function imageInputHandler(event) {
        let reader = new FileReader()
        reader.onload = function () {
            var dataURL = reader.result;
            var output = document.getElementById('output');
            output.src = dataURL;
        };
        reader.readAsDataURL(event.target.files[0]);
        setFormImage({ selectedImage: event.target.files[0] });
    }

    function onImageUpload() {
        const formData = new FormData();
        formData.append("logo", formImage.selectedImage);
        axios.patch("https://food-app-timesinternet.herokuapp.com/api/staff/restaurant/logo", formData)
            .then(response => {
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false)
                }, 1500);
            }
            )
            .catch(err => console.log(err))
    };

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/restaurant")
            .then(response => {
                console.log(response.data);
                setAddress(response.data.restaurantDetail.address)
                setFormImage({
                    selectedImage: response.data.logo.mainUrl
                })
                console.log(formImage.selectedImage);
            })
    }, [])

    function handleInputChange(event) {
        event.preventDefault();
        setAddress(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    function updateDetails(event) {
        event.preventDefault()
        axios.patch("https://food-app-timesinternet.herokuapp.com/api/staff/restaurant", { address: address })
            .then(response => {
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false)
                }, 1500);
            }
            )
    }

    return (
        <>
            <div className="updateresform">
                <div className="updaterescoupon">

                    <div style={{ width: "50%", margin: "auto" }}>
                        <Form onSubmit={updateDetails}>
                            <h3 className="pincodetitle">Update Restaurant Details</h3>
                            {showAlert &&
                                <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                                    Updated!
                                </Alert>
                            }
                            <Form.Label>Restaurant Logo</Form.Label>
                            <Image id="output" src={formImage.selectedImage} />

                            <Row className="mb-3">
                                <Col>
                                    <Form.Control onChange={imageInputHandler} type="file" accept="image/*" />
                                </Col>
                                <Col>
                                    <Button onClick={onImageUpload}>Update</Button>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" >
                                <Form.Label>Address Line 1</Form.Label>
                                <Form.Control type="text" name="line1" onChange={handleInputChange} value={address.line1} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Address Line 2</Form.Label>
                                <Form.Control type="text" name="line2" onChange={handleInputChange} value={address.line2} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control type="text" name="pincode" onChange={handleInputChange} value={address.pincode} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" name="city" onChange={handleInputChange} value={address.city} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" name="state" onChange={handleInputChange} value={address.state} />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Update
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateRestaurant