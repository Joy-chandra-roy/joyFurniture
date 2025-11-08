import React from 'react';
import Meterials from './../home/Meterials';
import bannerImg from "../../assets/contact-background.jpg"

const Contact = () => {
    return (
        <section className='min-h-screen'>

            {/* banner */}
            <div className='w-full h-[340px] bg-cover bg-center flex items-center justify-center text-center text-white' style={{background: `url(${bannerImg})`}}>
                <h1 className='text-5xl font-bold '>Contact Us</h1>
            </div>
            <Meterials/>
        </section>
    );
};

export default Contact;