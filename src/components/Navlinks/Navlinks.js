import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillCaretDownFill } from 'react-icons/bs'

const Navlinks = () => {
  return (
    <>
      <li className='flex items-center'><NavLink to="/" className="lg:text-sm xl:text-lg">Home </NavLink></li>
      <li className='flex items-center'><NavLink to="/graphics-desing" className="lg:text-sm xl:text-lg">Graphics &  Design</NavLink><BsFillCaretDownFill className='text-gray text-[13px]' /></li>
      <li className='flex items-center'><NavLink to="/digital-marketing" className="lg:text-sm xl:text-lg">Digital Marketing</NavLink><BsFillCaretDownFill className='text-gray text-[13px]' /></li>
      <li className='flex items-center'><NavLink to="/programming-tech" className="lg:text-sm xl:text-lg">Programming & Tech</NavLink><BsFillCaretDownFill className='text-gray text-[13px]' /></li>
      <li className='flex items-center'><NavLink to="/ai-models" className="lg:text-sm xl:text-lg">AI Models</NavLink><BsFillCaretDownFill className='text-gray text-[13px]' /></li>
    </>
  );
};

export default Navlinks;