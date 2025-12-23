// my-app/src/app/api/gemini/route.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
  }

  const prompt = `
    You are a helpful assistant that sends emails.
    Send the following email:
    From: ${name} <${email}>
    To: contact@myportfolio.com
    Subject: New Contact Form Submission

    Name: ${name}
    Email: ${email}
    Message: ${message}
  `;

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
}
