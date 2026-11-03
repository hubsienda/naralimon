import { NextRequest, NextResponse } from "next/server";

/**
 * Public-site simplification gate.
 *
 * These routes remain implemented in the repository for future reactivation,
 * but are intentionally unavailable and non-indexable while naralimon.com
 * publicly presents only Home, About and Contact plus legal pages.
 *
 * To reactivate a route, remove it from this list and restore the appropriate
 * navigation/sitemap entry.
 */
const INACTIVE_PUBLIC_PREFIXES = [
  "/representacion-comercial",
  "/intermediacion-alimentaria",
  "/aprovisionamiento",
  "/historias",
  "/klans",
  "/en/sales-representation",
  "/en/food-brokerage",
  "/en/sourcing",
  "/en/stories",
  "/en/klans",
] as const;

function isInactivePath(pathname: string): boolean {
  return INACTIVE_PUBLIC_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + "/"),
  );
}

export function middleware(request: NextRequest) {
  if (!isInactivePath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  return new NextResponse("Not Found", {
    status: 404,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}

export const config = {
  matcher: [
    "/representacion-comercial/:path*",
    "/intermediacion-alimentaria/:path*",
    "/aprovisionamiento/:path*",
    "/historias/:path*",
    "/klans/:path*",
    "/en/sales-representation/:path*",
    "/en/food-brokerage/:path*",
    "/en/sourcing/:path*",
    "/en/stories/:path*",
    "/en/klans/:path*",
  ],
};
