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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <AppBar position='static'>
      <Toolbar className='toolbar-container'>
        <Typography variant='h6' component='div'>
          KOKO DEPOT
        </Typography>
        <a onClick={handleBagClick} className='bag-button'>
          <ShoppingBagIcon fontSize='large' />
          <p className='bag-counter'>{cartState.numOfUniqueItems}</p>
        </a>
      </Toolbar>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box className='box-style'>
          <SimpleCart />
        </Box>
      </Modal>
    </AppBar>
  );
}

export default Header;
