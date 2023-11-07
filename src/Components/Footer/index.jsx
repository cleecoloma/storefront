import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <AppBar position='static' color='primary' className='footer-content'>
        <Toolbar>
          <Typography variant='body2' color='inherit' align='center'>
            &copy; {new Date().getFullYear()} Koko Depot. All rights reserved.
            <br />
            Contact us at: contact@kokodepot.com
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;