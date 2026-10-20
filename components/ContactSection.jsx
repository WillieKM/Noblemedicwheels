import ContactForm from "../app/contact/ContactForm";

export default function ContactSection() {
  return (
    <>
      {/* HEADER */}
      <div className="page-header center">
        <h2 className="section-title">Request a Ride</h2>
        <p>
          Need safe, reliable transportation to a medical appointment?
          Complete the form below or contact us directly and our team will
          confirm your ride as quickly as possible.
        </p>
        <p className="callout">
          Call or Text:{" "}
          <a href="tel:2533749087">253-374-9087</a>
        </p>
      </div>

      <ContactForm />

      {/* CONTACT BOX */}
      <div className="info-box">
        <h3>Contact Information</h3>
        <p><strong>Phone:</strong> 253-374-9087</p>
        <p><strong>Email:</strong> info@noblemedicwheels.com</p>
        <p><strong>Hours:</strong> Monday–Saturday, 6 AM – 8 PM</p>
      </div>
    </>
  );
}
