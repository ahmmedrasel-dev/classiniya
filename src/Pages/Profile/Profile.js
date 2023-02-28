import React, { useEffect, useState } from 'react';
import { BsCalendar, BsEnvelope, BsFillPhoneFill, BsFillTelephoneFill } from 'react-icons/bs';
import { useParams } from 'react-router';
import ProfileCover from '../../components/ProfileCover/ProfileCover';
import UserAbout from '../../components/UserAbout/UserAbout';
import UserEducation from '../../components/UserEducation/UserEducation';
import UserWorkExperience from '../../components/UserWorkExperience/UserWorkExperience';
import { RxPerson } from 'react-icons/rx';
import { BsTranslate } from 'react-icons/bs';
import './portfolio.css'
import PortfolioModal from '../../components/PortfolioModal/PortfolioModal';
import Loading from '../../components/Shared/Loading/Loading';
const Profile = () => {
  const { profileId } = useParams();
  const [profileInfo, setProfileInfo] = useState(null);
  const [showPhone, setShowPhone] = useState(false);
  useEffect(() => {
    const loadProfile = async () => {
      const response = await fetch('/fakeData/profile.json');
      const data = await response.json();
      const profileData = data.find(profile => profile._id === parseInt(profileId));
      setProfileInfo(profileData)
    }
    loadProfile()

  }, [profileId])

  if (!profileInfo) {
    return <Loading></Loading>
  }

  return (
    <section className='bg-white dark:bg-gray-800 py-4'>
      <div className='xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md w-full mx-auto lg:pb-10 p-4'>
        <ProfileCover profileInfo={profileInfo}></ProfileCover>

        <div className='flex flex-col lg:flex-row justify-between lg:gap-8 gap-4 p-4'>
          <div className='lg:w-[75%] w-full main_content flex flex-col gap-8'>
            <div className='about bg-slate-100 dark:bg-gray-900 p-6 rounded-lg'>
              <UserAbout></UserAbout>
            </div>

            <div className='education bg-slate-100 dark:bg-gray-900 p-6 rounded-lg'>
              <UserEducation profileInfo={profileInfo} />
            </div>

            <div className='education bg-slate-100 dark:bg-gray-900 p-6 rounded-lg'>
              <UserWorkExperience profileInfo={profileInfo} />
            </div>

            <div className='education bg-slate-100 dark:bg-gray-900 p-6 rounded-lg'>
              <h3 className='text-lg font-bold mb-4 text-gray-700 dark:text-white'>Portfolio</h3>
              <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4'>
                <PortfolioModal
                  images={profileInfo.portfolio}
                ></PortfolioModal>
              </div>
            </div>
          </div>

          <aside className='lg:w-[35%] w-full side_bar flex flex-col gap-8'>
            <div className='bg-slate-100 dark:bg-gray-900 p-6 rounded-lg flex flex-col gap-6'>
              <div className='flex justify-start gap-4 items-center'>
                <BsCalendar className='text-2xl text-[#3c65f5]' />
                <div>
                  <h3 className='text-gray-800 font-bold dark:text-white'>Experience Time</h3>
                  <p className='text-md text-gray-700 dark:text-slate-300'>{profileInfo.experience} Year</p>
                </div>
              </div>

              <div className='flex justify-start gap-4 items-center'>
                <RxPerson className='text-3xl text-[#3c65f5]' />
                <div>
                  <h3 className='text-gray-800 font-bold dark:text-white'>Sex</h3>
                  <p className='text-md text-gray-700 capitalize dark:text-slate-300'>{profileInfo.sex}</p>
                </div>
              </div>


              <div className='flex justify-start gap-4 items-center'>
                <BsTranslate className='text-2xl text-[#3c65f5]' />
                <div>
                  <h3 className='text-gray-800 font-bold dark:text-white'>Languages</h3>
                  <p className='text-md text-gray-700 dark:text-slate-300'>{profileInfo.language}</p>
                </div>
              </div>

              <div className='flex justify-start gap-4 items-center'>
                <BsEnvelope className='text-2xl text-[#3c65f5]' />
                <div>
                  <h3 className='text-gray-800 font-bold dark:text-white'>Email</h3>
                  <p className='text-md text-gray-700 dark:text-slate-300'>{profileInfo.email}</p>
                </div>
              </div>

              <div className='flex justify-start gap-4 items-center'>
                <BsFillTelephoneFill className='text-2xl text-[#3c65f5]' />
                {
                  !showPhone && <div>
                    <h3 className='text-gray-800 font-bold dark:text-white'>Phone Number</h3>
                    <p className='text-md text-gray-700 flex justify-start items-center gap-2'><BsFillPhoneFill />********<button className='btn btn-xs bg-[#3c65f5] border-0 text-white' onClick={() => setShowPhone(true)}>Show</button></p>
                  </div>
                }
                {
                  showPhone && <div>
                    <h3 className='text-gray-800 font-bold dark:text-white'>Phone Number</h3>
                    <p className='text-md text-gray-700 dark:text-slate-300 flex justify-start items-center gap-2'><BsFillPhoneFill />{profileInfo.phone}</p>
                  </div>
                }
              </div>
            </div>

            <div className='bg-slate-100 dark:bg-gray-900 p-6 rounded-lg'>

              <h3 className='text-lg font-bold mb-4 text-gray-700 dark:text-white'>Portfoli Profile</h3>
              <div className='flex justify-start gap-4 mt-4'>
                {
                  profileInfo.portfolio_profile.map(item => <a rel="noreferrer" href={item.profile_link} target="_blank"><img className='w-[40px] h-[40px]' src={item.icon} alt="" /></a>)
                }

              </div>
            </div>

            <div className='bg-slate-100 dark:bg-gray-900 p-6 rounded-lg'>

              <h3 className='text-lg font-bold mb-4 text-gray-700 dark:text-white'>Professional Skills</h3>
              <div className='flex justify-start gap-4 mt-4 flex-wrap'>
                {
                  profileInfo.skill_tag.map(item => <button className='btn bg-[#3c65f5] text-white border-0 hover:bg-[#05264e] btn-sm'>{item}</button>)
                }

              </div>
            </div>

            <div className='bg-slate-100 dark:bg-gray-900 p-6 rounded-lg'>
              <h3 className='text-lg font-bold mb-4 text-gray-700'>Contact Candidate</h3>

              <form className='flex flex-col gap-4 py-8'>
                <input type="text" placeholder="Subject" className="input w-full bg-white dark:bg-gray-800" />
                <input type="email" placeholder="E-mail" className="input w-full bg-white dark:bg-gray-800" />
                <input type="phone" placeholder="Phone" className="input w-full bg-white dark:bg-gray-800" />
                <input type="phone" placeholder="Phone" className="input w-full bg-white dark:bg-gray-800" />

                <textarea className="textarea textarea-bordered bg-white dark:bg-gray-800" placeholder="Your Message..."></textarea>

                <button className='btn w-full text-white bg-[#3c65f5] border-0 hover:bg-[#05264e]'>Send Message</button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Profile;