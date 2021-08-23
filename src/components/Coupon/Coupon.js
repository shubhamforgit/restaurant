import { Card } from "react-bootstrap"

const Coupon = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem', margin: "5px" }}>
                <Card.Img variant="top" src={props.coupon.banner.mainUrl} style={{width: "18rem", height: "20rem"}} />
                <Card.Body>
                    <Card.Subtitle>Coupon Code:</Card.Subtitle>
                    <Card.Title>{props.coupon.name}</Card.Title>
                    <Card.Subtitle>Coupon Discount:</Card.Subtitle>
                    <Card.Title>{props.coupon.maxDiscount}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Coupon