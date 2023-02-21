import React, { useState } from 'react';
import { BsGrid3X3GapFill, BsSearch } from "react-icons/bs";
import { MdBusinessCenter, MdLocationOn } from "react-icons/md";
import Select from 'react-select';
import location from './selction_option/location';
import './searchbox.css';
const SearchBox = () => {
  const [isClearable] = useState(true);
  return (
    <section className='bg-white dark:bg-gray-800'>
      <div className='xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md w-full mx-auto p-4'>
        <div className='dark:bg-gray-900 border bg-slate-100 lg:flex flex-none justify-between lg:gap-6 p-4 mb-6 rounded-lg'>
          <div className='flex items-center lg:w-[500px] w-full md:mb-4 lg:mb-0'>
            <span className='mr-2'><BsGrid3X3GapFill className='dark:text-slate-100' /></span>
            <input type="text" className='w-full bg-slate-100 dark:bg-gray-900 dark:text-base-100' placeholder='Your Keyword...' />
          </div>

          <div className='md:flex flex:none gap-4 md:mb-4 lg:mb-0'>
            <div className='location flex items-center md:w-[50%]'>
              <span className='mr-4 lg:block hidden'><MdLocationOn className='text-[#05264e] dark:text-slate-100 text-xl' /></span>
              <Select
                isClearable={isClearable}
                options={location}
                placeholder="Location..."
                className='select_location'
              />

            </div>

            <div className='industry flex items-center lg:ml-6 ml-0 md:w-[50%]'>
              <span className='mr-6 lg:block hidden'><MdBusinessCenter className='text-[#05264e] dark:text-slate-100 text-xl' /></span>
              <Select
                isClearable={isClearable}
                options={location}
                placeholder="Industry..."
                className="industry_location"
              />
            </div>
          </div>

          <button className='btn bg-[#3c65f5] dark:bg-slate-100 dark:text-gray-900 border-0 text-white hover:bg-[#05264e]'><span className='mr-3 text-md'><BsSearch className='dark:text-gray-800' /></span>Search</button>
        </div>
      </div>
    </section>
  );
};

export default SearchBox;