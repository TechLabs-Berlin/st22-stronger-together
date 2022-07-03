
import React from 'react';
import './ExplainHero.css';
import {useState} from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

const ExplainHero =() => {
    state= {
        icon1: src='https://cdn-icons-png.flaticon.com/512/6238/6238893.png',
        icon2: src='https://cdn-icons.flaticon.com/png/512/4425/premium/4425977.png?token=exp=1656654961~hmac=16b35734d35a4bc5d9f9621b819e607d',
        icon3: src='https://cdn-icons.flaticon.com/png/512/4598/premium/4598041.png?token=exp=1656655053~hmac=8322cc1958d571a9036eee9d28bc735b'
    }
    return (
        <Grid className='hero_s' container spacing={2} margin={0}>
            <h1>HOW DOES IT WORK</h1>
            <Grid xs={4}>
                <Container>
                {this.state.icon1}
                <p> Log in to the App</p>
                 </Container>
            
            </Grid>
            <Grid xs={4}>
            <Container> 
            {this.state.icon2}
            <p> Match your profiles </p>
            </Container>
            </Grid>

            <Grid xs={4}>
            <Container> 
            {this.state.icon3}
            <p>Connect with others</p>
            </Container>
            </Grid>
        </Grid>
    );
}

export default ExplainHero;
