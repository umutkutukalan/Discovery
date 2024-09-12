import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="main-content">
          <Hero />
          <Highlights />
          <Features />
        </div>
      </Router>
    </>
  );
};

export default Sentry.withProfiler(App);
