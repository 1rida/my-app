// my-app/src/app/api/gemini/route.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const lowPrompt = prompt.toLowerCase();

    // Custom exact responses for specific questions (No API key needed)
    if (lowPrompt === 'hi' || lowPrompt === 'hello' || lowPrompt === 'hey') {
      return NextResponse.json({ text: "Hello! I am Rida's AI assistant. How can I help you today?" });
    }
    if (lowPrompt.includes('name')) {
      return NextResponse.json({ text: "my name is rida rasheed" });
    }
    if (lowPrompt.includes('qualification') || lowPrompt.includes('education') || lowPrompt.includes('study') || lowPrompt.includes('graduation')) {
      return NextResponse.json({ text: "my qualification is graduation" });
    }
    if (lowPrompt.includes('skill')) {
      return NextResponse.json({ text: "My skills include MERN Stack (MongoDB, Express.js, React, Node.js), Next.js 14, TypeScript, Tailwind CSS, GSAP for animations, and modern DevOps." });
    }
    if (lowPrompt.includes('service') || lowPrompt.includes('offer') || lowPrompt.includes('work')) {
      return NextResponse.json({ text: "I offer Custom Web Development, UI/UX Design, SEO & Performance optimization, E-commerce Solutions, and Domain & Hosting management." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API Key not found' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // ... model and instruction setup follows ...

    // System instruction for all other queries
    const systemInstruction = `You are the professional AI assistant for Rida Rasheed's personal portfolio website. 
    Your identity is "Rida's Portfolio Assistant". 

    About Rida Rasheed:
    - NAME: Rida Rasheed
    - ROLE: Senior Full Stack Web Developer.
    - CORE EXPERTISE: MERN Stack (MongoDB, Express.js, React, Node.js), Next.js 14, TypeScript, Tailwind CSS, GSAP for animations, and modern DevOps.
    - ACADEMIC QUALIFICATION: Graduation.
    - SERVICES:
        1. Custom Web Development: Crafting responsive, high-performance websites.
        2. UI/UX Design: Creating intuitive and beautiful user interfaces.
        3. SEO & Performance: Optimizing for search engines and lightning-fast load times.
        4. E-commerce Solutions: Building scalable online stores with secure payment integrations.
        5. Domain & Hosting: Managing technical setup and deployment.
    
    INSTRUCTIONS:
    - Always provide Rida's name as "Rida Rasheed".
    - Always state her qualification as "Graduation".
    - Keep responses professional, helpful, and concise.
    - If a user asks about something unrelated to Rida's professional profile, politely redirect them to her work or services.`;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash", 
      systemInstruction: systemInstruction,
    });

    // We can use generateContent directly for a simple Q&A bot if no history is needed,
    // but startChat is better for multi-turn conversations.
    const chat = model.startChat({
      history: [], 
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      }
    });

    const result = await chat.sendMessage(prompt);
    const text = result.response.text();
    return NextResponse.json({ text });
  } catch (error: any) {
    console.error('Gemini Error:', error);
    // Return a more user-friendly message but log the actual error
    return NextResponse.json({ 
      error: 'I am currently updating my brain. Please try asking again in a moment!',
      details: error.message 
    }, { status: 500 });
  }
}
