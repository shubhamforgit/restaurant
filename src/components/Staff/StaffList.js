import axios from "axios"
import { useEffect, useState } from "react"
import { Card, CardGroup } from "react-bootstrap"
import Staff from "./ViewStaff"

const StaffList= (props) => {

    const [staff, setStaff] = useState([])

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff")
            .then(response => setStaff(response.data))
    }, [])

    return (
        <CardGroup style={{ justifyContent: "center" }}>
            {
                staff.map((singleStaff, index) => {
                    return (
                        <Staff staff={singleStaff}></Staff>
                    )
                })
            }
        </CardGroup>
    )
}

export default StaffList