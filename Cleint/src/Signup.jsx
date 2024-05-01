import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useState } from 'react';

function Signup () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{
      backgroundImage: 'url(https://img.freepik.com/free-vector/smartphone-with-easy-learning-icons_24877-51578.jpg?size=626&ext=jpg&ga=GA1.2.1090038609.1696190542&semt=ais)',
      width: '100%',
      height: '90%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ padding: "0" }}>
        
        <Box sx={{
          boxShadow: 100,
          backgroundColor: '#ffff',
          width: "350px", 
          borderRadius: "20px",
          padding: "20px",
          }}>
          <Card variant>
          <Typography style={{ paddingBottom: "0" }} variant={'h6'}>Welcome to Voursera, Signup below</Typography>
            <TextField
              style={{ marginBottom: '20px',marginTop : "7px", width: '100%' }}
              autoComplete="given-name"
              name="firstName"
              required
              id="firstName"
              label="First Name"
              autoFocus
            />
            <TextField
              style={{ marginBottom: '20px', width: '100%' }}
              required
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
            <TextField
              style={{ marginBottom: '20px', width: '100%' }}
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              onChange={(e)=> setUsername(e.target.value)}
              style={{ marginBottom: '20px', width: '100%' }}
              required
              id="SetUsername"
              label="Set Username"
              name="Username"
              autoComplete="family-name"
            />
            <TextField
              onChange={(e)=> setPassword(e.target.value)}
              style={{ marginBottom: '20px', width: '100%' }}
              required
              name=" Set password"
              label="Set Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <Button
              onClick={() => {
                fetch('http://localhost:3000/admin/signup', {
                  method : 'POST',
                  body  : JSON.stringify({
                    username : username,
                    password : password
                  }),
                  headers : {
                    "Content-type" : "application/json"
                  }
                }).then(res=> res.json()).then((data)=> {
                    localStorage.setItem('token',data.token)
                    window.location = "/"
                })
              }}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3 }}
            >
              Sign Up
            </Button>
            <Typography variant="body2" style={{ textAlign: 'center', marginTop: '10px' }}>
              Already have an account as Admin? <Link href="/signin">Sign in</Link>
            </Typography>
          </Card>
        </Box>
      </div>
    </div>
  );
}

export default Signup;
