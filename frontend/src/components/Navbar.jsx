import React from 'react';
import { Link } from 'react-router-dom';

// This component will display the navigation bar for the application.
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/login" className="text-white hover:text-gray-300">Login</Link></li>
        <li><Link to="/register" className="text-white hover:text-gray-300">Register</Link></li>
        <li><Link to="/plans" className="text-white hover:text-gray-300">Plans</Link></li>
        <li><Link to="/my-subscriptions" className="text-white hover:text-gray-300">My Subscriptions</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
