export function geoRedirect(req) {
    const country = req.geo?.country || 'US';
  
    if (country === 'IN') {
      return NextResponse.redirect(new URL('/in-homepage', req.url));
    } else if (country === 'DE') {
      return NextResponse.redirect(new URL('/de-homepage', req.url));
    }
  
    return null;
  }
  