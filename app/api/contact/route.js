import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  // TODO: integrate Resend, Nodemailer, or similar to email ride requests to info@noblemedicwheels.com
  console.log("Ride request received:", data);
  return NextResponse.json({ ok: true });
}
