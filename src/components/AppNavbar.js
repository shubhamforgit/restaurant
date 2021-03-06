import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const AppNavbar = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><LinkContainer to="/">
                    <Nav.Link>Restaurant!</Nav.Link>
                </LinkContainer></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Orders" id="basic-nav-dropdown">
                            <NavDropdown.Item><LinkContainer to="/present-orders">
                                <Nav.Link>Present Orders</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/my-history">
                                <Nav.Link>My History</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Update Data" id="basic-nav-dropdown">
                            <NavDropdown.Item><LinkContainer to="/add-category">
                                <Nav.Link>Add Category</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/add-item">
                                <Nav.Link>Add Menu Item</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/add-coupon">
                                <Nav.Link>Add Coupons</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/add-pincode">
                                <Nav.Link>Add Pincodes</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/add-staff">
                                <Nav.Link>Add Staff</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/add-info">
                                <Nav.Link>Update Restaurant Information</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Preview Data" id="basic-nav-dropdown">
                            <NavDropdown.Item><LinkContainer to="/categories">
                                <Nav.Link>Categories</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/menu">
                                <Nav.Link>Menu</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/coupons">
                                <Nav.Link>Coupons</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/pincode">
                                <Nav.Link>Pincodes</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/staff">
                                <Nav.Link>Staff</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/info">
                                <Nav.Link>Restaurant Information</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Navbar.Text>
                            Hi! {props.name}
                        </Navbar.Text>
                        <Button variant="outline-dark" style={{ marginLeft: "10px" }} onClick={props.signOut}>Sign Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar