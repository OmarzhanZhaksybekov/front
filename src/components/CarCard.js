// CarCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CarCard({ car }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', margin: "10px", borderRadius: "20px", width: '300px' }}>
      <CardMedia
        component="img"
        height="140"
        image={car.image_url}
        alt={`${car.brand} ${car.model}`}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {car.model}
        </Typography>
        <Typography>
          {car.brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {car.year}
        </Typography>
        <Button size="small" component={Link} to={`/cars/${car.id}`}>Подробнее</Button>
      </CardContent>
    </Card>
  );
}

export default CarCard;
