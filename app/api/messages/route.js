import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // For demo purposes, we'll return an empty array
    // In a real implementation, you would fetch this from a database
    return NextResponse.json([]);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
