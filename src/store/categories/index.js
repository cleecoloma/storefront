'use strict';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      name: 'all',
      displayName: 'ALL',
      description:
        'Shop the latest in consumer electronics, stylish home furnishings, and essential health and wellness products. Discover innovation, convenience, and well-being all in one place.',
    },
    {
      name: 'electronics',
      displayName: 'ELECTRONICS',
      description:
        'The electronics category encompasses a wide range of consumer and digital gadgets, including smartphones, laptops, cameras, and audio equipment, allowing customers to explore and purchase the latest technological innovations and devices.',
    },
    {
      name: 'homeAndFurniture',
      displayName: 'HOME AND FURNITURE',
      description:
        'Home and furniture e-commerce stores offer an extensive selection of items for interior design and home improvement, from sofas and tables to lighting fixtures and decorative accents, making it easy for shoppers to furnish and decorate their homes with style.',
    },
    {
      name: 'healthAndWellness',
      displayName: 'HEALTH AND WELLNESS',
      description:
        'Health and wellness e-commerce caters to individuals looking to enhance their well-being, offering products like dietary supplements, fitness gear, skincare solutions, and holistic health aids, providing a convenient way to support a healthy and balanced lifestyle.',
    },
  ],
  activeCategory: 'all',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;