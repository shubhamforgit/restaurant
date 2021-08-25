import axios from "axios"
import { useEffect, useState } from "react"
import { CardGroup, Card, Spinner, Alert } from "react-bootstrap"
// import Restaurant from "./Restaurant"

const ShowRestaurant = () => {
    const [restaurantInfo, setrestaurantInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorOccured, setErrorOccured] = useState(false)

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/restaurant")
            .then(res => {
                setrestaurantInfo(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setErrorOccured(true)
            })
    }, [])

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    else if (errorOccured) {
        return <Alert variant="danger">
            Error Occured! (Get Request Failed)
        </Alert>
    } 
    else if (restaurantInfo.length==0) {
        return <Alert variant="danger">
            No Restaurant Data Available
        </Alert>
    } 
    else {
        return (
            <>
                <Card style={{ width: '50%', margin: "auto" }}>
                    <Card.Img variant="top" src={restaurantInfo?.logo?.mainUrl} style={{ maxWidth: "50%", maxHeight: "50%", margin: "auto" }} />
                    <Card.Body>
                        <Card.Subtitle>Name</Card.Subtitle>
                        <Card.Text>{restaurantInfo?.restaurantDetail?.name}</Card.Text>

                        <Card.Subtitle>Email:</Card.Subtitle>
                        <Card.Text>{restaurantInfo?.restaurantDetail?.email}</Card.Text>
                        <Card.Subtitle>Address:</Card.Subtitle>
                        <Card.Text>{restaurantInfo?.restaurantDetail?.address?.line1}, {restaurantInfo?.restaurantDetail?.address?.line2}</Card.Text>

                        <Card.Subtitle>Pincode:</Card.Subtitle>
                        <Card.Text>{restaurantInfo?.restaurantDetail?.address?.pincode}</Card.Text>
                        <Card.Subtitle>City:</Card.Subtitle>
                        <Card.Text>{restaurantInfo?.restaurantDetail?.address?.city}</Card.Text>
                        <Card.Subtitle>State:</Card.Subtitle>
                        <Card.Text>{restaurantInfo?.restaurantDetail?.address?.state}</Card.Text>

                        <Card.Subtitle>Opening Time:</Card.Subtitle>
                        <Card.Text>{restaurantInfo?.restaurantDetail?.openingTime}</Card.Text>
                        <Card.Subtitle>ClosingTime:</Card.Subtitle>
                        <Card.Text>{restaurantInfo?.restaurantDetail?.closingTime}</Card.Text>

                    </Card.Body>
                </Card>
            </>
        )
    }

}
export default ShowRestaurant