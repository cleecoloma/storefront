import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../store/categories/index.js';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  const activeCategory = useSelector(
    (state) => state.categories.activeCategory
  );
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryName) => {
    dispatch(setActiveCategory(categoryName));
  };

  return (
    <List component='nav'>
      {categories.map((category) => (
        <ListItem
          key={category.name}
          button
          selected={category.name === activeCategory}
          onClick={() => handleCategoryClick(category.name)}
        >
          <ListItemText primary={category.displayName} />
        </ListItem>
      ))}
    </List>
  );
}

export default Categories;
