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
      // console.log("HERES THE PRODUCT IN REDUCER ", action.payload)
      const { id, category, name, description, price, inventory } =
        action.payload.item;
      // Check if the item already exists in the cart
      if (inventory > 0) {
        if (state.items[name]) {
          state.items[name].quantity += 1; // Increment the quantity
        } else {
          state.items[name] = {
            id,
            category,
            name,
            description,
            price,
            quantity: 1, // Initialize the quantity to 1 for a new item
          };
        }
        state.numOfUniqueItems++; // Increment unique item count
      }
    })
    .addCase(removeFromCart, (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items[id];
      // Check if the item exists in the cart and has enough quantity
      if (item && item.quantity >= quantity) {
        item.quantity -= quantity; // Decrement the quantity
        if (item.quantity === 0) {
          delete state.items[id]; // Remove the item if quantity reaches 0
        }
        state.numOfUniqueItems--; // Decrement unique item count
      }
    });
});

export { addToCart, removeFromCart, cartReducer };
