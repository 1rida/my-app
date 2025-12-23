"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from '../components/Hero'; // Import the Hero component
import FeaturedOn from '../components/FeaturedOn'; // Import the FeaturedOn component
import Services from '../components/Services'; // Import the Services component
import AboutUs from '../components/AboutUs'; // Import the AboutUs component
import Testimonials from '../components/Testimonials'; // Import the Testimonials component
import ContactUs from '../components/ContactUs'; // Import the ContactUs component
import Footer from '../components/Footer'; // Import the Footer component

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedOn />
      <Services />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
}
