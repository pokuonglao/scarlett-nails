// src/app/layout.js
"use client"; // Mark this as a client component

import '../styles/globals.css';
import { useState } from 'react';

export default function RootLayout({ children }) {
  // State to manage burger menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body>
        <header className="bg-pink-500 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Em Oi Nails</h1>

           
            {/* <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div> */}

            
            {/* <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} absolute lg:static top-16 left-0 w-full bg-pink-500 lg:bg-transparent lg:w-auto lg:p-0 p-4`}>
              <ul className="flex flex-col lg:flex-row lg:space-x-4">
                <li className="mb-2 lg:mb-0">
                  <a href="/" className="hover:text-gray-200">Home</a>
                </li>
                <li className="mb-2 lg:mb-0">
                  <a href="#gallery" className="hover:text-gray-200">Gallery</a>
                </li>
                
                <li className="mb-2 lg:mb-0">
                  <a href="#services" className="hover:text-gray-200">Services</a>
                </li>
                <li className="mb-2 lg:mb-0">
                  <a href="#contact" className="hover:text-gray-200">Contact</a>
                </li>
              </ul>
            </nav> */}

          </div>
        </header>

        <main className="container mx-auto px-4">
          {children}
        </main>

        <footer className="bg-gray-800 p-4 text-white text-center mt-8">
          <p>© 2024 Em Oi Nails. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
