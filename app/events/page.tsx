"use client";

import React, { useState } from "react";
import Link from "next/link";
import EventsSection from "@/components/EventsSection";
import NavOverlay from "@/components/NavOverlay";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function EventsPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("Event Registration");

  return (
    <main className="dotgrid">
      <div style={{ padding: "40px 6vw", textAlign: "center" }}>
        <button type="button" className="index-pill" onClick={() => setIsNavOpen(true)}>
          INDEX ☰
        </button>
      </div>

      <EventsSection
        onRegister={(eventName) => {
          setContactTopic(`Registration: ${eventName}`);
          setIsContactOpen(true);
        }}
      />

      <div style={{ textAlign: "center", margin: "40px 0 60px" }}>
        <Link href="/" className="btn-outline" style={{ display: "inline-block", padding: "12px 24px" }}>
          ← Back to Home
        </Link>
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
        initialTopic={contactTopic}
      />
    </main>
  );
}
