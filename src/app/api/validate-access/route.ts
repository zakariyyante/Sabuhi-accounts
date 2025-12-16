import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get IP from headers (works with proxies/load balancers)
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 
               request.headers.get('x-real-ip') || 
               '0.0.0.0';

    // Get params from query string (client passes these)
    const { searchParams } = new URL(request.url);
    const gclid = searchParams.get('gclid') || '';
    const referrer = searchParams.get('referrer') || '';

    // Country defaults to United Kingdom (no external API lookup needed)
    const country = 'United Kingdom';

    // Call validation API (ONLY external API call)
    const validationResponse = await fetch('https://checker-eta-ashy.vercel.app/api/check-ip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ip,
        country,
        gclid,
        referrer,
      }),
    });

    const validationData = await validationResponse.json();

    // Return validation result
    return NextResponse.json({
      validated: validationData.result === true,
      ip,
      country,
      gclid,
      referrer
    });

  } catch (error) {
    return NextResponse.json({
      validated: false,
      error: 'Validation failed'
    }, { status: 500 });
  }
}



