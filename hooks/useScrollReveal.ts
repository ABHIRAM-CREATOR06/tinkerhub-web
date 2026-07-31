"use client";

import { useEffect, useRef } from "react";

/**
 * Custom hook for scroll-triggered reveal animations.
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, it adds the "visible" class.
 */
export function useScrollReveal<T extends HTMLElement>(
  threshold: number = 0.15
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
