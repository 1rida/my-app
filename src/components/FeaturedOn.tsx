"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedOn: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null); // New ref for the combined content

  useEffect(() => {
    if (sectionRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
      .fromTo(
        contentRef.current, // Animate the new content ref
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.5'
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-16 sm:py-24 text-white"
      style={{
        backgroundImage: `url('/images/hero-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 ref={headingRef} className="text-4xl sm:text-5xl font-bold mb-4">
          About <span className="text-orange-500">Us</span>
        </h2>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
            <span className="text-orange-500">Innovation</span> and <span className="text-white">Excellence</span> in Every Project
        </h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          We are a team of passionate developers and designers dedicated to creating exceptional digital experiences. Our focus is on delivering high-quality, innovative solutions that drive success for our clients.
        </p>
        <div ref={contentRef} className="space-y-6">
          <p className="text-lg">
            A showcase of my work with various clients and partners, demonstrating my commitment to quality and innovation.
          </p>
          <a href="#contact" className="inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;