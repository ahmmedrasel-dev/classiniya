import React from 'react';
import { BsFillPatchCheckFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiDribbble } from 'react-icons/fi';
import { FaBehance } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import { MdLocationOn } from 'react-icons/md';

const SingleCardItem = ({ profile }) => {
  const { name, location, skills, profile_photo, cover_photo, label, skill_tag, flag } = profile;
  return (
    <div className="card_container rounded-lg mb-8 bg-slate-100 dark:bg-gray-900 border-slate-300 dark:border-gray-700 border">
      <div className="card_heading">
        <div className="cover_photo">
          <img src={cover_photo} alt="" />
          {
            label && <span className='label badge bg-red-500 border-0 badge-md text-white'>{label}</span>
          }
        </div>
        <div className="profile_pto">
          <a href="/">
            <img src={profile_photo} alt="" />
          </a>

          <div className='verifed_profile tooltip' data-tip="Verified">
            <BsFillPatchCheckFill className='text-blue-600 text-xl' />
          </div>
        </div>
        <div className="title_location text-center">
          <h4 className='text-lg font-bold dark:text-white text-[#05264e]'><a href="/">{name}</a></h4>
          <div className='flex justify-center items-center'>
            <span className='mr-1'><MdLocationOn className='dark:text-white' /></span>
            <p className='text-sm font-light capitalize text-[#05264ee1] mr-2 dark:text-slate-200'>{location}</p>
            {flag}
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className='portfolio'>
        <ul className='flex justify-center gap-3'>
          <li><a href="/"><FiDribbble className='text-2xl hover:text-[#3c65f5] text-[#05264e] dark:text-slate-100' /></a></li>
          <li><a href="/"><FaBehance className='text-2xl hover:text-[#3c65f5] text-[#05264e] dark:text-slate-100' /></a></li>
          <li><a href="/"><BsGithub className='text-2xl hover:text-[#3c65f5] text-[#0b1725] dark:text-slate-100' /></a></li>
          <li><a href="/"><SiNetlify className='text-2xl hover:text-[#3c65f5] text-[#05264e] dark:text-slate-100' /></a></li>
          <li><a href="/"><BsLinkedin className='text-2xl hover:text-[#3c65f5] text-[#05264e] dark:text-slate-100' /></a></li>
        </ul>
      </div>

      <div className="divider"></div>

      <div className="card_body">
        <div className="skills_tag flex justify-center gap-2 flex-wrap">
          {
            skill_tag.map((item, index) => <div className="btn btn-xs text-white  bg-[#05264e] hover:bg-[#3c65f5] rounded-full border-0">{item}</div>)
          }
        </div>
        <div className="skills flex justify-center gap-3 mt-4">
          {
            skills.map((item, index) => <img className='w-[30px] drop-shadow-md' key={index} src={item} alt={name} />)
          }

        </div>
      </div>

      <div className="divider"></div>

      <div className="card_footer flex justify-between">
        <button className='btn bg-[#3c65f5] text-white border-0 w-full hover:bg-[#05264e] capitalize'>View Profile</button>
      </div>
    </div>
  );
};

export default SingleCardItem;