import axios from "axios";
import { useEffect, useState } from "react";
import { CardGroup, Spinner, Alert } from "react-bootstrap";
import Order from "./Order";

const PastOrders = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [pastOrders, setPastOrders] = useState([])
    const [errorOccured, setErrorOccured] = useState(false)

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/order")
        .then(resp => {
            console.log(resp.data)
            const pastOrders = resp.data.filter(order => {
                return order.status === "PACKED" || order.status === "DECLINED" || order.status === "CANCELED" || order.status === "COMPLETED"
            })
            setPastOrders(pastOrders)
            setIsLoading(false)
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
    else if (pastOrders.length==0) {
        return <Alert variant="danger">
            No  Past Orders Available
        </Alert>
    } 
    else {
        return (
            <div>
                <h1>Past Orders</h1>
                <CardGroup style={{ justifyContent: "center" }}>
    
                {
                    pastOrders.map((order, index) => {
                        return <Order order={order} key={index}></Order>
                    })
                }
                </CardGroup>
            </div>
        )
    }
    
}

export default PastOrders

