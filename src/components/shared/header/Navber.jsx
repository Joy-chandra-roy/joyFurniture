import React, { useState } from 'react';
import { NavLink } from 'react-router';
import NavItem from './NavItem';
import { FaShoppingCart,FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";


const Navber = () => {
     
    const [isMenuOpen, setIsMenuOpen]= useState(false)

    const toggleMenu= () =>{
        setIsMenuOpen(prevState =>!prevState)
    }


    return (
        <header className={`fixed z-50 top-0 left-0 right-0 text-white transition duration-300 ease-in-out`}>
            <nav className='max-w-screen-2xl container mx-auto flex justify-between items-center py-4 px-4'>
                {/* logo */}
                <NavLink to="/" className="text-3xl font-bold">Logo</NavLink>



                {/* hamburger menu for mobile */}

                <div onClick={toggleMenu} className='md:hidden text-xl cursor-pointer'>
                  {  isMenuOpen? null:<FaBars />}
                </div>



                {/*desktop menu items */}
                <div className='hidden md:flex' >
                  <NavItem/>
                </div>



                {/* mobile menu items */}
                <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black opacity-70 flex flex-col text-center items-center justify-center text-white space-y-6 transition-transform transform ${isMenuOpen?'-translate-x-50':'-translate-x-full'} `}> 
                    <div className='cursor-pointer absolute top-4 right-4 ' onClick={toggleMenu}>
                        <FaTimes />
                    </div>
                    <NavItem toggleMenu={toggleMenu}/>
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