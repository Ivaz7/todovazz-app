import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out" });
  response.cookies.set('todovazzToken', '', {
    httpOnly: true,
    expires: new Date(0), // force expired
    path: '/'
  });
  return response;
}
