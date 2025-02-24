export function abTest(req) {
    const variant = Math.random() < 0.5 ? 'classic' : 'new';
    req.cookies.set('ab-variant', variant);
  
    if (req.nextUrl.pathname === '/dashboard') {
      return NextResponse.rewrite(new URL(`/dashboard/${variant}`, req.url));
    }
  
    return null;
  }
  