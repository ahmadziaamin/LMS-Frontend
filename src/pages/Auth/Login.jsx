import React from 'react';
import LoginForm from '../../components/Auth/LoginForm';
import { Box } from '@mui/material';

const Login = ({ onLogin }) => {
  return (
    <Box sx={{ width: '100vw' }}>
      <LoginForm onLogin={onLogin} />
    </Box>
  );
};

export default Login;
