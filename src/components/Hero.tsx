"use client";

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const centerColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !leftColRef.current ||
      !centerColRef.current ||
      !rightColRef.current
    ) {
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      leftColRef.current?.querySelector('h1'),
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        leftColRef.current?.querySelectorAll('p, .flex'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        },
        '-=0.6'
      )
      .fromTo(
        centerColRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.75)' },
        'start'
      )
      .fromTo(
        rightColRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' },
        '<0.2'
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-4 lg:pt-0"
      style={{
        backgroundImage: `url('/images/tech-background.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <div
          ref={leftColRef}
          className="w-full lg:w-1/3 space-y-5 lg:space-y-8 text-center lg:text-left order-2 lg:order-1 lg:pr-8"
        >
          <h1 className="font-geist-sans text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white mt-9 lg:mt-0">
            <span className="text-orange-500">Rida Rasheed</span>
            <span className="block text-4xl sm:text-5xl lg:text-5xl text-gray-300 mt-2">
              An experienced full stack web developer
            </span>
          </h1>
          <p className="text-md sm:text-lg text-gray-300">
            I craft beautiful and functional web applications, blending
            cutting-edge technology with user-centric design. Let's build
            something amazing together.
          </p>
          <div className="flex items-center justify-center lg:justify-start space-x-6">
            <a
              href="https://github.com/1rida" // Placeholder
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transform hover:scale-125 transition-all duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/rida-rasheed-8638402b5/" // Placeholder
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transform hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="mailto:ridarasheed58@gmail.com"
              className="text-gray-400 hover:text-purple-400 transform hover:scale-125 transition-all duration-300"
            >
              <FaEnvelope size={32} />
            </a>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
            <FaPhoneAlt className="text-purple-400" size={26} />
            <span className="font-geist-mono text-xl sm:text-2xl tracking-wider text-white">
              +92 3131040410
            </span>
          </div>
        </div>

        <div
          ref={centerColRef}
          className="w-full lg:w-1/3 flex justify-center items-center order-1 lg:order-2"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-auto max-w-sm flex justify-center">
            <Image
              src="/images/myaipic2.png"
              alt="Rida Rasheed"
              width={400}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div
          ref={rightColRef}
          className="w-full lg:w-1/3 mt-8 lg:mt-0 order-3 lg:pl-8 flex flex-col items-center lg:items-start"
        >
          <p className="text-md sm:text-lg text-gray-300 leading-relaxed text-center lg:text-left">
            As a dedicated Full Stack Developer, I bring ideas to life with
            clean and efficient code. My expertise spans across the MERN stack,
            Next.js, and modern DevOps practices. I am passionate about building
            scalable solutions and creating seamless user experiences.
          </p>
          <div className="relative mt-12 w-full flex-grow flex items-center justify-center overflow-hidden">
            <div
              ref={logoContainerRef}
              className="flex flex-nowrap items-center justify-between w-full gap-2 sm:gap-4 lg:justify-around"
            >
              <div className="flex-shrink-0">
                <Image
                  src="/images/new_logos/html.svg"
                  alt="HTML"
                  width={65}
                  height={50}
                  className="object-contain w-10 sm:w-14 h-auto"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/new_logos/css.png"
                  alt="CSS"
                  width={50}
                  height={50}
                  className="object-contain w-8 sm:w-10 h-auto"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/new_logos/javascript.jpg"
                  alt="JavaScript"
                  width={50}
                  height={50}
                  className="object-contain w-8 sm:w-10 h-auto"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/new_logos/typescript.svg"
                  alt="TypeScript"
                  width={50}
                  height={50}
                  className="object-contain w-8 sm:w-10 h-auto"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/new_logos/nextjs.png"
                  alt="Next.js"
                  width={60}
                  height={50}
                  className="object-contain w-10 sm:w-12 h-auto"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/new_logos/new_logo_2.png"
                  alt="Tailwind CSS"
                  width={55}
                  height={50}
                  className="object-contain w-9 sm:w-12 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
