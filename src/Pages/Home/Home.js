import React from 'react';
import HeroHome from '../../components/HeroHome/HeroHome';
import Marketplace from '../../components/Marketplace/Marketplace';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import SearchBox from '../../components/SearchBox/SearchBox';

const Home = () => {
  return (
    <main>
      <HeroHome></HeroHome>
      <SearchBox></SearchBox>
      <Marketplace></Marketplace>
      <ProfileCard></ProfileCard>
    </main>
  );
};

export default Home;