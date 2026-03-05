"use client";
import React from 'react';

const Marquee: React.FC = () => {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "GSAP",
    "React",
  ];

  return (
    <div className="relative overflow-hidden py-8" >
      <div className="flex whitespace-nowrap animate-marquee">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center mx-1"
          >
            <span className="font-geist-sans text-2xl md:text-4xl lg:text-4xl gap-5 pl-8 font-semibold italic text-gray-400 leading-none">
              {tech}
            </span>
          </div>
        ))}
        {technologies.map((tech, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0 flex items-center justify-center mx-1"
          >
            <span className="font-geist-sans text-2xl md:text-4xl lg:text-4xl gap-5 pl-8 font-semibold italic text-gray-400 leading-none">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
