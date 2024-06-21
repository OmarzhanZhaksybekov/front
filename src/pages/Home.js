import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useEffect } from 'react'
import { Grid } from '@mui/material';
import CarCard from '../components/CarCard';

export const Home = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/cars/')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Ошибка получения данных:', error);
      });
  }, []);

  return (
    <div>
        <Header></Header>

        <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </Grid>
    </div>
  )
}

export default Home;