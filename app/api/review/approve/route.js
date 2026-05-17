import { NextResponse } from "next/server";
import { getSupabase } from "../../../../lib/supabase";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new NextResponse("Missing review ID.", { status: 400 });
  }

  const supabase = getSupabase();
  const { error } = await supabase
    .from("reviews")
    .update({ approved: true })
    .eq("id", id);

  if (error) {
    console.error("Approval failed:", error);
    return new NextResponse("Could not approve review. Check server logs.", { status: 500 });
  }

  // Redirect back to the reviews page so the owner can see it live
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.noblemedicwheels.com";
  return NextResponse.redirect(`${base}/reviews`);
}
