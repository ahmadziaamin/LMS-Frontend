import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField,
  Button,
  Alert,
  MenuItem,
  InputAdornment,
  IconButton
} from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon,
  CloudUpload as CloudUploadIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Accordion from '../../Common/ Accordion';

const AddBooks = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    bookId: 'QQABOK1045',
    bookName: '',
    bookStatus: '',
    uploadBookName: '',
    bookAuthor: '',
    bookPrice: 0,
    status: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (field, value) => {
    setBook(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#333', mb: 3 }}>
        Add Books
      </Typography>

      {submitSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Book added successfully!
        </Alert>
      )}

      <Paper elevation={3} sx={{ mb: 4, borderRadius: 1, p: 0 }}>
        <Accordion title="Book Information">
          {/* First Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Book ID
              </Typography>
              <TextField
                value={book.bookId}
                onChange={(e) => handleChange('bookId', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Book Name
              </Typography>
              <TextField
                value={book.bookName}
                onChange={(e) => handleChange('bookName', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Book Name"
              />
            </Box>
          </Box>

          {/* Second Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Book Image (215x285)
              </Typography>
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start', height: '40px' }}
              >
                Choose file
                <input type="file" hidden />
              </Button>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Book Status
              </Typography>
              <TextField
                select
                value={book.bookStatus}
                onChange={(e) => handleChange('bookStatus', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              >
                <MenuItem value="">Choose Status</MenuItem>
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="Unavailable">Unavailable</MenuItem>
              </TextField>
            </Box>
          </Box>

          {/* Third Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Upload Free Book Name
              </Typography>
              <TextField
                select
                value={book.uploadBookName}
                onChange={(e) => handleChange('uploadBookName', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              >
                <MenuItem value="">Upload Book Name</MenuItem>
                {/* Additional options would go here */}
              </TextField>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Book Author
              </Typography>
              <TextField
                select
                value={book.bookAuthor}
                onChange={(e) => handleChange('bookAuthor', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              >
                <MenuItem value="">Book Author</MenuItem>
                {/* Additional options would go here */}
              </TextField>
            </Box>
          </Box>

          {/* Fourth Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Related Book Image (310x135)
              </Typography>
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start', height: '40px' }}
              >
                Choose file
                <input type="file" hidden />
              </Button>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Book Price
              </Typography>
              <TextField
                type="number"
                value={book.bookPrice}
                onChange={(e) => handleChange('bookPrice', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Box>
          </Box>

          {/* Fifth Row */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
              Status
            </Typography>
            <TextField
              select
              value={book.status}
              onChange={(e) => handleChange('status', e.target.value)}
              variant="outlined"
              fullWidth
              size="small"
            >
              <MenuItem value="">Choose Status</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </TextField>
          </Box>
        </Accordion>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'end', mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<SaveIcon />}
          onClick={handleSubmit}
          sx={{
            px: 3,
            py: 1,
            fontWeight: 600,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none'
            }
          }}
        >
          Save Book
        </Button>
      </Box>
    </Box>
  );
};

export default AddBooks;