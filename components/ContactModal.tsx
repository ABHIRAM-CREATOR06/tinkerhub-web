"use client";

import React, { useState, useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export default function ContactModal({ isOpen, onClose, initialTopic = "General Inquiry" }: ContactModalProps) {
  const [topic, setTopic] = useState(initialTopic);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTopic(initialTopic);
  }, [initialTopic]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🎉</div>
            <h3 style={{ fontFamily: "var(--font-anton)" }}>Message Received!</h3>
            <p style={{ marginTop: "8px" }}>
              Thanks {name || "maker"}! The TinkerHub SNGCE team will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>Contact TinkerHub SNGCE</h3>
            <p>
              Fill out this form to connect to the team, or write to us directly at{" "}
              <a href="mailto:tinkerhub.in.sngce@gmail.com" style={{ color: "var(--pink)", textDecoration: "underline" }}>
                tinkerhub.in.sngce@gmail.com
              </a>.
            </p>

            <div className="form-group">
              <label>Topic / Purpose</label>
              <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="e.g. Sreehari / Aksa"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@sngce.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Message / Details</label>
              <textarea
                rows={3}
                placeholder="Tell us what you'd like to build, learn, or collaborate on..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div className="modal-actions">
              <button type="button" className="btn-outline" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-solid">
                Send Message 🚀
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
