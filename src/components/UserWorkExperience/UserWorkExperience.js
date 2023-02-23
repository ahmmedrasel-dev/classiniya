import React from 'react';

const UserWorkExperience = ({ profileInfo }) => {
  const { work_experience } = profileInfo;
  return (
    <div>
      <h3 className='text-lg font-bold mb-4 text-gray-700 dark:text-white'>Work & Experience</h3>

      <div>
        {
          work_experience.map((item, index) => <div key={index} className="edu_container mb-6 ml-12">
            <div className='circle rounded-full h-[40px] w-[40px] bg-[#c9d5ff] flex justify-center items-center text-[#3c65f5] capitalize'>{item.post[0]}</div>
            <h3 className='text-md text-gray-800 capitalize dark:text-white'>{item.post} <span className='text-[#3c65f5] ml-4'>{item.year}</span></h3>
            <h4 className='text-md text-[#3c65f5]'>{item.company}</h4>
            <p className='mt-3 text-sm text-gray-700 dark:text-slate-200'>{item.note}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default UserWorkExperience;