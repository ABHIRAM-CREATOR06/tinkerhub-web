"use client";

import React, { useState } from "react";
import resourcesData from "@/data/resources.json";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ResourceHub() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useScrollReveal<HTMLElement>();
  const activeDomain = resourcesData[activeTab];

  return (
    <section className="ref reveal" id="resources" ref={sectionRef}>
      <div className="eyebrow">05 — Resource Hub</div>
      <h2 className="ref-title">Learning Resources</h2>
      <p style={{ marginTop: "8px", color: "var(--gray)", fontSize: "0.92rem", maxWidth: "620px" }}>
        Curated study materials, tools, and references handpicked for SNGCE students across all engineering domains.
      </p>

      {/* Domain Tabs */}
      <div className="resource-tabs" style={{ marginTop: "28px" }}>
        {resourcesData.map((domain, idx) => (
          <button
            key={domain.domain}
            type="button"
            className={`resource-tab ${activeTab === idx ? "resource-tab--active" : ""}`}
            style={{
              background: activeTab === idx ? domain.color : "transparent",
              borderColor: activeTab === idx ? "var(--ink)" : "#ccc",
            }}
            onClick={() => setActiveTab(idx)}
          >
            <span>{domain.icon}</span>
            <span>{domain.domain}</span>
          </button>
        ))}
      </div>

      {/* Resource Cards Grid */}
      <div className="resource-grid" style={{ marginTop: "28px" }}>
        {activeDomain.resources.map((res) => (
          <a
            key={res.id}
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-card"
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
              <h3 className="resource-card__title">{res.title}</h3>
              <span style={{ fontSize: "1rem", flexShrink: 0, marginLeft: "8px" }}>↗</span>
            </div>
            <p className="resource-card__desc">{res.desc}</p>
            <div style={{ marginTop: "12px" }}>
              <span
                className="resource-card__tag"
                style={{ background: activeDomain.color }}
              >
                {res.tag}
              </span>
            </div>
          </a>
        ))}
      </div>

      <p style={{ marginTop: "28px", fontSize: "0.8rem", color: "var(--gray)", fontFamily: "var(--font-special)" }}>
        ✦ More resources added regularly. Have a suggestion?{" "}
        <a
          href="mailto:tinkerhub.in.sngce@gmail.com"
          style={{ textDecoration: "underline", color: "var(--ink)", fontWeight: "bold" }}
        >
          Let us know ↗
        </a>
      </p>
    </section>
  );
}
