import ContactForm from "./ContactForm";

export const metadata = {
  title: "Request a Non-Emergency Medical Ride",
  description:
    "Schedule your non-emergency medical transportation with Noble Medic Wheels. Call or text 253-374-9087 or fill out the ride request form for service in King & Pierce County.",
  openGraph: {
    title: "Request a Ride — Noble Medic Wheels NEMT",
    description:
      "Schedule wheelchair transport, dialysis rides, or medical appointments in King & Pierce County. Call 253-374-9087 or submit a request online.",
    url: "https://www.noblemedicwheels.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-header">
        <div className="container narrow">
          <h1>Request a Ride</h1>
          <p>
            Need safe, reliable transportation to a medical appointment? Fill
            out the form below or call us directly.
          </p>
          <p className="callout" style={{ marginTop: "1rem" }}>
            Call or Text: <a href="tel:2533749087">253-374-9087</a>
          </p>
        </div>
      </section>
      <section className="contact-form-section">
        <ContactForm />
      </section>
    </main>
  );
}
