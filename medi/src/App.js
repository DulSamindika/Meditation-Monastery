//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';


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
       <Home />
      <Routes>
      </Routes>
    </Router>
    </>

  );
}

export default App;
