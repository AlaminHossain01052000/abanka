import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <div className="contact-us">
            <Container>
                <Row>
                    <Col lg={3}>
                        <h1 className='font-roboto'>We're on a mission.</h1>
                        <p className='font-poppins'>At Abanka, we’re using cutting-edge technology to transform the industry and deliver financial services that actually work for you.</p>
                    </Col>
                    <Col lg={3}>
                        <h1 className='text-end mb-3 font-roboto'>Company</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Cards</li>
                            <li>Blog</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h1 className='text-end mb-3 font-roboto'>Product</h1>
                        <ul>
                            <li>Business Loan</li>
                            <li>Loan Calculator</li>
                            <li>Refer a friend</li>
                            <li>Partner Program</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h1 className='text-end mb-3 font-roboto'>Help</h1>
                        <ul>
                            <li>Customer Care</li>
                            <li>Executive Team</li>
                            <li>Security Center</li>
                            <li>Recognition</li>
                        </ul>
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;