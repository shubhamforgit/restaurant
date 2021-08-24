import axios from "axios"
import { useEffect, useState } from "react"
import { CardGroup, Spinner } from "react-bootstrap"
import Order from "./Order"

const PresentOrders = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [presentOrders, setPresentOrders] = useState([])

    function getOrders(successCB) {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/order")
            .then(successCB)
    }

    useEffect(() => {
        alert("Useeffect of present orders")
        getOrders(resp => {
            let presentOrders = resp.data.filter(order => {
                return order.status !== "PACKED" && order.status !== "DECLINED"
            })
            setPresentOrders(presentOrders)
            setIsLoading(false)
        })
    }, [])

    function onSave(id, status) {
        //alert(id + status)
        axios.patch("https://food-app-timesinternet.herokuapp.com/api/staff/order/status",
            {
                orderId: id,
                orderStatus: status
            }
        )
            .then(
                getOrders(resp => {
                    let presentOrders = resp.data.filter(order => {
                        return order.status !== "PACKED" && order.status !== "DECLINED"
                    })
                    setPresentOrders([...presentOrders])
                })
            )

    }

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    } else {
        return (
            <div>
                <h1>PresentOrders</h1>
                <CardGroup style={{ justifyContent: "center" }}>
    
                    {
                        presentOrders.map((order, index) => {
                            return <Order onSave={onSave} order={order} key={index} showStatusDropdown={true} showSave={true}></Order>
                        })
                    }
                </CardGroup>
            </div>
        )
    }
    
}

export default PresentOrders