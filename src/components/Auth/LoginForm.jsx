import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const dummyImageUrl =
  'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const LoginForm = ({ onLogin }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }
    if (!password) {
      setError('Password is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }

    // Simulate login
    onLogin(email); // <-- Add
    if (email === 'test@teacher.com') {
      navigate('/teacher/dashboard');
    } else if (email === 'test@student.com') {
      navigate('/student/dashboard');
    } else {
      navigate('/admin/dashboard');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        ml: 'auto',
        mr: 'auto',
        boxShadow: 4,
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        flexDirection: isSmallScreen ? 'column' : 'row',
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${dummyImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: { xs: 'none', md: 'block' },
        }}
      />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          flex: 1,
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          textAlign="center"
          color="primary"
        >
          Welcome Back
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          autoFocus
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ mt: 3, mb: 1, py: 1.5, fontWeight: 'bold' }}
        >
          Login
        </Button>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Link component={RouterLink} to="/auth/reset-password" underline="hover">
            Forgot password?
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
