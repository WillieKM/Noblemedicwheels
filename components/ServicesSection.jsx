export default function ServicesSection() {
  return (
    <>
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        Reliable non-emergency medical transportation for ambulatory and wheelchair riders,
        including recurring dialysis and discharge rides.
      </p>

      <div className="services-grid">
        <div className="card">
          <h3>Ambulatory Transportation</h3>
          <p>Comfortable rides for passengers who can walk independently or with minimal assistance.</p>
        </div>
        <div className="card">
          <h3>Wheelchair Transportation</h3>
          <p>ADA-compliant vehicles with ramps, securement systems, and trained drivers.</p>
        </div>
        <div className="card">
          <h3>Recurring Appointments</h3>
          <p>Reliable dialysis and long-term care transportation with consistent scheduling.</p>
        </div>
        <div className="card">
          <h3>Hospital Discharge</h3>
          <p>Timely, safe rides home from medical facilities with door-to-door support.</p>
        </div>
      </div>
    </>
  );
}
