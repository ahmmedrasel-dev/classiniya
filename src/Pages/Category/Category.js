import React from 'react';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import CategoryHead from '../../components/CategoryHead/CategoryHead';

const Category = () => {
  return (
    <main>
      <CategoryHead></CategoryHead>
      <CategoryFilter></CategoryFilter>
    </main>
  );
};

export default Category;