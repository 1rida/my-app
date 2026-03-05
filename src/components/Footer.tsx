"use client";

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground/10 text-foreground py-8 mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://www.linkedin.com/in/rida-rasheed-8638402b5/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/1rida" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
