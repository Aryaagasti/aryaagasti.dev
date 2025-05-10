import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // For now, we'll just log the message and return success
    // In a real implementation, you would save this to a database
    console.log('Contact form submission:', { name, email, message });

    // Store in localStorage for demo purposes
    if (typeof window !== 'undefined') {
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      messages.push({
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('contactMessages', JSON.stringify(messages));
    }

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing message:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
