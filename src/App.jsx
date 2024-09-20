/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router basename="immersity">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-14 px-6">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/Features" element={<FeatureSection />} />
          <Route path="/Workflow" element={<Workflow />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Testimonials" element={<Testimonials />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
