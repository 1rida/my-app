"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Left section - Logo */}
        <div className="flex-none">
          <Link className="flex items-center space-x-2" href="/">
            <Image
              alt="My Logo"
              className="object-contain rounded-full"
              height={40}
              src="/images/avatar.svg" // Assuming you have a logo at this path
              width={40}
            />
            <span className="text-xl font-bold text-gray-800">MyPortfolio</span>
          </Link>
        </div>

        {/* Center section - Spacer */}
        <div className="flex-1 flex justify-center"></div>

        {/* Right section - Navigation links */}
        <div className="flex-none flex items-center space-x-6">
          <Link
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:-translate-y-0.5"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:-translate-y-0.5"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 hover:-translate-y-0.5"
            href="#contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
