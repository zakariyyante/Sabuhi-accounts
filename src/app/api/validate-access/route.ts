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

    console.log('🔍 Server-side validation request:', { ip, country, gclid, referrer });
    console.log('📋 Request details:', {
      has_gclid: !!gclid,
      has_referrer: !!referrer,
      referrer_contains_google: referrer.toLowerCase().includes('google')
    });

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
    
    console.log('='.repeat(60));
    console.log('✅ VALIDATION API RESPONSE:');
    console.log('='.repeat(60));
    console.log('Full Response:', JSON.stringify(validationData, null, 2));
    console.log('Result:', validationData.result);
    console.log('Result Type:', typeof validationData.result);
    console.log('Result === true:', validationData.result === true);
    console.log('='.repeat(60));

    // Return validation result
    const finalResult = {
      validated: validationData.result === true,
      ip,
      country,
      gclid,
      referrer,
      debug: validationData
    };
    
    console.log('📤 Sending to client:', finalResult);
    
    return NextResponse.json(finalResult);

  } catch (error) {
    console.error('❌ Validation API error:', error);
    return NextResponse.json({
      validated: false,
      error: 'Validation failed'
    }, { status: 500 });
  }
}



