import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Collapse,
  Typography,
  IconButton,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  AccountCircle as AccountCircleIcon,
  ExpandLess,
  ExpandMore,
  Add as AddIcon,
  List as ListIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle, window, onLogout }) => {
  const container = window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/auth/login');
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" noWrap>
          My App
        </Typography>
      </Toolbar>
      <Divider />
      <List component="nav" disablePadding>
        {/* Dashboard */}
        <ListItemButton
          component={NavLink}
          to="/"
          exact="true"
          sx={({ isActive }) => ({
            bgcolor: isActive ? 'primary.main' : 'inherit',
            color: isActive ? '#fff' : 'inherit',
            '&:hover': { bgcolor: 'primary.light' },
          })}
          onClick={() => {
            setProfileOpen(false);
            setCoursesOpen(false);
            if (mobileOpen) handleDrawerToggle();
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        {/* Profile Menu */}
        <ListItemButton onClick={() => setProfileOpen(!profileOpen)} sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
          {profileOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={profileOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={NavLink}
              to="/profile/view"
              sx={({ isActive }) => ({
                pl: 4,
                bgcolor: isActive ? 'primary.main' : 'inherit',
                color: isActive ? '#fff' : 'inherit',
                '&:hover': { bgcolor: 'primary.light' },
              })}
              onClick={() => { if (mobileOpen) handleDrawerToggle(); }}
            >
              <ListItemText primary="View Profile" />
            </ListItemButton>
            <ListItemButton
              component={NavLink}
              to="/profile/edit"
              sx={({ isActive }) => ({
                pl: 4,
                bgcolor: isActive ? 'primary.main' : 'inherit',
                color: isActive ? '#fff' : 'inherit',
                '&:hover': { bgcolor: 'primary.light' },
              })}
              onClick={() => { if (mobileOpen) handleDrawerToggle(); }}
            >
              <ListItemText primary="Edit Profile" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Courses Menu */}
        <ListItemButton onClick={() => setCoursesOpen(!coursesOpen)} sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Courses" />
          {coursesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={coursesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={NavLink}
              to="/courses"
              sx={({ isActive }) => ({
                pl: 4,
                bgcolor: isActive ? 'primary.main' : 'inherit',
                color: isActive ? '#fff' : 'inherit',
                '&:hover': { bgcolor: 'primary.light' },
              })}
              onClick={() => { if (mobileOpen) handleDrawerToggle(); }}
            >
              <ListItemIcon>
                <ListIcon sx={{ color: 'inherit' }} />
              </ListItemIcon>
              <ListItemText primary="View Courses" />
            </ListItemButton>
            <ListItemButton
              component={NavLink}
              to="/courses/add"
              sx={({ isActive }) => ({
                pl: 4,
                bgcolor: isActive ? 'primary.main' : 'inherit',
                color: isActive ? '#fff' : 'inherit',
                '&:hover': { bgcolor: 'primary.light' },
              })}
              onClick={() => { if (mobileOpen) handleDrawerToggle(); }}
            >
              <ListItemIcon>
                <AddIcon sx={{ color: 'inherit' }} />
              </ListItemIcon>
              <ListItemText primary="Add Course" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <ListItemButton onClick={handleLogoutClick}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;
