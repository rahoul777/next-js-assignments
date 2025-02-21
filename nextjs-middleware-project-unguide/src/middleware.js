import { checkAuthentication, checkRole } from './utils/auth';
import { geoRedirect } from './utils/geo';
import { rateLimiter } from './utils/rateLimit';
import { abTesting } from './utils/abTest';

export async function middleware(req) {
    const middlewares = [checkAuthentication, checkRole, geoRedirect, rateLimiter, abTesting];
    for (const mw of middlewares) {
        const response = await mw(req);
        if (response) return response;
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/dashboard', '/admin', '/login'],
};
