import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const OrderDetailPopup = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(props.order.cart.cartItemList)
    }, [])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Order Summary
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Items</h4>
                <ul>
                    {
                        items.map((item, index) => {
                            return (
                                <div>
                                    <li>{item.item.name}</li>
                                    <ul>
                                        <li>Price: {item.price}</li>
                                        <li>Quantity: {item.quantity}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </ul>
                <p>Total: {props.order.total}</p>
                <h4>Order Details</h4>
                <p>Order Number: {props.order.id}</p>
                <p>Date: {props.order.updatedAt}</p>
                <h4>Contact Details</h4>
                <p>Customer Name: {props.order.contact.contactFirstName} {props.order.contact.contactLastName}</p>
                <p>Mobile: {props.order.contact.contactNumber}</p>
                <p>Address: {props.order.address.line1},{props.order.address.line2},{props.order.address.city},{props.order.address.state}-{props.order.address.pincode}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default OrderDetailPopup