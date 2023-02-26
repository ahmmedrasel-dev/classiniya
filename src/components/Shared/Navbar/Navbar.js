import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import Navlinks from '../../Navlinks/Navlinks'

const Navbar = ({ isSticky }) => {

  return (
    <header className={`flex items-center justify-between ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar bg-[#2e3f6e] text-white lg:w-[70%] w-full justify-between lg:px-8">
        <a href='/' className="btn btn-ghost normal-case text-xl text-white">Classiniya</a>

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

      </div>
      <div className="navbar hidden lg:flex lg:w-[30%] justify-end bg-[#3d528b] lg:px-8 ">
        <ul>
          <NavLink className="mx-4 hover:text-[#3c65f5] text-white">Register</NavLink>
          <button className='btn bg-[#3c65f5] dark:bg-white dark:text-gray-900 border-0 hover:bg-[#05264e] text-white'>Sign in</button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;