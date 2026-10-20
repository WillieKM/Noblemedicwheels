import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Non-Emergency Cabulance & NEMT Services | Noble Medic Wheels",
  description:
    "ADA-compliant non-emergency cabulance transportation: wheelchair rides, recurring dialysis transport, ambulatory appointments, and hospital discharges across King, Pierce, Snohomish & Thurston County.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Non-Emergency Cabulance & NEMT Services — Wheelchair, Dialysis & Hospital Transport",
    description:
      "Non-emergency cabulance transport, dialysis transport, wheelchair-accessible rides, ambulatory appointments, and hospital discharges across King, Pierce, Snohomish & Thurston County.",
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
            non-emergency cabulance and medical transportation across King,
            Pierce, Snohomish & Thurston County.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container">
        <Reveal className="services-box-grid">
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

          <div className="service-box">
            <h3>Gurney / Stretcher Transportation</h3>
            <p>
              Door-to-door transport for patients who must remain lying down,
              using gurney-equipped vehicles and trained attendants.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
