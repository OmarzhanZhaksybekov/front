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
