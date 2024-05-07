// middleware.js

import { NextResponse } from 'next/server';
import withAuth from 'next-auth/middleware';

export default withAuth(function middleware(req) {
    if (req.nextUrl.pathname === '/login') {
        return;
    }
    if (req.nextUrl.pathname.startsWith('/admin/:path*') && req.nextauth.token.role !== 'admin') {
        return NextResponse.redirect(`${req.nextUrl.origin}/login`);
    }
    if (req.nextUrl.pathname.startsWith('/user/:path*') && (req.nextauth.token.role !== 'user' || req.nextauth.token.role !== 'admin')) {
        return NextResponse.redirect(`${req.nextUrl.origin}/login`);
    }
});

export const config = {
    matcher: ['/admin/:path*', '/user/:path*']
};
