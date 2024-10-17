import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Ecomas</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className={`md:flex space-x-6 hidden`}>
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/shop" className="text-white hover:text-gray-300">
            Shop
          </Link>
          <Link to="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
          <Link to="/register" className="text-white hover:text-gray-300">
            Register
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className="block px-2 py-1 text-white hover:bg-blue-700"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block px-2 py-1 text-white hover:bg-blue-700"
            onClick={toggleMenu}
          >
            Shop
          </Link>
          <Link
            to="/login"
            className="block px-2 py-1 text-white hover:bg-blue-700"
            onClick={toggleMenu}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block px-2 py-1 text-white hover:bg-blue-700"
            onClick={toggleMenu}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};


