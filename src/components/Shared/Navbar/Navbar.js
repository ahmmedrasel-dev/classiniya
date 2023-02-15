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
      <div ref={stickyRef} className={classNames("navbar flex items-center justify-between bg-primaryDark xl:gap-2  xl:px-8 py-4 sm:px-4 px-2 ", { sticky })}>
        <a href='/' className="btn btn-ghost normal-case text-xl text-secondary">Classiniya</a>

        <div className='flex:none'>
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        </div>

        <div className="hidden lg:flex">
          <ul className="main_menu flex justify-between">
            <Navlinks></Navlinks>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul>
            <NavLink className="mx-4 text-secondary hover:text-primary">Register</NavLink>
            <button className='btn bg-primary border-0 hover:bg-secondary'>Sign in</button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;