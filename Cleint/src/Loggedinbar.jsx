import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Sidenav from './Sidenav';
import { useState, useEffect } from 'react';
import './Appbar.css';
import Toggle from './Toggle';



function Loggedinbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/users/me', {
            method: "GET",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then((data) => {
            if (data.username) {
                setUser(data.username);
            }
        });
    }, []);

    if (user) {
        return (
            
            <div style={{}} className="appbar-container">
                <div className="appbar-content">
      <div style={{}}><Toggle/></div>  
                   
                    <div className="appbar-buttons">
                        <Button  style={ {}} onClick={() => navigate('/boughtCourses')} variant={'contained'}> Your Learnings</Button>
                        <Button onClick={() => navigate('/publishedcourses')} variant={'contained'}>Buy course</Button>
                    </div>
                    <div className="user-section">
                        <div className="username">{user}</div>
                        <Button onClick={() => {
                            localStorage.setItem('token', null);
                            window.location = "/clientsignin";
                        }} variant="contained">LOGOUT</Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="appbar-container">
            <div className="appbar-content">
                <a href="/adminpanel" className="appbar-brand" variant="body2">
                    <Typography style={{textDecoration: "none"}} variant={'h5'}>Voursera</Typography>
                </a>
                <div className="appbar-buttons">
                    <Button onClick={() => navigate('/clientsignup')} variant="contained">SIGNUP</Button>
                    <Button onClick={() => navigate('/clientsignin')} variant="contained">SIGNIN</Button>
                </div>
            </div>
        </div>
    );
}

export default Loggedinbar;
