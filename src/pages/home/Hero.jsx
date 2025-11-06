import React from "react";
import bannerImg from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router";
const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ background: `url(${bannerImg})` }}
    >
      <div className="md:pt-44 pt-34 text-center space-y-6 md:w-1/2 mx-auto px-2 ">
        <h1 className="text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug">Make your interior more minimalistic & modern</h1>
        <p className="text-xl font-normal lg:w-1/2 mx-auto ">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

         {/* shop now button */}
      <div >
        <NavLink to=""  className="w-full md:w-40 px-6 py-2 bg-primary rounded-full border border-gray-400   hover:bg-white hover:text-black " > Shop now</NavLink>
      </div>



    </div>

    {/* bottom blure effect */}
    <div className="absolute inset-x-0 bottom-0 h-3/6 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"/>

    {/* hover button for displaying tooltip box */}
    <div className="hidden md:block absolute bottom-40 left-24 group">
      <button className="relative p-4 bg-white/25 rounded-full border  border-2 bg-white text-xl">
          <div className="hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 rounded-lg bg-white/25 shadow-md group-hover:flex space-x-1">
                  <div className="size-6 bg-red-700 border border-white rounded-full"/>
                  <div className="size-6 bg-yellow-300 border border-white rounded-full"/>
                  <div className="size-6 bg-green-700 border border-white rounded-full"/>
          </div>
      </button>
    </div>
     
    </section>
  );
};

export default Hero;
