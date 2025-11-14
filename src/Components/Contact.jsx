import React from 'react';

function Contact() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-2">
          Have questions? Reach out to our admissions office or visit our campus.
        </p>
        <p className="text-md text-gray-600">
          KKWIEER Campus, Nashik, Maharashtra<br />
          info@kkwieer.edu.in<br />
          +91 12345 67890
        </p>
      </div>
    </div>
  );
}

export default Contact;