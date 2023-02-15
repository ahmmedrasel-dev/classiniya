import React from 'react';
import profile from './data/profileInfo';
import './profilecard.css'
import SingleCardItem from './SingleCardItem';

const ProfileCard = () => {

  return (
    <div className='profile_card py-16'>
      <div className="lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto p-4">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4">
          {
            profile.map(item => <SingleCardItem
              key={item._id}
              profile={item}
            ></SingleCardItem>)
          }
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;