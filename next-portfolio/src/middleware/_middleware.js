import { NextResponse } from 'next/server';
import { isAuthenticated } from '../context/AuthContext'; // Import the dummy variable

export function middleware(req) {
    const { pathname } = req.nextUrl;

    // If not authenticated and trying to access protected route
    if (!isAuthenticated && pathname === '/dashboard') {
        const loginUrl = new URL('/login', req.url);
        return NextResponse.redirect(loginUrl);
    }

    // Continue to requested page
    return NextResponse.next();
}
// Apply middleware only on these routes
export const config = {
    matcher: ['/dashboard'],
};
