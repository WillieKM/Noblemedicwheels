export default function ServicesSection() {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        <div className="service-card">
          <h3>Ambulatory Transportation</h3>
          <p>
            Comfortable rides for passengers who walk independently or with
            minimal assistance.
          </p>
        </div>

        <div className="service-card">
          <h3>Wheelchair Transportation</h3>
          <p>
            ADA-compliant vehicles with securement systems and trained drivers.
          </p>
        </div>

        <div className="service-card">
          <h3>Recurring Appointments</h3>
          <p>
            Reliable transportation for dialysis, therapy, and long-term care.
          </p>
        </div>

        <div className="service-card">
          <h3>Hospital Discharge</h3>
          <p>
            Safe, timely transport for patients leaving medical facilities.
          </p>
        </div>
      </div>
    </section>
  );
}
