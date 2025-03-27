import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export function middleware(req) {
  const token = req.cookies.get("token");
  const role = req.cookies.get("role");

  const url = req.nextUrl.pathname;

  if (!token && url !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (url === "/admin" && role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
  

}

export const config = {
  matcher: ["/dashboard", "/admin"],
};
