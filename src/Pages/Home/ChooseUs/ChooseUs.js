import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import ChooseUsImage from '../../../media/ChooseUs.jpg';
import './ChooseUs.css';
const ChooseUs = () => {
    return (
        <>
            <Container>
                <div>
                    <h1 className='text-center my-5 font-spline'>Reason to choose us</h1>
                    <h4 className='font-roboto'>Abanka is a reknowned organization for giving loan in the lowest interest.Rules and Regulations and Process are much more easier than any other organizations. We have a special system for giving loan in 72 hours</h4>
                </div>
                <section className="d-lg-flex justify-content-between">
                    <div className='my-5'>
                        <img src={ChooseUsImage} className='choose-us-image' alt="" />
                    </div>
                    <Row className="my-5">
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <Card style={{ width: '18rem' }} className="choose-us-card">
                                <div className="mx-auto mt-3 icon-container">
                                    <i className="fas fa-check"></i>
                                </div>

                                <Card.Body>
                                    <Card.Title className="font-poppins text-center">Easy Loan Approvals</Card.Title>
                                    <Card.Text className="font-oswald">
                                        We easily approve you loan as soon as possible. The hardrest task you have to is just fill the form and after checking we will approve your loan according to your ability asap. We only need your response that you need a loan
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <Card style={{ width: '18rem' }} className="choose-us-card">
                                <div className='mx-auto mt-3 icon-container'>
                                    <i className="far fa-clock"></i>
                                </div>

                                <Card.Body>
                                    <Card.Title className="font-poppins text-center">Fast and Free</Card.Title>
                                    <Card.Text className="font-oswald">
                                        We respect your valuable time. We take maximum 5 working days from the day of your application. We inform you through email about every process we are doing. We have also special 3 day loan approval programm.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <Card style={{ width: '18rem' }} className="choose-us-card">
                                <div className='mx-auto mt-3 icon-container'>
                                    <i className="fas fa-user plus"></i>
                                </div>

                                <Card.Body>
                                    <Card.Title className="font-poppins text-center">Hassle Free</Card.Title>
                                    <Card.Text className="font-oswald">
                                        Our customer satisfaction is always our top most priority. We respect our every customer equally. We do not like to hassle anyone. There is a emergency service number for if you are hassled or not satisfied
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12}>
                            <Card style={{ width: '18rem' }} className="choose-us-card">
                                <div className='mx-auto mt-3 icon-container'>
                                    <i className="fas fa-lock"></i>
                                </div>

                                <Card.Body>
                                    <Card.Title className="font-poppins text-center">100% Safe and Secure</Card.Title>
                                    <Card.Text className="font-oswald">
                                        We have been serving our customer since 2002. Our experience of 19 year make our system more secure and safe. We are launching private vault system in 2022. There is unique as a second degree organization aspect bank.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>
                </section>
            </Container>
        </>
    );
};

export default ChooseUs;