

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
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/events" element={<EventsManagement />} />
        <Route path="/admin/events/add" element={<EventForm />} />
        <Route path="/admin/events/edit/:id" element={<EventForm />} />
        <Route path="/admin/meditation-yoga" element={<AdminMediYoga />} />
      </Routes>
    </Router>
  );
}

export default App;
