"use client";

import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Web Development',
    description: 'We build responsive and high-performing websites using modern technologies like React, Next.js, and TypeScript.',
  },
  {
    title: 'UI/UX Design',
    description: 'Our design team creates intuitive and visually appealing user interfaces that enhance user experience.',
  },
  {
    title: 'API Integration',
    description: 'We integrate third-party APIs and build custom APIs to connect your applications and services.',
  },
  {
    title: 'E-commerce Solutions',
    description: 'We develop robust e-commerce platforms that are secure, scalable, and optimized for conversions.',
  },
  {
    title: 'SEO & Marketing',
    description: 'We help you to rank higher in search engines and to promote your business.',
  },
  {
    title: 'Mobile App Development',
    description: 'We create mobile applications for iOS and Android that are fast, user-friendly, and engaging.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
