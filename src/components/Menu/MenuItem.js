import { Card } from "react-bootstrap"

const MenuItem = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem', margin: "5px" }}>
                <Card.Img variant="top" src={props.menuItem.image.mainUrl} style={{width: "100%", height: "20rem"}} />
                <Card.Body>
                    <Card.Subtitle>Item Name:</Card.Subtitle>
                    <Card.Title>{props.menuItem.name}</Card.Title>
                    <Card.Subtitle>Item Price:</Card.Subtitle>
                    <Card.Title>{props.menuItem.sellingPrice}</Card.Title>                    
                    <Card.Subtitle>Item Category:</Card.Subtitle>
                    <Card.Title>{props.menuItem.category.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MenuItem