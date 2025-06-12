import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Typography, Alert } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

const EditProfile = () => {
  const [name, setName] = useState('John Doe');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState('2022-03-05');
  const [country, setCountry] = useState('Pakistan');
  const [city, setCity] = useState('Lahore');
  const [phone, setPhone] = useState('03324042785');
  const [email, setEmail] = useState('oqa.official@gmail.com');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (!name || !email) {
      alert('Name and Email cannot be empty');
      return;
    }

    // Simulate profile update success
    setSubmitSuccess(true);
  };

  return (
    <Paper sx={{ p: 3, background: "transparent", boxShadow: "none" }}>
      <fieldset style={{ border: '1px solid #ddd', borderRadius: 8, padding: '20px' }}>
        <legend style={{ fontWeight: 500, padding: '0 10px', fontSize: '18px' }}>
          Edit Profile
        </legend>
        <Box >
          {submitSuccess && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Profile updated successfully!
            </Alert>
          )}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {[ 
              { label: 'Fullname', value: name, setter: setName },
              { label: 'Gender', value: gender, setter: setGender },
              { label: 'Date of Birth', value: dob, setter: setDob },
              { label: 'Country', value: country, setter: setCountry },
              { label: 'City', value: city, setter: setCity },
              { label: 'Phone No', value: phone, setter: setPhone },
              { label: 'Email', value: email, setter: setEmail },
            ].map((field, index) => (
              <Box key={index} sx={{ width: 'calc(50% - 12px)' }}>
                <TextField
                  label={field.label}
                  value={field.value}
                  onChange={(e) => field.setter(e.target.value)}
                  variant="outlined"
                  fullWidth
                />
              </Box>
            ))}
          </Box>
        </Box>
      </fieldset>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Button startIcon={<ArrowBackIcon />} variant="outlined" color="primary">
          Back
        </Button>
        <Button
          endIcon={<SaveIcon />}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Save Changes
        </Button>
      </Box>
    </Paper>
  );
};

export default EditProfile;
