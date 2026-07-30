"use client";

import React, { useState } from "react";
import Link from "next/link";
import Spotlight from "@/components/Spotlight";
import NavOverlay from "@/components/NavOverlay";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function SpotlightPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="dotgrid">
      <div style={{ padding: "40px 6vw", textAlign: "center" }}>
        <button type="button" className="index-pill" onClick={() => setIsNavOpen(true)}>
          INDEX ☰
        </button>
      </div>

      <Spotlight />

      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <button
          type="button"
          className="btn-solid"
          style={{ padding: "14px 28px", fontSize: "0.95rem" }}
          onClick={() => setIsContactOpen(true)}
        >
          Nominate a Maker for Spotlight ✦
        </button>
        <div style={{ marginTop: "20px" }}>
          <Link href="/" className="btn-outline" style={{ display: "inline-block", padding: "10px 20px" }}>
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />

      <NavOverlay
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialTopic="Spotlight Nomination"
      />
    </main>
  );
}
