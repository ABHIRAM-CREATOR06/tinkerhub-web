"use client";

import React from "react";
import Link from "next/link";

/**
 * Standard "← Back to Home" link used at the bottom of every sub-page.
 * Uses the unified .btn system so sizing and hover are consistent across
 * all pages. The margin-top is handled by the parent .page-actions wrapper.
 */
export default function BackHomeLink({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`btn btn--outline ${className}`.trim()}>
      ← Back to Home
    </Link>
  );
}
