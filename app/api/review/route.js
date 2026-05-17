import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request) {
  const d = await request.json();
  const stars = "★".repeat(Number(d.rating)) + "☆".repeat(5 - Number(d.rating));
  let reviewId = null;

  // 1. Try to save to DB — but don't let a DB failure block the email
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY) {
    try {
      const { getSupabase } = await import("../../../lib/supabase");
      const supabase = getSupabase();
      const { data, error } = await supabase
        .from("reviews")
        .insert({
          name: d.name,
          location: d.location || null,
          rating: Number(d.rating),
          text: d.text,
          approved: false,
        })
        .select("id")
        .single();

      if (error) console.error("DB insert failed:", error);
      else reviewId = data?.id;
    } catch (err) {
      console.error("Supabase error:", err);
    }
  }

  // 2. Always send the email
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping email");
    return NextResponse.json({ ok: true });
  }

  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.noblemedicwheels.com";
  const approveUrl = reviewId
    ? `${base}/api/review/approve?id=${reviewId}`
    : null;

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM ?? "Noble Medic Wheels <onboarding@resend.dev>",
      to: process.env.EMAIL_TO ?? "williesdrive@gmail.com",
      subject: `New Review — ${d.rating} Stars from ${d.name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:auto">
          <h2 style="color:#0b2a4a">New Review Submitted</h2>
          <table cellpadding="8" style="border-collapse:collapse;font-size:15px;width:100%">
            <tr><td><strong>Name</strong></td><td>${d.name}</td></tr>
            <tr><td><strong>Location</strong></td><td>${d.location || "—"}</td></tr>
            <tr><td><strong>Rating</strong></td><td style="color:#f59e0b;font-size:20px">${stars}</td></tr>
          </table>
          <p style="font-size:15px;color:#334155;margin-top:12px">
            <em>"${d.text}"</em>
          </p>
          ${approveUrl ? `
          <a href="${approveUrl}"
             style="display:inline-block;margin-top:20px;background:#0ea5a4;color:white;
                    padding:12px 28px;border-radius:8px;text-decoration:none;
                    font-weight:700;font-size:16px">
            ✓ Approve &amp; Publish Review
          </a>
          <p style="font-size:12px;color:#94a3b8;margin-top:16px">
            Only click if you want this review to appear publicly on the website.
          </p>
          ` : `
          <p style="font-size:13px;color:#94a3b8;margin-top:16px;font-style:italic">
            (Supabase not configured — set up DB to enable one-click approval)
          </p>
          `}
        </div>
      `,
    });
  } catch (err) {
    console.error("Email send failed:", err.message);
  }

  return NextResponse.json({ ok: true });
}
