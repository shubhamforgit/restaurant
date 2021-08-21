import { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import "./AddPincode.css"

function AddPincode() {

    const [showAlert, setShowAlert] = useState(false);

    const [formValues, setformValues] = useState({
        pincodeString: '',
        pincodes: []
    })

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/pincode")
            .then(response => {
                const pincodeArray = response.data.map(pincodeElement => {
                    return pincodeElement.pincode.toString()
                });
                let pincodeArrayString = ""
                pincodeArray.forEach((item, index) => {
                    if (index === pincodeArray.length - 1) {
                        pincodeArrayString += " " + item
                    } else {
                        pincodeArrayString += " " + item + ","
                    }
                })
                setformValues(prevState => {
                    return {
                        ...prevState,
                        pincodeString: pincodeArrayString
                    }
                })
            })
    }, [])


    function addPincodes(event) {
        event.preventDefault()
        axios.post("https://food-app-timesinternet.herokuapp.com/api/staff/pincode", formValues.pincodes)
            .then((resp) => {
                console.log(resp);
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false)
                }, 1500);
            })
    }

    function handleInputChange(event) {
        event.preventDefault();
        let pincodes = event.target.value.split(",").map(function (item) {
            return { pincode: item.trim() }
        });
        setformValues({
            pincodeString: event.target.value,
            pincodes: pincodes
        })
    }

    return (

        <>
            <div className="pincodeform">
                <div className="pincode">
                    <div style={{ width: "50%", margin: "auto" }}>
                        <Form onSubmit={addPincodes}>
                            <h3 className="pincodetitle">Add Pincodes</h3>
                            {showAlert &&
                                <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                                    Staff Added!
                                </Alert>
                            }
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Pincodes</Form.Label>
                                <Form.Control  as="textarea" rows={3} name="pincodes" onChange={handleInputChange} value={formValues.pincodeString} />
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

export default AddPincode;