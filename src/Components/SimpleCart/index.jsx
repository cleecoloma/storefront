import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import './SimpleCart.css';

function SimpleCart() {
  const cartState = useSelector((state) => state.cart);
  return (
    <>
      {Object.values(cartState.items).map((product) => (
        <List key={product.id} className='list'>
          <ListItem className='list-item'>
            <ListItemText
              primary={product.name}
              secondary={`Price: $${product.price} | Quantity: ${product.quantity}`}
            />
          </ListItem>
        </List>
      ))}
    </>
  );
}

export default SimpleCart;