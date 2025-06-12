import React from 'react';
import { Box, Paper, TextField, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

const ViewProfile = () => {
  const user = {
    fullname: 'Ali Johar',
    gender: 'Male',
    dob: '2022-03-05',
    country: 'Pakistan',
    city: 'Lahore',
    phone: '03324042785',
    email: 'oqa.official@gmail.com',
  };

  return (
    <Paper sx={{ p: 3, background: "transparent", boxShadow: "none" }}>
      <fieldset style={{ border: '1px solid #ddd', borderRadius: 8, padding: '20px' }}>
        <legend style={{ fontWeight: 500, padding: '0 10px', fontSize: '18px' }}>
          User Profile
        </legend>
        <Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {[ 
              { label: 'Fullname', value: user.fullname },
              { label: 'Gender', value: user.gender },
              { label: 'Date of Birth', value: user.dob },
              { label: 'Country', value: user.country },
              { label: 'City', value: user.city },
              { label: 'Phone No', value: user.phone },
              { label: 'Email', value: user.email },
            ].map((field, index) => (
              <Box key={index} sx={{ width: 'calc(50% - 12px)' }}>
                <TextField
                  label={field.label}
                  value={field.value}
                  variant="outlined"
                  fullWidth
                  InputProps={{ readOnly: true }} 
                />
              </Box>
            ))}
          </Box>
        </Box>
      </fieldset>

    
    </Paper>
  );
};

export default ViewProfile;
