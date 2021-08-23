import axios from "axios"
import { useEffect, useState } from "react"
import { CardGroup, Card } from "react-bootstrap"
// import Restaurant from "./Restaurant"

const ShowRestaurant=()=>{
    const [restaurantInfo, setrestaurantInfo] = useState([])
    // const getdata=(response)=>{
    //     setrestaurantInfo(response?.data)
    // }
    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/restaurant")
            .then(res=>{
                
                setrestaurantInfo(res.data)

            })
            .catch(error=>{
                console.log(error)
            })
    }, [])
    

    return (
        <>
        <CardGroup style={{ justifyContent: "center" }}>
            
                  
        <Card style={{ width: '18rem', margin: "5px" }}>
                <Card.Img variant="top" src={restaurantInfo?.logo?.mainUrl} style={{width: "100%", height: "20rem"}} />
                <Card.Body>
                    <Card.Subtitle>Name</Card.Subtitle>
                    <Card.Title>{restaurantInfo?.restaurantDetail?.name}</Card.Title>
                    
                    <Card.Subtitle>Email:</Card.Subtitle>
                    <Card.Title>{restaurantInfo?.restaurantDetail?.email}</Card.Title>
                    <Card.Subtitle>Address:</Card.Subtitle>
                    <Card.Title>{restaurantInfo?.restaurant?.address?.line1}, {restaurantInfo?.restaurant?.address?.line2}</Card.Title>

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
            
                
            
        </CardGroup>
        </>
    )
}
export default ShowRestaurant