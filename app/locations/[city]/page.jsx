import { notFound } from "next/navigation";
import Link from "next/link";
import { cities } from "../../../lib/locationData";

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const data = cities.find((c) => c.slug === params.city);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDesc,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
      url: `https://www.noblemedicwheels.com/locations/${data.slug}`,
    },
  };
}

const services = [
  { icon: "♿", name: "Wheelchair Transportation", desc: "ADA-compliant vehicles with ramps and secure locking systems." },
  { icon: "🚶", name: "Ambulatory Rides", desc: "Comfortable rides for passengers who walk independently or with minimal assistance." },
  { icon: "📅", name: "Dialysis Transport", desc: "Recurring, scheduled trips to dialysis centers — consistent and reliable." },
  { icon: "🏥", name: "Hospital Discharges", desc: "Safe, coordinated rides home from hospitals and medical facilities." },
];

export default function CityPage({ params }) {
  const data = cities.find((c) => c.slug === params.city);
  if (!data) notFound();

  return (
    <main className="page">
      {/* BREADCRUMB + HEADER */}
      <section className="page-header">
        <div className="container">
          <p className="location-breadcrumb">
            <Link href="/service-area">Service Area</Link> &rsaquo; {data.county} &rsaquo; {data.city}
          </p>
          <h1>Non-Emergency Medical Transportation in {data.city}, {data.state}</h1>
          <p>{data.intro}</p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Request a Ride in {data.city}</Link>
            <a href="tel:2533749087" className="btn-outline-teal">Call 253-374-9087</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-light">
        <div className="container">
          <h2 className="section-title">NEMT Services in {data.city}</h2>
          <p className="section-subtitle">
            Every service is provided with ADA-compliant vehicles and professionally trained drivers.
          </p>
          <div className="services-box-grid">
            {services.map((s) => (
              <div key={s.name} className="service-box">
                <div className="card-icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-light" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <h2 className="section-title">Why {data.city} Residents Choose Us</h2>
              <ul className="checklist" style={{ marginTop: "1.5rem" }}>
                <li>On-time pickups — every trip, every time</li>
                <li>ADA-compliant, sanitized vehicles</li>
                <li>Trained drivers who assist door-to-door</li>
                <li>Flexible scheduling including recurring rides</li>
                <li>Locally owned — real accountability</li>
                <li>Serving {data.county} with pride</li>
              </ul>
            </div>
            <div className="contact-card">
              <h3>Book a Ride in {data.city}</h3>
              <p style={{ color: "#475569", marginBottom: "1.25rem" }}>
                Call or text us directly, or fill out a ride request online. We confirm quickly.
              </p>
              <p style={{ fontWeight: 700, fontSize: "1.3rem", color: "#0ea5a4", marginBottom: "1rem" }}>
                <a href="tel:2533749087" style={{ color: "inherit", textDecoration: "none" }}>253-374-9087</a>
              </p>
              <Link href="/contact" className="btn-primary" style={{ display: "block", textAlign: "center" }}>
                Request a Ride Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      {data.highlights && (
        <section className="section-light">
          <div className="container">
            <div className="boxed-card">
              <h2>What We Cover in {data.city}</h2>
              <ul className="list" style={{ marginTop: "1rem" }}>
                {data.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* NEARBY AREAS */}
      {data.nearbyAreas && (
        <section className="section-light">
          <div className="container">
            <h2 className="section-title">Also Serving Near {data.city}</h2>
            <div className="county-grid" style={{ marginTop: "1.5rem" }}>
              {data.nearbyAreas.map((area) => {
                const nearby = cities.find((c) => c.city === area);
                return nearby ? (
                  <Link key={area} href={`/locations/${nearby.slug}`} className="county-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                    <strong>{area}</strong>
                    <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.25rem" }}>{nearby.county}</p>
                  </Link>
                ) : (
                  <div key={area} className="county-card">
                    <strong>{area}</strong>
                    <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.25rem" }}>{data.county}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-cta">
        <div className="container">
          <h2>Ready to Book Your Ride in {data.city}?</h2>
          <p>Safe, ADA-compliant transportation — scheduled around your medical appointments.</p>
          <Link href="/contact" className="btn-primary">Request a Ride</Link>
        </div>
      </section>
    </main>
  );
}
