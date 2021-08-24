import axios from "axios";
import { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import Order from "./Order";

const PastOrders = () => {

    const [pastOrders, setPastOrders] = useState([])


    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/order")
        .then(resp => {
            console.log(resp.data)
            const pastOrders = resp.data.filter(order => {
                return order.status === "PACKED" || order.status === "DECLINED"
            })
            setPastOrders(pastOrders)
        })
    }, [])

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

export default PastOrders

