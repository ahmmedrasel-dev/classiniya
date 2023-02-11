import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Shared/Navbar/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar>
        <Outlet></Outlet>
      </Navbar>
    </div>
  );
};

export default Main;