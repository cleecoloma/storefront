import { createStore, combineReducers } from 'redux';

import productReducer from './products.js';

let reducer = combineReducers({ products: productReducer });

export default createStore(reducer);