import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './Header.css';

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar className='toolbar-container'>
        <Typography variant='h6' component='div'>
          KOKO DEPOT
        </Typography>
        <ShoppingBagIcon fontSize='large' />
      </Toolbar>
    </AppBar>
  );
}

export default Header;