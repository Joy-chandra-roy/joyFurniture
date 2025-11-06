import React from 'react';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Products from '../shope/Products';

const Home = () => {
    return (
        <>
            <Hero/>
            <WhyChoose/>
            <Products headLine="Best selling product"/>
        </>
    );
};

export default Home;