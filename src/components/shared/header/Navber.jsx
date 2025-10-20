import React, { useState } from 'react';
import { NavLink } from 'react-router';
import NavItem from './NavItem';
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navber = () => {
     
    const [isMenuOpen, setIsMenuOpen]= useState(false)

    const toggleMenu= () =>{
        setIsMenuOpen(prevState =>!prevState)
    }


    return (
        <header>
            <nav className='max-w-screen-2xl container mx-auto flex justify-between items-center py-4 px-4'>
                {/* logo */}
                <NavLink to="/" className="text-3xl font-bold">Logo</NavLink>

                {/* hamburger menu for mobile */}

                <div onClick={toggleMenu} className='md:hidden text-xl cursor-pointer'>
                  {  isMenuOpen? <p>X</p>:<FaBars />}
                </div>

                {/* menu items */}
                <div className='hidden md:flex' >
                  <NavItem/>
                </div>

                {/* cart icon */}
                <div className='hidden md:block cursor-pointer relative'>
                    <FaShoppingCart className='text-3xl'/>
                    <sup className='absolute -top-1 left-5 bg-primary w-5 h-5 rounded-full text-white flex items-center justify-center'>0</sup>
                </div>
            </nav>
        </header>
    );
};

export default Navber;