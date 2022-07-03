import React from 'react';
import ReactDOM  from 'react'
import { IconButton, makeStyles} from '@mui/material';
import {AppBar, Toolbar,Typography, Stack, Button} from '@mui/material';
import Logo from './logo3.png';
import './Header.css';

const Header =() => {
        return (
                <AppBar position='sticky'>
                    <Toolbar> 
                        <img className='logo' src= {Logo} alt="logo"/>
                        
                    <Stack className='navBar' direction='row' alignItems='left' spacing={2}>
                        <Button color='inherit'> Log In</Button>
                        <Button color='inherit'> Sign Up</Button>
    
                    </Stack>
                    </Toolbar>
                </AppBar>
        );
    }
 
export default Header;