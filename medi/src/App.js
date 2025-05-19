//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true      // whether animation should happen only once
    });
  }, []);

  return (
    <>
    <Router>
       <Home />
      <Routes>
      </Routes>
    </Router>
    </>
  );
}

export default App;
