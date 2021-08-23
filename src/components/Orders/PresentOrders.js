import axios from "axios"
import { useEffect, useState } from "react"
import { CardGroup } from "react-bootstrap"
import Order from "./Order"

const PresentOrders = () => {

    const [presetOrders, setPresentOrders] = useState([])

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/order")
        .then(resp => {
            console.log(resp.data);
            setPresentOrders(resp.data)
        })
    }, [])
    return (
        <div>
            <h1>PresentOrders</h1>
            <CardGroup style={{ justifyContent: "center" }}>

            {
                presetOrders.map((order, index) => {
                    return <Order order={order} key={index} showStatusDropdown={true} showSave={true}></Order>
                })
            }
            </CardGroup>
        </div>
    )
}

export default PresentOrders