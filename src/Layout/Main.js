import React from 'react';
import { Outlet } from 'react-router';
import Navlinks from '../components/Navlinks/Navlinks';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';

const Main = () => {

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <Navlinks></Navlinks>
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;