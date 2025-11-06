import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <div className="relative inline-block  ">
          <input
            type="text"
            placeholder="search furniture "
            className="w-full  px-6 py-1.5 bg-white/25 rounded-full border border-gray-500  focus:outline-none placeholder:text-primary"
          />

          <div className="absolute right-3 bottom-2 bg-primary rounded-full cursor-pointer  p-1">
            <FaSearch />
          </div>
        </div>
    );
};

export default Search;