import React from 'react';
import './category_head.css';
import bg from '../../assets/images/category_head_bg.jpeg';
import { Parallax } from 'react-scroll-parallax';

const CategoryHead = ({ category }) => {
  const { name, image } = category;

  return (
    <section className='parallax_section'>
      <Parallax speed={-10}>
        <div className='category_bg' style={{ backgroundImage: `url(${bg})` }}>
          <div className='xl:max-w-screen-xl lg:max-w-screen-lg w-full mx-auto'>
            <Parallax speed={5}>
              <div className='text-center'>
                <h1 className='text-white text-xl font-bold pb-8'>{name}</h1>
                <span className='separator py-8'></span>
                <div className="text-sm breadcrumbs flex justify-center text-white">
                  <ul>
                    <li><a href='/' className='text-white'>Home</a></li>
                    <li><a href='/' className='text-white'>{name}</a></li>
                  </ul>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </Parallax>

    </section>
  );
};

export default CategoryHead;