const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you offer wheelchair transportation?", acceptedAnswer: { "@type": "Answer", text: "Yes. All Noble Medic Wheels vehicles are ADA-compliant and equipped with hydraulic lifts and secure wheelchair locking systems to ensure safe and comfortable transport." } },
    { "@type": "Question", name: "Do you provide dialysis transportation?", acceptedAnswer: { "@type": "Answer", text: "Yes. We specialize in dialysis transportation, including recurring scheduled trips for patients attending regular treatment sessions." } },
    { "@type": "Question", name: "What areas do you serve?", acceptedAnswer: { "@type": "Answer", text: "We proudly serve patients throughout King, Pierce, and Snohomish County including Seattle, Tacoma, Everett, Renton, Lynnwood, Federal Way, and more." } },
    { "@type": "Question", name: "Are your drivers trained?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our drivers are professionally trained, courteous, and experienced in assisting passengers with mobility needs while maintaining dignity and respect." } },
    { "@type": "Question", name: "How far in advance should I book a ride?", acceptedAnswer: { "@type": "Answer", text: "We recommend booking as early as possible to guarantee availability. However, we do our best to accommodate same-day or short-notice requests when capacity allows." } },
    { "@type": "Question", name: "Do you offer airport transportation?", acceptedAnswer: { "@type": "Answer", text: "Yes. We provide wheelchair-accessible airport transportation for medical-related travel, ensuring timely pickups and drop-offs." } },
    { "@type": "Question", name: "Can family members ride along?", acceptedAnswer: { "@type": "Answer", text: "In many cases, one escort or family member may accompany the patient. Please let us know at the time of booking so we can plan accordingly." } },
    { "@type": "Question", name: "Is your service covered by insurance?", acceptedAnswer: { "@type": "Answer", text: "Coverage varies depending on the insurance provider and plan. We recommend checking with your insurance company or care coordinator to confirm eligibility." } },
    { "@type": "Question", name: "How do I request a ride?", acceptedAnswer: { "@type": "Answer", text: "You can request a ride by calling 253-374-9087 or by using the Request a Ride form on our website at noblemedicwheels.com/contact." } },
  ],
};

export const metadata = {
  title: "Non-Emergency Medical Transportation FAQs",
  description:
    "Answers to common questions about Noble Medic Wheels NEMT services — wheelchair rides, dialysis transport, booking, insurance coverage, and service areas in King & Pierce County.",
  openGraph: {
    title: "NEMT FAQs — Noble Medic Wheels",
    description:
      "Common questions about booking wheelchair rides, dialysis transport, insurance coverage, and service areas in King & Pierce County.",
    url: "https://www.noblemedicwheels.com/faq",
  },
};

export default function FAQPage() {
  return (
    <main className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>
            Answers to common questions about our non-emergency medical
            transportation services.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="section-light">
        <div className="container faq-grid">
          <div className="faq-card">
            <h3>Do you offer wheelchair transportation?</h3>
            <p>
              Yes. All Noble Medic Wheels vehicles are ADA-compliant and equipped
              with hydraulic lifts and secure wheelchair locking systems to
              ensure safe and comfortable transport.
            </p>
          </div>

          <div className="faq-card">
            <h3>Do you provide dialysis transportation?</h3>
            <p>
              Yes. We specialize in dialysis transportation, including recurring
              scheduled trips for patients attending regular treatment sessions.
            </p>
          </div>

          <div className="faq-card">
            <h3>What areas do you serve?</h3>
            <p>
              We proudly serve patients throughout King and Pierce County. If
              you are unsure whether your location is within our service area,
              please contact us.
            </p>
          </div>

          <div className="faq-card">
            <h3>Are your drivers trained?</h3>
            <p>
              Absolutely. Our drivers are professionally trained, courteous, and
              experienced in assisting passengers with mobility needs while
              maintaining dignity and respect.
            </p>
          </div>

          <div className="faq-card">
            <h3>How far in advance should I book a ride?</h3>
            <p>
              We recommend booking as early as possible to guarantee
              availability. However, we do our best to accommodate same-day or
              short-notice requests when capacity allows.
            </p>
          </div>

          <div className="faq-card">
            <h3>Do you offer airport transportation?</h3>
            <p>
              Yes. We provide wheelchair-accessible airport transportation for
              medical-related travel, ensuring timely pickups and drop-offs.
            </p>
          </div>

          <div className="faq-card">
            <h3>Can family members ride along?</h3>
            <p>
              In many cases, one escort or family member may accompany the
              patient. Please let us know at the time of booking so we can plan
              accordingly.
            </p>
          </div>

          <div className="faq-card">
            <h3>Is your service covered by insurance?</h3>
            <p>
              Coverage varies depending on the insurance provider and plan. We
              recommend checking with your insurance company or care coordinator
              to confirm eligibility.
            </p>
          </div>

          <div className="faq-card">
            <h3>How do I request a ride?</h3>
            <p>
              You can request a ride by calling{" "}
              <strong>253-374-9087</strong> or by using the Request a Ride form on
              our website.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>
            Our team is happy to help. Contact us and we’ll walk you through the
            process.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
