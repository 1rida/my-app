"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    image: "/images/web-dev.jpeg",
    title: "Web Development",
    description: "Building responsive and high-performance websites using modern technologies like React, Next.js, and Node.js.",
  },
  {
    image: "/images/ui-ux.jpeg",
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that provide an exceptional user experience.",
  },
  {
    image: "/images/seo.jpeg",
    title: "SEO & Performance",
    description: "Optimizing your web applications for search engines and ensuring they are fast, reliable, and scalable.",
  },
  {
    image: "/images/ecommerce.jpeg",
    title: "E-commerce Website",
    description: "Developing robust and scalable e-commerce solutions with seamless payment gateway integrations.",
  },
  {
    image: "/images/custom-website.jpeg",
    title: "Custom Website",
    description: "Designing and building custom websites tailored to your specific business needs and requirements.",
  },
  {
    image: "/images/domain.jpeg",
    title: "Domain & Hosting",
    description: "Providing domain registration and reliable hosting solutions to get your website online.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, rotationY: -60, transformPerspective: 1000 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            delay: index * 0.2,
          }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} id="services" className="bg-gray-700 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 ref={headingRef} className="font-geist-sans text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-white">
          Elevating Ideas into <span className="text-orange-500">Digital Reality</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16">
          I blend creativity with technology to deliver bespoke web solutions. From initial concept to final deployment, every project is a masterpiece in the making.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-gray-800 rounded-xl overflow-hidden relative"
            >
              <div className="overflow-hidden h-96">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-0 bg-black/70 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 group-hover:h-full">
                <h3 className="font-geist-sans text-2xl font-bold mb-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{service.title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
