import React from 'react';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Products from '../shope/Products';
import Experiences from './Experiences';
import Meterials from './Meterials';

const Home = () => {
    return (
        <>
            <Hero/>
            <WhyChoose/>
            <Products headLine="Best selling product"/>
            <Experiences/>
            <Meterials/>
        </>
    );
};

export default Home;