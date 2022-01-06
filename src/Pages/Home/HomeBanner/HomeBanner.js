import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImage1 from '../../../media/HomeBanner1.jpg';
import bannerImage2 from '../../../media/HomeBanner2.jpg';
import bannerImage3 from '../../../media/HomeBanner3.jpg';
import "./HomeBanner.css";
const HomeBanner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block banner-image"
                    src={bannerImage1}
                    alt="First slide"


                />
                <div className="banner-shadow"></div>

                <Carousel.Caption>
                    <h3>Get Loan in lowest interest</h3>
                    <p>We Provide Loans in the lowest interwst in 9%</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block banner-image"
                    src={bannerImage2}
                    alt="Second slide"
                />
                <div className="banner-shadow"></div>

                <Carousel.Caption>
                    <h3>Delux Sevaings Plan</h3>
                    <p>Delux Savings Plan Make You Millioner For Only 1000 Thousand Per Month</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block banner-image"
                    src={bannerImage3}
                    alt="Third slide"
                />
                <div className="banner-shadow"></div>

                <Carousel.Caption>
                    <h3>Online Banking System</h3>
                    <p>
                        We have online banking system to perform A-Z task of banking
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeBanner;