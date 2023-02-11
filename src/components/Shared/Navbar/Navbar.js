import React from 'react';
import Navlinks from '../../Navlinks/Navlinks';
import './navbar.css'

const Navbar = ({ children }) => {


  return (
    // <nav className="drawer drawer-end">
    //   <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content flex flex-col">
    //     {/* <!-- Navbar --> */}
    //     <div
    //       className="navbar flex items-center justify-between bg-primaryDark xl:gap-2  xl:px-8 py-4 sm:px-4 px-2 ">
    //       <div className="px-2 mx-2">Classiniya</div>
    //       <div className="flex-none lg:hidden  ">
    //         <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
    //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    //         </label>
    //       </div>

    //       <div className="flex-none hidden lg:block">
    //         <ul className="menu-horizontal main_menu">
    //           {/* Navarb Menu Content */}
    //           <Navlinks></Navlinks>
    //         </ul>
    //       </div>

    //       <div className='flex-none hidden lg:block'>
    //         <ul className='menu-horizontal main_menu items-center'>
    //           <li>Register</li>
    //           <li><button className='btn bg-primary border-0'>Sign in</button></li>
    //         </ul>
    //       </div>
    //     </div>
    //     {/* <!-- Page content here --> */}
    //     {
    //       children
    //     }
    //   </div>
    //   <div className="drawer-side">
    //     <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
    //     <ul className="menu p-4 w-80 bg-base-100">
    //       {/* <!-- Sidebar content here --> */}
    //       <Navlinks></Navlinks>
    //     </ul>

    //   </div>
    // </nav>

    <nav class="bg-white px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b bg-black">
      <div class="container flex flex-wrap items-center justify-between mx-auto">

        <div class="self-center text-xl font-semibold whitespace-nowrap text-gray-400">Classiniya</div>
        <div class="flex md:order-2">
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;