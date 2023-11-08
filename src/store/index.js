import { createStore, combineReducers } from 'redux';
import productsReducer from './products/index.js';
import categoriesReducer from './categories';


const reducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});

export default createStore(reducer);