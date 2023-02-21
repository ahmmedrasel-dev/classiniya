import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import Navlinks from '../../Navlinks/Navlinks'
import useSticky from '../../../Hooks/useSticky';
import classNames from 'classnames';

const Navbar = () => {
  const { stickyRef, sticky } = useSticky();
  return (
    <header>
      <div ref={stickyRef} className={classNames("navbar flex items-center justify-between bg-base-100 dark:bg-gray-800 xl:gap-2  xl:px-8 py-4 sm:px-4 px-2 ", { sticky })}>
        <a href='/' className="btn btn-ghost normal-case text-xl text-[#05264e] dark:text-base-100">Classiniya</a>

        <div className='flex:none'>
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
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
            <NavLink className="mx-4 text-[#05264e] hover:text-primary dark:text-base-100">Register</NavLink>
            <button className='btn bg-[#3c65f5] dark:bg-base-100 dark:text-gray-900 border-0 hover:bg-secondary'>Sign in</button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;