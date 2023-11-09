import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../store/categories';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { fetchCategories } from '../../store/categories';

function Categories() {
  const categoryState = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCategoryChange = (event, newValue) => {
    dispatch(setActiveCategory(newValue));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  console.log("HERES THE CATEGORY STATE : ", categoryState);

  return (
    <Tabs
      value={categoryState.activeCategory}
      onChange={handleCategoryChange}
      centered
      indicatorColor='primary'
      textColor='primary'
    >
      {categoryState.list.results.map((item) => (
        <Tab key={item.name} label={item.name} value={item.name} />
      ))}
    </Tabs>
  );
}

export default Categories;
