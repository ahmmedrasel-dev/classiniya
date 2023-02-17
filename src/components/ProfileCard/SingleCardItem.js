import React from 'react';
import { BsFillPatchCheckFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { FiDribbble } from 'react-icons/fi';
import { FaBehance } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';

const SingleCardItem = ({ profile }) => {
  const { name, location, skills, profile_photo, cover_photo, label, skill_tag, flag } = profile;
  return (
    <div className="card_container shadow-lg rounded-lg mb-8 bg-white">
      <div className="card_heading">
        <div className="cover_photo">
          <img src={cover_photo} alt="" />
          {
            label && <span className='label badge bg-red-500 border-0 badge-md'>{label}</span>
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
          <h4 className='text-lg font-bold'><a href="/">{name}</a></h4>
          <div className='flex justify-center items-center'>
            <span className='mr-1'><GrLocation /></span>
            <p className='text-sm font-light capitalize mr-2'>{location}</p>
            {flag}
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className='portfolio'>
        <ul className='flex justify-center gap-3'>
          <li><a href="/"><FiDribbble className='text-2xl hover:text-primary text-secondary' /></a></li>
          <li><a href="/"><FaBehance className='text-2xl hover:text-primary text-secondary' /></a></li>
          <li><a href="/"><BsGithub className='text-2xl hover:text-primary text-secondary' /></a></li>
          <li><a href="/"><SiNetlify className='text-2xl hover:text-primary text-secondary' /></a></li>
          <li><a href="/"><BsLinkedin className='text-2xl hover:text-primary text-secondary' /></a></li>
        </ul>
      </div>

      <div className="divider"></div>

      <div className="card_body">
        <div className="skills_tag flex justify-center gap-2 flex-wrap">
          {
            skill_tag.map((item, index) => <div className="btn btn-xs bg-gray rounded-full border-0 hover:bg-secondary">{item}</div>)
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
        <button className='btn bg-gray border-0 w-full hover:bg-secondary capitalize'>View Profile</button>
      </div>
    </div>
  );
};

export default SingleCardItem;