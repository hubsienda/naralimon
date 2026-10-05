import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();

  if (host === "naralimon.es" || host === "www.naralimon.es") {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.host = "naralimon.com";
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
