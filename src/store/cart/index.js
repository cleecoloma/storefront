'use strict';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addToCart = createAction('cart/add');
const removeFromCart = createAction('cart/remove');

const initialState = {
  items: {},
  numOfUniqueItems: 0,
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      console.log("HERES THE PRODUCT IN REDUCER ", action.payload)
      const { _id, category, name, price, inStock } =
        action.payload.item;
      // Check if the item already exists in the cart
      if (inStock > 0) {
        if (state.items[name]) {
          state.items[name].inStock -= 1;
          state.items[name].quantity += 1; // Increment the quantity
        } else {
          state.items[name] = {
            id: _id,
            category,
            name,
            inStock: inStock - 1,
            price,
            quantity: 1, // Initialize the quantity to 1 for a new item
          };
        }
        state.numOfUniqueItems++; // Increment unique item count
      }
    })
    .addCase(removeFromCart, (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items[name];

      // Check if the item exists in the cart
      if (item) {
        if (item.quantity >= quantity) {
          item.quantity -= quantity; // Decrement the quantity
          if (item.quantity === 0) {
            delete state.items[name]; // Remove the item if quantity reaches 0
          }
          state.numOfUniqueItems -= quantity; // Decrement unique item count
        } else {
          // If the item's quantity is less than the specified quantity, remove the entire item
          delete state.items[name];
          state.numOfUniqueItems -= item.quantity;
        }
      }
    });
});

export { addToCart, removeFromCart, cartReducer };
