


import './App.css';
import Home from './components/Home';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accommodation from './pages/Accommodation/Accommodation';
import MeditationYogaHome from './pages/MeditationYoga/MeditationYogaHome';

// Admin Components
import AdminDashboard from './components/Admin/Dashboard';
import EventsManagement from './components/Admin/EventsManagement';
import AdminLogin from './components/Admin/AdminLogin';
import ProtectedRoute from './components/Admin/ProtectedRoute';
import Login from "./pages/LoginPage/Login";
import GuidedMeditation from "./pages/MeditationYoga/GuidedMeditation";
import Signup from "./pages/SignupPage/Signup";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true      // whether animation should happen only once
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/accommodation/*" element={<Accommodation />} />
        <Route path="/meditation-yoga" element={<MeditationYogaHome />} />
        <Route path="/guided-meditation" element={<GuidedMeditation />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/events"
          element={
            <ProtectedRoute>
              <EventsManagement />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
