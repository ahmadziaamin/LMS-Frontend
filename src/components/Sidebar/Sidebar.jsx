import React, { useState, useEffect } from "react";
import {
  Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Divider, Collapse, Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  AccountCircle as AccountCircleIcon,
  ExpandLess,
  ExpandMore,
  List as ListIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import SidebarItem from "./SidebarItem";
import logo from "../../assets/logo128.png";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle, window, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const container = window !== undefined ? () => window().document.body : undefined;

  const [openMenuKey, setOpenMenuKey] = useState(null);

  // Auto-open based on route
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/profile")) setOpenMenuKey("profile");
    else if (path.startsWith("/courses")) setOpenMenuKey("courses");
    else if (path.startsWith("/signup")) setOpenMenuKey("signup");
    else if (path.startsWith("/student")) setOpenMenuKey("student");
    else if (path.startsWith("/teacher")) setOpenMenuKey("teacher");
    else setOpenMenuKey(null);
  }, [location.pathname]);

  const toggleMenu = (key) => {
    setOpenMenuKey((prevKey) => (prevKey === key ? null : key));
  };

  const handleLogoutClick = () => {
    if (onLogout) onLogout();
    navigate("/auth/login");
  };

  const menus = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
      to: "/dashboard",
      sx: { bgcolor: "#007bff", color: "white" },
    },
    {
      label: "Profile",
      icon: <AccountCircleIcon />,
      key: "profile",
      children: [
        { label: "View Profile", to: "/profile/view" },
        { label: "Edit Profile", to: "/profile/edit" },
      ],
    },
    {
      label: "Courses",
      icon: <SchoolIcon />,
      key: "courses",
      children: [
        { label: "View Courses", to: "/courses" },
        { label: "Add Course", to: "/courses/add" },
        { label: "Curriculum", to: "https://quranacademy.live/index.php", external: true },
      ],
    },
    {
      label: "Signup",
      icon: <SchoolIcon />,
      key: "signup",
      children: [
        { label: "Student Request", to: "/signup/student-request" },
        { label: "Teacher Request", to: "/signup/teacher-request" },
      ],
    },
    {
      label: "Students",
      icon: <SchoolIcon />,
      key: "student",
      children: [
        { label: "Assigned Student", to: "/student/assigned-student" },
        { label: "Enrolled Student", to: "/student/enrolled-student" },
        { label: "Ex Student", to: "/student/ex-student" },
      ],
    },
    {
      label: "Teachers",
      icon: <SchoolIcon />,
      key: "teacher",
      children: [
        { label: "Career Request", to: "/teacher/career-request" },
        { label: "Favourite Teacher", to: "/teacher/favourite-teacher" },
        { label: "Ex Teacher", to: "/teacher/ex-teacher" },
      ],
    },
  ];

  const drawerContent = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", bgcolor: "#343a40", color: "#c2c7d0", px: 2 }}>
      <Toolbar sx={{ display: "flex", alignItems: "center", mb: 2, px: 0 }}>
        <Typography variant="h6" noWrap sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} style={{ width: "40px", height: "40px", marginRight: "10px" }} alt="logo" />
          OQA Admin
        </Typography>
      </Toolbar>
      <Divider />
      <List component="nav" disablePadding>
        {menus.map((item) => {
          if (item.children) {
            const isOpen = openMenuKey === item.key;
            return (
              <React.Fragment key={item.key}>
                <ListItemButton
                  onClick={() => toggleMenu(item.key)}
                  sx={{
                    bgcolor: isOpen ? "rgba(255, 255, 255, .1)" : "inherit",
                    color: isOpen ? "#fff" : "inherit",
                    "& .MuiListItemIcon-root": { color: isOpen ? "#fff" : "inherit" },
                    "&:hover": { bgcolor: isOpen ? "rgba(255, 255, 255, .1)" : "#495057", color: "white" },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                  {isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child, idx) => (
                      <SidebarItem
                        key={idx}
                        icon={<ListIcon />}
                        label={child.label}
                        to={child.to}
                        external={child.external}
                        onClick={() => {
                          if (mobileOpen) handleDrawerToggle();
                        }}
                        sx={{ pl: 4 }}
                      />
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          } else {
            return (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                to={item.to}
                sx={item.sx}
                onClick={() => {
                  if (mobileOpen) handleDrawerToggle();
                }}
              />
            );
          }
        })}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <ListItemButton onClick={handleLogoutClick}>
          <ListItemIcon sx={{ color: "inherit" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, bgcolor: "#343a40", color: "#c2c7d0" },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, bgcolor: "#343a40", color: "#c2c7d0" },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
