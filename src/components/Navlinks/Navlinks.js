import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillCaretDownFill } from 'react-icons/bs'

const Navlinks = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('fakeData/category.json')
      .then(res => res.json())
      .then(data => setCategory(data))
  }, [])

  return (
    <>
      <li className='flex lg:items-center'><NavLink to="/" className="lg:text-sm xl:text-lg text-[#05264e] dark:text-white">Home </NavLink></li>
      {
        category.map(item => <li key={item._id} className='flex lg:items-center'><NavLink to={`/${item.path}`} className="lg:text-sm xl:text-lg text-[#05264e] dark:text-white">{item.name}</NavLink><BsFillCaretDownFill className='text-gray text-[13px]' />
        </li>)
      }
    </>
  );
};

export default Navlinks;