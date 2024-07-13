import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }} component={Link} to={"/"}>
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
