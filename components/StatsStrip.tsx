"use client";

import React from "react";
import statsData from "@/data/stats.json";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function StatsStrip() {
  const stripRef = useScrollReveal<HTMLDivElement>(0.2);

  return (
    <div className="stats-strip reveal-scale" id="stats" ref={stripRef} aria-label="Campus Impact Statistics">
      {statsData.map((s, i) => (
        <div className="stat-item" key={i}>
          <div className="number">{s.number}</div>
          <div className="label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
