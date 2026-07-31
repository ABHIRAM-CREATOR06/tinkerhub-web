"use client";

import React from "react";
import { usePageShell } from "./PageShell";

interface PageHeaderProps {
  /** Small label above the title (e.g. "SNGCE Chapter"). */
  eyebrow?: string;
  /** Big pixel headline. */
  title?: string;
  /** One-paragraph description under the title. */
  description?: string;
}

/**
 * Shared top-of-page header used by every sub-page.
 * Renders the persistent INDEX pill and, optionally, an eyebrow + title + desc.
 * Eliminates the copy-pasted boilerplate that used to live in each page file.
 */
export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  const { openNav } = usePageShell();

  return (
    <header className="page-header">
      <button
        type="button"
        className="index-pill"
        onClick={openNav}
        aria-label="Open Navigation"
      >
        <span>INDEX ☰</span>
      </button>

      {(eyebrow || title || description) && (
        <div className="page-header-text">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          {title && <h1 className="pixel-headline page-headline">{title}</h1>}
          {description && <p className="desc">{description}</p>}
        </div>
      )}
    </header>
  );
}
