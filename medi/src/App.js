import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accommodation from './pages/Accommodation/Accommodation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/accommodation/*" element={<Accommodation />} />
      </Routes>
    </Router>
  );
}

export default App;
