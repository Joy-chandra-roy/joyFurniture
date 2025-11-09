import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import NavItem from "./NavItem";
import { FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import Search from "../../Search";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroled, setIsScroled]=useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };


  // When  scroll apply by color to navber

  useEffect(()=>{

    const handleScroll= ()=>{
      if(window.scrollY>50){
        setIsScroled(true)
      }else{
        setIsScroled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.addEventListener('scroll', handleScroll);
    }

  }, [])

  return (
    <header
      className={`fixed z-50 top-0 left-0 right-0  transition duration-300 ease-in-out ${isScroled?"bg-white shadow-md":"bg-transparent text-white"}`}
    >
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-4 px-4">
        {/* logo */}
        <NavLink to="/" className="text-3xl font-bold">
          JoyF
        </NavLink>

        {/* mobile device search field */}

       <div className="md:hidden flex">
        <Search/>
       </div>

        {/* hamburger menu for mobile */}

        <div onClick={toggleMenu} className="md:hidden text-xl cursor-pointer">
          {isMenuOpen ? null : <FaBars />}
        </div>

        {/*desktop menu items */}
        <div className="hidden md:flex justify-center items-center space-x-3">
          <NavItem />

           {/* search field */}
            <Search/>
        </div>

        

        {/* mobile menu items */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black opacity-70 flex flex-col text-center items-center justify-center text-white space-y-6 transition-transform transform ${
            isMenuOpen ? "-translate-x-25" : "-translate-x-full"
          } `}
        >
          <div
            className="cursor-pointer absolute top-4 right-4 "
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>
          <NavItem toggleMenu={toggleMenu} />
        </div>

        {/* cart icon */}
        <div className="hidden md:block cursor-pointer relative">
          <FaShoppingCart className="text-3xl" />
          <sup className="absolute -top-1 left-5 bg-primary w-5 h-5 rounded-full text-white flex items-center justify-center">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
