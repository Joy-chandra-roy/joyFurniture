import React from 'react';
import Experiences from './../home/Experiences';
import bannerImg from "../../assets/about-background.jpg"
const About = () => {
    return (
        <section className='min-h-screen'>

            {/* banner */}
            <div className='w-full h-[340px] bg-cover bg-center flex items-center justify-center text-center text-white' style={{background: `url(${bannerImg})`}}>
                <h1 className='text-5xl font-bold '>About Us</h1>
            </div>
            <Experiences/>
        </section>
    );
};

export default About;