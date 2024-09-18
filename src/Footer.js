import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-12 pb-6 bg-purple-100">
      <div className="flex justify-center mb-8">
        <button className="px-6 py-2 font-semibold bg-blue-400 rounded-md ">
          Next
        </button>
      </div>
      <div className="pt-8 border-t border-gray-200">
        <nav className="flex justify-center mb-4 space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">About us</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Disclaimer</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Advertising</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Submit Story</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <p className="flex justify-center mt-12 mb-8 text-center text-gray-500">
          © 2012-2024 - WebDesignerNews. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;