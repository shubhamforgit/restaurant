import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const AppNavbar = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><NavDropdown.Item><LinkContainer to="/">
                    <Nav.Link>Restaurant!</Nav.Link>
                </LinkContainer></NavDropdown.Item></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Update Data" id="basic-nav-dropdown">
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
                            <NavDropdown.Item><LinkContainer to="/add-item">
                                <Nav.Link>Menu</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/add-coupon">
                                <Nav.Link>Coupons</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/add-pincode">
                                <Nav.Link>Pincodes</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/staff">
                                <Nav.Link>Staff</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                            <NavDropdown.Item><LinkContainer to="/add-info">
                                <Nav.Link>Restaurant Information</Nav.Link>
                            </LinkContainer></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Navbar.Text>
                            Hi!
                        </Navbar.Text>
                        <Button variant="outline-dark" style={{ marginLeft: "10px" }} onClick={props.signOut}>Sign Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar