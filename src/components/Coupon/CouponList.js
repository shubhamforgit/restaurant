import axios from "axios"
import { useEffect, useState } from "react"
import { CardGroup, Spinner } from "react-bootstrap"
import Coupon from "./Coupon"

const CouponList = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [coupons, setCoupons] = useState([])

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/coupon")
            .then(response => {
                setCoupons(response.data)
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
                    coupons.map((coupon, index) => {
                        return <Coupon coupon={coupon} key={index}></Coupon>
                    })
                }
            </CardGroup>
        )
    }

}

export default CouponList