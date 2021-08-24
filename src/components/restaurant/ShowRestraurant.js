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
    else {
        return (
            <>
                <Card style={{ width: '50%', margin: "auto" }}>
                    <Card.Img variant="top" src={restaurantInfo?.logo?.mainUrl} style={{ width: "100%", height: "20rem" }} />
                    <Card.Body>
                        <Card.Subtitle>Name</Card.Subtitle>
                        <Card.Title>{restaurantInfo?.restaurantDetail?.name}</Card.Title>

                        <Card.Subtitle>Email:</Card.Subtitle>
                        <Card.Title>{restaurantInfo?.restaurantDetail?.email}</Card.Title>
                        <Card.Subtitle>Address:</Card.Subtitle>
                        <Card.Title>{restaurantInfo?.restaurantDetail?.address?.line1}, {restaurantInfo?.restaurantDetail?.address?.line2}</Card.Title>

                        <Card.Subtitle>Pincode:</Card.Subtitle>
                        <Card.Title>{restaurantInfo?.restaurantDetail?.address?.pincode}</Card.Title>
                        <Card.Subtitle>City:</Card.Subtitle>
                        <Card.Title>{restaurantInfo?.restaurantDetail?.address?.city}</Card.Title>
                        <Card.Subtitle>State:</Card.Subtitle>
                        <Card.Title>{restaurantInfo?.restaurantDetail?.address?.state}</Card.Title>

                        <Card.Subtitle>Opening Time:</Card.Subtitle>
                        <Card.Title>{restaurantInfo?.restaurantDetail?.openingTime}</Card.Title>
                        <Card.Subtitle>ClosingTime:</Card.Subtitle>
                        <Card.Title>{restaurantInfo?.restaurantDetail?.closingTime}</Card.Title>

                    </Card.Body>
                </Card>
            </>
        )
    }

}
export default ShowRestaurant