// App.js
import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./components/Home";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignupPage/Signup";

// Accommodation Pages
import Accommodation from "./pages/Accommodation/Accommodation";
import RoomDetails from "./pages/Accommodation/RoomDetails";

// Meditation & Yoga Pages
import MeditationYogaHome from "./pages/MeditationYoga/MeditationYogaHome";
import GuidedMeditation from "./pages/MeditationYoga/GuidedMeditation";
import GuidedYoga from "./pages/MeditationYoga/GuidedYoga";
import ChantingMantra from "./pages/MeditationYoga/ChantingMantra";

// Admin Pages
import AdminLogin from "./components/Admin/AdminLogin";
import ProtectedRoute from "./components/Admin/ProtectedRoute";
import AdminDashboard from "./components/Admin/Dashboard";
import EventsManagement from "./components/Admin/EventsManagement";
import AdminYogaSession from "./pages/Admin/AdminYogaSession";
import AdminChantingSession from "./pages/Admin/AdminChantingSession";
import AdminMediYoga from "./pages/Admin/AdminMediYoga";
import AdminMediVideos from "./pages/Admin/AdminMediVideos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Accommodation Routes */}
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/accommodation/:id" element={<RoomDetails />} />

        {/* Meditation & Yoga Routes */}
        <Route path="/meditation-yoga" element={<MeditationYogaHome />} />
        <Route path="/guided-meditation" element={<GuidedMeditation />} />
        <Route path="/guided-yoga" element={<GuidedYoga />} />
        <Route path="/chanting-mantra" element={<ChantingMantra />} />

        {/* Admin Authentication */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
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
        <Route
          path="/admin/meditation-videos"
          element={
            <ProtectedRoute>
              <AdminMediYoga />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/yoga-sessions"
          element={
            <ProtectedRoute>
              <AdminYogaSession />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/chanting-sessions"
          element={
            <ProtectedRoute>
              <AdminChantingSession />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/events-management"
          element={
            <ProtectedRoute>
              <AdminMediVideos />
            </ProtectedRoute>
          }
        />

        {/* Optional: 404 Page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
