import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Divider,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Accordion from '../../Common/ Accordion';

const AddCourse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Course Info
    courseName: '2D-30 training',
    courseCategory: '3D-30 testing',
    courseSubject: '',
    courseMasterQuestion: '',
    courseMasterUnit: '',
    courseMasterImageQuestion: '',
    courseMasterImageUnit: '',
    
    // Course Overview
    courseOverview: '',
    courseSummary: '2D-30 training',
    courseRequirements: '2D-30 training',
    
    // Course Banner
    bannerText: '',
    bannerImage: null,
    relatedImage: null,
    
    // Fee Structure
    courseDuration: '1 year',
    calculationDays: '',
    liveSessionDuration: '30 minutes',
    fee: '',
    
    // Assign Teacher
    selectedTeacher: '',
    teacherIntroduction: '',
    teacherRole: '',
    teacherStatus: '',
    teacherProfileImage: null,
    teacherImage: null,
    
    // Form Structure
    formStructure: false,
    formSelection: false,
    scope1: false,
    scope2: false,
    scope3: false,
    assignWindow: false,
    createWindow: false,
    createInsertedWindow: false,
    transferForm: '2D-30 training',
    transferProfileImageQuestion: '',
    transferProfileImageUnit: '',
    createStatus: false,
    createScale: false,
    transferImageQuestion: '',
    transferImageUnit: ''
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.checked
    }));
  };

  const handleFileChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.files[0]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.courseName.trim()) newErrors.courseName = 'Course name is required';
    if (!formData.courseCategory.trim()) newErrors.courseCategory = 'Category is required';
    if (!formData.courseSummary.trim()) newErrors.courseSummary = 'Summary is required';
    if (!formData.courseRequirements.trim()) newErrors.courseRequirements = 'Requirements are required';
    if (!formData.fee) newErrors.fee = 'Fee is required';
    if (!formData.selectedTeacher) newErrors.selectedTeacher = 'Teacher selection is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(false);
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={() => navigate('/courses')} sx={{ mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4">Add Course</Typography>
      </Box>

      {submitSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Course added successfully!
        </Alert>
      )}

      {/* 1. Course Info Accordion */}
      <Paper elevation={3} sx={{ mb: 3, borderRadius: 1 }}>
        <Accordion title="Course Information">
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Course Status
            </Typography>
            <TextField
              value={formData.courseName}
              onChange={(e) => handleChange('courseName', e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
              error={!!errors.courseName}
              helperText={errors.courseName}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Course Category
            </Typography>
            <TextField
              value={formData.courseCategory}
              onChange={(e) => handleChange('courseCategory', e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
              error={!!errors.courseCategory}
              helperText={errors.courseCategory}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Course Subject
            </Typography>
            <TextField
              value={formData.courseSubject}
              onChange={(e) => handleChange('courseSubject', e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Course Master (FTS-MR)
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
              <TextField
                value={formData.courseMasterQuestion}
                onChange={(e) => handleChange('courseMasterQuestion', e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Question"
              />
              <TextField
                value={formData.courseMasterUnit}
                onChange={(e) => handleChange('courseMasterUnit', e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Unit in course"
              />
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Course Master's Image (SMS-201)
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                value={formData.courseMasterImageQuestion}
                onChange={(e) => handleChange('courseMasterImageQuestion', e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Question"
              />
              <TextField
                value={formData.courseMasterImageUnit}
                onChange={(e) => handleChange('courseMasterImageUnit', e.target.value)}
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Unit in course"
              />
            </Box>
          </Box>
        </Accordion>
      </Paper>

      {/* 2. Course Overview Accordion */}
      <Paper elevation={3} sx={{ mb: 3, borderRadius: 1 }}>
        <Accordion title="Course Overview">
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Course Overview
            </Typography>
            <TextField
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={formData.courseOverview}
              onChange={(e) => handleChange('courseOverview', e.target.value)}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Course Summary
            </Typography>
            <TextField
              value={formData.courseSummary}
              onChange={(e) => handleChange('courseSummary', e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
              error={!!errors.courseSummary}
              helperText={errors.courseSummary}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Course Supplemental
            </Typography>
            <TextField
              value={formData.courseRequirements}
              onChange={(e) => handleChange('courseRequirements', e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
              error={!!errors.courseRequirements}
              helperText={errors.courseRequirements}
            />
          </Box>
        </Accordion>
      </Paper>

      {/* 3. Course Banner Accordion */}
      <Paper elevation={3} sx={{ mb: 3, borderRadius: 1 }}>
        <Accordion title="Course Banner">
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Course Banner Text
            </Typography>
            <TextField
              value={formData.bannerText}
              onChange={(e) => handleChange('bannerText', e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Course Banner Image
            </Typography>
            <Button variant="outlined" component="label">
              Upload Banner Image
              <input type="file" hidden onChange={handleFileChange('bannerImage')} />
            </Button>
            {formData.bannerImage && (
              <Typography variant="caption" sx={{ ml: 1 }}>
                {formData.bannerImage.name}
              </Typography>
            )}
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Related Image (360x231)
            </Typography>
            <Button variant="outlined" component="label">
              Upload Related Image
              <input type="file" hidden accept="image/*" onChange={handleFileChange('relatedImage')} />
            </Button>
            {formData.relatedImage && (
              <Typography variant="caption" sx={{ ml: 1 }}>
                {formData.relatedImage.name}
              </Typography>
            )}
          </Box>
        </Accordion>
      </Paper>

      {/* 4. Fee Structure Accordion */}
      <Paper elevation={3} sx={{ mb: 3, borderRadius: 1 }}>
        <Accordion title="Fee Structure">
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Course Duration
            </Typography>
            <TextField
              value={formData.courseDuration}
              onChange={(e) => handleChange('courseDuration', e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth error={!!errors.calculationDays}>
              <InputLabel>For Calculation Days</InputLabel>
              <Select
                value={formData.calculationDays}
                onChange={(e) => handleChange('calculationDays', e.target.value)}
                label="For Calculation Days"
              >
                <MenuItem value="2 days">2 days</MenuItem>
                <MenuItem value="3 days">3 days</MenuItem>
                <MenuItem value="4 days">4 days</MenuItem>
                <MenuItem value="5 days">5 days</MenuItem>
              </Select>
              {errors.calculationDays && <FormHelperText>{errors.calculationDays}</FormHelperText>}
            </FormControl>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Live Session/Day
            </Typography>
            <TextField
              value={formData.liveSessionDuration}
              onChange={(e) => handleChange('liveSessionDuration', e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Enter Fee
            </Typography>
            <TextField
              value={formData.fee}
              onChange={(e) => handleChange('fee', e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
              type="number"
              error={!!errors.fee}
              helperText={errors.fee}
            />
          </Box>
        </Accordion>
      </Paper>

      {/* 5. Assign Teacher Accordion */}
      <Paper elevation={3} sx={{ mb: 3, borderRadius: 1 }}>
        <Accordion title="Assign Teacher">
          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth error={!!errors.selectedTeacher}>
              <InputLabel>Choose Teacher</InputLabel>
              <Select
                value={formData.selectedTeacher}
                onChange={(e) => handleChange('selectedTeacher', e.target.value)}
                label="Choose Teacher"
              >
                <MenuItem value="teacher1">Teacher 1</MenuItem>
                <MenuItem value="teacher2">Teacher 2</MenuItem>
                <MenuItem value="teacher3">Teacher 3</MenuItem>
              </Select>
              {errors.selectedTeacher && <FormHelperText>{errors.selectedTeacher}</FormHelperText>}
            </FormControl>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Teacher Introduction
            </Typography>
            <TextField
              value={formData.teacherIntroduction}
              onChange={(e) => handleChange('teacherIntroduction', e.target.value)}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth>
              <InputLabel>Select Role</InputLabel>
              <Select
                value={formData.teacherRole}
                onChange={(e) => handleChange('teacherRole', e.target.value)}
                label="Select Role"
              >
                <MenuItem value="instructor">Instructor</MenuItem>
                <MenuItem value="assistant">Assistant</MenuItem>
                <MenuItem value="guest">Guest Lecturer</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Teacher Profile Image (Gold on white-bg)
            </Typography>
            <Button variant="outlined" component="label">
              Upload Profile Image
              <input type="file" hidden accept="image/*" onChange={handleFileChange('teacherProfileImage')} />
            </Button>
            {formData.teacherProfileImage && (
              <Typography variant="caption" sx={{ ml: 1 }}>
                {formData.teacherProfileImage.name}
              </Typography>
            )}
          </Box>

          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={formData.teacherStatus}
                onChange={(e) => handleChange('teacherStatus', e.target.value)}
                label="Status"
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Teacher Image (150x150)
            </Typography>
            <Button variant="outlined" component="label">
              Upload Teacher Image
              <input type="file" hidden accept="image/*" onChange={handleFileChange('teacherImage')} />
            </Button>
            {formData.teacherImage && (
              <Typography variant="caption" sx={{ ml: 1 }}>
                {formData.teacherImage.name}
              </Typography>
            )}
          </Box>
        </Accordion>
      </Paper>

     
  

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={handleSubmit}
          sx={{ px: 4, py: 1 }}
        >
          Save Course
        </Button>
      </Box>
    </Box>
  );
};

export default AddCourse;