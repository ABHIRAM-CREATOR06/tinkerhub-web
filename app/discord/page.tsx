"use client";

import React from "react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import BackHomeLink from "@/components/BackHomeLink";
import discordData from "@/data/discord.json";

export default function DiscordPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Community"
        title="DISCORD SERVER"
        description="A dedicated space for TinkerHub SNGCE — project channels, study track discussions, announcements, and maker culture."
      />

      <section className="ref" id="discord-community" style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div className="eyebrow">Connect</div>
        <h2 className="ref-title">{discordData.name}</h2>

        <div style={{ marginTop: "28px" }}>
          {/* Discord card */}
          <div
            className="spot-card"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              border: "2.5px solid #5865F2",
              boxShadow: "6px 6px 0 #5865F2",
              background: "#eef0ff",
              padding: "32px",
              transform: "none",
              maxWidth: "560px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <span style={{ fontSize: "3rem" }}>🎮</span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-special)",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    background: "var(--lavender)",
                    border: "1px solid var(--ink)",
                    padding: "2px 10px",
                    borderRadius: "4px",
                    display: "inline-block",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {discordData.badge}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-anton)",
                    fontSize: "1.6rem",
                    margin: 0,
                  }}
                >
                  {discordData.name}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#333", marginBottom: "24px" }}>
              {discordData.description}
            </p>

            {/* Coming Soon state */}
            <div
              style={{
                background: "var(--lavender)",
                border: "2px solid var(--ink)",
                borderRadius: "6px",
                padding: "20px 24px",
                width: "100%",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "1.3rem",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                }}
              >
                🚧 Under Construction
              </div>
              <p style={{ fontSize: "0.9rem", color: "#444", margin: 0, lineHeight: "1.5" }}>
                {discordData.comingSoonMessage}
              </p>
            </div>

            {/* Disabled CTA */}
            <button
              type="button"
              className="btn btn--lg"
              disabled
              style={{
                background: "#e0e0e0",
                border: "2px solid #aaa",
                color: "#888",
                fontFamily: "var(--font-poppins)",
                fontWeight: "800",
                cursor: "not-allowed",
              }}
            >
              🎮 {discordData.cta} — Coming Soon
            </button>
          </div>

          {/* Planned channels */}
          <div style={{ marginTop: "40px" }}>
            <h3
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "1.2rem",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Planned Channels
            </h3>
            <div className="pillars-grid" style={{ marginTop: 0 }}>
              {[
                { icon: "📢", title: "#announcements", desc: "Official updates from campus leads and TinkerHub Foundation." },
                { icon: "💻", title: "#web-dev", desc: "React, Next.js, and full-stack web development discussions." },
                { icon: "⚡", title: "#hardware", desc: "Arduino, ESP32, IoT, and embedded systems tinkering." },
                { icon: "🤖", title: "#ai-ml", desc: "ML models, LLMs, and AI project collaborations." },
                { icon: "🎮", title: "#off-topic", desc: "Gaming, memes, and casual maker conversations." },
                { icon: "🏆", title: "#showcase", desc: "Show off your projects, get feedback, and inspire others." },
              ].map((item) => (
                <div key={item.title} className="pillar-card" style={{ transform: "none" }}>
                  <div className="pillar-num">{item.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-special)", fontSize: "1rem" }}>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="page-actions" style={{ marginBottom: "60px" }}>
        <BackHomeLink />
      </div>
    </PageShell>
  );
}
