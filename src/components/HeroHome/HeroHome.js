import React from 'react';
import './hero_home.css';
import h_banner1 from '../../assets/images/h_banner1.png';
import h_banner2 from '../../assets/images/h_banner2.png';
import h_banner3 from '../../assets/images/h_banner3.png';
import h_banner4 from '../../assets/images/h_banner4.png';
import h_banner5 from '../../assets/images/h_banner5.png';

const HeroHome = () => {

  return (
    <section className={`hero_home lg:py-16 py-6 bg-base-100 dark:bg-gray-800`}>
      <div className="lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto p-4">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="heru_left lg:p-12 xl:p-20 p-4">
            <h1 className='lg:text-6xl text-5xl font-black text-[#05264e] dark:text-base-100'>Find Jobs, <br />Hire Creatives</h1>
            <p className='py-8 dark:text-base-300'>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>

            <div className="hero_action">
              <button className='btn bg-[#3c65f5] dark:bg-base-100 dark:text-gray-900 border-0 mr-4 capitalize'>Get Started</button>
              <button className='btn btn-outline border-[#3c65f5] dark:border-base-100 text-[#3c65f5] dark:text-base-100 capitalize'>Learn More</button>
            </div>
          </div>

          <div className="hero_right hidden lg:block">
            <div className={`hero_bg`}>
              <div className="h_banner1">
                <img src={h_banner1} alt="" />
              </div>
              <div className="h_banner2">
                <img src={h_banner2} alt="" />
              </div>
              <div className="h_banner3">
                <img src={h_banner3} alt="" />
              </div>
              <div className="h_banner4">
                <img src={h_banner4} alt="" />
              </div>
              <div className="h_banner5">
                <img src={h_banner5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;