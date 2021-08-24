import axios from "axios"
import { useEffect, useState } from "react"
import { Card, CardGroup, Spinner } from "react-bootstrap"
import Staff from "./ViewStaff"

const StaffList = (props) => {

    const [isLoading, setIsLoading] = useState(true)
    const [staff, setStaff] = useState([])

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff")
            .then((response) => {
                setStaff(response.data)
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
                    staff.map((singleStaff, index) => {
                        return (
                            <Staff key={index} staff={singleStaff}></Staff>
                        )
                    })
                }
            </CardGroup>
        )
    }
}

export default StaffList