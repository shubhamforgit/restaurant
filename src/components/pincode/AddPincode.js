import { useEffect, useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import "./AddPincode.css"

function AddPincode() {
    const [isLoading, setIsLoading] = useState(true)
    const [errorOccured, setErrorOccured] = useState(false)
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

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
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setErrorOccured(true)
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
            .catch((err) => {

                setShowErrorAlert(true)
                setTimeout(() => {
                    setShowErrorAlert(false)
                }, 3000);

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
    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    else if (errorOccured) {
        return <Alert variant="danger">
            Error Occured! (Get Request Failed)
        </Alert>
    }
    else {
    return (

        <>
            <div className="pincodeform">
                <div className="pincode">
                    <div style={{ width: "50%", margin: "auto" }}>
                        <Form onSubmit={addPincodes}>
                            <h3 className="pincodetitle">Add Pincodes</h3>
                            {showAlert &&
                                <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                                        Pincode Added!
                                </Alert>
                            }
                                {showErrorAlert &&
                                    <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                                        Update Request Failed !!
                                    </Alert>
                                }
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Pincodes</Form.Label>
                                <Form.Control required  as="textarea" rows={3} name="pincodes" onChange={handleInputChange} value={formValues.pincodeString} />
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
}

export default AddPincode;