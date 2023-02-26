import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillCaretDownFill } from 'react-icons/bs'

const Navlinks = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const loadCategory = async () => {
      const response = await fetch('/fakeData/category.json');
      const data = await response.json();
      setCategory(data);
    }
    loadCategory()
  }, [])
  return (
    <>
      <li className='flex lg:items-center'><NavLink to="/" className=" text-white">Home </NavLink></li>
      {
        category.map(item => <li key={item._id} className='flex lg:items-center'><NavLink to={`/${item.path}`} className=" text-white">{item.name}</NavLink><BsFillCaretDownFill className='text-gray text-[13px]' />
        </li>)
      }
    </>
  );
};

export default Navlinks;