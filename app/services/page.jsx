export const metadata = {
  title: "Wheelchair, Dialysis & Medical Transportation Services",
  description:
    "Noble Medic Wheels offers ADA-compliant wheelchair rides, recurring dialysis transport, ambulatory appointment rides, and safe hospital discharge transportation across King & Pierce County.",
  openGraph: {
    title: "NEMT Services — Wheelchair, Dialysis & Hospital Transport",
    description:
      "Dialysis transport, wheelchair-accessible rides, ambulatory appointments, and hospital discharges across King & Pierce County.",
    url: "https://www.noblemedicwheels.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="page-wrapper">
      {/* PAGE HEADER */}
      <section className="page-hero">
        <div className="container narrow">
          <h1>Our Services</h1>
          <p>
            Noble Medic Wheels provides safe, reliable, and compassionate
            non-emergency medical transportation across King & Pierce County.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container">
        <div className="services-box-grid">
          <div className="service-box">
            <h3>Dialysis Transportation</h3>
            <p>
              Recurring and scheduled transportation to and from dialysis
              centers with punctuality, consistency, and patient-focused care.
            </p>
          </div>

          <div className="service-box">
            <h3>Wheelchair-Accessible Rides</h3>
            <p>
              ADA-compliant vehicles equipped with secure wheelchair lifts,
              restraint systems, and trained driver assistance.
            </p>
          </div>

          <div className="service-box">
            <h3>Ambulatory Medical Appointments</h3>
            <p>
              Transportation for doctor visits, follow-ups, outpatient
              procedures, and specialty care appointments.
            </p>
          </div>

          <div className="service-box">
            <h3>Hospital Discharges</h3>
            <p>
              Coordinated, safe discharge transportation from hospitals and
              medical facilities with door-to-door support.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
