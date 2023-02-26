import React, { useState } from 'react';
import { BsBookmark, BsGrid3X3, BsImages, BsListUl, BsSearch, BsSliders } from 'react-icons/bs';
import location from '../SearchBox/selction_option/location';
import Select from 'react-select';
import './category_filter.css';
import statusOption from '../../utils/statusOption';
import { GrLocation } from 'react-icons/gr';
import { IoClose } from 'react-icons/io5';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { FaAngleLeft, FaAngleRight, FaPlus } from 'react-icons/fa';
import MyCheckbox from '../../utils/myCheckBox/MyCheckbox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
const CategoryFilter = ({ category }) => {
  const { child_category } = category;
  const [isClearable] = useState(true);
  const [showMoreOption, setShowMoreOption] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const option = () => {
    return (
      child_category.map(item => (
        { value: item.name, label: item.name }
      ))
    )
  }

  const shortOpton = [
    { value: 'Default', label: 'Default' },
    { value: 'Popularity', label: 'Popularity' },
    { value: 'Most Liked', label: 'Most Liked' },
    { value: 'Most Rated', label: 'Most Rated' },
    { value: 'Price: low to high', label: 'Price: low to high' },
    { value: 'Price: hight to low', label: 'Price: hight to low' },
  ]

  return (
    <section className='mt-2'>
      <div className="w-full xl:max-w-screen-xl lg:max-w-screen-lg mx-auto p-4">
        <div className='result flex justify-between items-center py-4 px-6 rounded-lg mb-10 bg-slate-100 dark:bg-gray-900'>
          <div className='w-[60%]'>
            <h2 className='text-xl font-bold dark:text-slate-100'>Results For: <span className='text-[#3c65f5]'>{category.name}</span></h2>
          </div>
          <div className='flex justify-between items-center w-[40%]'>
            <p className='mr-2 dark:text-white'>Sort By:</p>
            <Select
              className="w-[200px]"
              classNamePrefix="select"
              name="color"
              defaultValue={shortOpton[0]}
              options={shortOpton}
            />

            <div className='flex gap-4 ml-4'>
              <div className="tooltip tooltip-primary" data-tip="Grid View">
                <BsGrid3X3 className='text-2xl dark:text-base-100' />
              </div>
              <div className="tooltip tooltip-primary" data-tip="List View">
                <AiOutlineOrderedList className='text-2xl dark:text-base-100' />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-2 tab-button">
          <div onClick={() => handleTabClick(1)} className={`bg-slate-100 dark:bg-gray-900 shadow-md flex items-center gap-2 w-1/2 border dark:border-0 p-4 rounded-md justify-center border-gray cursor-pointer ${activeTab === 1 ? 'Active' : ''}`}><span><BsSliders className='dark:text-white' /></span><span className='dark:text-white'>Filters</span></div>

          <div onClick={() => handleTabClick(2)} className={`bg-slate-100 dark:bg-gray-900 flex items-center gap-2 w-1/2 border dark:border-0 p-4 rounded-md justify-center border-gray cursor-pointer shadow-md ${activeTab === 2 ? 'Active' : ''}`}><span><BsImages className='dark:text-white' /></span><span className='dark:text-white'>Category</span></div>
        </div>

        <div className="tab_content">
          {
            activeTab === 1 && <div className='bg-slate-100 dark:bg-gray-900 border dark:border-0 p-4 mt-2 rounded-lg border-gray shadow-lg'>
              <div className='flex justify-between gap-4'>
                <div className='flex items-center w-full relative'>
                  <span className='mr-2 absolute left-2 z-50'><BsListUl className='text-[#05264e] dark:text-gray-900' /></span>
                  <Select
                    isClearable={isClearable}
                    options={option()}
                    placeholder="All Listing Types"
                    className="select-bordered w-full select_allcountries"
                  />
                </div>

                <div className='flex items-center w-full relative'>
                  <span className='mr-2 absolute left-2'><BsBookmark className='text-[#05264e] dark:text-gray-900' /></span>
                  <input className='input input-bordered input-md w-full px-8 bg-white' type="text" placeholder='Waht are you looking for?' />
                </div>

                <div className='flex items-center w-full relative'>
                  <span className='mr-2 absolute left-2 z-50'><BsListUl className='text-[#05264e] dark:text-gray-900' /></span>
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
                  <span className='mr-2 absolute left-2 z-[1]'><BsListUl className='text-[#05264e] dark:text-gray-900' /></span>
                  <Select
                    isClearable={isClearable}
                    options={statusOption}
                    placeholder="All Status"
                    className="select-bordered w-full select_allcountries"
                  />
                </div>

                <div className='flex items-center w-full relative'>
                  <span className='mr-2 absolute left-2'><GrLocation className='text-secondary dark:text-gray-900' /></span>
                  <input className='input input-bordered input-md w-full px-8 bg-white' type="text" placeholder='Where to look?' />
                </div>

                <div className='flex items-center w-full'>
                  <button className='btn bg-[#3c65f5] border-0 text-white w-full mx-auto hover:bg-secondary rounded-full capitalize'><BsSearch className='mr-3 text-white text-xl' /> Search</button>
                </div>
              </div>

              {
                showMoreOption && (
                  <>
                    <div className="divider"></div>
                    <div className='flex items-center mb-8'>
                      <span className='mr-2'><BsListUl className='text-secondary dark:text-base-100' /></span>
                      <h2 className='dark:text-base-100'>More Filters</h2>
                    </div>

                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mb-6'>
                      <MyCheckbox id="1" label="online" />
                      <MyCheckbox id="2" label="offline" />
                      <MyCheckbox id="3" label="Best Selling" />
                      <MyCheckbox id="4" label="Most Popular" />
                      <MyCheckbox id="5" label="Most Popular" />
                      <MyCheckbox id="6" label="Most Popular" />
                      <MyCheckbox id="7" label="Most Popular" />
                      <MyCheckbox id="8" label="Most Popular" />
                    </div>
                  </>
                )
              }

              <button className='btn bg-[#3c65f5] border-0 capitalize text-white' onClick={() => setShowMoreOption(!showMoreOption)}>{!showMoreOption ? <FaPlus className='mr-2' /> : <IoClose className='mr-2' />}{!showMoreOption ? 'More' : 'Close'} Options</button>
            </div>
          }

          {
            activeTab === 2 && <div className='bg-white dark:bg-gray-800 child_category border px-10 pt-10 mt-2 rounded-lg border-gray shadow-lg'>
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

                <div className='swiper-button-next slide_next_btn bg-white dark:bg-gray-700'><FaAngleRight className='text-[#05264e] dark:text-white hover:text-[#3c65f5] text-2xl duration-200' /></div>
                <div className='swiper-button-prev slide_prev_btn bg-white dark:bg-gray-700'><FaAngleLeft className='text-[#05264e] dark:text-white hover:text-[#3c65f5] text-2xl duration-200 ' /></div>
              </Swiper>
            </div>
          }

        </div>

      </div>
    </section>
  );
};

export default CategoryFilter;