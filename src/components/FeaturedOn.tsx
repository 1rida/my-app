"use client";

import React from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedOn: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Featured On
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex justify-center">
            <Image
              src="https://via.placeholder.com/150x50?text=Logo+1"
              alt="Featured on Logo 1"
              width={150}
              height={50}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://via.placeholder.com/150x50?text=Logo+2"
              alt="Featured on Logo 2"
              width={150}
              height={50}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://via.placeholder.com/150x50?text=Logo+3"
              alt="Featured on Logo 3"
              width={150}
              height={50}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://via.placeholder.com/150x50?text=Logo+4"
              alt="Featured on Logo 4"
              width={150}
              height={50}
            />
          </div>
          <div className="flex justify-center col-span-2 md:col-span-4 lg:col-span-1">
            <Image
              src="https://via.placeholder.com/150x50?text=Logo+5"
              alt="Featured on Logo 5"
              width={150}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
