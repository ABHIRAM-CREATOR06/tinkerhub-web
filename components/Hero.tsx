"use client";

import React from "react";

interface HeroProps {
  onOpenNav: () => void;
}

export default function Hero({ onOpenNav }: HeroProps) {
  return (
    <section className="hero">
      <button type="button" className="index-pill" onClick={onOpenNav} aria-label="Open Navigation">
        <span>INDEX ☰</span>
      </button>

      <div className="h-sub">THE SPACE BETWEEN</div>

      <h1 className="pixel-headline">
        DREAM<span className="amp">&amp;</span>
        <br />
        REALITY
      </h1>

      <p className="desc">
        TinkerHub SNGCE is a vibrant student maker community at SNG College of Engineering — empowering students with hands-on skills, study jams, open source culture, and peer-to-peer learning.
      </p>

      <p className="fine">
        SNGCE Chapter • Affiliated with TinkerHub Foundation Kerala (Reg No KKD/CA/478/2016)
      </p>

      {/* Decorative polaroid card 1 */}
      <div className="decor card-1">
        <div className="card">
          <div className="pin"></div>
          <div className="sunburst"></div>
          <div className="photo-circle" style={{ background: "linear-gradient(135deg, #FF4FD1, #61184F)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#fff", fontSize: "1.6rem", fontWeight: "bold" }}>
              🛠️
            </div>
          </div>
          <div className="cap">Maker of the Month</div>
          <div className="by">Sreehari Nandanan</div>
        </div>
      </div>

      {/* Decorative polaroid card 2 */}
      <div className="decor card-2">
        <div className="card">
          <div className="pin"></div>
          <div className="sunburst" style={{ opacity: 0.6 }}></div>
          <div
            className="photo-circle"
            style={{ borderRadius: "6px", background: "linear-gradient(135deg, #C6FF00, #2E4B00)" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#000", fontSize: "1.5rem", fontWeight: "bold" }}>
              🏫
            </div>
          </div>
          <div className="cap" style={{ fontSize: "0.95rem" }}>
            Campus Chapter
          </div>
          <div className="by">SNGCE Kadayiruppu</div>
        </div>
      </div>

      <div className="dot pink" style={{ top: "10px", left: "44%" }}></div>
      <div className="dot lav" style={{ bottom: "40px", right: "38%" }}></div>
    </section>
  );
}
