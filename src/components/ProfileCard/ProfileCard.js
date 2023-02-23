import React from 'react';
import { useLoaderData } from 'react-router';
import './profilecard.css'
import SingleCardItem from './SingleCardItem';

const ProfileCard = () => {
  const profile = useLoaderData();
  return (
    <div className='profile_card py-16 bg-white dark:bg-gray-800'>
      <div className="lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto p-4">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 xl:gap-6">
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