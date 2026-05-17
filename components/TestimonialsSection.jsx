import Link from "next/link";
import { getSupabase } from "../lib/supabase";

const SEED_REVIEWS = [
  {
    id: "seed-1",
    name: "Maria S.",
    location: "Renton, WA",
    rating: 5,
    text: "My mother goes to dialysis three times a week and Noble Medic Wheels has been a lifesaver for our whole family. The drivers are always on time, patient, and treat her with real dignity.",
  },
  {
    id: "seed-2",
    name: "Robert T.",
    location: "Tacoma, WA",
    rating: 5,
    text: "After my hip replacement I needed rides to physical therapy every week. Every pickup was early, the van was clean, and the driver helped me all the way to the door. Absolutely recommend.",
  },
  {
    id: "seed-3",
    name: "Jennifer K.",
    location: "Seattle, WA",
    rating: 5,
    text: "As a care coordinator I've referred many clients to Noble Medic Wheels. They're responsive, professional, and every client tells me how well they were treated. Truly reliable partners.",
  },
  {
    id: "seed-4",
    name: "David L.",
    location: "Lynnwood, WA",
    rating: 5,
    text: "My father uses a power wheelchair and I was nervous about medical transport. The driver secured everything perfectly, my dad felt completely safe, and they arrived right on time.",
  },
];

async function getApprovedReviews() {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("reviews")
      .select("id, name, location, rating, text")
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (error || !data?.length) return SEED_REVIEWS;
    return data;
  } catch {
    return SEED_REVIEWS;
  }
}

function Stars({ count }) {
  return (
    <div className="stars-display" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </div>
  );
}

export default async function TestimonialsSection() {
  const testimonials = await getApprovedReviews();

  return (
    <div>
      <h2 className="section-title">What Patients Are Saying</h2>
      <p className="section-subtitle">
        Real experiences from riders and families we serve across King, Pierce,
        and Snohomish County.
      </p>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <Stars count={t.rating} />
            <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
            <div className="testimonial-author">
              <span className="author-name">{t.name}</span>
              {t.location && (
                <span className="author-location">{t.location}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials-cta">
        <p>Had a great experience? We&apos;d love to hear from you.</p>
        <Link href="/reviews" className="btn-outline-teal">
          Leave a Review
        </Link>
      </div>
    </div>
  );
}
