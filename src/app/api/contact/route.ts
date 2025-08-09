import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData, ApiResponse } from '@/types';

// Placeholder API route for contact form submissions
// In Phase 2, this will integrate with the NestJS backend
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: 'All fields are required'
      }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json<ApiResponse>({
        success: false,
        error: 'Invalid email format'
      }, { status: 400 });
    }

    // TODO: Phase 2 - Send to NestJS backend or email service
    // For now, just log the submission
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json<ApiResponse>({
      success: true,
      data: { message: 'Message sent successfully' }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json<ApiResponse>({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
}