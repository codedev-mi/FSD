import React from 'react';

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Welcome to Our College
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Explore our programs, faculty, and campus life. Discover a place where learning meets inspiration.
        </p>
      </div>
    </div>
  );
}

export default Home;