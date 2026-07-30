"use client";

import React from "react";
import coreTeamData from "@/data/coreTeam.json";

export default function CoreTeam() {
  return (
    <section className="ref" id="team">
      <div className="eyebrow">04 — Leadership</div>
      <h2 className="ref-title">SNGCE Core Chapter Team</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "28px",
          marginTop: "36px",
        }}
      >
        {coreTeamData.map((member, idx) => (
          <div
            key={member.id}
            className="spot-card"
            style={{
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transform: idx % 2 === 0 ? "rotate(-1deg)" : "rotate(1.2deg)",
              padding: "24px 20px",
            }}
          >
            <div className="spot-pin"></div>
            
            {/* Photo / Avatar with Sunburst */}
            <div
              className="spot-photo"
              style={{
                width: "90px",
                height: "90px",
                background: member.gradient,
                marginBottom: "12px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="spot-body" style={{ textAlign: "center" }}>
              <div className="tag">{member.tag}</div>
              <h4 style={{ fontSize: "1.7rem", margin: "4px 0" }}>{member.name}</h4>
              <p
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "0.95rem",
                  color: "var(--ink)",
                  marginBottom: "4px",
                }}
              >
                {member.role}
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--gray)", marginBottom: "8px" }}>
                📍 {member.dept}
              </p>
              <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: "1.4" }}>
                {member.bio}
              </p>

              <div
                style={{
                  marginTop: "14px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "12px",
                  fontFamily: "var(--font-special)",
                  fontSize: "0.78rem",
                }}
              >
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "underline", color: "var(--ink)", fontWeight: "bold" }}
                >
                  GitHub ↗
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "underline", color: "var(--ink)", fontWeight: "bold" }}
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
