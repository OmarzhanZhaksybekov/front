import React from 'react'
import Header from '../components/Header'
import { Grid, Typography, Link, Container } from '@mui/material';
import { EmailSharp, Telegram, WhatsApp } from '@mui/icons-material';

export const Contacts = () => {
  return (
    <div>
        <Header></Header>
        <Container style={{width: '60%', margin: '0 auto', textDecoration: 'none'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4">Контактная информация</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        Вы можете связаться со мной через:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    Телефон: +7 701 143 3567
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body1'>
                        Telegram: <Link href="https://t.me/shawadeveloper" target="_blank" rel="noopener" color="primary"><Telegram /></Link>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body1'>
                        WhatsApp: <Link href="https://wa.me/77011433567" target="_blank" rel="noopener" color="primary"><WhatsApp /></Link>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body1'>
                        <EmailSharp /> omarzhakman@gmail.com
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}
