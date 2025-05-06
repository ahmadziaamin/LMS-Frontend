import React from 'react';
import ResetPasswordForm from '../../components/Auth/ResetPasswordForm';
import { Box } from '@mui/material';

const ResetPassword = () => {
  return (
    <Box sx={{ p: 2 }}>
      <ResetPasswordForm />
    </Box>
  );
};

export default ResetPassword;
