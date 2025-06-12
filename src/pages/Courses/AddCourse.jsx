import React, { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';

const AddCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [courseOverview, setCourseOverview] = useState('');
  const [courseSummary, setCourseSummary] = useState('');
  const [courseRequirements, setCourseRequirements] = useState('');
  const [bannerText, setBannerText] = useState('');
  const [courseDuration, setCourseDuration] = useState('1 year');
  const [calculationDays, setCalculationDays] = useState('');
  const [liveSessionDuration, setLiveSessionDuration] = useState('30 minutes');
  const [fee, setFee] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [teacherIntroduction, setTeacherIntroduction] = useState('');
  const [teacherRole, setTeacherRole] = useState('');
  const [teacherStatus, setTeacherStatus] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!courseName.trim()) newErrors.courseName = 'Course name is required';
    if (courseName.length > 50) newErrors.courseName = 'Max 50 characters allowed';
    if (!courseCategory.trim()) newErrors.courseCategory = 'Category is required';
    if (courseCategory.length < 5 || courseCategory.length > 10)
      newErrors.courseCategory = 'Must be 5-10 characters';
    if (!courseSummary.trim()) newErrors.courseSummary = 'Summary is required';
    if (courseSummary.length < 250 || courseSummary.length > 300)
      newErrors.courseSummary = 'Must be 250-300 characters';
    if (!courseRequirements.trim()) newErrors.courseRequirements = 'Requirements are required';
    if (courseRequirements.length < 250 || courseRequirements.length > 300)
      newErrors.courseRequirements = 'Must be 250-300 characters';
    if (!calculationDays) newErrors.calculationDays = 'Please select calculation days';
    if (!fee) newErrors.fee = 'Fee is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(false);
    if (validateForm()) {
      console.log({
        courseName,
        courseCategory,
        courseOverview,
        courseSummary,
        courseRequirements,
        bannerText,
        courseDuration,
        calculationDays,
        liveSessionDuration,
        fee,
        selectedTeacher,
        teacherIntroduction,
        teacherRole,
        teacherStatus
      });
      setSubmitSuccess(true);
    }
  };

  return (
    <Paper sx={{ p: 3, background: "transparent", boxShadow: "none", overflowX: 'hidden' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        QQA Admin - Add Course
      </Typography>

      <fieldset style={{ border: '1px solid #ddd', borderRadius: 8, padding: '20px', marginBottom: '20px' }}>
        <legend style={{ fontWeight: 500, padding: '0 10px', fontSize: '18px' }}>
          Course Introduction
        </legend>

        {submitSuccess && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Course added successfully!
          </Alert>
        )}

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, width: '100%', boxSizing: 'border-box' }}>
          <TextField
            label="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            fullWidth
            error={!!errors.courseName}
            helperText={errors.courseName}
            inputProps={{ maxLength: 50 }}
            sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}
          />

          <TextField
            label="Course Category"
            value={courseCategory}
            onChange={(e) => setCourseCategory(e.target.value)}
            fullWidth
            error={!!errors.courseCategory}
            helperText={errors.courseCategory}
            inputProps={{ minLength: 5, maxLength: 10 }}
            sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}
          />

          <TextField
            label="Course Overview"
            value={courseOverview}
            onChange={(e) => setCourseOverview(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />

          <TextField
            label="Course Summary (250-300 characters)"
            value={courseSummary}
            onChange={(e) => setCourseSummary(e.target.value)}
            fullWidth
            multiline
            rows={4}
            error={!!errors.courseSummary}
            helperText={errors.courseSummary}
            inputProps={{ minLength: 250, maxLength: 300 }}
          />

          <TextField
            label="Course Requirements (250-300 characters)"
            value={courseRequirements}
            onChange={(e) => setCourseRequirements(e.target.value)}
            fullWidth
            multiline
            rows={4}
            error={!!errors.courseRequirements}
            helperText={errors.courseRequirements}
            inputProps={{ minLength: 250, maxLength: 300 }}
          />

          <TextField
            label="Course Banner Text"
            value={bannerText}
            onChange={(e) => setBannerText(e.target.value)}
            fullWidth
          />

          <Box sx={{ width: '100%' }}>
            <Typography variant="body1" gutterBottom>
              Course Banner
            </Typography>
            <Button variant="outlined" component="label">
              Choose file
              <input type="file" hidden />
            </Button>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              No file chosen
            </Typography>
          </Box>

          <Box sx={{ width: '100%' }}>
            <Typography variant="body1" gutterBottom>
              Course Related Image (360x231)
            </Typography>
            <Button variant="outlined" component="label">
              Choose file
              <input type="file" hidden accept="image/*" />
            </Button>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              No file chosen
            </Typography>
          </Box>
        </Box>
      </fieldset>

      {/* Free Structure */}
      <fieldset style={{ border: '1px solid #ddd', borderRadius: 8, padding: '20px', marginBottom: '20px' }}>
        <legend style={{ fontWeight: 500, padding: '0 10px', fontSize: '18px' }}>
          Free Structure
        </legend>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, width: '100%', boxSizing: 'border-box' }}>
          <TextField
            label="Course Duration"
            value={courseDuration}
            onChange={(e) => setCourseDuration(e.target.value)}
            fullWidth
            sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}
          />

          <FormControl fullWidth sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }} error={!!errors.calculationDays}>
            <InputLabel>For Calculation Days</InputLabel>
            <Select
              value={calculationDays}
              onChange={(e) => setCalculationDays(e.target.value)}
              label="For Calculation Days"
            >
              <MenuItem value="2 days">2 days</MenuItem>
              <MenuItem value="3 days">3 days</MenuItem>
              <MenuItem value="4 days">4 days</MenuItem>
              <MenuItem value="5 days">5 days</MenuItem>
            </Select>
            {errors.calculationDays && <FormHelperText>{errors.calculationDays}</FormHelperText>}
          </FormControl>

          <TextField
            label="Live Session/Day"
            value={liveSessionDuration}
            onChange={(e) => setLiveSessionDuration(e.target.value)}
            fullWidth
            sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}
          />

          <TextField
            label="Enter Fee"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            fullWidth
            type="number"
            error={!!errors.fee}
            helperText={errors.fee}
            sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}
          />
        </Box>
      </fieldset>

      {/* Assign Teacher */}
      <fieldset style={{ border: '1px solid #ddd', borderRadius: 8, padding: '20px', marginBottom: '20px' }}>
        <legend style={{ fontWeight: 500, padding: '0 10px', fontSize: '18px' }}>
          Assign Teacher
        </legend>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, width: '100%', boxSizing: 'border-box' }}>
          <FormControl fullWidth sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
            <InputLabel>Choose Teacher</InputLabel>
            <Select
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              label="Choose Teacher"
            >
              <MenuItem value="teacher1">Teacher 1</MenuItem>
              <MenuItem value="teacher2">Teacher 2</MenuItem>
              <MenuItem value="teacher3">Teacher 3</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Teacher Introduction (250-300 characters)"
            value={teacherIntroduction}
            onChange={(e) => setTeacherIntroduction(e.target.value)}
            fullWidth
            multiline
            rows={4}
            inputProps={{ minLength: 250, maxLength: 300 }}
          />

          <FormControl fullWidth sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
            <InputLabel>Select Role</InputLabel>
            <Select
              value={teacherRole}
              onChange={(e) => setTeacherRole(e.target.value)}
              label="Select Role"
            >
              <MenuItem value="instructor">Instructor</MenuItem>
              <MenuItem value="assistant">Assistant</MenuItem>
              <MenuItem value="guest">Guest Lecturer</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ width: '100%' }}>
            <Typography variant="body1" gutterBottom>
              Teacher Profile Image (Gold on white-bg)
            </Typography>
            <Button variant="outlined" component="label">
              Choose file
              <input type="file" hidden accept="image/*" />
            </Button>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              No file chosen
            </Typography>
          </Box>

          <FormControl fullWidth sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={teacherStatus}
              onChange={(e) => setTeacherStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ width: '100%' }}>
            <Typography variant="body1" gutterBottom>
              Teacher Image (150x150)
            </Typography>
            <Button variant="outlined" component="label">
              Choose file
              <input type="file" hidden accept="image/*" />
            </Button>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              No file chosen
            </Typography>
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
          Save Course
        </Button>
      </Box>
    </Paper>
  );
};

export default AddCourse;
