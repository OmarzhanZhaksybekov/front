// RemoveCar.jsx
import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import AdminHeader from '../components/AdminHeader';

const RemoveCar = () => {
    const [formData, setFormData] = useState({
        id: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Ensure year is an integer
        const formDataToSubmit = {
            ...formData,
            id: parseInt(formData.id, 10)
        };

        const token = localStorage.getItem("token")

        try {
            const response = await fetch(`http://localhost:8001/admin/${formData.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
                body: JSON.stringify(formDataToSubmit)
            });
            const data = await response.json();
            console.log('Ответ сервера:', data);
            // Дополнительная логика после успешного ответа от сервера
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
                            id="id"
                            label="Id"
                            name="id"
                            value={formData.id}
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

export default RemoveCar;
