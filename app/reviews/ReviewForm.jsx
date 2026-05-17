"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.target));
    try {
      await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (_) {}
    setSubmitted(true);
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="review-success">
        <div className="review-success-icon">★</div>
        <h3>Thank you for your review!</h3>
        <p>
          We appreciate you sharing your experience. Your feedback helps us
          serve patients and families even better.
        </p>
      </div>
    );
  }

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div>
          <label htmlFor="reviewer-name">Your Name</label>
          <input
            id="reviewer-name"
            name="name"
            type="text"
            placeholder="First name or initials"
            required
          />
        </div>
        <div>
          <label htmlFor="reviewer-location">City</label>
          <input
            id="reviewer-location"
            name="location"
            type="text"
            placeholder="e.g. Tacoma, WA"
          />
        </div>
      </div>

      <div className="rating-field">
        <label>Your Rating</label>
        <div className="star-picker" role="radiogroup" aria-label="Star rating">
          {[5, 4, 3, 2, 1].map((n) => (
            <span key={n}>
              <input
                type="radio"
                name="rating"
                id={`star${n}`}
                value={n}
                required
              />
              <label htmlFor={`star${n}`} title={`${n} star${n > 1 ? "s" : ""}`}>
                ★
              </label>
            </span>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="review-text">Your Review</label>
        <textarea
          id="review-text"
          name="text"
          rows={5}
          placeholder="Tell us about your experience — what made it great, or how we can improve."
          required
        />
      </div>

      <button type="submit" className="submit-btn" disabled={submitting}>
        {submitting ? "Submitting…" : "Submit Review"}
      </button>
    </form>
  );
}
