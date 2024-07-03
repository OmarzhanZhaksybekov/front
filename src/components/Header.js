import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {

  LogOut = () => {
    localStorage.removeItem("token")
  }

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
        <Button color="inherit" component={Link} to={"/"}>Home</Button>
        <Button color="inherit" component={Link} to={"/sign-in"}>Log In</Button>
        <Button color="inherit" component={Link} to={"/"} onclick={LogOut}>Log Out</Button>
        <Button color="inherit" component={Link} to={"/contacts"}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
