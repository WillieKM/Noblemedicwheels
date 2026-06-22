"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!rating) {
      setError("Please select a star rating before submitting.");
      return;
    }
    setError("");
    setSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      location: formData.get("location"),
      rating,
      text: formData.get("text"),
    };

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us at 253-374-9087.");
    }
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
        <div className="star-picker-js" role="radiogroup" aria-label="Star rating">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              className={`star-btn${n <= (hover || rating) ? " active" : ""}`}
              onClick={() => setRating(n)}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
            >
              ★
            </button>
          ))}
        </div>
        {rating > 0 && (
          <p className="rating-label">{rating} star{rating > 1 ? "s" : ""} selected</p>
        )}
      </div>

      {error && <p className="form-error">{error}</p>}

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
