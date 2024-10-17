import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page Not Found</p>
      <Link to="/">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Go Home
        </button>
      </Link>
    </div>
  );
};
