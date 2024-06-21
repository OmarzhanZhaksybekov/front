import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DNO.kz
        </Typography>
        <Button color="inherit" component={Link} to={"/admin/edit"}>Edit Car</Button>
        <Button color="inherit" component={Link} to={"/admin/add"}>Add Car</Button>
        <Button color="inherit" component={Link} to={"/admin/remove"}>Remove car</Button>
      </Toolbar>
    </AppBar>
  );
}

export default AdminHeader;
