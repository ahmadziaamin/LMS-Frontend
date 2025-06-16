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

const CreateCoupans = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    coupanid: 'QQABOK1045',
    coupanName: '',
    discpountType: '',
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
        Add Coupan
      </Typography>

      {submitSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Coupan added successfully!
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
                value={book.coupanid}
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
                value={book.coupanName}
                onChange={(e) => handleChange('bookName', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Book Name"
              />
            </Box>
          </Box>
            <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Discount Type
              </Typography>
               <TextField
              select
              value={book.discpountType}
              onChange={(e) => handleChange('discpountType', e.target.value)}
              variant="outlined"
              fullWidth
              size="small"
            >
              <MenuItem value="">Choose Status</MenuItem>
              <MenuItem value="Active">5%</MenuItem>
              <MenuItem value="Inactive">10%</MenuItem>
              <MenuItem value="Inactive">20%</MenuItem>
              <MenuItem value="Inactive">30%</MenuItem>
            </TextField>
            </Box>
            <Box sx={{ flex: 1 }}>
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
          Save  Coupan
        </Button>
      </Box>
    </Box>
  );
};

export default CreateCoupans;