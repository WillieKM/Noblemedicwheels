import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Our Fleet | Non-Emergency Cabulance Vehicles | Noble Medic Wheels",
  description:
    "ADA-compliant, professionally maintained cabulance and wheelchair vans built for safe, comfortable non-emergency medical transportation in King, Pierce, Snohomish & Thurston County.",
  alternates: { canonical: "/fleet" },
  openGraph: {
    title: "Our Fleet — Non-Emergency Cabulance Vehicles | Noble Medic Wheels",
    description:
      "ADA-compliant, professionally maintained cabulance and wheelchair vans serving King, Pierce, Snohomish & Thurston County.",
    url: "https://www.noblemedicwheels.com/fleet",
  },
};

export default function FleetPage() {
  return (
    <main className="page-wrapper">
      {/* PAGE HEADER */}
      <section className="page-hero">
        <div className="container narrow">
          <h1>Our Fleet</h1>
          <p>
            Noble Medic Wheels operates a clean, safe, and ADA-compliant fleet
            designed to meet the needs of patients across King, Pierce, Snohomish & Thurston County.
          </p>
        </div>
      </section>

      {/* FLEET FEATURES */}
      <section className="container">
        <Reveal className="fleet-box-grid">
          <div className="fleet-box">
            <h3>Wheelchair-Accessible Vans</h3>
            <p>
              Equipped with hydraulic lifts, secure wheelchair locking systems,
              and spacious interiors for patients and caregivers.
            </p>
          </div>

          <div className="fleet-box">
            <h3>Ambulatory Vehicles</h3>
            <p>
              Comfortable seating, easy entry, and climate control for patients
              who walk independently or with minimal assistance.
            </p>
          </div>

          <div className="fleet-box">
            <h3>Safety & Cleanliness</h3>
            <p>
              All vehicles are professionally maintained and sanitized after
              every trip to ensure patient safety.
            </p>
          </div>

          <div className="fleet-box">
            <h3>Comfort Features</h3>
            <p>
              Climate-controlled cabins, smooth rides, and quiet interiors
              designed for patient comfort.
            </p>
          </div>

          <div className="fleet-box">
            <h3>Professional Drivers</h3>
            <p>
              Trained, courteous drivers experienced in medical and
              non-emergency transportation.
            </p>
          </div>

          <div className="fleet-box">
            <h3>ADA & Compliance Ready</h3>
            <p>
              Vehicles meet ADA requirements and industry standards for medical
              transportation services.
            </p>
          </div>
        </Reveal>

        {/* CTA */}
        <div className="fleet-cta">
          <h2>Reliable Transportation Starts Here</h2>
          <p>
            Our fleet is ready to support your medical transportation needs.
          </p>
          <a href="/contact" className="btn-primary">
            Request a Ride
          </a>
        </div>
      </section>
    </main>
  );
}
