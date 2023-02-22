import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import CategoryHead from '../../components/CategoryHead/CategoryHead';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Category = () => {
  const { pathname } = useLocation();
  const [singleCategory, setSingleCategory] = useState(null);

  useEffect(() => {
    const fetchSingleCategory = async () => {
      const response = await fetch('fakeData/category.json');
      const data = await response.json();
      const category = data.find(item => item.path === pathname.replace('/', ''));
      setSingleCategory(category)
    }
    fetchSingleCategory();
  }, [pathname]);

  if (!singleCategory) {
    return <div>Loading...</div>;
  }

  return (
    <main className='bg-white dark:bg-gray-800'>
      <CategoryHead category={singleCategory}></CategoryHead>
      <CategoryFilter category={singleCategory}></CategoryFilter>
      <ProfileCard></ProfileCard>
    </main>
  );
};

export default Category;