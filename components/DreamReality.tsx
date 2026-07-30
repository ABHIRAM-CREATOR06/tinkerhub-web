"use client";

import React from "react";
import pillarsData from "@/data/pillars.json";

export default function DreamReality() {
  return (
    <section className="ref" id="about">
      <div className="eyebrow">01 — Four Pillars</div>
      <h2 className="ref-title">The TinkerHub Paradigm</h2>

      <div className="pillars-grid">
        {pillarsData.map((p) => (
          <div className="pillar-card" key={p.num}>
            <div className="pillar-num">[{p.num}]</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
