import axios from "axios"
import { useEffect, useState } from "react"
import { Card, CardGroup } from "react-bootstrap"
import MenuItem from "./MenuItem"

const MenuItemList = (props) => {
    const [MenuItems, setMenuItems] = useState([])

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/item")
            .then(response => {
                setMenuItems(response.data)
            })
    }, [])

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

export default MenuItemList