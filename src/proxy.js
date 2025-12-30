import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function proxy(req) {
  const token = await getToken({ req });
  const { pathname, search } = req.nextUrl;

  const isAuthenticated = Boolean(token);

  if (!isAuthenticated) {
    const originalUrl = `${pathname}${search}`;

    const loginUrl = new URL("/login", req.url);

    loginUrl.searchParams.set("callbackUrl", originalUrl);

    return NextResponse.redirect(loginUrl);
  }

  const isUser = token?.role === "user";
  if (!isUser) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/myBookings", "/booking/:path*"],
};
