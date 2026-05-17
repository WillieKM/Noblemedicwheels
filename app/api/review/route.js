import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request) {
  const d = await request.json();
  const resend = new Resend(process.env.RESEND_API_KEY);
  const stars = "★".repeat(Number(d.rating)) + "☆".repeat(5 - Number(d.rating));

  try {
    await resend.emails.send({
      from: "Noble Medic Wheels <noreply@noblemedicwheels.com>",
      to: "info@noblemedicwheels.com",
      subject: `New Review — ${d.rating} Stars from ${d.name}`,
      html: `
        <h2 style="color:#0b2a4a">New Review Submitted</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:15px">
          <tr><td><strong>Name</strong></td><td>${d.name}</td></tr>
          <tr><td><strong>Location</strong></td><td>${d.location || "—"}</td></tr>
          <tr><td><strong>Rating</strong></td><td style="color:#f59e0b;font-size:18px">${stars}</td></tr>
        </table>
        <p style="font-family:sans-serif;font-size:15px;margin-top:12px">
          <strong>Review:</strong><br/>
          <em>"${d.text}"</em>
        </p>
        <hr/>
        <p style="font-family:sans-serif;font-size:13px;color:#64748b">
          To publish this review, add it to <code>components/TestimonialsSection.jsx</code>.
        </p>
      `,
    });
  } catch (err) {
    console.error("Email send failed:", err);
  }

  return NextResponse.json({ ok: true });
}
