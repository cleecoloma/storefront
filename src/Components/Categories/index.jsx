import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../store/categories';
import { filterProducts } from '../../store/products';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Categories() {
  const categoryState = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCategoryChange = (event, newValue) => {
    dispatch(setActiveCategory(newValue));
    dispatch(filterProducts({ category: newValue }));
  };

  useEffect(() => {
    dispatch(filterProducts({ category: 'all' }));
  }, []);

  return (
    <Tabs
      value={categoryState.activeCategory}
      onChange={handleCategoryChange}
      centered
      indicatorColor='primary'
      textColor='primary'
    >
      {categoryState.list.map((item) => (
        <Tab key={item.name} label={item.displayName} value={item.name} />
      ))}
    </Tabs>
  );
}

export default Categories;
