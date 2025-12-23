"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
        onUpdate: (self) => {
          gsap.to(heroRef.current, {
            opacity: 1 - self.progress,
            ease: 'none',
          });
        },
      });
    }
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden"
    >
      <div className="text-center p-8 z-10">
        <h1 
          ref={titleRef} 
          className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
        >
          Welcome to My Portfolio
        </h1>
        <p 
          ref={subtitleRef} 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Showcasing innovative projects and creative solutions in web development.
        </p>
        <button 
          ref={buttonRef} 
          className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
        >
          Explore My Work
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};

export default Hero;
