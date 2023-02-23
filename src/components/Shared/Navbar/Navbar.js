import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import Navlinks from '../../Navlinks/Navlinks'
import { BsFillCaretDownFill } from 'react-icons/bs';

const Navbar = ({ isSticky }) => {

  return (
    <header>
      <div className={`navbar flex items-center justify-between bg-white dark:bg-gray-800 xl:gap-2  xl:px-8 py-4 sm:px-4 px-2 ${isSticky ? 'sticky' : ''}`}>
        <a href='/' className="btn btn-ghost normal-case text-xl text-[#05264e] dark:text-white">Classiniya</a>

        <div className='flex:none'>
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>

        <div className="hidden lg:flex">
          <ul className="main_menu flex justify-between">
            <Navlinks></Navlinks>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul>
            <NavLink className="mx-4 text-[#05264e] hover:text-[#3c65f5] dark:text-white">Register</NavLink>
            <button className='btn bg-[#3c65f5] dark:bg-white dark:text-gray-900 border-0 hover:bg-[#05264e] text-white'>Sign in</button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;