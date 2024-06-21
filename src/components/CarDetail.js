import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, CircularProgress, Card, CardContent, CardMedia, Grid, Divider } from '@mui/material';

function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <Card style={{width: '60%', margin: '0 auto'}}>
      <CardContent>
        <Typography variant='h5'  gutterBottom>
          {car.brand} {car.model}
        </Typography>
        <img src={car.image_url} alt={car.model} style={{maxHeight: '100%', maxWidth: '100%'}}/>
        <Typography variant='body1'>
          Цена: {car.price} Т
        </Typography>
        <Typography variant='body1'>
          Год: {car.year}
        </Typography>
        <Typography variant='body1'>
          Цвет: {car.color}
        </Typography>
        <Divider />
        <Typography variant='h5'>
          {car.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CarDetail;


