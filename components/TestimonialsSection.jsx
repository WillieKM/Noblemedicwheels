import Link from "next/link";
import { approvedReviews } from "../lib/approvedReviews";

function Stars({ count }) {
  return (
    <div className="stars-display" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <div>
      <h2 className="section-title">What Patients Are Saying</h2>
      <p className="section-subtitle">
        Real experiences from riders and families we serve across King, Pierce,
        and Snohomish County.
      </p>

      <div className="testimonials-grid">
        {approvedReviews.map((t) => (
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
