"use client";

import React from "react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import BackHomeLink from "@/components/BackHomeLink";
import Marquee from "@/components/Marquee";
import studyJamsData from "@/data/studyJams.json";
import { usePageShell } from "@/components/PageShell";

function StudyJamTracks() {
  const { openContact } = usePageShell();
  return (
    <div className="pillars-grid" style={{ marginTop: "40px" }}>
      {studyJamsData.map((t) => (
        <div className="pillar-card" key={t.id}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="pillar-num">[{t.duration}]</div>
            <span
              style={{
                fontFamily: "var(--font-special)",
                fontSize: "0.72rem",
                background: "var(--lime)",
                padding: "2px 6px",
                border: "1px solid var(--ink)",
              }}
            >
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
            onClick={() => openContact(`Join Study Jam: ${t.title}`)}
          >
            Join Track ↗
          </button>
        </div>
      ))}
    </div>
  );
}

export default function StudyJamPage() {
  return (
    <PageShell>
      <Marquee text="STUDY JAMS AT TINKERHUB SNGCE ✦ LEARN BY BUILDING" />
      <PageHeader
        eyebrow="Hands-on Learning"
        title="STUDY JAMS"
        description="TinkerHub Study Jams are self-paced, mentor-guided build cohorts where SNGCE students learn new technologies by shipping real projects together."
      />
      <StudyJamTracks />
      <div className="page-actions">
        <BackHomeLink />
      </div>
    </PageShell>
  );
}
