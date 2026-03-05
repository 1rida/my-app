"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardList, Palette, Code, Rocket, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    icon: <ClipboardList className="h-10 w-10 text-orange-500" />,
    title: '1. Discovery & Strategy',
    description: 'We start by understanding your goals, audience, and project requirements to build a comprehensive strategy for success.',
  },
  {
    icon: <Palette className="h-10 w-10 text-orange-500" />,
    title: '2. UI/UX Design',
    description: 'Next, we create intuitive and visually stunning designs, focusing on user experience to ensure your product is a joy to use.',
  },
  {
    icon: <Code className="h-10 w-10 text-orange-500" />,
    title: '3. Development',
    description: 'Our expert developers bring the designs to life with clean, efficient, and scalable code using the latest technologies.',
  },
  {
    icon: <Rocket className="h-10 w-10 text-orange-500" />,
    title: '4. Deployment & Launch',
    description: 'After rigorous testing, we deploy your project to a robust infrastructure and ensure a smooth launch.',
  },
];

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.fromTo(
            step,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.2,
            }
          );
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="process" className="bg-background  sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={headingRef} className="text-4xl sm:text-5xl font-extrabold text-center text-foreground mb-16">
          Our <span className="text-orange-500">Development Process</span>
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                ref={(el) => (stepsRef.current[index] = el)}
                className="text-center p-6 bg-foreground/5 rounded-lg"
              >
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2" style={{ left: `${(index + 1) * 25 - 2}%` }}>
                    <ChevronRight className="h-8 w-8 text-foreground/20" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;