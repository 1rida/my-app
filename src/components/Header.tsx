"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ThemeSwitcher } from './ThemeSwitcher';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(mobileMenuRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
    } else if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, { y: -20, opacity: 0, duration: 0.3, ease: 'power2.in' });
    }
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (typeof window !== 'undefined') {
      gsap.to(window, {
        scrollTo: { y: href, offsetY: 80, autoKill: false },
        duration: 1,
        ease: 'power2.inOut',
      });
      setActiveLink(href);
    }
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      navLinks.forEach((link) => {
        ScrollTrigger.create({
          trigger: link.href,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) {
              setActiveLink(link.href);
            }
          },
        });
      });
    }
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-black/80 backdrop-blur-sm shadow-sm transition-all duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
       
        {/* Center section - Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`group text-sm font-medium transition-colors duration-300 cursor-pointer ${activeLink === link.href ? 'text-orange-500' : 'text-gray-600 dark:text-gray-300 hover:text-orange-500'}`}
            >
              {link.label}
              <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-500 ${activeLink === link.href ? 'max-w-full' : ''}`}></span>
            </a>
          ))}
        </nav>

        {/* Right section - Actions */}
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef} 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800`}
      >
        <nav className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${activeLink === link.href ? 'text-orange-500 bg-orange-50/10' : 'text-gray-700 dark:text-gray-300 hover:text-orange-500'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
