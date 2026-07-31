"use client";

import React, { useState } from "react";

interface LocalImageProps {
  /**
   * Local path under /public, e.g. "/images/team/abhiram.jpg".
   * Empty string is allowed and triggers the fallback immediately.
   */
  src?: string;
  alt: string;
  /** Gradient used for the fallback (and as a soft bg behind the photo). */
  gradient?: string;
  /** Optional emoji shown inside the fallback card (kept for legacy cards). */
  emoji?: string;
  /** Rounded or square. Rounded gives a circle, square gives the polaroid look. */
  shape?: "circle" | "rounded" | "square";
  className?: string;
  /** Extra inline styles applied to the outer wrapper. */
  style?: React.CSSProperties;
  /** Forwarded to the underlying <img>. */
  imgStyle?: React.CSSProperties;
}

/**
 * Drop-in <img> for local image assets. Loads the local file if present, falls
 * back to a brand-coloured card with the person's initials (or a passed-in
 * emoji) if the file is missing or the path is empty.
 *
 * No third-party API, no broken-image icons.
 */
export default function LocalImage({
  src,
  alt,
  gradient = "linear-gradient(135deg, #FF4FD1, #800860)",
  emoji,
  shape = "circle",
  className,
  style,
  imgStyle,
}: LocalImageProps) {
  const [errored, setErrored] = useState(false);
  const hasImage = Boolean(src && src.trim().length > 0) && !errored;

  const borderRadius =
    shape === "circle" ? "50%" : shape === "rounded" ? "8px" : "0";

  const fallbackInitial = (() => {
    const first = alt.trim().charAt(0).toUpperCase();
    return first || "?";
  })();

  return (
    <div
      className={className}
      style={{
        background: gradient,
        borderRadius,
        overflow: "hidden",
        position: "relative",
        ...style,
      }}
    >
      {hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            ...imgStyle,
          }}
        />
      ) : (
        <div
          aria-label={alt}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontFamily: "var(--font-anton), sans-serif",
            fontSize: "1.6rem",
            letterSpacing: "0.02em",
            textShadow: "0 1px 2px rgba(0,0,0,0.25)",
          }}
        >
          {emoji ?? fallbackInitial}
        </div>
      )}
    </div>
  );
}
