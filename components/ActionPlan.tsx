"use client";

import React from "react";
import actionPlanData from "@/data/actionPlan.json";

export default function ActionPlan() {
  return (
    <section className="ref" id="action-plan">
      <div className="eyebrow">02 — Roadmap</div>
      <h2 className="ref-title">SNGCE Campus Action Plan</h2>

      <div className="action-list">
        {actionPlanData.map((s) => (
          <div className="action-row" key={s.num}>
            <div className="action-num">{s.num}</div>
            <div className="action-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="action-links">
                {s.links.map((link, idx) => (
                  <a key={idx} href={link.href} target={link.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
