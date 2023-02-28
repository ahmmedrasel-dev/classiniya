import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi'
import { MdAddToPhotos } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import MegaMenus from './MegaMenus';

const Navbar = ({ isSticky }) => {

  return (
    <header className={`flex items-center justify-between ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar bg-[#2e3f6e] text-white lg:w-[50%] xl:w-[70%] w-full justify-between lg:px-8">
        <a href='/' className="btn btn-ghost normal-case text-xl text-white">Classiniya</a>

        <div className='flex:none'>
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button xl:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>

        <div className="hidden xl:flex">
          <MegaMenus />
        </div>

      </div>
      <div className="navbar hidden lg:flex lg:w-[50%] xl:w-[30%] justify-end bg-[#3d528b] lg:px-8 ">
        <ul className='my_dropdown gap-6'>
          <li>
            <a className='flex justify-start gap-2 text-white'>
              <BiWorld className='text-white' />
              En
              <BsFillCaretDownFill className='text-white text-[13px]' />
            </a>
            <ul className="bg-white dropdown_menu text-[#05264e]">
              <li><a>English</a></li>
              <li><a>Spanish</a></li>
              <li><a>Portugues</a></li>
              <li><a>Rusain</a></li>
              <li><a>Japanese</a></li>
              <li><a>French</a></li>
            </ul>
          </li>
          <NavLink className=" hover:text-[#3c65f5] text-white flex items-center gap-2"><FaUser />Sign In</NavLink>
          <button className='btn bg-[#3c65f5] dark:bg-white dark:text-gray-900 border-0 hover:bg-[#05264e] text-white capitalize'>Add Listing <MdAddToPhotos className='ml-2' /></button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;