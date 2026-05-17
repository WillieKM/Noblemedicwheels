const services = [
  {
    icon: "🚶",
    title: "Ambulatory Transportation",
    desc: "Comfortable rides for passengers who can walk independently or with minimal assistance.",
  },
  {
    icon: "♿",
    title: "Wheelchair Transportation",
    desc: "ADA-compliant vehicles with ramps, securement systems, and trained drivers.",
  },
  {
    icon: "📅",
    title: "Recurring Appointments",
    desc: "Reliable dialysis and long-term care transportation with consistent scheduling.",
  },
  {
    icon: "🏥",
    title: "Hospital Discharge",
    desc: "Timely, safe rides home from medical facilities with door-to-door support.",
  },
];

export default function ServicesSection() {
  return (
    <>
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        Reliable non-emergency medical transportation for ambulatory and
        wheelchair riders, including recurring dialysis and discharge rides.
      </p>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="card">
            <div className="card-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
