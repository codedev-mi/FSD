import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Courses from './Components/Courses';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="pt-20"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
