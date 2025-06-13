


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
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminMediYoga from './pages/Admin/AdminMediYoga';
import EventsManagement from './pages/Admin/EventsManagement';
import EventForm from './pages/Admin/EventForm';
import Login from "./pages/LoginPage/Login";
import GuidedMeditation from "./pages/MeditationYoga/GuidedMeditation";
import Signup from "./pages/SignupPage/Signup";
import AdminMediVideos from './pages/Admin/AdminMediVideos';

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
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/events" element={<EventsManagement />} />
        <Route path="/admin/events/add" element={<EventForm />} />
        <Route path="/admin/events/edit/:id" element={<EventForm />} />
        <Route path="/admin/meditation-yoga" element={<AdminMediYoga />} />
        <Route path="/admin/meditation-videos" element={<AdminMediVideos />} />
        <Route path="/adminmedivideos" element={<AdminMediVideos />} />
      </Routes>
    </Router>
  );
}

export default App;
