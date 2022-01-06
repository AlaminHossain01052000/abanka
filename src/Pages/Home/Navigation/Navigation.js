import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navigation.css";
import useAuth from '../../hooks/useAuth';
import './Navigation.css';
const Navigation = () => {

    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut();
    }
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#0abde3" }}>
            <Container>
                <Navbar.Brand className='font-island' href="/home">Abanka</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link className="menu-link" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/registration">Register</Nav.Link>
                        {
                            user.email ? <Nav.Link as={Link} to="/" onClick={handleLogOut}>logout</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>



                    </Nav>
                </Navbar.Collapse>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        {user?.displayName}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/easyApply">
                        Easy Apply
                    </Nav.Link>
                </Nav.Item>
            </Container>
        </Navbar>
    );
};

export default Navigation;