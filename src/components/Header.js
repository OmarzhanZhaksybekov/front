import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate()

  // Функция для выхода из системы
  function LogOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");  // Удаляем роль из localStorage при выходе
    navigate("/")
  }

  // Получение роли пользователя из localStorage
  const role = localStorage.getItem("role");

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to={"/"} sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          DNO.kz
        </Typography>
        {/* Условное отображение кнопки "Admin Panel" */}
        {role === 'admin' && (
          <Button color='inherit' component={Link} to={"/admin/add"}>Admin Panel</Button>
        )}
        <Button color="inherit" component={Link} to={"/sign-in"}>Log In</Button>
        <Button color="inherit" component={Link} to={"/"} onClick={LogOut}>Log Out</Button>
        <Button color="inherit" component={Link} to={"/contacts"}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
