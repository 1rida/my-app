"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                alt="My Logo"
                className="object-contain rounded-full"
                height={40}
                src="/images/avatar.svg"
                width={40}
              />
              <span className="text-xl font-bold">MyPortfolio</span>
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.014c0 4.612 3.023 8.514 7.135 9.845.52.096.71-.226.71-.502 0-.247-.009-.898-.014-1.764-2.934.636-3.553-1.417-3.553-1.417-.473-1.2-1.154-1.52-1.154-1.52-.944-.645.071-.632.071-.632 1.044.074 1.594 1.07 1.594 1.07.928 1.59 2.43 1.13 3.022.864.094-.67.362-1.13.66-1.39-2.303-.262-4.723-1.152-4.723-5.123 0-1.13.403-2.055 1.07-2.778-.108-.262-.464-1.314.102-2.74 0 0 .87-.278 2.85 1.065A9.957 9.957 0 0112 6.836c.897.002 1.79.13 2.622.384 1.98-1.343 2.85-1.065 2.85-1.065.567 1.426.21 2.478.102 2.74.667.723 1.07 1.648 1.07 2.778 0 3.98-2.423 4.86-4.735 5.116.37.318.7.942.7 1.9 0 1.37-.012 2.473-.012 2.808 0 .278.19.598.71.502C18.978 20.528 22 16.626 22 12.014 22 6.477 17.523 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
