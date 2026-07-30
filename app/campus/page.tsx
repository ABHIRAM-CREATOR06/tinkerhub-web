"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavOverlay from "@/components/NavOverlay";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function CampusPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const leads = [
    { name: "Campus Lead", role: "Overall Coordinator", dept: "Computer Science & Engineering" },
    { name: "Tech Lead", role: "Study Jam & Workshop Coordinator", dept: "Electronics & Communication" },
    { name: "Design & Media Lead", role: "Scrapbook & Creative Direction", dept: "Electrical & Electronics" },
    { name: "Community Lead", role: "Outreach & Mentorship", dept: "Mechanical Engineering" },
  ];

  return (
    <main className="dotgrid">
      <div style={{ padding: "40px 6vw", textAlign: "center" }}>
        <button type="button" className="index-pill" onClick={() => setIsNavOpen(true)}>
          INDEX ☰
        </button>

        <div className="eyebrow" style={{ marginTop: "20px" }}>SNGCE Chapter</div>
        <h1 className="pixel-headline" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}>
          CAMPUS HUB
        </h1>
        <p className="desc" style={{ marginTop: "20px" }}>
          SNG College of Engineering (SNGCE) Kadayiruppu campus chapter is run by passionate student makers, mentors, and innovators across engineering streams.
        </p>

        <section className="ref" style={{ marginTop: "40px", borderTop: "2px solid var(--ink)", textAlign: "left" }}>
          <div className="eyebrow">Chapter Executive Team</div>
          <h2 className="ref-title">Student Leads & Council</h2>

          <div className="pillars-grid" style={{ marginTop: "24px" }}>
            {leads.map((lead, idx) => (
              <div className="pillar-card" key={idx}>
                <div className="pillar-num">[SNGCE LEAD]</div>
                <h3>{lead.name}</h3>
                <p style={{ fontWeight: 600, color: "var(--ink)", marginBottom: "4px" }}>{lead.role}</p>
                <p style={{ fontSize: "0.82rem", color: "var(--gray)" }}>{lead.dept}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <button
            type="button"
            className="btn-solid"
            style={{ padding: "14px 28px", marginRight: "16px" }}
            onClick={() => setIsContactOpen(true)}
          >
            Connect with Campus Leads ✉️
          </button>
          <Link href="/" className="btn-outline" style={{ display: "inline-block", padding: "12px 24px" }}>
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />

      <NavOverlay
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialTopic="Campus Chapter Inquiry"
      />
    </main>
  );
}
