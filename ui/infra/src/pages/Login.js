import React,{useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bgImage from '../assets/login-cover.jpeg';
import Copyright from '../components/Copyright'
import {logMeIn} from '../utils/authUtil'
const theme = createTheme();

export default function Login() {
  
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    logMeIn(data)    
    navigate('/elastic');  
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', backgroundImage: 'url(' + bgImage + ')',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center' }}>
        <CssBaseline />
        
        <Grid item xs={3} sm={3} md={3} /> 
        <Grid item xs={6} sm={6} md={6} component={Paper} elevation={6} square mt={10} mb={50}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1"  variant="h5">
              Welcome to Bamzy Monitoring Center
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: 'red' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h2" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} /> 
      </Grid>
    </ThemeProvider>
  );
}