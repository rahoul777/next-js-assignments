import { NextResponse } from 'next/server';
import { checkAuthentication } from './utils/auth';
import { rateLimiter } from './utils/rateLimit';
import { geoRedirect } from './utils/geoRedirect';
import { abTest } from './utils/abTesting';
import { roleControl } from './utils/roleControl';
import { logger } from './utils/logger';


export async function middleware(req) {
  // Logger Middleware
  logger(req);

  // Authentication & Role Validation
  const authRedirect = await checkAuthentication(req);
  if (authRedirect) return authRedirect;

  // Rate Limiting
  const rateLimitRedirect = rateLimiter(req);
  if (rateLimitRedirect) return rateLimitRedirect;

  // Geo-Redirection
  const geoRedirectResponse = geoRedirect(req);
  if (geoRedirectResponse) return geoRedirectResponse;

  // A/B Testing
  const abTestResponse = abTest(req);
  if (abTestResponse) return abTestResponse;

  // Role-Based Access Control
  const roleRedirect = roleControl(req);
  if (roleRedirect) return roleRedirect;

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/profile',
    '/settings/:path*',
  ],
};
