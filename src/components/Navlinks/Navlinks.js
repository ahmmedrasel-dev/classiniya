import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillCaretDownFill } from 'react-icons/bs'

const Navlinks = () => {
  return (
    <>
      <li className='flex items-center'><NavLink to="/">Home </NavLink> <BsFillCaretDownFill className='text-gray text-[13px]' /></li>
      <li className='flex items-center'><NavLink to="/graphics-desing">Graphics &  Design</NavLink><BsFillCaretDownFill className='text-gray text-[13px]' /></li>
      <li className='flex items-center'><NavLink to="/digital-marketing">Digital Marketing</NavLink><BsFillCaretDownFill className='text-gray text-[13px]' /></li>
      <li className='flex items-center'><NavLink to="/programming-tech">Programming & Tech</NavLink><BsFillCaretDownFill className='text-gray text-[13px]' /></li>
      <li className='flex items-center'><NavLink to="/ai-models">AI Models</NavLink><BsFillCaretDownFill className='text-gray text-[13px]' /></li>
    </>
  );
};

export default Navlinks;