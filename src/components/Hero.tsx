"use client";

import SplitType from 'split-type';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (heroRef.current && titleRef.current && subtitleRef.current && buttonRef.current && avatarRef.current && paragraphRef.current) {
      // Split text animation for the title
      const splitTitle = new SplitType(titleRef.current, { types: 'chars' });
      gsap.from(splitTitle.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power3.out',
      });

      // Staggered text animation for subtitle and paragraph
      gsap.fromTo([subtitleRef.current, paragraphRef.current],
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          delay: 0.5,
        }
      );

      // Button scale animation
      gsap.fromTo(buttonRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1, delay: 1, ease: 'power3.out' }
      );

      // Avatar breathing effect
      gsap.to(avatarRef.current, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      // Avatar parallax, scale, and rotation effect on scroll
      gsap.fromTo(avatarRef.current,
        { y: 0, rotation: 0 },
        {
          y: -100,
          rotation: 5,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Pin the hero section
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      });

      // Button hover animation
      if (buttonRef.current) {
        buttonRef.current.addEventListener('mouseenter', () => {
          gsap.to(buttonRef.current, { scale: 1.1, duration: 0.3 });
        });
        buttonRef.current.addEventListener('mouseleave', () => {
          gsap.to(buttonRef.current, { scale: 1, duration: 0.3 });
        });
      }
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen bg-white text-black overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-4 sm:p-8 z-10">
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-orange-600"
          >
            Rida Rasheed
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl mb-2 max-w-2xl md:mx-0 mx-auto"
          >
            Web Developer
          </p>
          <p ref={paragraphRef} className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl md:mx-0 mx-auto text-gray-700">
            Passionate about crafting engaging web experiences with a focus on modern technologies and clean code.
          </p>
          <button
            ref={buttonRef}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-bold rounded-full text-base sm:text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Explore My Work
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px]">
            <Image
              ref={avatarRef}
              src="/images/redhaired-woman-avatar.jpg"
              alt="Rida Rasheed Avatar"
              width={600}
              height={600}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
