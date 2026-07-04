import { NextResponse, type NextRequest } from "next/server";
import { CV_SITE, isCvHost, isMainHost } from "@/lib/cv/site";

function rewriteTo(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  return NextResponse.rewrite(url);
}

/** Paths that must resolve on the CV host (not redirected to /). */
const CV_PASSTHROUGH = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/site.webmanifest",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host");

  // Public JSON on every host (local /cv preview + production CV subdomain)
  if (pathname === "/resume.json") {
    return rewriteTo(request, "/cv/resume.json");
  }

  // cv.allseen.com → internal /cv routes (clean public URLs)
  if (isCvHost(host)) {
    if (pathname === "/" || pathname === "") {
      return rewriteTo(request, "/cv");
    }

    // Allow direct /cv paths (local debugging on the CV host)
    if (pathname === "/cv" || pathname.startsWith("/cv/")) {
      return NextResponse.next();
    }

    if (CV_PASSTHROUGH.has(pathname)) {
      return NextResponse.next();
    }

    // Keep the CV host focused on the resume only
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Production main site: send /cv traffic to the CV subdomain
  if (isMainHost(host) && (pathname === "/cv" || pathname.startsWith("/cv/"))) {
    const suffix =
      pathname === "/cv" || pathname === "/cv/"
        ? "/"
        : pathname.slice("/cv".length);
    return NextResponse.redirect(new URL(suffix, CV_SITE.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Skip Next internals and static files.
     * /cv, /resume.json, /robots.txt, /sitemap.xml must still run through middleware.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|webmanifest)$).*)",
  ],
};
