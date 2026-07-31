"use client";

import React from "react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import BackHomeLink from "@/components/BackHomeLink";
import Spotlight from "@/components/Spotlight";
import { usePageShell } from "@/components/PageShell";

function SpotlightBody() {
  const { openContact } = usePageShell();
  return (
    <>
      <Spotlight />
      <div className="page-actions" style={{ marginBottom: "60px" }}>
        <button
          type="button"
          className="btn btn--solid btn--lg"
          onClick={() => openContact("Spotlight Nomination")}
        >
          Nominate a Maker for Spotlight ✦
        </button>
        <BackHomeLink />
      </div>
    </>
  );
}

export default function SpotlightPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Stories"
        title="SPOTLIGHT"
        description="The makers, mentors, and projects shaping student culture at TinkerHub SNGCE."
      />
      <SpotlightBody />
    </PageShell>
  );
}
