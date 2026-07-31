"use client";

import React from "react";

export default function Partners() {
  return (
    <section className="ref" id="partners">
      <div className="eyebrow">05 — Ecosystem</div>
      <h2 className="ref-title">Institutional & Community Partners</h2>

      <div className="partners-container">
        <div>
          <h4 style={{ fontFamily: "var(--font-special)", fontSize: "0.85rem", color: "var(--gray)", marginBottom: "12px" }}>
            INSTITUTIONAL & CAMPUS HOUSES
          </h4>
          <div className="partner-row">
            <div className="partner-chip">SNGCE Kadayiruppu</div>
            <div className="partner-chip">IEDC SNGCE</div>
            <div className="partner-chip">IEEE Student Branch SNGCE</div>
          </div>
        </div>

        <div style={{ marginTop: "16px" }}>
          <h4 style={{ fontFamily: "var(--font-special)", fontSize: "0.85rem", color: "var(--gray)", marginBottom: "12px" }}>
            STATEWIDE ECOSYSTEM & FOUNDATION
          </h4>
          <div className="partner-row">
            <div className="partner-chip">TinkerHub Foundation</div>
            <div className="partner-chip">Kerala Startup Mission (KSUM)</div>
            <div className="partner-chip">UN Women (Featured)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
