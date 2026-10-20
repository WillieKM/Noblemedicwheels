"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.target));
    if (data.company) {
      // Honeypot field — bots fill hidden fields, real users never see this one.
      setSubmitting(false);
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      router.push("/thank-you");
    } catch {
      setError("Something went wrong submitting your request. Please try again or call us at 253-374-9087.");
      setSubmitting(false);
    }
  }

  return (
    <div className="contact-card">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
        />
        {error && <p className="form-error">{error}</p>}
        <div className="form-grid">
          <div>
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" placeholder="Full Name" required />
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" placeholder="Phone Number" required />
          </div>

          <div>
            <label htmlFor="email">Email (optional)</label>
            <input id="email" name="email" type="email" placeholder="Email Address" />
          </div>

          <div>
            <label htmlFor="pickup">Pickup Location</label>
            <input id="pickup" name="pickup" type="text" placeholder="Pickup Address" required />
          </div>

          <div>
            <label htmlFor="destination">Destination</label>
            <input id="destination" name="destination" type="text" placeholder="Destination Address" required />
          </div>

          <div>
            <label htmlFor="rideType">Type of Ride</label>
            <select id="rideType" name="rideType" required>
              <option value="">Select ride type</option>
              <option value="Wheelchair">Wheelchair</option>
              <option value="Ambulatory">Ambulatory</option>
              <option value="Dialysis">Dialysis</option>
              <option value="Hospital Discharge">Hospital Discharge</option>
              <option value="Gurney/Stretcher">Gurney / Stretcher</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="date">Date of Ride</label>
            <input id="date" name="date" type="date" required />
          </div>

          <div>
            <label htmlFor="time">Pickup Time</label>
            <input id="time" name="time" type="time" required />
          </div>

          <div className="full-width">
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              placeholder="Any special instructions or details"
            />
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? "Submitting…" : "Submit Ride Request"}
        </button>
      </form>
    </div>
  );
}
