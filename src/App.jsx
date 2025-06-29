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
// import AdminLogin from './pages/AdminLogin'; // Admin login component - commented out
// import AdminUpload from './pages/AdminUpload'; // Admin upload component - commented out
// import PuzzlesPage from './components/PuzzlesPage'; // Puzzles display component - commented out
import AOS from 'aos';
import 'aos/dist/aos.css';
import './animations.min.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  // Puzzle-related state management - commented out
  // const [puzzles, setPuzzles] = useState([]);
  // const [showAdmin, setShowAdmin] = useState(false);

  // Load puzzles from localStorage - commented out
  // useEffect(() => {
  //   const savedPuzzles = localStorage.getItem('chessPuzzles');
  //   setPuzzles(savedPuzzles ? JSON.parse(savedPuzzles) : []);
  // }, []);

  // Check for admin access via URL parameter - commented out
  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   setShowAdmin(params.has('admin'));
  // }, []);

  // Handle puzzle upload functionality - commented out
  // const handleUpload = (link) => {
  //   const newPuzzles = [...puzzles, {
  //     link,
  //     id: Date.now(),
  //     date: new Date().toISOString()
  //   }];
  //   setPuzzles(newPuzzles);
  //   localStorage.setItem('chessPuzzles', JSON.stringify(newPuzzles));
  // };

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
          {/* <Route
            path="/puzzles"
            element={<PuzzlesPage puzzles={localStorage.getItem('chessPuzzles') ? JSON.parse(localStorage.getItem('chessPuzzles')) : []} />}
          />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/upload" element={<AdminUpload />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;