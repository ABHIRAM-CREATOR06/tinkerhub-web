"use client";

import React from "react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import BackHomeLink from "@/components/BackHomeLink";
import ResourceHub from "@/components/ResourceHub";
import { usePageShell } from "@/components/PageShell";
import { useEffect } from "react";

function ResourcesBody() {
  const { openContact } = usePageShell();

  // Wire the custom event from ResourceHub's suggestion link to the contact modal
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      openContact(detail ?? "Resource Suggestion");
    };
    window.addEventListener("tinkerhub:openContact", handler);
    return () => window.removeEventListener("tinkerhub:openContact", handler);
  }, [openContact]);

  return (
    <>
      <ResourceHub />
      <div className="page-actions" style={{ marginBottom: "60px" }}>
        <BackHomeLink />
      </div>
    </>
  );
}

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Learn & Build"
        title="RESOURCE HUB"
        description="Curated study materials, tools, and references handpicked for SNGCE students across Computer Science, ECE, AI/ML, and more."
      />
      <ResourcesBody />
    </PageShell>
  );
}
