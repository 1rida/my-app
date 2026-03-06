"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Wave from './ui/Wave';

gsap.registerPlugin(ScrollTrigger);

const ContactUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector('h2'),
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        detailsRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden py-16 lg:py-24">
      <div className="absolute top-0 left-0 w-full z-0 opacity-20 dark:opacity-10">
        <Wave />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white">
          Get In <span className="text-orange-500">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div ref={imageRef} className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            <Image
              src="/images/contact-image.jpg"
              alt="Contact Support Concept"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent pointer-events-none" />
          </div>

          {/* Right Side - Details */}
          <div ref={detailsRef} className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Let&apos;s <span className="text-orange-500">Connect</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities, creative ideas, or being part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="mailto:ridarasheed58@gmail.com" 
                className="group flex items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-orange-500 dark:hover:bg-orange-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-3 bg-orange-500 rounded-lg group-hover:bg-white transition-colors">
                  <FaEnvelope className="w-6 h-6 text-white group-hover:text-orange-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-orange-100 transition-colors">Email Me</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-white transition-colors">ridarasheed58@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+923131040410" 
                className="group flex items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-orange-500 dark:hover:bg-orange-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-3 bg-orange-500 rounded-lg group-hover:bg-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white group-hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-orange-100 transition-colors">Call Me</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-white transition-colors">+92 3131040410</p>
                </div>
              </a>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/1rida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center p-4 bg-gray-900 text-white rounded-xl hover:bg-orange-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaGithub size={24} className="mr-2" />
                  <span className="font-bold">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rida-rasheed-8638402b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center p-4 bg-[#0077b5] text-white rounded-xl hover:bg-orange-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaLinkedin size={24} className="mr-2" />
                  <span className="font-bold">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="p-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl">
              <p className="text-orange-500 font-medium italic">
                &quot;I believe in the power of technology to change the world and I am excited to be a part of it.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
