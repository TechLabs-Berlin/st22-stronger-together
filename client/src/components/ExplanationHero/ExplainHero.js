import React from 'react';
import './ExplainHero.css';
import {useState} from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

const ExplainHero =() => {
    
    return (
        <fragmentElement className='fragmentElement'>  
            <h1>HOW DOES IT WORK</h1>
        <Grid className='hero_s' container spacing={2} margin={0} >
           
            <Grid xs={4}>
                <Container>
                <img src='https://cdn-icons-png.flaticon.com/512/6238/6238893.png' width={80} height={80}/>
                <p> Log in to the App</p>
                </Container>

            </Grid>
            <Grid xs={4}>
            <Container> 
            <img src='https://cdn-icons-png.flaticon.com/512/753/753115.png' width={80} height={80}/>
            <p> Match your profiles </p>
            </Container>
            </Grid>

            <Grid xs={4}>
            <Container> 
            <img src='https://img.icons8.com/external-wanicon-lineal-wanicon/344/external-help-world-humanitarian-day-wanicon-lineal-wanicon.png' width={80} height={80}/>
            <p>Connect with others</p>
            </Container>
            </Grid>
        </Grid>
        </fragmentElement>
    );
}

export default ExplainHero;