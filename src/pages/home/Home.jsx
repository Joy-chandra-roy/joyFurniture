import React from 'react';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Products from '../shope/Products';
import Experiences from './Experiences';
import Meterials from './Meterials';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <>
            <Hero/>
            <WhyChoose/>
            <Products headLine="Best selling product"/>
            <Experiences/>
            <Meterials/>
            <Testimonials/>
        </>
    );
};

export default Home;