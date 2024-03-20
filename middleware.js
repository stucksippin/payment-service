import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(req) {
        if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token.role !== 'admin') {
            return NextResponse.redirect(new URL('/'), req.url)
        }
    }
)

export const config = { matcher: [ "/register", "/moneystatistic"] }




// import { withAuth } from 'next-auth/middleware'
// import { NextResponse } from 'next/server'

// export default withAuth(
//     function middleware(req) {
//         const userRole = req.nextauth.token.role;

  
//         if (userRole === 'Admin') {
//             if (req.nextUrl.pathname.startsWith("/register", "/moneystatistic")) {
//                 return NextResponse.next();
//             } else {
//                 return NextResponse.redirect(new URL('/'), req.url)
//             }
//         } else {
//             if (req.nextUrl.pathname.startsWith('/account', 'cardList')) {
//                 return NextResponse.next();
//             } else {
//                 return NextResponse.redirect(new URL('/'), req.url)
//             }
//         }
//     }
// )
