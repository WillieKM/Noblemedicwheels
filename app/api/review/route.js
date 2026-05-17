import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  // TODO: send review to info@noblemedicwheels.com via Resend/Nodemailer for moderation
  // before adding approved reviews to TestimonialsSection.jsx
  console.log("New review submitted:", data);
  return NextResponse.json({ ok: true });
}
