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

export const updateProductInventory = createAsyncThunk(
  'products/updateProductInventory',
  async (payload) => {
    const { id, inventory } = payload;
    const response = await axios.put(
      `https://api-js401.herokuapp.com/api/v1/products/${id}`,
      { inStock: inventory - 1 } // Assuming "inStock" is the field to update
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
      const { category } = action.payload;
      state.displayList.results = state.list.results.filter(
        (product) => product.category === category
      );
      // }
    },
    decrementInventory: (state, action) => {
      console.log('HERES THE PAYLOAD WITH ID IN IT ', action.payload);
      const { id } = action.payload;
      const product = state.displayList.results.find((item) => item._id === id);
      if (product && product.inStock > 0) {
        // Dispatch the async action to update the inStock on the server
        state.displayList.results.map((item) => {
          if (item._id === id) {
            item.inStock--;
            // Assuming you have an "inStock" field in your data
            // Update the server data asynchronously
            // dispatch(
            //   updateProductInventory({ id: item.id, inventory: item.inventory })
            // );
          }
          return item;
        });
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
