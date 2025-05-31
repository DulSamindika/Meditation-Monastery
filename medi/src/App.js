//import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import MeditationYogaHome from "../src/pages/MeditationYoga/MeditationYogaHome"; // Import the MeditationYogaHome component
import AdminMediYoga from "../src/pages/Admin/AdminMediYoga";
import GuidedMeditation from "../src/pages/MeditationYoga/GuidedMeditation";
import AdminMediVideos from "../src/pages/Admin/AdminMediVideos";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import routing components

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* Route to the Home component */}
            <Route path="/" element={<Home />} />

            {/* Route to the Meditation Yoga Home page */}
            <Route path="/meditation-yoga" element={<MeditationYogaHome />} />
            <Route path="/guided-meditation" element={<GuidedMeditation />} />

            {/* Route to the Admin Yoga Home page */}
            <Route path="/adminmeditation-yoga" element={<AdminMediYoga />} />
            <Route path="/adminmedivideos" element={<AdminMediVideos />} />

            {/* Default route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
