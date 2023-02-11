import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
  return (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/">Graphics &  Design</NavLink></li>
      <li><NavLink to="/">Digital Marketing</NavLink></li>
      <li><NavLink to="/">Programming & Tech</NavLink></li>
      <li><NavLink to="/">AI Models</NavLink></li>
    </>
  );
};

export default Navlinks;