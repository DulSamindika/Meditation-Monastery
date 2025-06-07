

import './App.css';
import Home from './components/Home';
//import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accommodation from './pages/Accommodation/Accommodation';
// import MeditationYogaHome from './pages/MeditationYoga/MeditationYogaHome'; // Uncomment if it exists
import NavBar from './components/NavBar';

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
        {/*<Route path="/accommodation/*" element={<Accommodation />} />*/}
        {/* <Route path="/meditation-yoga" element={<MeditationYogaHome />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
