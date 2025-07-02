import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  AccountCircle as AccountCircleIcon,
  ExpandLess,
  ExpandMore,
  List as ListIcon,
  MenuBook as MenuBookIcon,
  PersonAdd as PersonAddIcon,
  Group as GroupIcon,
  People as PeopleIcon,
  Upgrade as UpgradeIcon,
  LocalLibrary as LocalLibraryIcon,
  CardGiftcard as CardGiftcardIcon,
  VideoCall as VideoCallIcon,
  ReceiptLong as ReceiptLongIcon,
  Payment as PaymentIcon,
} from "@mui/icons-material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo128.png";

const drawerWidth = 240;

const SidebarItem = ({ icon, label, to, external, onClick, sx, collapsed, alwaysHighlight }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  if (external) {
    return (
      <ListItemButton
        component="a"
        href={to}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          ...sx,
          px: collapsed ? "0px !important" : "8px !important",
          bgcolor: alwaysHighlight ? "#4c49a3" : "inherit",
          margin: "5px 0px",
          borderRadius: "5px",
          color: alwaysHighlight ? "white" : "inherit",
          "& .MuiListItemIcon-root": {
            color: alwaysHighlight ? "white" : "inherit",
            minWidth: collapsed ? "0px" : "36px",
            justifyContent: "center",
          },
          "&:hover": {
            bgcolor: alwaysHighlight ? "#4c49a3" : "#495057",
            color: alwaysHighlight ? "white" : "white",
          },
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        {!collapsed && <ListItemText primary={label} />}
      </ListItemButton>
    );
  }

  return (
    <ListItemButton
      component={Link}
      to={to}
      onClick={onClick}
      sx={{
        ...sx,
        px: collapsed ? "0px !important" : "8px !important",
        bgcolor: alwaysHighlight ? "#4c49a3" : (isActive ? "#f8fdf8" : "inherit"),
        margin: isActive ? "5px 0px" : "0px",
        borderRadius: "5px",
        color: alwaysHighlight ? "white" : (isActive ? "black" : "inherit"),
        "& .MuiListItemIcon-root": {
          color: alwaysHighlight ? "white" : (isActive ? "black" : "inherit"),
          minWidth: collapsed ? "0px" : "36px",
          justifyContent: "center",
        },
        "&:hover": {
          bgcolor: alwaysHighlight ? "#4c49a3" : (isActive ? "#f8fdf8" : "#495057"),
          color: alwaysHighlight ? "white" : (isActive ? "black" : "white"),
        },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      {!collapsed && <ListItemText primary={label} />}
    </ListItemButton>
  );
};

const Sidebar = ({ mobileOpen, handleDrawerToggle, window, collapsed, toggleCollapse, userType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const container = window !== undefined ? () => window().document.body : undefined;

  const [openMenuKey, setOpenMenuKey] = useState(null);

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/profile")) setOpenMenuKey("profile");
    else if (path.startsWith("/courses")) setOpenMenuKey("courses");
    else if (path.startsWith("/signup")) setOpenMenuKey("signup");
    else if (path.startsWith("/student")) setOpenMenuKey("student");
    else if (path.startsWith("/teacher")) setOpenMenuKey("teacher");
    else if (path.startsWith("/promote-Students")) setOpenMenuKey("promote students");
    else if (path.startsWith("/library")) setOpenMenuKey("libaray");
    else if (path.startsWith("/coupan")) setOpenMenuKey("coupan");
    else if (path.startsWith("/zoom")) setOpenMenuKey("zoom");
    else if (path.startsWith("/fee-receipt")) setOpenMenuKey("fee receipt");
    else if (path.startsWith("/payment")) setOpenMenuKey("payment");
    else setOpenMenuKey(null);
  }, [location.pathname]);

  const toggleMenu = (key) => {
    setOpenMenuKey((prevKey) => (prevKey === key ? null : key));
  };

  const dashboardRoute = userType === 'admin' ? '/admin/dashboard' : userType === 'teacher' ? '/teacher/dashboard' : '/student/dashboard';

  const menus = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
      to: dashboardRoute,
      alwaysHighlight: true
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
      icon: <MenuBookIcon />,
      key: "courses",
      children: [
        { label: "View Courses", to: "/courses" },
        { label: "Add Course", to: "/courses/add" },
        {
          label: "Curriculum",
          to: "https://quranacademy.live/index.php",
          external: true,
        },
      ],
    },
    {
      label: "Signup",
      icon: <PersonAddIcon />,
      key: "signup",
      children: [
        { label: "Student Request", to: "/signup/student-request" },
        { label: "Teacher Request", to: "/signup/teacher-request" },
      ],
    },
    {
      label: "Students",
      icon: <GroupIcon />,
      key: "student",
      children: [
        { label: "Assigned Student", to: "/student/assigned-student" },
        { label: "Enrolled Student", to: "/student/enrolled-student" },
        { label: "Ex Student", to: "/student/ex-student" },
      ],
    },
    {
      label: "Teachers",
      icon: <PeopleIcon />,
      key: "teacher",
      children: [
        { label: "Career Request", to: "/teacher/career-request" },
        { label: "Favourite Teacher", to: "/teacher/favourite-teacher" },
        { label: "Ex Teacher", to: "/teacher/ex-teacher" },
      ],
    },
    {
      label: "Promote Students",
      icon: <UpgradeIcon />,
      key: "promote students",
      children: [
        { label: "Promote Request", to: "/promote-Students/promote-request" },
      ],
    },
    {
      label: "Libaray",
      icon: <LocalLibraryIcon />,
      key: "libaray",
      children: [
        { label: "Add Books", to: "/library/add-books" },
        { label: "View Books", to: "/library/view-books" },
        { label: "Upload Books", to: "/library/upload-books" },
      ],
    },
    {
      label: "Coupan",
      icon: <CardGiftcardIcon />,
      key: "coupan",
      children: [
        { label: "Create Coupon", to: "/coupan/create-coupon" },
        { label: "View Coupons", to: "/coupan/view-coupon" },
      ],
    },
    {
      label: "Zoom",
      icon: <VideoCallIcon />,
      key: "zoom",
      children: [{ label: "Create Zoom Link", to: "/zoom/create-zoom-link" }],
    },
    {
      label: "Fee Receipt",
      icon: <ReceiptLongIcon />,
      key: "fee receipt",
      children: [{ label: "Send Receipt", to: "/fee-receipt/send-receipt" }],
    },
    {
      label: "Payment",
      icon: <PaymentIcon />,
      key: "payment",
      children: [
        { label: "Payment Status", to: "/payment/payment-status" },
        { label: "Received Payments", to: "/payment/received-payments" },
        { label: "Pending Payments", to: "/payment/pending-payments" },
      ],
    },
  ];

  const teachermenus = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
      to: dashboardRoute,
      alwaysHighlight: true
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
      label: "Promote Students",
      icon: <UpgradeIcon />,
      key: "promote students",
      children: [
        { label: "Promote Request", to: "/promote-Students/promote-request" },
      ],
    },
    {
      label: "Libaray",
      icon: <LocalLibraryIcon />,
      key: "libaray",
      children: [
        { label: "View Books", to: "/library/view-books" },
      ],
    },
    {
      label: "Services",
      icon: <VideoCallIcon />,
      key: "Services",
      children: [
        { label: "Refer a friend", to: "https://quranacademy.live/pages/website/refer_friend.php", external: true },
        { label: "Qard-e-Hasana", to: "https://quranacademy.live/pages/website/scholarship.php", external: true },
      ],
    },
    {
      label: "Policies",
      icon: <CardGiftcardIcon />,
      to: "https://quranacademy.live/pages/website/policies.php",
      alwaysHighlight: false,
      external: true,
    },
    {
      label: "Contact Us",
      icon: <PaymentIcon />,
      to: "https://quranacademy.live/pages/website/contact.php",
      alwaysHighlight: false,
      external: true,
    },
  ];

  const studentmenus = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
      to: dashboardRoute,
      alwaysHighlight: true
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
      label: "Libaray",
      icon: <LocalLibraryIcon />,
      key: "libaray",
      children: [
        { label: "Add Books", to: "/library/add-books" },
        { label: "View Books", to: "/library/view-books" },
        { label: "Upload Books", to: "/library/upload-books" },
      ],
    },
    {
      label: "Forms",
      icon: <ListIcon />,
      key: "forms",
      children: [
        { label: "Leave Form", to: "/student/ex-student" },
        { label: "Feedback Form", to: "/student/enrolled-student" },
      ],
    },
    {
      label: "Services",
      icon: <VideoCallIcon />,
      key: "services",
      children: [
        { label: "Refer a friend", to: "https://quranacademy.live/pages/website/refer_friend.php", external: true },
        { label: "Qard-e-Hasana", to: "https://quranacademy.live/pages/website/scholarship.php", external: true },
      ],
    },
    {
      label: "Policies",
      icon: <CardGiftcardIcon />,
      to: "https://quranacademy.live/pages/website/policies.php",
      alwaysHighlight: false,
      external: true,
    },
    {
      label: "Contact Us",
      icon: <PaymentIcon />,
      to: "https://quranacademy.live/pages/website/contact.php",
      alwaysHighlight: false,
      external: true,
    },
  ];

  // Use teacher menus if userType is 'teacher', otherwise use admin menus
  const activeMenus = userType === 'admin' ? menus : userType === 'teacher' ? teachermenus : studentmenus;

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#343a40",
        color: "#c2c7d0",
        px: collapsed ? 0 : 0.5,
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center", mb: 2, px: "9px !important" }}>
        {collapsed ? (
          <img src={logo} style={{ width: "40px", height: "40px" }} alt="logo" />
        ) : (
          <Typography variant="h6" noWrap sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
              alt="logo"
            />
            OQA Admin
          </Typography>
        )}
      </Toolbar>
      <Divider />
      <List component="nav" disablePadding>
        {activeMenus.map((item) => {
          if (item.children) {
            const isOpen = openMenuKey === item.key;
            return (
              <React.Fragment key={item.key || item.label}>
                <ListItemButton
                  onClick={() => toggleMenu(item.key)}
                  sx={{
                    bgcolor: isOpen ? "rgba(255, 255, 255, .1)" : "inherit",
                    px: collapsed ? "8px !important" : "10px !important",
                    color: isOpen ? "#fff" : "inherit",
                    justifyContent:"center",
                    margin:"5px 0px", 
                    "& .MuiListItemIcon-root": {
                      color: isOpen ? "#fff" : "inherit",
                      minWidth: collapsed ? "0px" : "20px",
                      pr: collapsed ? "0px" : "10px",
                      justifyContent: "center",
                    },
                    "&:hover": {
                      bgcolor: isOpen ? "rgba(255, 255, 255, .1)" : "#495057",
                      color: "white",
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  {!collapsed && (
                    <>
                      <ListItemText primary={item.label} />
                      {isOpen ? <ExpandLess /> : <ExpandMore />}
                    </>
                  )}
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
                        sx={{ pl: 4, py: 0.2 }}
                        collapsed={collapsed}
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
                alwaysHighlight={item.alwaysHighlight}
                external={item.external}
                onClick={() => {
                  if (mobileOpen) handleDrawerToggle();
                }}
                collapsed={collapsed}
              />
            );
          }
        })}
      </List>
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
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: "#343a40",
            color: "#c2c7d0",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: collapsed ? 64 : drawerWidth,
            bgcolor: "#343a40",
            color: "#c2c7d0",
            transition: "width 0.3s ease",
            overflowX: "hidden",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;