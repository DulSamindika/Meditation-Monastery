import "./App.css";
import Home from "./components/Home";
//import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accommodation from "./pages/Accommodation/Accommodation";
import MeditationYogaHome from "./pages/MeditationYoga/MeditationYogaHome";

import GuidedMeditation from "./pages/MeditationYoga/GuidedMeditation";
import AdminMediVideos from "./pages/Admin/AdminMediVideos";

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
        <Route path="/guided-meditation" element={<GuidedMeditation />} />
        <Route path="/adminmedivideos" element={<AdminMediVideos />} />
      </Routes>
    </Router>
  );
}

export default App;
