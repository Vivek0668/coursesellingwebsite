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
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/home");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: "#112121" }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color='#ace35f'
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Sidenav />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            color: "#ace35f",
                            flexGrow: 1,
                            cursor: "pointer" // Change cursor to pointer
                        }}
                        onClick={handleHomeClick} // Use onClick to navigate
                    >
                        Voursera
                    </Typography>
                    <Button
                        onClick={() => {
                            navigate("/clientsignin");
                        }}
                        style={{ color: '#ace35f' }}
                    >
                        Signin
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/clientsignup");
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
