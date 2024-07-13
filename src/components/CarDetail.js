import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, CircularProgress, Button, Modal, Box, Select, MenuItem, InputLabel, FormControl, List, ListItem, ListItemText } from '@mui/material';
import '../styles/CarDetail.css';

function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null); // Состояние для месячного платежа

  useEffect(() => {
    axios.get(`http://localhost:8001/cars/${id}`)
      .then(response => {
        setCar(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка получения данных:', error);
        setLoading(false);
      });
  }, [id]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLoanTermChange = (event) => {
    const term = parseInt(event.target.value); // Преобразуем строку в число
    setLoanTerm(term); // Обновляем состояние срока кредитования

    // Рассчитываем месячный платеж
    if (car && car.price && term) {
      const price = parseFloat(car.price.replace(/\s/g, '').replace(',', '.')); // Преобразуем строку цены в число
      const monthlyPayment = Math.round(price * 1.15 / term); // Округляем до целого числа
      setMonthlyPayment(monthlyPayment);
    }
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

  if (loading) {
    return (
      <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!car) {
    return (
      <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h5">Данные о машине не найдены</Typography>
      </Container>
    );
  }

  return (
    <div className="car-details">
      <h1>{car.brand} {car.model}, {car.year} года</h1>
      <hr />
      <div className="main-image">
        <img src={car.image_url} alt={car.model} />
      </div>
      <div className="details">
        <p><strong>Цена:</strong> {car.price} тг</p>
        <p><strong>Год:</strong> {car.year} </p>
        <p><strong>Цвет:</strong> {car.color} </p>
        <p><string>Id:</string> {car.id} </p>
        <Button 
          color="inherit" 
          sx={{backgroundColor: "red", color: "white", borderRadius: "10px", padding: "7px"}} 
          onClick={handleOpen}
        >
          Рассчитать кредит
        </Button>
      </div>
      <div className='description'>
        <p>{car.description}</p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Условия автокредитования:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Срок: 12-60 месяцев"/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Годовая ставка: 15%"/>
            </ListItem>
          </List>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Выберите срок кредитования:
          </Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="loan-term-label">Срок</InputLabel>
            <Select
              labelId="loan-term-label"
              id="loan-term"
              value={loanTerm}
              label="Срок"
              onChange={handleLoanTermChange}
            >
              <MenuItem value={12}>12 месяцев</MenuItem>
              <MenuItem value={24}>24 месяца</MenuItem>
              <MenuItem value={36}>36 месяцев</MenuItem>
              <MenuItem value={48}>48 месяцев</MenuItem>
              <MenuItem value={60}>60 месяцев</MenuItem>
            </Select>
          </FormControl>
          {monthlyPayment !== null && (
            <Typography variant="body1" sx={{ mt: 2 }}>
              Месячный платеж: {monthlyPayment} тг
            </Typography>
          )}
          <Button onClick={handleClose} sx={{ mt: 2 }}>Закрыть</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default CarDetail;



