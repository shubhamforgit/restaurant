import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import "./AddCategory.css"

function AddCategory() {

    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const [formValues, setformValues] = useState({
        name: ""
    })

    function addCategory(event) {
        event.preventDefault()
        axios.post("https://food-app-timesinternet.herokuapp.com/api/staff/category", formValues)
            .then((resp) => {
                console.log(resp);
                setShowAlert(true)
                setTimeout(() => {
                    setShowAlert(false)
                }, 1500);
                setformValues({
                    name: ""
                })
            })
            .catch(() => {
                setShowErrorAlert(true)
                setTimeout(() => {
                    setShowErrorAlert(false)
                }, 3000);

            })
    }

    function handleInputChange(event) {
        setformValues({
            ...formValues,
            name: event.target.value
        })
    }


    return (
        <>

            <div style={{ width: "50%", margin: "auto" }}>
                <Form onSubmit={addCategory}>
                    <h3 className="categoryTitle">Add Category</h3>
                    {showAlert &&
                        <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                            Category Added!
                        </Alert>
                    }
                    {showErrorAlert &&
                        <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                            Update Request Failed !!
                        </Alert>
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required name="name" onChange={handleInputChange} value={formValues.name} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Update
                    </Button>
                </Form>
            </div>
        </>
    )
}


export default AddCategory;