import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className='pb-5'>
            <Container>
                <div className='w-50' style={{ float: 'right' }}>
                    <div className="row-one d-flex justify-content-between align-items-center">
                        <h1 className='font-island'>Abanka</h1>
                        <hr width="50%" />
                        <div className="social-icons d-flex justify-content-between">
                            <i className='fab fa-facebook'></i>
                            <i className='fab fa-youtube mx-5'></i>
                            <i className='fab fa-linkedin'></i>
                        </div>
                    </div>
                    <div className="row-two d-flex justify-content-between">
                        <small className='font-poppins'>Copyright @ Abanka 2022</small>
                        <small className='font-poppins'>Privacy Policy</small>
                        <small className='font-poppins'>Term Of Use</small>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;