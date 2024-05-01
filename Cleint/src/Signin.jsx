import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useState } from 'react';

function Signin () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    fetch('http://localhost:3000/admin/login', {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Invalid username or password.');
      }
    }).then((data) => {
      localStorage.setItem('token', data.token);
      window.location.href = '/';
    }).catch(error => {
      setError(error.message);
    });
};


  return (
    <div style={{backgroundImage  : 'url(https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2148220038.jpg?w=740)', width : "100%", height : "90vh", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{ padding: "20px", width: "100%", maxWidth: "450px" }}>
        <Typography style={{ paddingBottom: "12px" }} variant={'h5'}>Welcome Back Admin, Sign in below</Typography>
        <Box sx={{ boxShadow: 4, backgroundColor: '#ffff', borderRadius: "20px", padding: "20px" }}>
          <Card >
            <TextField
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ marginBottom: '20px', width: '100%', marginTop : "7px" }}
              autoComplete="username"
              name="username"
              required
              id="username"
              label="Username"
              autoFocus
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: '20px', width: '100%' }}
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            {error && <Typography style={{ color: 'red', margin: '7px', width: '100%', textAlign: 'center' }}>{error}</Typography>}
            <Button
              onClick={handleSignIn}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3 }}
            >
              Sign In
            </Button>
            <Typography variant="body2" style={{ textAlign: 'center', marginTop: '10px' }}>
              No Account as Admin? <Link href="/signup">Sign up as New Admin</Link>
            </Typography>
          </Card>
        </Box>
      </div>
    </div>
  );
}

export default Signin;
