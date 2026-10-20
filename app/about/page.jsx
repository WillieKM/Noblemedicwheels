import Link from "next/link";
import Reveal from "../../components/Reveal";
export const metadata = {
  title: "About Noble Medic Wheels | Non-Emergency Cabulance & NEMT",
  description:
    "Noble Medic Wheels is a locally owned non-emergency cabulance and NEMT provider in King, Pierce, Snohomish & Thurston County, committed to safe, dignified, punctual medical transportation.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Noble Medic Wheels — Non-Emergency Cabulance & NEMT Provider",
    description:
      "Locally owned non-emergency cabulance and medical transportation in King, Pierce, Snohomish & Thurston County. ADA-compliant vehicles and professionally trained drivers.",
    url: "https://www.noblemedicwheels.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="page-wrapper">
      {/* HERO */}
      <section className="page-hero">
        <div className="container narrow">
          <h1>About Noble Medic Wheels</h1>
          <p>
            Noble Medic Wheels is a locally owned Non-Emergency Medical
            Transportation (NEMT) provider serving King, Pierce, Snohomish & Thurston County with a
            strong commitment to dignity, reliability, and patient-centered
            care.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container narrow">
        {/* MISSION */}
        <Reveal className="content-block">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide safe, dependable, and compassionate
            transportation for individuals who rely on timely access to medical
            care. We believe transportation should never be a barrier to health,
            independence, or peace of mind.
          </p>
        </Reveal>

        {/* WHY CHOOSE US */}
        <Reveal className="content-block">
          <h2>Why Choose Noble Medic Wheels</h2>
          <ul className="checklist">
            <li>Wheelchair-accessible, ADA-compliant vehicles</li>
            <li>Professional, trained, and courteous drivers</li>
            <li>On-time pickups with clear communication</li>
            <li>Clean and sanitized vehicles after every ride</li>
            <li>Locally owned and operated with personal accountability</li>
          </ul>
        </Reveal>

        {/* CONTACT */}
        <Reveal className="contact-card">
          <h3>Contact Us</h3>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:12533749087">253-374-9087</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@noblemedicwheels.com">
              info@noblemedicwheels.com
            </a>
          </p>
          <p>
            <strong>Service Area:</strong> King, Pierce, Snohomish & Thurston County
          </p>
        </Reveal>
      </section>
    </main>
  );
}
