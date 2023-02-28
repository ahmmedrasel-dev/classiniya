import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './profile_cover.css'
import { SlLocationPin } from 'react-icons/sl'

const ProfileCover = ({ profileInfo }) => {
  const { profile_photo, cover_photo, name, profession, location, skill_tag } = profileInfo
  return (
    <div className='banner_user' style={{ background: `url(${cover_photo})` }}>
      <div className="banner_content">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className='flex lg:flex-row flex-col justify-start gap-8 items-center'>
            <div className="profile_pto">
              <a href="/">
                <img src={profile_photo} alt="" />
              </a>
              <div className='verifed_profile tooltip' data-tip="Verified">
                <BsFillPatchCheckFill className='text-blue-600 text-xl' />
              </div>
            </div>

            <div className='text-center lg:text-left'>
              <h2 className='text-2xl font-bold text-white mb-3'>{name}</h2>

              <div className='flex lg:flex-row flex-col justify-start lg:gap-8 gap-4 items-center'>
                <span className='text-md text-white'>{profession}</span>
                <span className='text-md text-white flex items-center gap-1'><SlLocationPin /> {location}</span>
              </div>

              <div className='mt-2'>
                {
                  skill_tag?.slice(0, 3).map((item, index) => <button className='btn btn-sm rounded-full mr-2 bg-[#c9d5ff] text-[#3c65f5] border-0 hover:bg-[#05264e] hover:text-white capitalize' key={index}>{item}</button>)
                }

              </div>
            </div>
          </div>

          <div className='lg:mt-0 mt-8'>
            <button className='btn bg-[#3c65f5] border-0 text-white rounded-full w-40 capitalize hover:bg-[#05264e]'>Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCover;