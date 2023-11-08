import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import SimpleCart from '../SimpleCart';
import './Header.css';

function Header() {
  const cartState = useSelector((state) => state.cart);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBagClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <AppBar position='static'>
      <Toolbar className='toolbar-container'>
        <Typography variant='h6' component='div'>
          KOKO DEPOT
        </Typography>
        <a
          onClick={handleBagClick}
          className='bag-button'
          data-testid='bag-button'
        >
          <ShoppingBagIcon fontSize='large' />
          <p className='bag-counter'>{cartState.numOfUniqueItems}</p>
        </a>
      </Toolbar>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        {cartState.numOfUniqueItems > 0 ? (
          <Box className='box-style'>
            <SimpleCart />
          </Box>
        ) : (
          <Box className='box-style'>No Items In Shopping Bag!</Box>
        )}
      </Modal>
    </AppBar>
  );
}

export default Header;
