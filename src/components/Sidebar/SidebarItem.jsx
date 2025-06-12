import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ icon, label, to, onClick, sx }) => {
  return (
    <ListItem
      button
      component={NavLink}
      to={to}
      onClick={onClick}
      end
      style={{ paddingLeft: '10px' }}
      sx={{
        borderRadius: 1,
        mb: 1,
        mt: 1,
        color: "#c2c7d0",
        pl: '10px', // ✅ Correct usage without !important
        '&.active': {
          bgcolor: 'rgba(255, 255, 255, .9)', 
          color: '#343a40', 
          '& .MuiListItemIcon-root': { color: '#343a40' }, 
          '&:hover': { bgcolor: 'rgba(255, 255, 255, .9)', color: "#343a40" }, 
        },
        '&:hover': { bgcolor: 'rgba(255, 255, 255, .1)', color: "white" }, 
        ...sx, 
      }}
    >
      {icon && <ListItemIcon sx={{ color: 'inherit', minWidth:"30px"}}>{icon}</ListItemIcon>}
      <ListItemText primary={label}  />
    </ListItem>
  );
};

export default SidebarItem;
