import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

const ShowPincode = () => {

    const [pincodeArray, setPincodeArray] = useState([])

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/pincode")
            .then(response => {
                const pincodeArray = response.data.map(pincodeElement => {
                    return pincodeElement.pincode
                });

                pincodeArray.sort(function(a, b) {
                    return a - b;
                  })

                setPincodeArray(pincodeArray)
                console.log(pincodeArray);
                let pincodeArrayString = ""
                pincodeArray.forEach((item, index) => {
                    if (index === pincodeArray.length - 1) {
                        pincodeArrayString += " " + item
                    } else {
                        pincodeArrayString += " " + item + ","
                    }
                })
                
            })
    }, [])

    return (
        <div style={{width: "50%", margin: "auto"}}>
            <h1>Youe Restaurant delivers to the following Pincodes</h1>
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

export default ShowPincode