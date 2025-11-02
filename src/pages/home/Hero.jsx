import React from "react";
import bannerImg from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";
const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ background: `url(${bannerImg})` }}
    >
      <div className="md:pt-44 pt-24 text-center space-y-6 md:w-1/2 mx-auto px-2 ">
        <h1 className="text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug">Make your interior more minimalistic & modern</h1>
        <p className="text-xl font-normal lg:w-1/2 mx-auto ">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

         {/* search field */}
      <div className="relative inline-block">
        <input type="text" placeholder="search furniture "  className="w-full md:w-60 px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none placeholder:text-white"/>

        <div className="absolute right-3 bottom-2 bg-primary rounded-full cursor-pointer  p-1">
            <FaSearch/>
        </div>

      </div>
    </div>

    {/* bottom blure effect */}
    <div className="absolute inset-x-0 bottom-0 h-3/6 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"/>
     
    </section>
  );
};

export default Hero;
