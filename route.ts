import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST() {
  const prompt = \`The user opened Instagram 4 times in 30 minutes. Give a friendly, Gen Z-style message and suggest a 10-minute dopamine-reset activity.\`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful wellness coach for Gen Z users.' },
      { role: 'user', content: prompt },
    ],
    temperature: 0.8,
  });

  const message = completion.choices[0].message.content;
  return NextResponse.json({ message });
}