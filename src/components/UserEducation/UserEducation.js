import React from 'react';
import './user_education.css'

const UserEducation = ({ profileInfo }) => {
  const { education } = profileInfo;
  return (
    <>
      <h3 className='text-lg font-bold mb-4 text-gray-700 dark:text-white'>Education</h3>

      <div>
        {
          education.map((item, index) => <div key={index} className="edu_container mb-6 ml-12">
            <div className='circle rounded-full h-[40px] w-[40px] bg-[#c9d5ff] flex justify-center items-center text-[#3c65f5]'>{item.subject[0]}</div>
            <h3 className='text-md text-gray-800 dark:text-white'>{item.subject} <span className='text-[#3c65f5] ml-4'>{item.year}</span></h3>
            <h4 className='text-md text-[#3c65f5] capitalize'>{item.institute}</h4>
            <p className='mt-3 text-sm text-gray-700 dark:text-slate-300'>{item.summary}</p>
          </div>)
        }
      </div>
    </>
  );
};

export default UserEducation;