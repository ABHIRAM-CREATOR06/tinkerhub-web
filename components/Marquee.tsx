"use client";

import Link from "next/link";

interface MarqueeProps {
  text?: string;
  linkText?: string;
  linkHref?: string;
  onLinkClick?: () => void;
}

export default function Marquee({
  text = "WE GOT FEATURED BY UN WOMEN ✦ TINKERHUB SNGCE STUDY JAM IS LIVE",
  linkText = "EXPLORE STUDY JAMS ⚡",
  linkHref = "/study-jam",
  onLinkClick,
}: MarqueeProps) {
  const linkElement = linkHref ? (
    <Link href={linkHref} style={{ color: "inherit", textDecoration: "underline" }}>
      {linkText}
    </Link>
  ) : (
    <u style={{ cursor: "pointer" }} onClick={onLinkClick}>{linkText}</u>
  );

  const content = (
    <>
      <span>
        ✦ {text} ✦ {linkElement} ✦ {text} ✦ {linkElement} ✦
      </span>
      <span>
        ✦ {text} ✦ {linkElement} ✦ {text} ✦ {linkElement} ✦
      </span>
    </>
  );

  return (
    <div className="marquee-wrap" aria-label="Announcement marquee">
      <div className="marquee">{content}</div>
    </div>
  );
}
