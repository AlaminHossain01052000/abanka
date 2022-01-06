import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./OurAgents.css";
import avatar1 from "../../../media/avatar1.jpeg";
import avatar2 from "../../../media/avatar2.jpeg";
import avatar3 from "../../../media/avatar3.jpeg";

const OurAgents = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='font-roboto text-center'>Meet Our Agents</h1>
                <h4 className='font-oswald text-center'>Meet Our Best Agents. Our Team of Agents are ready to help you.</h4>

            </div>
            <div className='mt-5'>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div>

                                <div className='info-cicle'>
                                    <h3 className="font-rubik">John Gold</h3>
                                    <h5 className='font-roboto'>Chairman</h5>
                                    <img src={avatar2} alt="" className='image-circle' />
                                </div>







                            </div>
                        </Col>
                        <Col lg={4}>
                            <div>

                                <div className='info-cicle'>
                                    <h3 className="font-rubik">Jessica Bell</h3>
                                    <h5 className='font-roboto'>CEO</h5>

                                    <img src={avatar3} alt="" className='image-circle' />
                                </div>







                            </div>
                        </Col>
                        <Col lg={4}>
                            <div>

                                <div className='info-cicle'>
                                    <h3 className="font-rubik">Brain Adams</h3>
                                    <h5 className='font-roboto'>General Manager</h5>

                                    <img src={avatar1} alt="" className='image-circle' />
                                </div>







                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default OurAgents;