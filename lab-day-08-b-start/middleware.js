import { NextResponse } from 'next/server';
export const middleware = (request) => {
    console.log("middleware>>", request.cookies);
    const token = request.cookies.get('session')?.value;
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
}