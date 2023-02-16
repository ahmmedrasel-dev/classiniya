import React, { useState } from 'react';
import { BsImages, BsListUl, BsSliders } from 'react-icons/bs';
import location from '../SearchBox/selction_option/location';
import Select from 'react-select';
import './category_filter.css';

const CategoryFilter = () => {
  const [isClearable, setisClearable] = useState(true);
  return (
    <section className='py-12'>
      <div className="w-full xl:max-w-screen-xl lg:max-w-screen-lg mx-auto">
        <div className="flex justify-between gap-2">
          <div className='shadow-md flex items-center gap-2 w-1/2 border p-4 rounded-md justify-center border-gray cursor-pointer'><span><BsSliders /></span><span>Filters</span></div>
          <div className='flex items-center gap-2 w-1/2 border p-4 rounded-md justify-center border-gray cursor-pointer shadow-md'><span><BsImages /></span><span>Category</span></div>
        </div>

        <div className='border p-4 mt-12 rounded-lg border-gray shadow-lg'>
          <div className='flex justify-between gap-4'>
            <div className='flex items-center w-full relative'>
              <span className='mr-2 absolute left-2 z-50'><BsListUl className='text-secondary' /></span>
              <Select
                isClearable={isClearable}
                options={location}
                placeholder="All Listing Types"
                className="select-bordered w-full select_allcountries"
              />
            </div>

            <div className='flex items-center w-full relative'>
              <span className='mr-2 absolute left-2'><BsListUl className='text-secondary' /></span>
              <input className='input input-bordered input-md w-full px-8' type="text" placeholder='Waht are you looking for?' />
            </div>

            <div className='flex items-center w-full relative'>
              <span className='mr-2 absolute left-2 z-50'><BsListUl className='text-secondary' /></span>
              <Select
                isClearable={isClearable}
                options={location}
                placeholder="All Countries"
                className="select_allcountries select-bordered w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;