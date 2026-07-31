"use client";

import React from "react";
import spotlightsData from "@/data/spotlights.json";
import LocalImage from "./LocalImage";

export default function Spotlight() {
  return (
    <section className="spotlight" id="spotlight">
      <div className="head">
        <div className="eyebrow">Campus</div>
        <h2 className="ref-title">Spotlight</h2>
      </div>

      <div className="spot-col">
        {spotlightsData.map((item) => (
          <div className="spot-card" key={item.id}>
            <div className="spot-pin"></div>
            <LocalImage
              src={item.image}
              alt={item.name}
              gradient={item.gradient ?? item.bg}
              emoji={item.emoji}
              className="spot-photo"
              imgStyle={{ borderRadius: "50%" }}
            />
            <div className="spot-body">
              <div className="tag">{item.tag}</div>
              <h4>{item.name}</h4>
              <p>{item.story}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
