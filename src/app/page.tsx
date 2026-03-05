"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from '../components/Hero'; // Import the Hero component
import Marquee from '../components/Marquee'; // Import the Marquee component
import FeaturedOn from '../components/FeaturedOn'; // Import the FeaturedOn component
import Services from '../components/Services'; // Import the Services component
import Process from '../components/Process'; // Import the Process component
import Footer from '../components/Footer'; // Import the Footer component
import ContactUs from '../components/ContactUs'; // Import the ContactUs component

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />

      <FeaturedOn />
      <Services />
      <Process />
      <ContactUs />
      <Footer />
    </main>
  );
}
