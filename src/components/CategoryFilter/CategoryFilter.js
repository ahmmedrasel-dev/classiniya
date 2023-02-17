import React, { useState } from 'react';
import { BsBookmark, BsImages, BsListUl, BsSearch, BsSliders } from 'react-icons/bs';
import location from '../SearchBox/selction_option/location';
import Select from 'react-select';
import './category_filter.css';
import statusOption from '../../utils/statusOption';
import { GrLocation } from 'react-icons/gr';
import { IoClose } from 'react-icons/io5';
import { FaAngleLeft, FaAngleRight, FaPlus } from 'react-icons/fa';
import MyCheckbox from '../../utils/myCheckBox/MyCheckbox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
const CategoryFilter = ({ category }) => {
  const { child_category } = category;
  const [isClearable, setisClearable] = useState(true);
  const [showMoreOption, setShowMoreOption] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const option = () => {
    return (
      child_category.map(item => (
        { value: item.name, label: item.name }
      ))
    )
  }

  return (
    <section className='py-12'>
      <div className="w-full xl:max-w-screen-xl lg:max-w-screen-lg mx-auto">
        <div className="flex justify-between gap-2 tab-button">
          <div onClick={() => handleTabClick(1)} className={`shadow-md flex items-center gap-2 w-1/2 border p-4 rounded-md justify-center border-gray cursor-pointer ${activeTab === 1 ? 'Active' : ''}`}><span><BsSliders /></span><span>Filters</span></div>
          <div onClick={() => handleTabClick(2)} className={`flex items-center gap-2 w-1/2 border p-4 rounded-md justify-center border-gray cursor-pointer shadow-md ${activeTab === 2 ? 'Active' : ''}`}><span><BsImages /></span><span>Category</span></div>
        </div>

        <div className="tab_content">
          {
            activeTab === 1 && <div className='border p-4 mt-12 rounded-lg border-gray shadow-lg'>
              <div className='flex justify-between gap-4'>
                <div className='flex items-center w-full relative'>
                  <span className='mr-2 absolute left-2 z-50'><BsListUl className='text-secondary' /></span>
                  <Select
                    isClearable={isClearable}
                    options={option()}
                    placeholder="All Listing Types"
                    className="select-bordered w-full select_allcountries"
                  />
                </div>

                <div className='flex items-center w-full relative'>
                  <span className='mr-2 absolute left-2'><BsBookmark className='text-secondary' /></span>
                  <input className='input input-bordered input-md w-full px-8' type="text" placeholder='Waht are you looking for?' />
                </div>

                <div className='flex items-center w-full relative'>
                  <span className='mr-2 absolute left-2 z-50'><BsListUl className='text-secondary' /></span>
                  <Select
                    isClearable={isClearable}
                    options={location}
                    placeholder="All Countries"
                    className="select_allcountries select-bordered w-full"
                  />
                </div>
              </div>

              <div className='flex justify-between gap-4'>
                <div className='flex items-center w-full relative'>
                  <span className='mr-2 absolute left-2 z-[1]'><BsListUl className='text-secondary' /></span>
                  <Select
                    isClearable={isClearable}
                    options={statusOption}
                    placeholder="All Status"
                    className="select-bordered w-full select_allcountries"
                  />
                </div>

                <div className='flex items-center w-full relative'>
                  <span className='mr-2 absolute left-2'><GrLocation className='text-secondary' /></span>
                  <input className='input input-bordered input-md w-full px-8' type="text" placeholder='Where to look?' />
                </div>

                <div className='flex items-center w-full'>
                  <button className='btn bg-primary border-0 text-white w-full mx-auto hover:bg-secondary rounded-full'><BsSearch className='mr-3 text-white text-xl' /> Search</button>
                </div>
              </div>

              {
                showMoreOption && (
                  <>
                    <div className="divider"></div>
                    <div className='flex items-center mb-8'>
                      <span className='mr-2'><BsListUl className='text-secondary' /></span>
                      <h2>More Filters</h2>
                    </div>

                    <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4'>
                      <MyCheckbox label="online" />
                      <MyCheckbox label="offline" />
                      <MyCheckbox label="Best Selling" />
                      <MyCheckbox label="Most Popular" />
                      <MyCheckbox label="Most Popular" />
                      <MyCheckbox label="Most Popular" />
                      <MyCheckbox label="Most Popular" />
                      <MyCheckbox label="Most Popular" />
                    </div>
                  </>
                )
              }

              <button className='btn bg-secondary border-0 capitalize' onClick={() => setShowMoreOption(!showMoreOption)}>{!showMoreOption ? <FaPlus className='mr-2' /> : <IoClose className='mr-2' />}{!showMoreOption ? 'More' : 'Close'} Options</button>
            </div>
          }

          {
            activeTab === 2 && <div className='child_category border px-10 pt-10 mt-12 rounded-lg border-gray shadow-lg'>
              <Swiper
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                  1100: {
                    slidesPerView: 4
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
                {
                  child_category.map(item => (
                    <SwiperSlide>
                      <div className='mr_slider_content w-[230px] h-[230px] rounded-lg' style={{ backgroundImage: `url(${item.image})`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
                        <a href="/">
                          <div className="">
                            <div className="content_bottom">
                              <h6 className='text-white mb-4'>{item.name}</h6>
                            </div>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                  ))
                }


                <div className='swiper-button-next slide_next_btn'><FaAngleRight className='text-white hover:text-primary text-2xl duration-200' /></div>
                <div className='swiper-button-prev slide_prev_btn'><FaAngleLeft className='text-white hover:text-primary text-2xl duration-200' /></div>
              </Swiper>
            </div>
          }

        </div>




      </div>
    </section>
  );
};

export default CategoryFilter;