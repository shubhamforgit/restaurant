import { useState } from "react"
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { uploadCoupon, uploadImage } from "../../axios/Service";

function AddCoupon(props) {

    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [imgid, setimgid] = useState()
    const [formImage, setFormImage] = useState({
        selectedImage: null
    })
    function imageInputHandler(event) {
        setFormImage({ selectedImage: event.target.files[0] });
    }
    function onImageUpload() {
        const formData = new FormData();
        formData.append("couponImage", formImage.selectedImage);
        uploadImage(formData, (resp) => {
            setimgid(resp.data.id)
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 1500);
        })
    };

    const [formValues, setFormValues] = useState(
        {
            name: "",
            value: "",
            startingDate: "26-12-2021",
            endingDate: "22-12-2022",
            minimumCartValue: 11,
            maxDiscount: "",
            maxPerUser: 4,
            totalUse: 5,
            termsAndCondition: "You can use this",
            imageId: ""
        }
    )

    function addCoupon(event) {
        event.preventDefault();
        const postCoupon = { ...formValues, imageId: imgid, maxDiscount: Number(formValues["maxDiscount"]), value: Number(formValues["value"])  }
        uploadCoupon(postCoupon, (response) => {
            console.log(response);
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 1500);
        }, (err) => {

            setShowErrorAlert(true)
            setTimeout(() => {
                setShowErrorAlert(false)
            }, 3000);

        })

        setFormValues({
            name: "",
            value: "",
            startingDate: "26-12-2021",
            endingDate: "22-12-2022",
            minimumCartValue: 11,
            maxDiscount: "",
            maxPerUser: 4,
            totalUse: 5,
            termsAndCondition: "You can use this",
            imageId: imgid
        })
    }

    function handleInputChange(event) {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (

        <div style={{ width: "50%", margin: "auto" }}>
            <Form onSubmit={addCoupon}>
                <h3 className='coupontitle'>Add Coupon</h3>
                {showAlert &&
                    <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                        Uploaded!
                    </Alert>
                }
                {showErrorAlert &&
                    <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                        Update Request Failed !!
                    </Alert>
                }
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Coupon Code</Form.Label>
                    <Form.Control required type="text" placeholder="Coupon Code..." name="name" onChange={handleInputChange} value={formValues.name} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Label>Coupon Banner</Form.Label>
                    <Col>
                            <Form.Control required onChange={imageInputHandler} type="file" accept="image/png, image/gif, image/jpeg" />
                    </Col>
                    <Col>
                        <Button onClick={onImageUpload}>Upload</Button>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="value">
                    <Form.Label>Coupon Discount %</Form.Label>
                    <Form.Control required type="text" placeholder="Value..." name="value" onChange={handleInputChange} value={formValues.value} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="value">
                    <Form.Label>Maximum Cart Discount</Form.Label>
                    <Form.Control required type="text" placeholder="Value..." name="maxDiscount" onChange={handleInputChange} value={formValues.maxDiscount} />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Add Coupon
                </Button>
            </Form>
        </div>
    )
}

export default AddCoupon