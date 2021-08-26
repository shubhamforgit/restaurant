import { Card } from "react-bootstrap"

const MenuItem = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem', margin: "5px" }}>
                <Card.Img variant="top" src={props.menuItem.image.mainUrl} style={{width: "100%", height: "20rem"}} />
                <Card.Body>
                    <Card.Subtitle>Item Name:</Card.Subtitle>
                    <Card.Text>{props.menuItem.name}</Card.Text>
                    <Card.Subtitle>Item Price:</Card.Subtitle>
                    <Card.Text>&#8377;{props.menuItem.sellingPrice}</Card.Text>                    
                    <Card.Subtitle>Item Category:</Card.Subtitle>
                    <Card.Text>{props.menuItem.category.name}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MenuItem