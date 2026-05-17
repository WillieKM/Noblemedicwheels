import TestimonialsSection from "../../components/TestimonialsSection";
import ReviewForm from "./ReviewForm";

export const metadata = {
  title: "Patient Reviews & Testimonials",
  description:
    "Read what patients and families say about Noble Medic Wheels, and share your own experience with our non-emergency medical transportation service.",
  openGraph: {
    title: "Patient Reviews — Noble Medic Wheels",
    description:
      "Real reviews from riders across King, Pierce, and Snohomish County. Share your experience too.",
    url: "https://www.noblemedicwheels.com/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <main className="page">
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <h1>Patient Reviews</h1>
          <p>
            Honest feedback from the riders, families, and care coordinators
            who trust Noble Medic Wheels every day.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-light">
        <div className="container">
          <TestimonialsSection />
        </div>
      </section>

      {/* SUBMIT A REVIEW */}
      <section className="section-light" style={{ background: "#f0f9ff" }}>
        <div className="container">
          <div className="review-form-wrap">
            <div className="review-form-header">
              <h2 className="section-title">Share Your Experience</h2>
              <p className="section-subtitle">
                Your review helps other patients find dependable transportation
                and helps us keep improving our service.
              </p>
            </div>
            <div className="contact-card" style={{ maxWidth: "700px" }}>
              <ReviewForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container">
          <h2>Ready to Book a Ride?</h2>
          <p>
            Join hundreds of patients who count on Noble Medic Wheels for
            safe, on-time medical transportation.
          </p>
          <a href="/contact" className="btn-primary">
            Request a Ride
          </a>
        </div>
      </section>
    </main>
  );
}
