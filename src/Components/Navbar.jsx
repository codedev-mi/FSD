import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 shadow-md fixed w-full z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold">KKWIEER</h2>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
          <li><Link to="/courses" className="hover:text-blue-300">Courses</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
