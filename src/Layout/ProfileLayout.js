import React, { useRef, useState } from 'react';
import { Outlet } from 'react-router';
import Navlinks from '../components/Navlinks/Navlinks';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';

const ProfileLayout = () => {
  const [isSticky, setIsSticky] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;

    if (scrollTop > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div ref={scrollRef} className="drawer-content bg-white" onScroll={handleScroll} >
          <Navbar isSticky={isSticky}></Navbar>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[80%] bg-white dark:bg-gray-800 text-base-content">
            <Navlinks></Navlinks>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;