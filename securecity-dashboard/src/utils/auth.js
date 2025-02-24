import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';
const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET);

export async function checkAuthentication(req) {
  const token = req.cookies.get('auth-token');
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    req.user = payload;
  } catch (error) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }
  return null;
}
