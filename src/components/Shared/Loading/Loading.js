import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './loading.css';

const Loading = ({ count }) => {
  return (

    <>
      {
        [...Array(count)].map((_, index) => (
          <div role="status" className="shadow animate-pulse card_container rounded-lg mb-8 bg-slate-50 dark:bg-gray-900 border-slate-100 dark:border-gray-700 border w-max-screen-sm">
            <div className="card_heading">
              <div className="cover_photo bg-slate-300 w-full">
                <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
              </div>
              <div className="profile_pto">
                <a href="/">
                  <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                </a>
                <div className='verifed_profile tooltip' data-tip="Verified">
                  <BsFillPatchCheckFill className='text-gray-400 text-xl' />
                </div>
              </div>
              <div className="title_location text-center mt-20">
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              </div>
            </div>

            <div className="divider"></div>

            <div className=''>
              <ul className='flex justify-center gap-3'>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </ul>
            </div>

            <div className="divider"></div>

            <div className="card_body">
              <div className=" flex justify-center gap-2 flex-wrap">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              </div>
              <div className="skills flex justify-center gap-3 mt-4">
                <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
              </div>

              <div className=" flex justify-center gap-2 flex-wrap">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="card_footer flex justify-between">
              <button className='btn bg-gray-200 text-white border-0 w-full capitalize'>Loading</button>
            </div>
          </div>
        ))
      }

    </>

  );
};

export default Loading;