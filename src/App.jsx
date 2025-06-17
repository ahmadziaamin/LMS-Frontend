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
import Topbar from "./components/Sidebar/Topbar";

import Dashboard from "./pages/Dashboard";
import AddCourse from "./pages/Courses/AddCourse";
import ViewCourses from "./pages/Courses/ViewCourses";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import EditProfile from "./components/Profile/EditProfile";
import ViewProfile from "./components/Profile/ViewProfile";

import StudentRequest from "./pages/Signup/StudentRequest";
import TeacherRequest from "./pages/Signup/TeacherRequest";

import AssignedSttudent from "./pages/Student/AssignedSttudent";
import EnrolledStudent from "./pages/Student/EnrolledStudent";
import ExStudent from "./pages/Student/ExStudent";

import CareerRequest from "./pages/Teacher/CareerRequest";
import FavourtieTeacher from "./pages/Teacher/FavourtieTeacher";
import ExTeacher from "./pages/Teacher/ExTeacher";

import CreateCoupans from "./pages/Coupans/CreateCoupans";
import ViewCoupans from "./pages/Coupans/ViewCoupans";

import AddBooks from "./pages/Libarary/AddBooks";
import UploadsBooks from "./pages/Libarary/UploadsBooks";
import ViewBooks from "./pages/Libarary/ViewBooks";

import PaymetStatus from "./pages/Payments/PaymetStatus";
import PendingPayment from "./pages/Payments/PendingPayment";
import ReceivedPayments from "./pages/Payments/ReceivedPayments";

import PromoRequest from "./pages/PromoStudent/PromoRequest";
import CreateLinks from "./pages/Zoom/CreateLinks";

import FeeReceipt from "./pages/FeeReceipt/FeeReceipt";

import "./App.css";
import TeacherDashboard from "./pages/TeacherDashboard";

const drawerWidth = 240;
const collapsedWidth = 64;

const PrivateRoute = ({ loggedIn, children }) => {
  return loggedIn ? children : <Navigate to="/auth/login" replace />;
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [userType, setUserType] = useState('admin');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

 const handleLogin = (email) => {  
    setLoggedIn(true);
    setUserType(email === 'test@teacher.com' ? 'teacher' : 'admin');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserType('admin'); 
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {loggedIn && (
          <Sidebar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            onLogout={handleLogout}
            drawerWidth={drawerWidth}
            collapsed={collapsed}
            toggleCollapse={toggleCollapse}
             userType={userType} 
          />
        )}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            ml: { 
              sm: loggedIn ? `${collapsed ? collapsedWidth : drawerWidth}px` : 0 
            },
            minHeight: "100vh",
            bgcolor: "#f5f5f5",
            transition: (theme) => theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            width: { sm: `calc(100vw - ${collapsed ? collapsedWidth : drawerWidth}px) !important` },
          }}
        >
          {loggedIn && (
            <Topbar 
              toggleSidebar={handleDrawerToggle} 
              toggleCollapse={toggleCollapse}
              collapsed={collapsed}
            />
          )}
          {/* <Toolbar />  */}
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
                  {userType == "admin" ?<Dashboard />:  <TeacherDashboard /> }
                
                </PrivateRoute>
              }
            />

            {/* Courses */}
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

            {/* Profile */}
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

            {/* Signup Requests */}
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

            {/* Student */}
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

            {/* Teacher */}
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

            {/* Coupons */}
            <Route
              path="/coupan/create-coupon"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <CreateCoupans />
                </PrivateRoute>
              }
            />
            <Route
              path="/coupan/view-coupon"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <ViewCoupans />
                </PrivateRoute>
              }
            />

            {/* Library */}
            <Route
              path="/library/add-books"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <AddBooks />
                </PrivateRoute>
              }
            />
            <Route
              path="/library/view-books"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <ViewBooks />
                </PrivateRoute>
              }
            />
            <Route
              path="/library/upload-books"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <UploadsBooks />
                </PrivateRoute>
              }
            />

            {/* Payments */}
            <Route
              path="/payment/payment-status"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <PaymetStatus />
                </PrivateRoute>
              }
            />
            <Route
              path="/payment/received-payments"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <ReceivedPayments />
                </PrivateRoute>
              }
            />
            <Route
              path="/payment/pending-payments"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <PendingPayment />
                </PrivateRoute>
              }
            />

            {/* Promote Students */}
            <Route
              path="/promote-Students/promote-request"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <PromoRequest />
                </PrivateRoute>
              }
            />

            {/* Zoom Links */}
            <Route
              path="/zoom/create-zoom-link"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <CreateLinks />
                </PrivateRoute>
              }
            />

            {/* Fee Receipt */}
            <Route
              path="/fee-receipt/send-receipt"
              element={
                <PrivateRoute loggedIn={loggedIn}>
                  <FeeReceipt />
                </PrivateRoute>
              }
            />

            {/* Catch-All Route */}
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