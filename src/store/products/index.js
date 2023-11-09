'use strict';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async action to fetch the initial state from the API
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(
      'https://api-js401.herokuapp.com/api/v1/products'
    );
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
      console.log('HERES THE PAYLOAD ', action.payload);
      const { category } = action.payload;
      // if (category === 'all') {
      //   state.displayList = state.list;
      // } else {
      console.log('HERES THE STATE LIST ', state.list);
      state.displayList.results = state.list.results.filter(
        (product) => product.category === category
      );
      // }
    },
    decrementInventory: (state, action) => {
      const { id } = action.payload;
      const product = state.displayList.results.find((item) => item.id === id);
      if (product && product.inventory > 0) {
        product.inventory--;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.displayList = action.payload;
    });
  },
});

export const { filterProducts, decrementInventory } = productsSlice.actions;

export default productsSlice.reducer;
