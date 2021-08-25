import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup, Spinner, Alert } from "react-bootstrap";

const ShowPincode = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [pincodeArray, setPincodeArray] = useState([])
    const [errorOccured, setErrorOccured] = useState(false)

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/pincode")
            .then(response => {
                const pincodeArray = response.data.map(pincodeElement => {
                    return pincodeElement.pincode
                });

                pincodeArray.sort(function (a, b) {
                    return a - b;
                })

                setPincodeArray(pincodeArray)
                console.log(pincodeArray);
                setIsLoading(false)

                let pincodeArrayString = ""
                pincodeArray.forEach((item, index) => {
                    if (index === pincodeArray.length - 1) {
                        pincodeArrayString += " " + item
                    } else {
                        pincodeArrayString += " " + item + ","
                    }
                })

            })
            .catch((err) => {
                setIsLoading(false)
                setErrorOccured(true)
            })
    }, [])

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
    else if (pincodeArray.length==0) {
        return <Alert variant="danger">
            No Pincodes Available
        </Alert>
    } 
    else {    
        return (
            <div style={{ width: "50%", margin: "auto" }}>
                <h1>Your Restaurant delivers to the following Pincodes</h1>
                <ListGroup>
                    {
                        pincodeArray.map(pincode => {
                            return <ListGroup.Item>{pincode}</ListGroup.Item>
                        })
                    }
                </ListGroup>
            </div>
        )
    }
    
}

export default ShowPincode