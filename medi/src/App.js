import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accommodation from './pages/Accommodation/Accommodation';


function App() {
  // route to the Meditation Yoga Home page
  const router = createBrowserRouter([
    {
      path: "/meditation-yoga",
      element: <MeditationYogaHome />,
    },
  ]);

  return (

    <>

    <Router>
      <Routes>
        <Route path="/accommodation/*" element={<Accommodation />} />
      </Routes>
    </Router>

    </>

  );
}

export default App;
