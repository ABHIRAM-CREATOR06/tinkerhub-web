"use client";

import React from "react";

interface GetInvolvedProps {
  onOpenContact: (reason: string) => void;
}

export default function GetInvolved({ onOpenContact }: GetInvolvedProps) {
  return (
    <section className="ref" id="get-involved">
      <div className="eyebrow">04 — Get Involved</div>
      <h2 className="ref-title">Join the Movement</h2>

      <div className="get-involved-grid">
        <div className="gi-card">
          <div className="badge">BE KIND.</div>
          <h3>Donate & Fund</h3>
          <p>Support student hardware kits, study jam snacks, and hackathon prizes for campus makers.</p>
          <a
            href="#donate"
            className="gi-link"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact("Donate & Sponsor");
            }}
          >
            Sponsor Campus Chapter ↗
          </a>
        </div>

        <div className="gi-card">
          <div className="badge">GIVE BACK.</div>
          <h3>Volunteer & Mentor</h3>
          <p>Share your technical expertise as a study jam mentor or campus event coordinator.</p>
          <a
            href="#volunteer"
            className="gi-link"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact("Volunteer / Mentor");
            }}
          >
            Apply as Mentor ↗
          </a>
        </div>

        <div className="gi-card">
          <div className="badge">BUILD TOGETHER.</div>
          <h3>Start a Project</h3>
          <p>Have an idea for a campus project or study track? Lead a build crew with TinkerHub support.</p>
          <a
            href="#project"
            className="gi-link"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact("Start a Campus Project");
            }}
          >
            Propose a Project ↗
          </a>
        </div>
      </div>
    </section>
  );
}
