import React from 'react';
import './hero.css';
import {useState} from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

const Hero =() => {
    return (
        <Grid className='hero_s' container spacing={2} margin={0}>
            <Grid xs={6}>
                <Container>
                    <h1> Stronger togethfvber</h1>
                    <p> Lorem mgvmgvmhgcmhfgc</p>
                 </Container>
            
            </Grid>
            <Grid xs={6}>
            <Container> 
            <img className='hero_pic' src='https://static-frm.ie.edu/university/wp-content/uploads/sites/6/2022/03/ie-university-humanitarian-aid-projects-ukraine-news.jpg' width='100%' height='500'/>    
            </Container>
            </Grid>
        </Grid>
    );
}

export default Hero;