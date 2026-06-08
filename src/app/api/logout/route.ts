import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect(
    new URL("/dashboard/login", process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000")
  );
  response.cookies.set("defend-admin", "", { maxAge: 0, path: "/" });
  return response;
}
