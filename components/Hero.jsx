import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>Safe, Reliable & Compassionate Medical Transportation</h1>
        <p>
          Serving King &amp; Pierce County with ADA-compliant vehicles,
          professional drivers, and on-time pickups you can count on.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn-primary">Request a Ride</Link>
          <Link href="/brokers" className="btn-secondary">For Brokers</Link>
        </div>
        <p className="hero-note">
          ADA-Compliant &bull; Wheelchair Accessible &bull; Local &amp; Reliable
        </p>
      </div>
    </section>
  );
}
