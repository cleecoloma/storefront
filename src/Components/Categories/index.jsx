import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../store/categories/index.js';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  const activeCategory = useSelector(
    (state) => state.categories.activeCategory
  );
  const dispatch = useDispatch();

  const handleCategoryChange = (event, newValue) => {
    dispatch(setActiveCategory(newValue));
  };

  return (
    <Tabs
      value={activeCategory}
      onChange={handleCategoryChange}
      centered
      indicatorColor='primary'
      textColor='primary'
    >
      {categories.map((category) => (
        <Tab
          key={category.name}
          label={category.displayName}
          value={category.name}
        />
      ))}
    </Tabs>
  );
}

export default Categories;