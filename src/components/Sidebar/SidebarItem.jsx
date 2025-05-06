import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ icon, label, to, onClick }) => {
  return (
    <ListItem
      button
      component={NavLink}
      to={to}
      onClick={onClick}
      exact="true"
      style={({ isActive }) => ({
        backgroundColor: isActive ? '#1976d2' : 'transparent',
        color: isActive ? '#fff' : 'inherit',
        borderRadius: 4,
        marginBottom: 4,
        textDecoration: 'none',
      })}
    >
      {icon && <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>}
      <ListItemText primary={label} />
    </ListItem>
  );
};

export default SidebarItem;
