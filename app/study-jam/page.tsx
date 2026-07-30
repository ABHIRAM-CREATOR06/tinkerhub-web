"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavOverlay from "@/components/NavOverlay";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import studyJamsData from "@/data/studyJams.json";

export default function StudyJamPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Study Jam Join");

  return (
    <main className="dotgrid">
      <Marquee text="STUDY JAMS AT TINKERHUB SNGCE ✦ LEARN BY BUILDING" />

      <div style={{ padding: "40px 6vw", textAlign: "center" }}>
        <button type="button" className="index-pill" onClick={() => setIsNavOpen(true)}>
          INDEX ☰
        </button>

        <div className="eyebrow" style={{ marginTop: "20px" }}>Hands-on Learning</div>
        <h1 className="pixel-headline" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}>
          STUDY JAMS
        </h1>
        <p className="desc" style={{ marginTop: "20px" }}>
          TinkerHub Study Jams are self-paced, mentor-guided build cohorts where SNGCE students learn new technologies by shipping real projects together.
        </p>

        <div className="pillars-grid" style={{ marginTop: "40px" }}>
          {studyJamsData.map((t) => (
            <div className="pillar-card" key={t.id}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="pillar-num">[{t.duration}]</div>
                <span style={{ fontFamily: "var(--font-special)", fontSize: "0.72rem", background: "var(--lime)", padding: "2px 6px", border: "1px solid var(--ink)" }}>
                  {t.status}
                </span>
              </div>
              <h3 style={{ marginTop: "8px" }}>{t.title}</h3>
              <p>{t.desc}</p>
              <div style={{ marginTop: "16px", fontSize: "0.8rem", fontWeight: "bold", color: "var(--pink)" }}>
                Level: {t.level}
              </div>
              <button
                type="button"
                className="event-btn"
                style={{ marginTop: "16px" }}
                onClick={() => {
                  setContactTopic(`Join Study Jam: ${t.title}`);
                  setIsContactOpen(true);
                }}
              >
                Join Track ↗
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <Link href="/" className="btn-outline" style={{ display: "inline-block", padding: "12px 24px" }}>
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />

      <NavOverlay
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        onOpenContact={() => {
          setContactTopic("Study Jam Inquiry");
          setIsContactOpen(true);
        }}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialTopic={contactTopic}
      />
    </main>
  );
}
