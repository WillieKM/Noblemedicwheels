import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request) {
  const d = await request.json();

  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping email");
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.EMAIL_FROM ?? "Noble Medic Wheels <onboarding@resend.dev>";
  const to = process.env.EMAIL_TO ?? "williesdrive@gmail.com";

  try {
    await resend.emails.send({
      from,
      to,
      subject: `New Ride Request — ${d.name}`,
      html: `
        <h2 style="color:#0b2a4a">New Ride Request</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:15px">
          <tr><td><strong>Name</strong></td><td>${d.name}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${d.phone}</td></tr>
          <tr><td><strong>Email</strong></td><td>${d.email || "—"}</td></tr>
          <tr><td><strong>Pickup</strong></td><td>${d.pickup}</td></tr>
          <tr><td><strong>Destination</strong></td><td>${d.destination}</td></tr>
          <tr><td><strong>Ride Type</strong></td><td>${d.rideType}</td></tr>
          <tr><td><strong>Date</strong></td><td>${d.date}</td></tr>
          <tr><td><strong>Time</strong></td><td>${d.time}</td></tr>
          <tr><td><strong>Notes</strong></td><td>${d.notes || "—"}</td></tr>
        </table>
      `,
    });
  } catch (err) {
    console.error("Email send failed:", err);
  }

  return NextResponse.json({ ok: true });
}
