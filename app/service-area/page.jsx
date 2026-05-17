export const metadata = {
  title: "NEMT Service Area — King & Pierce County, Washington",
  description:
    "Noble Medic Wheels serves Seattle, Renton, Kent, Federal Way, Tacoma, Lakewood, Puyallup, and surrounding communities in King and Pierce County with non-emergency medical transportation.",
  openGraph: {
    title: "Service Area — King & Pierce County NEMT",
    description:
      "Serving Seattle, Tacoma, Renton, Kent, Federal Way, Lakewood, Puyallup, and more across King & Pierce County.",
    url: "https://www.noblemedicwheels.com/service-area",
  },
};

export default function ServiceAreaPage() {
  return (
    <main className="page">
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <h1>Our Service Area</h1>
          <p>
            Noble Medic Wheels proudly provides reliable, wheelchair-accessible
            non-emergency medical transportation throughout King and Pierce
            County.
          </p>
        </div>
      </section>

      {/* COVERAGE BOXES */}
      <section className="section-light">
        <div className="container">
          <div className="boxed-grid two-col">
            <div className="boxed-card">
              <h3>King County</h3>
              <ul className="list">
                <li>Seattle</li>
                <li>Renton</li>
                <li>Kent</li>
                <li>Federal Way</li>
                <li>Burien</li>
                <li>Tukwila</li>
                <li>SeaTac</li>
                <li>Des Moines</li>
              </ul>
            </div>

            <div className="boxed-card">
              <h3>Pierce County</h3>
              <ul className="list">
                <li>Tacoma</li>
                <li>Lakewood</li>
                <li>Puyallup</li>
                <li>Spanaway</li>
                <li>Parkland</li>
                <li>Fife</li>
                <li>University Place</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRIP TYPES */}
      <section className="section-light">
        <div className="container">
          <div className="boxed-card">
            <h2>Types of Trips We Support</h2>
            <ul className="list">
              <li>Dialysis appointments (one-time & recurring)</li>
              <li>Doctor visits & follow-up care</li>
              <li>Hospital discharges</li>
              <li>Physical therapy & rehabilitation</li>
              <li>Wheelchair-accessible airport transportation</li>
              <li>Long-distance medical trips (case-by-case)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container">
          <h2>Not Sure If You’re in Our Coverage Area?</h2>
          <p>
            Call us and we’ll confirm availability for your specific pickup and
            destination.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
