import React, { useRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/images/mr_slide1.png';
import './marketplace.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Marketplace = () => {
  return (
    <section className='marketplace py-16 bg-[#3c65f5] dark:bg-gray-900'>
      <div className='lg:max-w-screen-lg xl:max-w-screen-xl md:max-w-screen-md w-full mx-auto p-4'>
        <div className="lg:flex flex:none justify-between items-center gap-4">
          <div className='lg:w-[40%] w-full'>
            <div className="market_content">
              <h2 className='text-4xl text-white font-semibold'>Explore the Marketplace</h2>
              <p className='py-8 text-white'>Search and connect with the right candidates faster. Tell us what you’ve looking for and we’ll get to work for you.</p>
              <button className='btn bg-[#05264e] dark:bg-white dark:text-gray-900 border-0 hover:bg-transparent hover:border text-white hover:text-white hover:border-white'>Explore <BsArrowRight className='text-xl ml-2' /></button>
            </div>
          </div>
          <div className='lg:w-[60%] market_box mt-10 w-full'>
            <Swiper
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                1100: {
                  slidesPerView: 3
                },
                850: {
                  slidesPerView: 3
                },
                650: {
                  slidesPerView: 2
                },
                200: {
                  slidesPerView: 1
                }
              }}
            >
              <SwiperSlide>
                <div className='mr_slider_content w-[230px] h-[255px] rounded-lg' style={{ backgroundImage: `url(${slider1})`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
                  <a href="/">
                    <div className="slider_cover">
                      <div className="content_bottom">
                        <h6 className='text-white mb-4'>Market Research</h6>
                        <p className='text-white text-xs'><span>123</span><span>Jobs Available</span></p>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='mr_slider_content w-[230px] h-[255px] rounded-lg' style={{ backgroundImage: `url(${slider1})`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
                  <a href="/">
                    <div className="slider_cover">
                      <div className="content_bottom">
                        <h6 className='text-white mb-4'>Market Research</h6>
                        <p className='text-white text-xs'><span>123</span><span>Jobs Available</span></p>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='mr_slider_content w-[230px] h-[255px] rounded-lg' style={{ backgroundImage: `url(${slider1})`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
                  <a href="/">
                    <div className="slider_cover">
                      <div className="content_bottom">
                        <h6 className='text-white mb-4'>Market Research</h6>
                        <p className='text-white text-xs'><span>123</span><span>Jobs Available</span></p>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='mr_slider_content w-[230px] h-[255px] rounded-lg' style={{ backgroundImage: `url(${slider1})`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
                  <a href="/">
                    <div className="slider_cover">
                      <div className="content_bottom">
                        <h6 className='text-white mb-4'>Market Research</h6>
                        <p className='text-white text-xs'><span>123</span><span>Jobs Available</span></p>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <div className='swiper-button-next slide_next_btn bg-white dark:bg-gray-700'><FaAngleRight className='text-[#05264e] dark:text-white hover:text-[#3c65f5] text-2xl duration-200' /></div>
              <div className='swiper-button-prev slide_prev_btn bg-white dark:bg-gray-700'><FaAngleLeft className='text-[#05264e] dark:text-white hover:text-[#3c65f5] text-2xl duration-200 ' /></div>
            </Swiper>


          </div>

        </div>
      </div>
    </section>
  );
};

export default Marketplace;