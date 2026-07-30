"use client";

import React from "react";

interface MarqueeProps {
  text?: string;
  linkText?: string;
  linkHref?: string;
  onLinkClick?: () => void;
}

export default function Marquee({
  text = "WE GOT FEATURED BY UN WOMEN ✦ TINKERHUB SNGCE STUDY JAM IS LIVE",
  linkText = "CHECK IT OUT",
  onLinkClick,
}: MarqueeProps) {
  const content = (
    <>
      <span>
        ✦ {text} ✦ <u style={{ cursor: "pointer" }} onClick={onLinkClick}>{linkText}</u> ✦ {text} ✦ <u style={{ cursor: "pointer" }} onClick={onLinkClick}>{linkText}</u> ✦
      </span>
      <span>
        ✦ {text} ✦ <u style={{ cursor: "pointer" }} onClick={onLinkClick}>{linkText}</u> ✦ {text} ✦ <u style={{ cursor: "pointer" }} onClick={onLinkClick}>{linkText}</u> ✦
      </span>
    </>
  );

  return (
    <div className="marquee-wrap" aria-label="Announcement marquee">
      <div className="marquee">{content}</div>
    </div>
  );
}
