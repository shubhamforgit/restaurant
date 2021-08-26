import axios from "axios";
import { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { createStaff } from "../../axios/Service";


const AddStaffDetail = () => {

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
    })
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    function handleInputChange(event) {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    function addStaff(event) {
        event.preventDefault();
        createStaff(formValues, (response) => {
            console.log(response)
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 1500);
            setFormValues({
                firstName: '',
                lastName: '',
                email: '',
                role: '',
            })
        },
            (err) => {

                setShowErrorAlert(true)
                setTimeout(() => {
                    setShowErrorAlert(false)
                }, 3000);

            })


    }
    // Dynamic Roles dropdown
    const [roleval, setRoleval] = useState([]);
    useEffect(() => {
        axios.get("https://food-app-timesinternet.herokuapp.com/api/staff/role").then((res) => {
            setRoleval(res.data)
            console.log(res.data)
        })
            .catch((err) => {

                setShowErrorAlert(true)
                setTimeout(() => {
                    setShowErrorAlert(false)
                }, 3000);

            });
    }, [])

    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <h1>Add Staff</h1>
            {showAlert &&
                <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
                    Staff Added!
                </Alert>
            }
            {showErrorAlert &&
                <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
                    Update Request Failed !!
                </Alert>
            }
            <Form onSubmit={addStaff}>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required name="firstName" placeholder="First name..." onChange={handleInputChange} value={formValues.firstName} />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required name="lastName" placeholder="Last name..." onChange={handleInputChange} value={formValues.lastName} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required name="email" type="email" placeholder="Enter email" onChange={handleInputChange} value={formValues.email} />
                </Row>
                <Row className="mb-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Select required name="role" className="me-sm-2" id="inlineFormCustomSelect" onChange={handleInputChange}>
                        <option>Select...</option>
                        {
                            roleval.map((val, index) => {
                                return <option key={index} value={val}>{val}</option>
                            })
                        }

                    </Form.Select>
                </Row>
                <Button variant="primary" type="submit" >
                    Add Staff
                </Button>
            </Form>
        </div>
    )
}

export default AddStaffDetail