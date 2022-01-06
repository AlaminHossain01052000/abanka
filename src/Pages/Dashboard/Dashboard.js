
import React from 'react';
import { Breadcrumb, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './Dashboard.css';
import useAuth from '../hooks/useAuth';


const Dashboard = () => {
    const { user, admin } = useAuth();

    return (
        <>

            {admin ? <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#0abde3" }}>
                <Container>
                    <Navbar.Brand className='font-island' href="/home">Abanka</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Link className="dashboard-nav-link" to="/dashboard">Dashboard</Link >
                            <Link className="dashboard-nav-link" to="/dashboard/makeAdmin">Make Admin</Link >
                            <Link className="dashboard-nav-link" to="/dashboard/allLoans">All Loans</Link >
                            <Link className="dashboard-nav-link" to="/dashboard/addLoanFeature">Add a loan feature</Link >
                            <Link className="dashboard-nav-link" to="/dashboard/faq">Add a FAQ</Link >
                            <Link className="dashboard-nav-link" to="/dashboard/logout">Logout</Link >



                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            {user?.displayName}
                        </Nav.Link>
                    </Nav.Item>

                </Container>
            </Navbar> :
                <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#0abde3" }}>
                    <Container>
                        <Navbar.Brand className='font-island' href="/home">Abanka</Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Link className="dashboard-nav-link" to="/home">Home</Link >
                                <Link className="dashboard-nav-link" to="/dashboard/myLoans">My Loans</Link >
                                <Link className="dashboard-nav-link" to="/dashboard/paymentWrapper">Make Payment</Link >
                                <Link className="dashboard-nav-link" to="/dashboard/addReview">Add a Review</Link>



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
            }

            <Outlet></Outlet>

        </>
    );
};

export default Dashboard;
