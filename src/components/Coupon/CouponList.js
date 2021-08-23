import axios from "axios"
import { useEffect, useState } from "react"
import { CardGroup } from "react-bootstrap"
import Coupon from "./Coupon"

const CouponList = () => {

    const [coupons, setCoupons] = useState([])

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/coupon")
            .then(response => {
                setCoupons(response.data)
            })
    }, [])

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

export default CouponList