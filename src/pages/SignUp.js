// Form.jsx
import React, { useState } from 'react';
import { Grid, TextField, Button, Link } from '@mui/material';
import axios from 'axios';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: ''
    });
    
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8002/auth/sign-up', formData);
            console.log('Ответ сервера:', response.data);
            navigate("/sign-in")
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
            alert("something went wrong")
        }
    };

    return (
        <div>
            <Header></Header>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z" fill="#1976d2"/>
                </svg>
                <span style={{fontSize: '20px', fontWeight: 'bold'}}>Sign Up</span>
            </div>
            <form onSubmit={handleSubmit} style={{width: '30%', margin: '0 auto', padding: '10px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email адрес"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="phone"
                            label="Номер телефона"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="password"
                            label="Пароль"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Link href="/sign-in" variant="body2">
                            Уже есть аккаунт? Войти
                        </Link>
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

export default SignUp;
