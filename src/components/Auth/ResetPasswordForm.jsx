import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert, useTheme, useMediaQuery } from '@mui/material';

const dummyImageUrl = 'https://images.pexels.com/photos/3183161/pexels-photo-3183161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const ResetPasswordForm = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [email, setEmail] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSubmitSuccess(false);

    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }
    setSubmitSuccess(true);
    setEmail('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '80vh',
        maxWidth: 900,
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
        <Typography variant="h4" component="h1" gutterBottom textAlign="center" color="primary">
          Reset Password
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {submitSuccess && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Password reset link sent!
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
        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}>
          Send Reset Link
        </Button>
      </Box>
    </Box>
  );
};

export default ResetPasswordForm;
