import axios from "axios"
import { useEffect, useState } from "react"
import { Card, CardGroup, Spinner } from "react-bootstrap"
import MenuItem from "./MenuItem"

const MenuItemList = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [MenuItems, setMenuItems] = useState([])

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/item")
            .then(response => {
                setMenuItems(response.data)
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
            <CardGroup style={{ justifyContent: "center" }}>
                {
                    MenuItems.map((menuItem, index) => {
                        return <MenuItem menuItem={menuItem} key={index}></MenuItem>
                    })
                }
            </CardGroup >
    
        )
    }
    
}

export default MenuItemList