import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import CategoryHead from '../../components/CategoryHead/CategoryHead';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Category = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true)
  const [singleCategory, setSingleCategory] = useState([]);

  useEffect(() => {
    const fetchSingleCategory = async () => {
      const response = await fetch('fakeData/category.json');
      const data = await response.json();
      const category = data.find(item => item.path === pathname.replace('/', ''));
      setSingleCategory(category)
      setIsLoading(false)
    }
    fetchSingleCategory();
  }, [pathname]);

  return (
    <main className='bg-white dark:bg-gray-800'>
      <CategoryHead category={singleCategory} isLoading={isLoading}></CategoryHead>
      <CategoryFilter category={singleCategory} isLoading={isLoading}></CategoryFilter>
      <ProfileCard isLoading={isLoading}></ProfileCard>
    </main>
  );
};

export default Category;