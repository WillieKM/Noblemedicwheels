import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-badge">King, Pierce &amp; Snohomish County NEMT</div>
        <h1>Safe, Reliable &amp; Compassionate Medical Transportation</h1>
        <p>
          ADA-compliant vehicles, professional drivers, and on-time pickups —
          so getting to your appointment is never a barrier.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn-hero-primary">Request a Ride</Link>
          <Link href="/brokers" className="btn-hero-secondary">For Brokers</Link>
        </div>

        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-num">500+</span>
            <span className="trust-label">Rides Completed</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">3</span>
            <span className="trust-label">Counties Served</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">ADA</span>
            <span className="trust-label">Compliant Fleet</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">5★</span>
            <span className="trust-label">Patient-Rated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
