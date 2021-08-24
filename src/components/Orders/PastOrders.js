import axios from "axios";
import { useEffect, useState } from "react";
import { CardGroup, Spinner } from "react-bootstrap";
import Order from "./Order";

const PastOrders = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [pastOrders, setPastOrders] = useState([])


    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/order")
        .then(resp => {
            console.log(resp.data)
            const pastOrders = resp.data.filter(order => {
                return order.status === "PACKED" || order.status === "DECLINED"
            })
            setPastOrders(pastOrders)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    } else {
        return (
            <div>
                <h1>PastOrders</h1>
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

