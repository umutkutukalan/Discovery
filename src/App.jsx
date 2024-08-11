import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/highlights" element={<Highlights />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
