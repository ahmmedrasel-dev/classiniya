import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Navigation } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/images/mr_slide1.png';
import './marketplace.css';
import "swiper/css/navigation";

const Marketplace = () => {
  return (
    <section className='marketplace py-20 bg-primary'>
      <div className='lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto'>
        <div className="flex justify-between items-center">
          <div className='w-[40%]'>
            <div className="market_content">
              <h2 className='text-4xl text-white font-semibold'>Explore the Marketplace</h2>
              <p className='py-4 text-white'>Search and connect with the right candidates faster. Tell us what you’ve looking for and we’ll get to work for you.</p>
              <button className='btn bg-secondary border-0 hover:bg-transparent hover:border hover:border-white'>Explore <BsArrowRight className='text-xl ml-2' /></button>
            </div>
          </div>
          <div className='w-[60%] market_box mt-10'>
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              navigation={true}
              modules={[Navigation]}
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
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Marketplace;