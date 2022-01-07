import React, { useEffect, useState } from 'react';
import { Accordion, Container } from 'react-bootstrap';
import faqImg from '../../../media/faq.jpg';

import './Faq.css';
const Faq = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch("https://abanka-server.vercel.app/faq")
            .then(res => res.json())
            .then(data => setFaqs(data))
    }, [])
    console.log(faqs);
    return (
        <Container>
            <div className='d-lg-flex justify-content-between'>
                <div className='w-100'>
                    <h2 className="font-poppins">Our Advisors Are Ready To Help You</h2>
                    <hr style={{ border: "2px solid #0abde3", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} />
                    <img src={faqImg} className="w-100 my-3" alt="" />
                    <div className='d-lg-flex d-md-flex justify-content-between'>
                        <div className='d-flex justify-content-center faq-contact-container align-items-center my-3'>
                            <i className="fas fa-phone me-4"></i>
                            <p>+880-0181351111</p>
                        </div>
                        <div className='d-flex justify-content-between faq-contact-container align-items-center mb-2'>
                            <i className="fas fa-envelope me-4"></i>
                            <p>abanka290@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='w-100 ms-lg-3'>
                    <Accordion defaultActiveKey="0">
                        {
                            faqs.map(faq => <Accordion.Item eventKey={faq.key}>
                                <Accordion.Header style={{ border: "1px solid #0abde3" }}>{faq.question}</Accordion.Header>
                                <Accordion.Body style={{ border: "1px solid #0abde3" }}>
                                    {faq.answer}
                                </Accordion.Body>
                            </Accordion.Item>)
                        }


                    </Accordion>
                </div>
            </div>
        </Container>
    );
};

export default Faq;