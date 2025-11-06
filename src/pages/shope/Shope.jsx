import React from 'react';
import bannerImg from "../../assets/banner.png"
import Products from './Products';

const Shope = () => {
    return (
        <section className='min-h-screen'>

            {/* banner */}
            <div className='w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white' style={{background: `url(${bannerImg})`}}>
                <h1 className='text-5xl font-bold '>Shop Our Products</h1>
            </div>
            <Products headLine="What's your choice"/>
        </section>
    );
};

export default Shope;