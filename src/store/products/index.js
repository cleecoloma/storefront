'use strict';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async action to fetch the initial state from the API
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('your_api_endpoint_here'); // Replace with your API endpoint
    return response.data;
  }
);

const initialState = {
  displayList: [],
  list: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const { category } = action.payload;
      if (category === 'all') {
        state.displayList = state.list;
      } else {
        state.displayList = state.list.filter(
          (product) => product.category === category
        );
      }
    },
    decrementInventory: (state, action) => {
      console.log('HERES THE PRODUCT BEFORE: ', action.payload);
      const { id } = action.payload;
      console.log('HERES THE ID BEFORE: ', id);
      const product = state.displayList.find((item) => item.id === id);
      if (product && product.inventory > 0) {
        product.inventory--;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Assuming the response data has a structure similar to your initial state
      state.list = action.payload;
      state.displayList = action.payload;
    });
  },
});

export const { filterProducts, decrementInventory } = productsSlice.actions;

export default productsSlice.reducer;