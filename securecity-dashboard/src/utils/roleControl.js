export function roleControl(req) {
    const { user } = req;
    const role = user?.role;
  
    if (req.nextUrl.pathname.startsWith('/admin') && role !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  
    if (req.nextUrl.pathname.startsWith('/dashboard') && !['user', 'admin'].includes(role)) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  
    return null;
  }
  