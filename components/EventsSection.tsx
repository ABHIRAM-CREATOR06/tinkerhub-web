"use client";

import React, { useState } from "react";
import eventsData from "@/data/events.json";

interface EventsSectionProps {
  onRegister: (eventName: string) => void;
}

export default function EventsSection({ onRegister }: EventsSectionProps) {
  const [filter, setFilter] = useState<"all" | "current" | "upcoming">("all");

  const filteredEvents = eventsData.filter((event) => {
    if (filter === "current") return event.status === "current";
    if (filter === "upcoming") return event.status === "upcoming";
    return true;
  });

  return (
    <section className="ref" id="events">
      <div className="eyebrow">03 — What&apos;s Next & Current</div>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginTop: "6px" }}>
        <h2 className="ref-title" style={{ marginTop: 0 }}>Campus Activities & Events</h2>

        {/* Card Style Filter Options */}
        <div style={{ display: "inline-flex", gap: "8px", background: "#f0f0f0", padding: "4px", borderRadius: "999px", border: "1.5px solid var(--ink)" }}>
          <button
            type="button"
            onClick={() => setFilter("all")}
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "0.8rem",
              padding: "6px 16px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              background: filter === "all" ? "var(--ink)" : "transparent",
              color: filter === "all" ? "#fff" : "var(--ink)",
              transition: "all 0.2s ease"
            }}
          >
            ALL CARDS ({eventsData.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("current")}
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "0.8rem",
              padding: "6px 16px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              background: filter === "current" ? "var(--pink)" : "transparent",
              color: "var(--ink)",
              transition: "all 0.2s ease"
            }}
          >
            🔴 CURRENT NOW
          </button>
          <button
            type="button"
            onClick={() => setFilter("upcoming")}
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "0.8rem",
              padding: "6px 16px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              background: filter === "upcoming" ? "var(--lime)" : "transparent",
              color: "var(--ink)",
              transition: "all 0.2s ease"
            }}
          >
            📅 UPCOMING
          </button>
        </div>
      </div>

      <div className="events-grid" style={{ marginTop: "32px" }}>
        {filteredEvents.map((ev) => (
          <div
            className="event-card"
            key={ev.id}
            style={{
              border: ev.status === "current" ? "2.5px solid var(--ink)" : "2px solid var(--ink)",
              background: ev.status === "current" ? "#FFFDF4" : "#FFFFFF"
            }}
          >
            <div className="spot-pin" style={{ top: "-8px", right: "20px", left: "auto" }}></div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <div className="event-date-badge" style={{ margin: 0 }}>{ev.date}</div>
                <span
                  style={{
                    fontFamily: "var(--font-special)",
                    fontSize: "0.72rem",
                    fontWeight: "bold",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    border: "1px solid var(--ink)",
                    background: ev.status === "current" ? "var(--pink)" : "var(--lime)",
                    color: "var(--ink)"
                  }}
                >
                  {ev.statusBadge}
                </span>
              </div>
              
              <h3>{ev.title}</h3>
              <p style={{ fontWeight: 600, color: "var(--ink)", fontSize: "0.82rem", marginBottom: "6px" }}>
                📍 {ev.location}
              </p>
              <p>{ev.desc}</p>
            </div>

            <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-special)", fontSize: "0.75rem", color: "var(--gray)" }}>
                Category: {ev.category}
              </span>
              <button
                type="button"
                className="event-btn"
                onClick={() => onRegister(ev.title)}
              >
                Register Card ↗
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
