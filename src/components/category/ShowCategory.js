import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup, Spinner, Alert } from "react-bootstrap";

const ShowCategory = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [categoryArray, setCategoryArray] = useState([])
    const [errorOccured, setErrorOccured] = useState(false)

    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/category")
            .then((res) => {
                setCategoryArray(res.data)
                setIsLoading(false)
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)
                setErrorOccured(true)
            });
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
    else if (categoryArray.length == 0) {
        return <Alert variant="danger">
            No Categories Available
        </Alert>
    }
    else {
        return (
            <div style={{ width: "50%", margin: "auto" }}>
                <h1>Your restaurant has the following categories</h1>
                <ListGroup>
                    {
                        categoryArray.map(category => {
                            return <ListGroup.Item>{category.name}</ListGroup.Item>
                        })
                    }
                </ListGroup>
            </div>
        )
    }

}

export default ShowCategory