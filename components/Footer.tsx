"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "underline" }}>Home</Link>
        <Link href="/study-jam" style={{ color: "#fff", textDecoration: "underline" }}>Study Jam</Link>
        <Link href="/events" style={{ color: "#fff", textDecoration: "underline" }}>Events</Link>
        <Link href="/spotlight" style={{ color: "#fff", textDecoration: "underline" }}>Spotlight</Link>
        <Link href="/campus" style={{ color: "#fff", textDecoration: "underline" }}>Campus Chapter</Link>
      </div>
      <div>
        crafted @ <span>tinkerhub sngce</span> • inspired by tinkerhub.org & hoomans co.
      </div>
    </footer>
  );
}
