"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import NavOverlay from "./NavOverlay";
import ContactModal from "./ContactModal";
import Footer from "./Footer";

interface PageShellContextValue {
  openNav: () => void;
  closeNav: () => void;
  openContact: (topic?: string) => void;
  closeContact: () => void;
}

const PageShellContext = createContext<PageShellContextValue | null>(null);

/**
 * Hook used by any descendant of <PageShell> to open the nav or contact modal
 * without each page having to wire up its own state.
 */
export function usePageShell(): PageShellContextValue {
  const ctx = useContext(PageShellContext);
  if (!ctx) {
    throw new Error("usePageShell() must be used inside <PageShell>");
  }
  return ctx;
}

const DEFAULT_CONTACT_TOPIC = "General Inquiry";

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState<string>(DEFAULT_CONTACT_TOPIC);

  const openNav = useCallback(() => setIsNavOpen(true), []);
  const closeNav = useCallback(() => setIsNavOpen(false), []);
  const openContact = useCallback((topic: string = DEFAULT_CONTACT_TOPIC) => {
    setContactTopic(topic);
    setIsContactOpen(true);
  }, []);
  const closeContact = useCallback(() => setIsContactOpen(false), []);

  return (
    <PageShellContext.Provider
      value={{ openNav, closeNav, openContact, closeContact }}
    >
      <main className="dotgrid">{children}</main>

      <NavOverlay
        isOpen={isNavOpen}
        onClose={closeNav}
        onOpenContact={() => openContact("Nav Contact Us")}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContact}
        initialTopic={contactTopic}
      />

      <Footer />
    </PageShellContext.Provider>
  );
}
