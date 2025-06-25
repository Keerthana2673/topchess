import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Basics from './pages/courses/Basics';
import Advanced from './pages/courses/Advanced';
import Tournament from './pages/courses/Tournament';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './animations.min.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animations run once
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/basics" element={<Basics />} />
          <Route path="/courses/advanced" element={<Advanced />} />
          <Route path="/courses/tournament" element={<Tournament />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;