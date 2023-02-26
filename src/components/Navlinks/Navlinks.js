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
      <li className='flex xl:items-center'><NavLink to="/" className="dark:text-white xl:text-white text-[#05264e]">Home </NavLink></li>
      {
        category.map(item => <li key={item._id} className='flex xl:items-center'><NavLink to={`/${item.path}`} className=" dark:text-white text-[#05264e] xl:text-white">{item.name}</NavLink><BsFillCaretDownFill className='text-gray text-[13px]' />
        </li>)
      }
    </>
  );
};

export default Navlinks;