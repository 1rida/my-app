"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left section - Logo */}
        <div className="flex-shrink-0">
          <Link className="flex items-center space-x-2" href="/">
            <Image
              alt="My Logo"
              className="object-contain rounded-full"
              height={40}
              src="/images/avatar.svg"
              width={40}
            />
            <span className="text-xl font-bold text-gray-800">MyPortfolio</span>
          </Link>
        </div>

        {/* Center section - Navigation links for medium screens and up */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
          <Link
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
            href="#contact"
          >
            Contact
          </Link>
        </div>

        {/* Right section - Hamburger menu for small screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              href="#about"
            >
              About
            </Link>
            <Link
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              href="#projects"
            >
              Projects
            </Link>
            <Link
              className="text-white bg-blue-600 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              href="#contact"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
