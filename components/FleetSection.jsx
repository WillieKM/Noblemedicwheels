export default function FleetSection() {
  return (
    <>
      <h2 className="section-title">Our Fleet</h2>
      <p className="section-subtitle">
        Clean, safe, ADA-compliant vehicles maintained to the highest standards.
      </p>

      <div className="fleet-grid">
        <div className="fleet-card">
          <img src="/fleet1.jpg" alt="Wheelchair lift and securement systems" />
          <div className="caption">Wheelchair lift & securement systems</div>
        </div>
        <div className="fleet-card">
          <img src="/fleet2.jpg" alt="Wheelchair-accessible rear entry van" />
          <div className="caption">Rear-entry wheelchair access</div>
        </div>
        <div className="fleet-card">
          <img src="/fleet3.jpg" alt="Spacious seating and climate-controlled interior" />
          <div className="caption">Spacious, climate-controlled seating</div>
        </div>
      </div>

      <div className="cta">
        <div>
          <h3>Need a ride?</h3>
          <p>Call or request online. We’ll confirm availability and help you schedule quickly.</p>
        </div>
        <a className="btn btn-primary" href="/contact">Request a Ride</a>
      </div>
    </>
  );
}

