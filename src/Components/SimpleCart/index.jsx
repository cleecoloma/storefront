import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './SimpleCart.css';
import { removeFromCart } from '../../store/cart';
import {
  updateProductInventory,
} from '../../store/products';

function SimpleCart() {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (product) => {
    console.log("HERES THE PRODUCT ID: ", product);
    const { id, inStock, name, quantity} = product;
    // Dispatch an action to remove the item from the cart
    dispatch(
      updateProductInventory({
        id,
        inventory: inStock,
        value: quantity,
      })
    );
    dispatch(removeFromCart({ name, quantity }));
  };

  return (
    <>
      {Object.values(cartState.items).map((product) => (
        <List key={product._id} className='list'>
          <ListItem className='list-item'>
            <ListItemText
              primary={product.name}
              secondary={`Price: $${product.price} | Quantity: ${product.quantity}`}
            />
            <button onClick={() => handleRemoveItem(product)}>x</button>
          </ListItem>
        </List>
      ))}
    </>
  );
}

export default SimpleCart;
