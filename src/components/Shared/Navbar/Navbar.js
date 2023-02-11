import React from 'react';
import Navlinks from '../../Navlinks/Navlinks';
import './navbar.css'

const Navbar = ({ children }) => {


  return (
    <nav className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div
          className="navbar flex items-center justify-between bg-primaryDark xl:gap-2  xl:px-8 py-4 sm:px-4 px-2 ">
          <div className="px-2 mx-2">Classiniya</div>
          <div className="flex-none lg:hidden  ">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu-horizontal main_menu">
              {/* Navarb Menu Content */}
              <Navlinks></Navlinks>
            </ul>
          </div>

          <div className='flex-none hidden lg:block'>
            <ul className='menu-horizontal main_menu items-center'>
              <li>Register</li>
              <li><button className='btn bg-primary border-0'>Sign in</button></li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {
          children
        }
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <Navlinks></Navlinks>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;