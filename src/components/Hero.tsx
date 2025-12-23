"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image'; // Added Image import
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Updated import path

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (heroRef.current && titleRef.current && subtitleRef.current && buttonRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
      gsap.fromTo(buttonRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
      );

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        // Removed onUpdate that was changing opacity
      });
    }
  }, []);
  return (
        <section
          ref={heroRef}
          className="relative flex items-center justify-center h-screen bg-white text-black overflow-hidden"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 z-10">
            {/* Left Section: Text Content */}
            <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
              <h1
                ref={titleRef}
                className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
              >
                Rida Rasheed
              </h1>
              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl mb-8 max-w-2xl md:mx-0 mx-auto"
              >
                Web Developer
              </p>
              <button
                ref={buttonRef}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full text-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Explore My Work
              </button>
            </div>
    
            {/* Right Section: Avatar */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/images/avatar.svg"
                alt="Rida Rasheed Avatar"
                width={400}
                height={400}
                className="max-w-full h-auto"
              />
            </div>
          </div>
          {/* Removed the opacity overlay as per solid color design */}
        </section>  );
};

export default Hero;
