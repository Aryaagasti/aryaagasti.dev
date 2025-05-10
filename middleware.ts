import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for the admin area
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // In a real application, you would implement proper authentication
    // For now, we'll use a simple basic auth check
    const basicAuth = request.headers.get('authorization')

    if (!basicAuth) {
      return new NextResponse(null, {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      })
    }

    // Remove "Basic " from the beginning of the header
    const authValue = basicAuth.split(' ')[1]
    // Decode the base64 value
    const [username, password] = atob(authValue).split(':')

    // Check credentials (in a real app, you would check against a database)
    // Replace these with your desired username and password
    if (username !== 'admin' || password !== 'portfolio123') {
      return new NextResponse(null, {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
