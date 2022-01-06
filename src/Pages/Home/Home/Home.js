import React from 'react';

import ChooseUs from '../ChooseUs/ChooseUs';
import ContactUs from '../ContactUs/ContactUs';
import Faq from '../FAQ/Faq';
import Footer from '../Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import Navigation from '../Navigation/Navigation';
import OurAgents from '../OurAgents/OurAgents';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <ChooseUs></ChooseUs>
            <OurAgents></OurAgents>
            <Review></Review>
            <Faq></Faq>
            <ContactUs></ContactUs>


        </div>
    );
};

export default Home;