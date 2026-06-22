import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request) {
  const d = await request.json();
  const rating = Number(d.rating) || 0;
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  if (!process.env.RESEND_API_KEY) {
    console.warn("[review] RESEND_API_KEY not set");
    return NextResponse.json({ ok: true });
  }

  const from = process.env.EMAIL_FROM ?? "Noble Medic Wheels <onboarding@resend.dev>";
  const to = process.env.EMAIL_TO ?? "williesdrive@gmail.com";

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from,
      to,
      subject: `New Review — ${rating} Stars from ${d.name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:auto">
          <h2 style="color:#0b2a4a">New Review Submitted</h2>
          <table cellpadding="8" style="border-collapse:collapse;font-size:15px;width:100%">
            <tr><td><strong>Name</strong></td><td>${d.name}</td></tr>
            <tr><td><strong>Location</strong></td><td>${d.location || "—"}</td></tr>
            <tr><td><strong>Rating</strong></td><td style="color:#f59e0b;font-size:20px">${stars}</td></tr>
          </table>
          <p style="font-size:15px;color:#334155;margin-top:12px"><em>"${d.text}"</em></p>
          <div style="margin-top:24px;padding:16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0">
            <p style="margin:0 0 8px;font-size:13px;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:.05em">To publish this review:</p>
            <ol style="margin:0;padding-left:20px;font-size:14px;color:#334155;line-height:1.8">
              <li>Open <code>lib/approvedReviews.js</code> in your project</li>
              <li>Add a new entry to the array with the details above</li>
              <li>Push to GitHub — review goes live in ~60 seconds</li>
            </ol>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("[review] Email error:", err.message);
  }

  return NextResponse.json({ ok: true });
}
