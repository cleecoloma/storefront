import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../store/categories';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { fetchCategories } from '../../store/categories';
import { filterProducts } from '../../store/products';

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

  if (categoryState.list.results) {
    return (
      <Tabs
        value={categoryState.activeCategory}
        onChange={(event, newValue) => {
          dispatch(setActiveCategory(newValue));
          dispatch(filterProducts({ category: newValue }));
        }}
        centered
        indicatorColor='primary'
        textColor='primary'
      >
        {categoryState.list.results.map((item) => (
          <Tab key={item.name} label={item.name} value={item.name} />
        ))}
      </Tabs>
    );
  } else {
    // You can render a loading indicator or return null while waiting for the data
    return null;
  }
}

export default Categories;
