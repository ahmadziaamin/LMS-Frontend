import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./pages/Dashboard";
import AddCourse from "./pages/Courses/AddCourse";
import ViewCourses from "./pages/Courses/ViewCourses";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import EditProfile from "./components/Profile/EditProfile";
import ViewProfile from "./components/Profile/ViewProfile";
import Topbar from "./components/Sidebar/Topbar";
import "./App.css";
import StudentRequest from "./pages/Signup/StudentRequest";
import TeacherRequest from "./pages/Signup/TeacherRequest";
import AssignedSttudent from "./pages/Student/AssignedSttudent";
import EnrolledStudent from "./pages/Student/EnrolledStudent";
import ExStudent from "./pages/Student/ExStudent";
import CareerRequest from "./pages/Teacher/CareerRequest";
import FavourtieTeacher from "./pages/Teacher/FavourtieTeacher";
import ExTeacher from "./pages/Teacher/ExTeacher";

const drawerWidth = 240;

const PrivateRoute = ({ loggedIn, children }) => {
  return loggedIn ? children : <Navigate to="/auth/login" replace />;
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* Sidebar (Drawer) */}
        {loggedIn && (
          <Sidebar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            onLogout={handleLogout}
            drawerWidth={drawerWidth}
          />
        )}

        {/* Main content area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // width: { sm: loggedIn ? `calc(100vw - ${drawerWidth}px)` : '100vw' },
            ml: { sm: loggedIn ? `${drawerWidth}px` : 0 },
            minHeight: "100vh",
            bgcolor: "#f5f5f5",
            transition: "margin 0.3s, width 0.3s",
            overflow: "hidden",
          }}
        >
          {loggedIn && <Topbar />}
          {/* <Topbar/> */}
          <Routes>
            <Route
              path="/auth/login"
              element={
                loggedIn ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/courses"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <ViewCourses />
                </PrivateRoute>
              }
            />
            <Route
              path="/courses/add"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <AddCourse />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile/view"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <ViewProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile/edit"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <EditProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/signup/student-request"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <StudentRequest />
                </PrivateRoute>
              }
            />
            <Route
              path="/signup/teacher-request"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <TeacherRequest />
                </PrivateRoute>
              }
            />
            <Route
              path="/student/assigned-student"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <AssignedSttudent />
                </PrivateRoute>
              }
            />
            <Route
              path="/student/enrolled-student"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <EnrolledStudent />
                </PrivateRoute>
              }
            />
            <Route
              path="/student/ex-student"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <ExStudent />
                </PrivateRoute>
              }
            />
            <Route
              path="/teacher/career-request"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <CareerRequest />
                </PrivateRoute>
              }
            />
            <Route
              path="/teacher/favourite-teacher"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <FavourtieTeacher />
                </PrivateRoute>
              }
            />
            <Route
              path="/teacher/ex-teacher"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <ExTeacher />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={
                loggedIn ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/auth/login" replace />
                )
              }
            />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
