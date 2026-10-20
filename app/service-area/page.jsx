import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Non-Emergency Cabulance & NEMT Service Area | King, Pierce, Snohomish & Thurston Co.",
  description:
    "Noble Medic Wheels serves Seattle, Renton, Kent, Tacoma, Everett, Marysville, Lynnwood and more with non-emergency cabulance and medical transportation.",
  alternates: { canonical: "/service-area" },
  openGraph: {
    title: "Service Area — King, Pierce, Snohomish & Thurston County Non-Emergency Cabulance & NEMT",
    description:
      "Serving King, Pierce, Snohomish, and Thurston County including Seattle, Tacoma, Everett, Renton, Lynnwood, Puyallup, and more.",
    url: "https://www.noblemedicwheels.com/service-area",
  },
};

const counties = [
  {
    name: "King County",
    color: "#C81E2D",
    cities: [
      "Seattle", "Renton", "Kent", "Federal Way",
      "Burien", "Tukwila", "SeaTac", "Des Moines",
    ],
  },
  {
    name: "Pierce County",
    color: "#A31822",
    cities: [
      "Tacoma", "Lakewood", "Puyallup", "Spanaway",
      "Parkland", "Fife", "University Place",
    ],
  },
  {
    name: "Snohomish County",
    color: "#101E3A",
    cities: [
      "Everett", "Marysville", "Lynnwood", "Bothell",
      "Edmonds", "Mukilteo", "Mill Creek", "Snohomish",
    ],
  },
  {
    name: "Thurston County",
    color: "#C89B46",
    cities: [
      "Olympia", "Lacey", "Tumwater", "Yelm",
    ],
  },
];

export default function ServiceAreaPage() {
  return (
    <main className="page">
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <h1>Our Service Area</h1>
          <p>
            Noble Medic Wheels provides ADA-compliant, wheelchair-accessible
            non-emergency medical transportation across three counties in
            Western Washington.
          </p>
        </div>
      </section>

      {/* COUNTY CARDS */}
      <section className="section-light">
        <div className="container">
          <Reveal className="county-grid">
            {counties.map((county) => (
              <div
                key={county.name}
                className="county-card"
                style={{ borderTopColor: county.color }}
              >
                <div className="county-badge" style={{ backgroundColor: county.color }}>
                  {county.name}
                </div>
                <ul className="list" style={{ marginTop: "1rem" }}>
                  {county.cities.map((city) => (
                    <li key={city}>{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* TRIP TYPES */}
      <section className="section-light">
        <div className="container">
          <Reveal className="boxed-card">
            <h2>Types of Trips We Support</h2>
            <ul className="list" style={{ marginTop: "1rem" }}>
              <li>Dialysis appointments (one-time &amp; recurring)</li>
              <li>Doctor visits &amp; follow-up care</li>
              <li>Hospital discharges</li>
              <li>Physical therapy &amp; rehabilitation</li>
              <li>Wheelchair-accessible airport transportation</li>
              <li>Long-distance medical trips (case-by-case)</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container">
          <h2>Not Sure If You&apos;re in Our Coverage Area?</h2>
          <p>
            Call us and we&apos;ll confirm availability for your specific pickup
            and destination.
          </p>
          <a href="/contact" className="btn-primary">Contact Us</a>
        </div>
      </section>
    </main>
  );
}
