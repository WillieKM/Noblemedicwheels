export const metadata = {
  title: "Request a Ride | Noble Medic Wheels",
  description:
    "Request safe, reliable non-emergency medical transportation with Noble Medic Wheels.",
};

export default function RequestRidePage() {
  return (
    <section className="section-light">
      <div className="page-container">
        {/* HEADER */}
        <div className="page-header center">
          <h1>Request a Ride</h1>
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

        {/* FORM CARD */}
        <div className="form-card">
          <form className="ride-form">
            <div className="form-grid">
              <div>
                <label>Full Name</label>
                <input type="text" placeholder="Patient or Rider Name" />
              </div>

              <div>
                <label>Phone Number</label>
                <input type="tel" placeholder="253-374-9087" />
              </div>

              <div>
                <label>Pickup Address</label>
                <input type="text" placeholder="Street, City" />
              </div>

              <div>
                <label>Drop-off Address</label>
                <input type="text" placeholder="Medical Facility or Location" />
              </div>

              <div>
                <label>Appointment Date</label>
                <input type="date" />
              </div>

              <div>
                <label>Appointment Time</label>
                <input type="time" />
              </div>

              <div>
                <label>Mobility Type</label>
                <select>
                  <option>Wheelchair</option>
                  <option>Ambulatory</option>
                  <option>Stretcher (if available)</option>
                </select>
              </div>

              <div>
                <label>Round Trip?</label>
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div className="full-width">
              <label>Additional Notes (Optional)</label>
              <textarea placeholder="Dialysis, assistance needed, special instructions…" />
            </div>

            <button type="submit" className="btn-primary large">
              Submit Ride Request
            </button>
          </form>
        </div>

        {/* CONTACT BOX */}
        <div className="info-box">
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> 253-374-9087</p>
          <p><strong>Email:</strong> info@noblemedicwheels.com</p>
          <p><strong>Hours:</strong> Monday–Saturday, 6 AM – 8 PM</p>
        </div>
      </div>
    </section>
  );
}
