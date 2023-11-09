import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get(
      'https://api-js401.herokuapp.com/api/v1/categories'
    );
    console.log('HERES THE RESPONSE FROM API ', response);
    return response.data;
  }
);

const initialState = {
  list: [],
  activeCategory: 'electronics',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;