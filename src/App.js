import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Skills from "./components/Skills/Skills";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AutoBus from "../src/components/Projects/AutoBus";
import PowerFitness from "../src/components/Projects/PowerFitness";
import SmartBin from "../src/components/Projects/SmartBin";
import StudentKit from "../src/components/Projects/StudentKit";
import PetCarrier from "../src/components/Projects/PetCarrier";
import SurveillanceSystem from "../src/components/Projects/SurveillanceSystem";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/autobus" element={<AutoBus />} />
          <Route path="/powerfitness" element={<PowerFitness />} />
          <Route path="/smartbin" element={<SmartBin />} />
          <Route path="/studentkit" element={<StudentKit />} />
          <Route path="/petcarrier" element={<PetCarrier />} />
          <Route path="/ibsp" element={<SurveillanceSystem />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
