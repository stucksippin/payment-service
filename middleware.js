import { NextResponse } from 'next/server'
import withAuth from 'next-auth/middleware'

export default withAuth(
    function middleware(req) {
        if (req.nextUrl.pathname === '/login') {
            return;
        }
        if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token.role !== 'admin') {
            return NextResponse.redirect(new URL('/login'), req.url)
        }
        if (req.nextUrl.pathname.startsWith('/user') && req.nextauth.token.role !== 'user') {
            return NextResponse.redirect(new URL('/login'), req.url)
        }
    }
)
