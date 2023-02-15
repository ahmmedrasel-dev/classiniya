import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const SingleCardItem = ({ profile }) => {
  const { name, location, skills, profile_photo, cover_photo } = profile;
  return (
    <div className="card_container shadow-lg rounded-lg mb-8">
      <div className="card_heading">
        <div className="cover_photo">
          <img src={cover_photo} alt="" />
        </div>
        <div className="profile_pto">
          <a href="/">
            <img src={profile_photo} alt="" />
          </a>

          <div className='verifed_profile'>
            <BsFillPatchCheckFill className='text-blue-600 text-xl' />
          </div>
        </div>
        <div className="title_location">
          <h4 className='text-lg font-bold'><a href="/">{name}</a></h4>
          <p className='text-sm font-light'>{location}</p>
        </div>
      </div>

      <div className="card_body py-8">
        <h4 className='text-left uppercase font-bold'>Skills:</h4>
        <div className="skills flex justify-between mt-4">
          {
            skills.map((item, index) => <img className='w-[30px] drop-shadow-md' key={index} src={item} alt={name} />)
          }

        </div>
      </div>

      <div className="card_footer flex justify-between">
        <button className='btn bg-primary border-0 w-[45%] btn-md hover:bg-secondary'>View Proile</button>
        <button className='btn bg-secondary btn-md w-[45%] hover:bg-primary hover:border-0'>Hire</button>
      </div>
    </div>
  );
};

export default SingleCardItem;