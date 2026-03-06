"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && imageRef.current) {
      gsap.fromTo(
        textRef.current.querySelector('h2'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        textRef.current.querySelectorAll('p'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        imageRef.current.querySelectorAll('.image-frame'),
        { opacity: 0, y: 100, rotation: 20 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="text-center md:text-left">
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 text-foreground">
              Discover Our <span className="text-orange-500">Story</span>
            </h2>
            <p className="text-foreground/80 mb-4">
              We are a team of passionate developers and designers who love to build amazing things. We are dedicated to providing our clients with the best possible experience and helping them to achieve their goals.
            </p>
            <p className="text-foreground/80">
              Our mission is to create beautiful, functional, and user-friendly websites and applications that make a difference. We believe in the power of technology to change the world and we are excited to be a part of it.
            </p>
          </div>
          <div ref={imageRef} className="relative h-96 w-full">
            <div className="image-frame absolute top-0 left-0 w-3/4 h-3/4 transform -rotate-6 bg-background p-2 rounded-lg shadow-2xl">
              <Image
                src="/images/about-us-1.jpeg"
                alt="About Us 1"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="image-frame absolute bottom-0 right-0 w-3/4 h-3/4 transform rotate-6 bg-background p-2 rounded-lg shadow-2xl">
              <Image
                src="/images/about-us-2.jpeg"
                alt="About Us 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
