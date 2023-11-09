import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import categoriesReducer from './categories';
import { cartReducer } from './cart/index';

const reducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer,
});

export default store;
