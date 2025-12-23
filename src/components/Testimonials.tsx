"use client";

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const testimonials = [
  {
    quote: "This is the best service I have ever used. I am very satisfied with the results.",
    author: "John Doe",
    company: "CEO, Company Inc.",
    avatar: "https://via.placeholder.com/100x100?text=JD"
  },
  {
    quote: "The team was very professional and delivered a high-quality product. I would definitely recommend them.",
    author: "Jane Smith",
    company: "Marketing Manager, Another Co.",
    avatar: "https://via.placeholder.com/100x100?text=JS"
  },
  {
    quote: "I am very happy with the final product. The team was very responsive and easy to work with.",
    author: "Peter Jones",
    company: "CTO, Tech Corp.",
    avatar: "https://via.placeholder.com/100x100?text=PJ"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".testimonial", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
          gsap.to(".testimonial", { opacity: 1, duration: 0.5 });
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Testimonials
        </h2>
        <div className="testimonial text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].author}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <p className="text-xl text-gray-600 mb-6">
            "{testimonials[currentIndex].quote}"
          </p>
          <p className="text-gray-800 font-bold">
            {testimonials[currentIndex].author}
          </p>
          <p className="text-gray-500">
            {testimonials[currentIndex].company}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
