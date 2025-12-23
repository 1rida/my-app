"use client";
import React, { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from '../components/Hero'; // Import the Hero component

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Hero />
      <section className="section-two h-screen flex flex-col items-center justify-center bg-gray-900 p-8 text-white">
        <p className="section-two-text text-3xl font-semibold mb-4">
          Explore my innovative projects.
        </p>
        <p className="section-two-text text-xl max-w-2xl text-center">
          I leverage cutting-edge AI and web technologies to build impactful
          solutions. From intelligent chatbots to dynamic web applications,
          discover how I bring ideas to life.
        </p>
      </section>

      <section className="section-three h-screen flex items-center justify-center bg-blue-500 text-black">
        <h2 className="text-5xl font-extrabold">Scroll Down for More!</h2>
      </section>

      <section className="section-four h-screen flex items-center justify-center bg-gray-950 p-8">
        <img
          src="https://via.placeholder.com/600x400/FFFFFF/000000?text=Awesome+Project" // Placeholder image
          alt="Awesome Project"
          className="section-four-image max-w-full h-auto rounded-lg shadow-2xl"
        />
      </section>

      <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" disabled={loading} className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-500">
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            {success && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
