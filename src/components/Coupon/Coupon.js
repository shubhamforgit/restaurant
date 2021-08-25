import { Card } from "react-bootstrap"

const Coupon = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem', margin: "5px" }}>
                <Card.Img variant="top" src={props.coupon.banner.mainUrl} style={{width: "100%", height: "20rem"}} />
                <Card.Body>
                    <Card.Subtitle>Coupon Code:</Card.Subtitle>
                    <Card.Text>{props.coupon.name}</Card.Text>
                    <Card.Subtitle>Coupon Discount %:</Card.Subtitle>
                    <Card.Text>{props.coupon.value}</Card.Text>
                    <Card.Subtitle>Maximum Cart Discount:</Card.Subtitle>
                    <Card.Text>{props.coupon.maxDiscount}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Coupon