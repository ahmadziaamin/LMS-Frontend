import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ViewProfile = () => {
  const user = {
    name: 'John Doe',
    bio: 'A short bio about me.',
    email: 'john.doe@example.com',
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 480,
        mx: 'auto',
        mt: 4,
        p: 3,
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Profile
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" color="text.secondary">
          Full Name
        </Typography>
        <Typography variant="body1">{user.name}</Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" color="text.secondary">
          Email
        </Typography>
        <Typography variant="body1">{user.email}</Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" color="text.secondary">
          Bio
        </Typography>
        <Typography variant="body1">{user.bio}</Typography>
      </Box>
    </Paper>
  );
};

export default ViewProfile;
