import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accommodation from './pages/Accommodation/Accommodation';
// import MeditationYogaHome from './pages/MeditationYoga/MeditationYogaHome'; // Uncomment if it exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/accommodation/*" element={<Accommodation />} />
        {/* <Route path="/meditation-yoga" element={<MeditationYogaHome />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
