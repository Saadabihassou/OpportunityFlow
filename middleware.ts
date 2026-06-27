import { NextResponse, type NextRequest } from "next/server";

/**
 * Auth middleware — protect dashboard routes.
 * Full implementation in Milestone 3 once Better Auth is configured.
 */
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/opportunities/:path*",
    "/saved/:path*",
    "/profile/:path*",
  ],
};
