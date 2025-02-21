import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export function checkAuthentication(req) {
    const token = req.cookies.get('auth-token');
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
        const user = jwt.verify(token, SECRET_KEY);
        req.user = user;
    } catch (error) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return null;
}
export function checkRole(req) {
    const user = req.user;
    if (req.nextUrl.pathname.startsWith('/admin') && user.role !== 'admin') {
        return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
    return null;
}
