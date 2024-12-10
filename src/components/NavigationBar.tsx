import { Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Col sm={4}>
                <Navbar.Brand>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="Logo" width="80" height="45" className="d-inline-block align-top m-2 rounded-2" />
                </Navbar.Brand>
            </Col>
            <Col sm={{ span: 4, offset: 6 }}>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            <Link to="cart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Col>
        </Navbar>
    )
}

export default NavigationBar
