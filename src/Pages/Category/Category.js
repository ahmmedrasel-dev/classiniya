import React from 'react';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import CategoryHead from '../../components/CategoryHead/CategoryHead';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Category = () => {
  return (
    <main>
      <CategoryHead></CategoryHead>
      <CategoryFilter></CategoryFilter>
      <ProfileCard></ProfileCard>
    </main>
  );
};

export default Category;