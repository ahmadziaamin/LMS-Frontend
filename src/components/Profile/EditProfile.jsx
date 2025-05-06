import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

const EditProfile = () => {
  const [name, setName] = useState('John Doe');
  const [bio, setBio] = useState('A short bio about me.');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (!name) {
      alert('Name cannot be empty');
      return;
    }

    // Simulate update profile success
    setSubmitSuccess(true);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 480,
        mx: 'auto',
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h5" component="h1" mb={2} textAlign="center">
        Edit Profile
      </Typography>
      {submitSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Profile updated successfully!
        </Alert>
      )}
      <TextField
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
        autoFocus
      />
      <TextField
        label="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Save Changes
      </Button>
    </Box>
  );
};

export default EditProfile;
