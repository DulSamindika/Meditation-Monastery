

import './App.css';
import Home from './components/Home';
//import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accommodation from './pages/Accommodation/Accommodation';<<<<<<< dul
// import MeditationYogaHome from './pages/MeditationYoga/MeditationYogaHome'; // Uncomment if it exists
//import NavBar from './components/NavBar';

 import MeditationYogaHome from './pages/MeditationYoga/MeditationYogaHome'; // Uncomment if it exists


function App() {
  return (
    <Router>
      <Routes>

        {/*<Route path="/accommodation/*" element={<Accommodation />} />*/}
        {/* <Route path="/meditation-yoga" element={<MeditationYogaHome />} /> */}
        {/*<Route path="/" element={<Home />} /> */}
        {/*<Route path="/home" element={<Home />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/accommodation/*" element={<Accommodation />} />
        <Route path="/meditation-yoga" element={<MeditationYogaHome />} /> 

      </Routes>
    </Router>
  );
}

export default App;
