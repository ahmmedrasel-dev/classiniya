import React from 'react';
import './category_head.css';
import bg from '../../assets/images/category_head_bg.jpeg';

const CategoryHead = () => {
  return (
    <section className='parallax_section'>
      <div className='category_bg' style={{ backgroundImage: `url(${bg})` }}>
        <div className='overlay'></div>
        <div className='xl:max-w-screen-xl lg:max-w-screen-lg w-full mx-auto'>
          <div className='text-center'>
            <h1 className='text-white text-xl font-bold pb-8'>Category Name</h1>
            <span className='separator py-8'></span>
            <div className="text-sm breadcrumbs flex justify-center text-white">
              <ul>
                <li><a href='/' className='text-white'>Home</a></li>
                <li><a href='/' className='text-white'>Category Name</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHead;