"use client";

import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 mb-4">
              We are a team of passionate developers and designers who love to build amazing things. We are dedicated to providing our clients with the best possible experience and helping them to achieve their goals.
            </p>
            <p className="text-gray-600">
              Our mission is to create beautiful, functional, and user-friendly websites and applications that make a difference. We believe in the power of technology to change the world and we are excited to be a part of it.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://via.placeholder.com/500x500?text=About+Us"
              alt="About Us"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
