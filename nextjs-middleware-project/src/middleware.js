import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || '';

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

export function geoRedirect(req) {
    const country = req.geo?.country || 'US';

    if (country === 'IN') {
        return NextResponse.redirect(new URL('/in', req.url));
    }
    if (country === 'DE') {
        return NextResponse.redirect(new URL('/de', req.url));
    }

    return null;
}

const rateLimit = new Map();
export function rateLimiter(req) {
    const clientIP = req.ip || req.headers.get('x-forwarded-for');
    const now = Date.now();

    if (!rateLimit.has(clientIP)) {
        rateLimit.set(clientIP, []);
    }

    const timestamps = rateLimit.get(clientIP);
    timestamps.push(now);

    while (timestamps.length && timestamps[0] < now - 60000) {
        timestamps.shift();
    }

    if (timestamps.length > 5) {
        return new Response('Too many requests, slow down!', { status: 429 });
    }

    rateLimit.set(clientIP, timestamps);
    return null;
}

export function abTesting(req) {
    const random = Math.random();

    if (random < 0.5) {
        req.nextUrl.pathname = '/new-feature';
        return NextResponse.rewrite(req.nextUrl);
    }

    return null;
}

function composeMiddlewares(...middlewares) {
    return async (req) => {
        for (const middleware of middlewares) {
            const response = await middleware(req);
            if (response) return response;
        }
        return NextResponse.next();
    };
}

export const middleware = composeMiddlewares(
    checkAuthentication,
    checkRole,
    geoRedirect,
    rateLimiter,
    abTesting
);

export const config = {
    matcher: ['/dashboard/:path*', '/admin/:path*', '/api/:path*'],
};
