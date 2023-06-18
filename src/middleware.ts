import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {

    const session: any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const requestedPage = req.nextUrl.pathname;
    const validRoles = ['admin', 'owner'];
    if( !session ){
        const url = req.nextUrl.clone();
        url.pathname = `/auth/login`;
        url.search = `p=${ requestedPage }`;
        if( requestedPage.includes('/api') ){
          return new Response( JSON.stringify({ message: 'No autorizado' }),{
            status: 401,
            headers:{
              'Content-Type':'application/json'
            }
          });
        };
        return NextResponse.redirect( url );
    };

    if( requestedPage.includes('/dashboard') && !validRoles.includes( session.role ) ){
      return NextResponse.redirect(new URL('/', req.url));
    };
    return NextResponse.next();
};
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/checkout/:path*','/orders/:path*','/api/orders/:path*','/admin/:path*','/api/admin/:path*','/dashboard'],
  //matcher: ["/((?!register|api|login).*)"],
};
