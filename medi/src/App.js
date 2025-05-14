//import logo from './logo.svg';
import MeditationYogaHome from "../src/pages/MeditationYoga/MeditationYogaHome"; // Import the MeditationYogaHome component
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import needed for routing

function App() {
  // route to the Meditation Yoga Home page
  const router = createBrowserRouter([
    {
      path: "/meditation-yoga",
      element: <MeditationYogaHome />,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
