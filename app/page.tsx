"use client";

import React, { useState } from "react";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import DreamReality from "@/components/DreamReality";
import ActionPlan from "@/components/ActionPlan";
import StatsStrip from "@/components/StatsStrip";
import Spotlight from "@/components/Spotlight";
import EventsSection from "@/components/EventsSection";
import CoreTeam from "@/components/CoreTeam";
import GetInvolved from "@/components/GetInvolved";
import NavOverlay from "@/components/NavOverlay";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState("General Inquiry");

  const handleOpenContact = (topic: string = "General Inquiry") => {
    setContactTopic(topic);
    setIsContactOpen(true);
  };

  return (
    <main className="dotgrid">
      <Marquee onLinkClick={() => handleOpenContact("UN Women Feature / Study Jam")} />

      <Hero onOpenNav={() => setIsNavOpen(true)} />

      <DreamReality />

      <ActionPlan />

      <StatsStrip />

      <Spotlight />

      <EventsSection onRegister={(eventName) => handleOpenContact(`Registration: ${eventName}`)} />

      <CoreTeam />

      <GetInvolved onOpenContact={handleOpenContact} />

      <Footer />

      <NavOverlay
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        onOpenContact={() => handleOpenContact("Nav Contact Us")}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialTopic={contactTopic}
      />
    </main>
  );
}
