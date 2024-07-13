import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          &copy; {new Date().getFullYear()} ТОО DNO.KZ. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
