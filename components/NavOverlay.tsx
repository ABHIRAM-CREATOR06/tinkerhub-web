"use client";

import React, { useEffect } from "react";
import Link from "next/link";

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function NavOverlay({ isOpen, onClose, onOpenContact }: NavOverlayProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`nav-overlay ${isOpen ? "open" : ""}`} id="navOverlay" role="dialog" aria-modal="true" aria-label="Main Navigation">
      <div className="brand">
        <b>Tinker</b>Hub <span style={{ fontSize: "0.9rem", color: "var(--pink)", fontWeight: "bold" }}>SNGCE</span>
      </div>

      <nav className="nav-items">
        <Link href="/" onClick={onClose}>Home</Link>
        <Link href="/study-jam" onClick={onClose}>Study Jam</Link>
        <Link href="/events" onClick={onClose}>Learning Activities</Link>
        <Link href="/spotlight" onClick={onClose}>Spotlight</Link>
        <Link href="/campus" onClick={onClose}>Campus</Link>
      </nav>

      <div className="nav-bottom">
        <button type="button" className="btn-outline" onClick={onClose}>
          Close ✕
        </button>
        <button
          type="button"
          className="btn-solid"
          onClick={() => {
            onClose();
            onOpenContact();
          }}
        >
          Contact us
        </button>
      </div>

      <div className="sticky-note">
        <div className="be-kind">BE KIND.</div>
        <div className="get-inv">GET INVOLVED</div>
        <div className="donate" onClick={() => { onClose(); onOpenContact(); }}>
          DONATE ↗
        </div>
        <p>Empower campus innovators. Fund hands-on technology education for students.</p>
      </div>
    </div>
  );
}
