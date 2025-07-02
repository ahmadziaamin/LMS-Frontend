import React from 'react';
import { Typography, useTheme, useMediaQuery } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Topbar = ({ toggleSidebar, toggleCollapse, collapsed, onLogout }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:991px)');
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      height: '64px',
    
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <MenuIcon 
          sx={{ cursor: 'pointer', mr: 2, display: 'block' }} 
          onClick={isMobile ? toggleSidebar : toggleCollapse}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={onLogout}>
        <LoginOutlinedIcon sx={{ mr: collapsed ? 0 : 1 }} />
        {!collapsed && <Typography>Logout</Typography>}
      </div>
    </div>
  );
};

export default Topbar;