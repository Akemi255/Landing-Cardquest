"use client"
import Link from 'next/link';
import { useState } from 'react';
import Socials from './socials';
import Logo from './logo';
import MobileMenu from './mobile-menu';


const Navbar = () => {


  return (
    <nav className="">
      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between pb-5">

          {/* Logo */}
          <div className="flex items-center space-x-5">
            <Logo />
          </div>

          {/* Primary nav */}
          <div className="hidden md:flex items-center space-x-5 text-[#e0e7ff]">
            <Link href="#" className="hover:text-[#9ca3af]">Home</Link>
            <Link href="#" className="hover:text-[#9ca3af]">Guide</Link>

            {/* Popover */}
            <Socials />
          </div>

          {/* Secondary nav */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-[#e0e7ff] hover:text-[#9ca3af]">Login</a>
            <a href="#" className="py-2 px-4 bg-[#d946ef] hover:bg-[#D83CEF] text-gray-100 rounded-md transition duration-300">Signup</a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
