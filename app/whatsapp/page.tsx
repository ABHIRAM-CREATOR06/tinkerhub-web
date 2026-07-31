"use client";

import React from "react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import BackHomeLink from "@/components/BackHomeLink";
import whatsappData from "@/data/whatsapp.json";

export default function WhatsAppPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Community"
        title="WHATSAPP COMMUNITY"
        description="Stay connected with fellow makers, get real-time updates, and be part of the TinkerHub SNGCE student community."
      />

      <section className="ref" id="whatsapp-community" style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div className="eyebrow">Join Us</div>
        <h2 className="ref-title">{whatsappData.name}</h2>

        <div style={{ marginTop: "28px" }}>
          {/* Community card */}
          <div
            className="spot-card"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              border: "2.5px solid #25D366",
              boxShadow: "6px 6px 0 #25D366",
              background: "#f0fdf4",
              padding: "32px",
              transform: "none",
              maxWidth: "560px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <span style={{ fontSize: "3rem" }}>💬</span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-special)",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    color: "#1a8c4e",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "4px",
                  }}
                >
                  {whatsappData.badge}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-anton)",
                    fontSize: "1.6rem",
                    margin: 0,
                  }}
                >
                  {whatsappData.name}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#333", marginBottom: "20px" }}>
              {whatsappData.description}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
              <span
                style={{
                  fontFamily: "var(--font-special)",
                  fontSize: "0.82rem",
                  background: "#e8fdf0",
                  border: "1.5px solid #25D366",
                  padding: "5px 14px",
                  borderRadius: "999px",
                  fontWeight: "bold",
                  color: "#1a8c4e",
                }}
              >
                👥 {whatsappData.stats}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-special)",
                  fontSize: "0.82rem",
                  background: "#e8fdf0",
                  border: "1.5px solid #25D366",
                  padding: "5px 14px",
                  borderRadius: "999px",
                  fontWeight: "bold",
                  color: "#1a8c4e",
                }}
              >
                📢 Updates & Announcements
              </span>
            </div>

            <a
              href={whatsappData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--lg"
              style={{
                background: "#25D366",
                border: "2px solid var(--ink)",
                color: "var(--ink)",
                fontFamily: "var(--font-poppins)",
                fontWeight: "800",
                boxShadow: "4px 4px 0 var(--ink)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "6px 6px 0 var(--ink)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "4px 4px 0 var(--ink)";
              }}
            >
              💬 {whatsappData.cta}
            </a>
          </div>

          {/* What to expect */}
          <div style={{ marginTop: "40px" }}>
            <h3
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "1.2rem",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              What you&apos;ll get
            </h3>
            <div className="pillars-grid" style={{ marginTop: 0 }}>
              {[
                { icon: "📅", title: "Event Alerts", desc: "First to know about Study Jams, Hackathons, and workshops." },
                { icon: "🧑‍💻", title: "Peer Learning", desc: "Ask questions, share resources, and learn alongside campus makers." },
                { icon: "🏆", title: "Opportunities", desc: "Internship drops, hackathon links, and career opportunities." },
                { icon: "📢", title: "Announcements", desc: "Official updates from campus leads and the TinkerHub Foundation." },
              ].map((item) => (
                <div key={item.title} className="pillar-card" style={{ transform: "none" }}>
                  <div className="pillar-num">{item.icon}</div>
                  <h3>{item.title}</h3>
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
