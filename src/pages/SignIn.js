import React from 'react'
import Header from '../components/Header';
import { Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{
            const response = await axios.post("http://localhost:8002/auth/sign-in", formData)
            console.log(formData, response.data);
            localStorage.setItem("token", response.data.token)
            if (response.data.role == "admin"){
                navigate("/admin/add")
            } else if (response.data.role == "user"){
                navigate("/")
            }
        } catch (error){
            console.error('Ошибка при отправке формы:', error);
            console.log(formData)
            alert("wrong creds")
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
                            id="password"
                            label="Пароль"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <a href='/sign-up'>Dont have an account</a>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Отправить
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );

}
