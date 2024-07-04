// AddCar.jsx
import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import AdminHeader from '../components/AdminHeader';
import { useNavigate } from 'react-router-dom';

const AddCar = () => {
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        image_url: '',
        year: '',
        price: '',
        color: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Ensure year is an integer
        const formDataToSubmit = {
            ...formData,
            year: parseInt(formData.year, 10)
        };

        const token = localStorage.getItem("token")

        try {
            const response = await fetch('http://localhost:8001/admin/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
                body: JSON.stringify(formDataToSubmit)
            });
            const data = await response.json();
            console.log('Ответ сервера:', data);
            if (response.status == 200){
                navigate("/")
            } else{
                alert("something went wrong")
            }
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
            // Обработка ошибок при отправке
        }
    };

    return (
        <div>
            <AdminHeader></AdminHeader>
            <form onSubmit={handleSubmit} style={{width: '50%', margin: '0 auto', padding: '10px'}}>
                <Typography variant='h2'>
                    Add Car
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="brand"
                            label="Brand"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="model"
                            label="Model"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="image_url"
                            label="Image link"
                            name="image_url"
                            value={formData.image_url}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="year"
                            label="Year"
                            name="year"
                            type="number"
                            value={formData.year}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="price"
                            label="Price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="color"
                            label="Color"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="description"
                            label="Description"
                            name="description"
                            multiline
                            rows={4}
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '10px' }}
                        >
                            Отправить
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default AddCar;
