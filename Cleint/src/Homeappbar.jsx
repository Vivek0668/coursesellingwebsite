import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidenav from './Sidenav';
import { useNavigate } from 'react-router-dom';

export default function Homeappbar() {
    const nav = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={ {backgroundColor : "#112121"}} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Sidenav />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Voursera
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}> 
                        <Button style={{ color: '#ace35f' }}>Signin</Button>
                    </Box>
                    <Button
                        onClick={() => {
                            nav("/clientsignup");
                        }}
                        style={{ color: '#ace35f' }}
                    >
                        Signup
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
