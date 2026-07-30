"use client";

import React from "react";
import statsData from "@/data/stats.json";

export default function StatsStrip() {
  return (
    <div className="stats-strip" aria-label="Campus Impact Statistics">
      {statsData.map((s, i) => (
        <div className="stat-item" key={i}>
          <div className="number">{s.number}</div>
          <div className="label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
