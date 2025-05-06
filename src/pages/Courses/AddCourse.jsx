import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  Stack,
} from '@mui/material';

const AddCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSubmitSuccess(false);

    if (!title.trim()) {
      setError('Course title is required');
      return;
    }
    if (!description.trim()) {
      setError('Course description is required');
      return;
    }

    // Simulate course addition success
    setSubmitSuccess(true);
    setTitle('');
    setDescription('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h5" component="h1" mb={2} textAlign="center">
        Add New Course
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {submitSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Course added successfully!
        </Alert>
      )}
      <Stack spacing={2}>
        <TextField
          label="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          autoFocus
        />
        <TextField
          label="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={4}
        />
      </Stack>
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
        Add Course
      </Button>
    </Box>
  );
};

export default AddCourse;
