import React, { useState } from 'react';
import { BsGrid3X3GapFill, BsSearch } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Select from 'react-select';
import location from './selction_option/location';
import './searchbox.css';
const SearchBox = () => {
  const [isClearable, setIsClearable] = useState(true);
  return (
    <div className='search_box lg:flex flex-none justify-between p-4'>
      <div className='flex items-center w-[500px]'>
        <span className='mr-2'><BsGrid3X3GapFill /></span>
        <input type="text" className='w-full' placeholder='Your Keyword...' />
      </div>

      <div className='lg:flex flex:none'>
        <div className='location flex items-center'>
          <span className='mr-2'><GrLocation /></span>
          <Select
            isClearable={isClearable}
            options={location}
            placeholder="Location..."
            className="select_location"
          />
        </div>

        <div className='industry flex items-center lg:ml-6 ml-0'>
          <span className='mr-2'><MdBusinessCenter /></span>
          <Select
            isClearable={isClearable}
            options={location}
            placeholder="Industry..."
            className="industry_location"
          />
        </div>
      </div>

      <button className='btn bg-primary border-0 hover:bg-secondary capitalize'><span className='mr-3 text-md'><BsSearch /></span>Search</button>
    </div>
  );
};

export default SearchBox;