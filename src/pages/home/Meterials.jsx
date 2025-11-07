import React from 'react';
import Button from '../../components/Button';
import materialImg1 from "../../assets/material1.png"
import materialImg2 from "../../assets/material2.png"
import materialImg3 from "../../assets/material3.png"

const Meterials = () => {
    return (
        <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-30 gap-8  '>
            
            <div className='md:w-1/2 mx-auto space-y-3'>
                <h3 className='uppercase text-lg text-primary '>Materials</h3>
                <h2 className='capitalize text-3xl font-bold md:w-1/2'>Very serious materials for making furniture</h2>
                <p className='text-secondary dark:text-white  lg:w-2/3'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                <Button text=" More info"/>
            </div>

            <div className='md:w-1/2  grid grid-cols-2 md:items-end items-center md:grid-cols-3'>
                <div>
                        <img src={materialImg1} alt="" />
                        <img src={materialImg2} alt="" />
                </div>
                <div className='md:col-span-2 col-span-1'>
                        <img src={materialImg3} alt=""  className='md:h-[541px] w-full'/>
                </div>
            </div>
        </section>
    );
};

export default Meterials;