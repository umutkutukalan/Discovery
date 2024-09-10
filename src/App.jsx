import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="main-content">
          <Hero />
          <Highlights />
        </div>
      </Router>
    </>
  );
};

export default Sentry.withProfiler(App);
