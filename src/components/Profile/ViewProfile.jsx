import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Divider,
  TextField,
  Button,
  IconButton
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Accordion from '../../Common/ Accordion';

const ViewProfile = () => {
  const navigate = useNavigate();
  const user = {
    fullname: 'Ali Johar',
    gender: 'Male',
    dob: '2022-03-05',
    country: 'Pakistan',
    city: 'Lahore',
    phone: '03234042785',
    email: 'osa.official@gmail.com',
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#333', mb: 3 }}>
        View Profile
      </Typography>

      <Paper elevation={3} sx={{ mb: 4, borderRadius: 1 }}>
        <Accordion title="Profile Information">
          {/* First Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Fullname
              </Typography>
              <TextField
                value={user.fullname}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{ 
                  readOnly: true,
                  sx: {
                    backgroundColor: '#f9f9f9',
                    borderRadius: 1
                  }
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Date of Birth
              </Typography>
              <TextField
                value={user.dob}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{ 
                  readOnly: true,
                  sx: {
                    backgroundColor: '#f9f9f9',
                    borderRadius: 1
                  }
                }}
              />
            </Box>
          </Box>

          {/* Second Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                City
              </Typography>
              <TextField
                value={user.city}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{ 
                  readOnly: true,
                  sx: {
                    backgroundColor: '#f9f9f9',
                    borderRadius: 1
                  }
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Email
              </Typography>
              <TextField
                value={user.email}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{ 
                  readOnly: true,
                  sx: {
                    backgroundColor: '#f9f9f9',
                    borderRadius: 1
                  }
                }}
              />
            </Box>
          </Box>

          {/* Third Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Gender
              </Typography>
              <TextField
                value={user.gender}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{ 
                  readOnly: true,
                  sx: {
                    backgroundColor: '#f9f9f9',
                    borderRadius: 1
                  }
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Country
              </Typography>
              <TextField
                value={user.country}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{ 
                  readOnly: true,
                  sx: {
                    backgroundColor: '#f9f9f9',
                    borderRadius: 1
                  }
                }}
              />
            </Box>
          </Box>

          {/* Fourth Row - Single field taking full width */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
              Phone No
            </Typography>
            <TextField
              value={user.phone}
              variant="outlined"
              fullWidth
              size="small"
              InputProps={{ 
                readOnly: true,
                sx: {
                  backgroundColor: '#f9f9f9',
                  borderRadius: 1
                }
              }}
            />
          </Box>
        </Accordion>
        </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<EditIcon />}
          onClick={() => navigate('/profile/edit')}
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
          Edit Profile
        </Button>
      </Box>
    </Box>
  );
};

export default ViewProfile;