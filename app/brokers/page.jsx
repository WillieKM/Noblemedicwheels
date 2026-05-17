export const metadata = {
  title: "For Brokers | Noble Medic Wheels",
  description:
    "Reliable, compliant non-emergency medical transportation partner serving King & Pierce County.",
};

export default function BrokersPage() {
  return (
    <main className="page">
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <h1>For Brokers & Care Partners</h1>
          <p>
            Reliable, compliant, and transparent non-emergency medical
            transportation services for Medicaid, Medicare Advantage, managed
            care organizations, hospitals, and care facilities.
          </p>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="section-light">
        <div className="container">
          <h2>Why Partner With Us?</h2>

          <div className="boxed-grid">
            <div className="boxed-card">
              <h3>Contract Ready</h3>
              <p>Fully insured and prepared for broker and facility contracts.</p>
            </div>

            <div className="boxed-card">
              <h3>On-Time Performance</h3>
              <p>
                GPS-verified ride logs and punctual pickup and drop-off tracking.
              </p>
            </div>

            <div className="boxed-card">
              <h3>Driver Screening</h3>
              <p>
                Background checks, credential verification, and continuous
                training.
              </p>
            </div>

            <div className="boxed-card">
              <h3>ADA Compliance</h3>
              <p>
                Wheelchair-accessible vehicles with securement systems and lifts.
              </p>
            </div>

            <div className="boxed-card">
              <h3>Safety & Training</h3>
              <p>
                Documented safety, sanitation, and ongoing driver training
                protocols.
              </p>
            </div>

            <div className="boxed-card">
              <h3>Professional Communication</h3>
              <p>
                Clear, responsive coordination with riders, facilities, and
                dispatch teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="section-light">
        <div className="container">
          <h2>Compliance & Documentation</h2>

          <div className="boxed-grid">
            <div className="boxed-card">
              <h3>Licensing</h3>
              <p>Active business licensing compliant with NEMT regulations.</p>
            </div>

            <div className="boxed-card">
              <h3>Insurance</h3>
              <p>Certificate of Insurance (COI) available upon request.</p>
            </div>

            <div className="boxed-card">
              <h3>W-9</h3>
              <p>W-9 documentation provided during onboarding.</p>
            </div>

            <div className="boxed-card">
              <h3>Vehicle Inspections</h3>
              <p>Routine vehicle inspection and maintenance records.</p>
            </div>

            <div className="boxed-card">
              <h3>Driver Background Checks</h3>
              <p>Verified background screenings and credential validation.</p>
            </div>

            <div className="boxed-card">
              <h3>Training Certifications</h3>
              <p>Safety, mobility assistance, and service training records.</p>
            </div>
          </div>

          <p className="note">
            Digital copies can be provided during onboarding or uploaded to your
            broker portal.
          </p>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="section-light">
        <div className="container">
          <h2>Service Area</h2>

          <div className="boxed-grid">
            <div className="boxed-card">
              <h3>King County</h3>
              <ul>
                <li>Auburn</li>
                <li>Kent</li>
                <li>Federal Way</li>
                <li>Renton</li>
                <li>Des Moines</li>
                <li>Burien</li>
              </ul>
            </div>

            <div className="boxed-card">
              <h3>Pierce County</h3>
              <ul>
                <li>Tacoma</li>
                <li>Puyallup</li>
                <li>Lakewood</li>
                <li>University Place</li>
              </ul>
            </div>

            <div className="boxed-card">
              <h3>Additional Coverage</h3>
              <p>
                Additional service areas may be available depending on
                scheduling, volume, and contract requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container">
          <h2>Partner With Noble Medic Wheels</h2>
          <p>
            Contact us to begin onboarding or request our compliance packet.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
