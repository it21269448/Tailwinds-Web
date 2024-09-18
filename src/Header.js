import React from 'react';
import logo from './images/logo1.png'

const Header = () => {
  return (
    <header className="py-3 shadow-md bg-purple-50 ">
      <div className="container flex items-center justify-between px-6 mx-auto">
       
        <div className="flex items-center">
        <img src={logo} alt="Logo" width={200} />        
        </div>

      
        <nav className="hidden space-x-6 md:flex">
          <a href="#" className="text-lg font-bold text-black hover:text-blue-900 font:bold hover:underline ">Latest</a>
          <a href="#"  className="text-lg font-bold text-black hover:text-blue-900 font:bold hover:underline ">Design</a>
          <a href="#"  className="text-lg font-bold text-black hover:text-blue-900 font:bold hover:underline ">Resources</a>
          <a href="#"  className="text-lg font-bold text-black hover:text-blue-900 font:bold hover:underline ">Tech</a>
          <a href="#"  className="text-lg font-bold text-black hover:text-blue-900 font:bold hover:underline ">UX</a>
          <a href="#"  className="text-lg font-bold text-black hover:text-blue-900 font:bold hover:underline ">Web Design</a>
          <a href="#"  className="text-lg font-bold text-black hover:text-blue-900 font:bold hover:underline ">Web Dev</a>
        </nav>

       
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-indigo-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm9-7h-1m-4 0h-5M7 7h.01M17 7h.01M7 17h.01M17 17h.01" />
            </svg>
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-white bg-indigo-700 rounded-md hover:bg-indigo-800">
            Submit story
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
