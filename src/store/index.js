import { createStore, combineReducers } from 'redux';
import productsReducer from './products';
import categoriesReducer from './categories';
import { cartReducer } from './cart';

const reducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export default createStore(reducer);