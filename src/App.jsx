import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Hero/>
        <Highlights/>
      </div>
    </Router>
  );
}

export default App;
