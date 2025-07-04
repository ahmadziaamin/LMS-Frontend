import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Divider,
  TextField,
  Button,
  Alert,
  MenuItem
} from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Accordion from '../../Common/ Accordion';
const EditProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    fullname: 'Ali Johar',
    gender: 'Male',
    dob: '2022-03-05',
    country: 'Pakistan',
    city: 'Lahore',
    phone: '03234042785',
    email: 'osa.official@gmail.com',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (field, value) => {
    setProfile(prev => ({
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
        Edit Profile
      </Typography>

      {submitSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Profile updated successfully!
        </Alert>
      )}

      <Paper elevation={3} sx={{ mb: 4, borderRadius: 1, p: 0 }}>
        <Accordion title="Profile Information">
          {/* First Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Fullname
              </Typography>
              <TextField
                value={profile.fullname}
                onChange={(e) => handleChange('fullname', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Date of Birth
              </Typography>
              <TextField
                type="date"
                value={profile.dob}
                onChange={(e) => handleChange('dob', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                City
              </Typography>
              <TextField
                value={profile.city}
                onChange={(e) => handleChange('city', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Email
              </Typography>
              <TextField
                type="email"
                value={profile.email}
                onChange={(e) => handleChange('email', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Gender
              </Typography>
              <TextField
                select
                value={profile.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Country
              </Typography>
              <TextField
                value={profile.country}
                onChange={(e) => handleChange('country', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              />
            </Box>
          </Box>

       
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
              Phone No
            </Typography>
            <TextField
              value={profile.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              variant="outlined"
              fullWidth
              size="small"
            />
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
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default EditProfile;