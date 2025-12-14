import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get IP from headers (works with proxies/load balancers)
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 
               request.headers.get('x-real-ip') || 
               '0.0.0.0';

    // Get referrer from headers
    const referrer = request.headers.get('referer') || '';

    // Get gclid from query params
    const { searchParams } = new URL(request.url);
    const gclid = searchParams.get('gclid') || '';

    console.log('🔍 Server-side validation request:', { ip, gclid, referrer });

    // Get country from IP (using ipapi.co)
    let country = 'United Kingdom';
    try {
      const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`, {
        headers: {
          'User-Agent': 'WinningSpins-Server/1.0'
        }
      });
      if (geoResponse.ok) {
        const geoData = await geoResponse.json();
        country = geoData.country_name || 'United Kingdom';
      }
    } catch (error) {
      console.error('⚠️ Geo lookup failed:', error);
    }

    // Call validation API
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
    console.log('✅ Validation API response:', validationData);

    // Return validation result
    return NextResponse.json({
      validated: validationData.result === true,
      ip,
      country,
      gclid,
      referrer,
      debug: validationData
    });

  } catch (error) {
    console.error('❌ Validation API error:', error);
    return NextResponse.json({
      validated: false,
      error: 'Validation failed'
    }, { status: 500 });
  }
}

