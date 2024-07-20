"use client";

import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="">
      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between pb-5">

          {/* Logo */}
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center text-[#e0e7ff]">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="assets/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="ml-3 font-bold text-lg">Harem: Project Maid</span>
            </a>
          </div>

          {/* Primary nav */}
          <div className="hidden md:flex items-center space-x-4 text-[#e0e7ff]">
            <a href="#" className="hover:text-[#9ca3af]">Home</a>
            <a href="#" className="hover:text-[#9ca3af]">Guide</a>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="text-[#e0e7ff] flex items-center space-x-1"
              >
                <span>Socials</span>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-[-60px] mt-2 w-48 bg-[#1e293b] border border-[#2e3a4b] rounded-md shadow-lg">
                  <a href="https://discord.gg/tzHte7vBWv" target='_blank' className="block px-4 py-2 text-[#e0e7ff] hover:bg-[#334155] text-center">Discord</a>
                  <a href="https://x.com/hpmaid_" target='_blank' className="block px-4 py-2 text-[#e0e7ff] hover:bg-[#334155] text-center">Twitter</a>
                  <a href="https://www.youtube.com/@HaremProjectMaid" target='_blank' className="block px-4 py-2 text-[#e0e7ff] hover:bg-[#334155] text-center">YouTube</a>
                </div>
              )}
            </div>
          </div>

          {/* Secondary nav */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-[#e0e7ff] hover:text-[#9ca3af]">Login</a>
            <a href="#" className="py-2 px-4 bg-[#d946ef] hover:bg-[#D83CEF] text-gray-100 rounded-md transition duration-300">Signup</a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6 text-[#e0e7ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-[#e0e7ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-[#1e293b]`}>
        <div className="flex flex-col items-center py-2">
          <a href="#" className="block py-2 px-4 text-[#e0e7ff] hover:bg-[#334155] w-auto text-center">Home</a>
          <a href="#" className="block py-2 px-4 text-[#e0e7ff] hover:bg-[#334155] w-auto text-center">Guide</a>
          <div className="relative w-full">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center py-2 px-4 text-[#e0e7ff] hover:bg-[#334155] w-auto mx-auto mb-3 text-center space-x-1"
            >
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#e0e7ff">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
              <span>Socials</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full w-full bg-[#1e293b] border border-[#2e3a4b]">
                <a href="#" className="block px-4 py-2 text-[#e0e7ff] hover:bg-[#334155] text-center">Discord</a>
                <a href="#" className="block px-4 py-2 text-[#e0e7ff] hover:bg-[#334155] text-center">Twitter</a>
                <a href="#" className="block px-4 py-2 text-[#e0e7ff] hover:bg-[#334155] text-center">YouTube</a>
              </div>
            )}
          </div>
          <a href="#" className="block mb-3 py-1 px-4 border-2 border-indigo-600 hover:bg-indigo-700 text-gray-100 rounded-md transition duration-300 text-center">Login</a>
          <a href="#" className="block mb-8 py-1 px-3 bg-indigo-600 hover:bg-indigo-700 text-gray-100 rounded-md transition duration-300 text-center">Signup</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
