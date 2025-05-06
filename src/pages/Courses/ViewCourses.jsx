import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';

const sampleCourses = [
  { id: 1, title: 'React Basics', description: 'Learn the basics of React.js' },
  { id: 2, title: 'Advanced React', description: 'Dive deeper into React hooks, context and more' },
  { id: 3, title: 'Material UI', description: 'Build beautiful UIs with Material UI library' },
];

const ViewCourses = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Courses
      </Typography>
      <Paper elevation={3} sx={{ maxWidth: 600, mx: 'auto' }}>
        <List>
          {sampleCourses.map((course) => (
            <ListItem key={course.id} divider>
              <ListItemText
                primary={course.title}
                secondary={course.description}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ViewCourses;
