"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".animate-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    // Observe all elements first so the observer can mark already-visible
    // ones before we hide anything.
    els.forEach((el) => observer.observe(el));

    // Two rAF frames: first lets the observer fire its initial callbacks,
    // second confirms the browser has painted those changes. Only then do
    // we add animations-ready, which applies opacity:0 to not-yet-visible
    // elements. This prevents any flash of invisible content on first load.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.add("animations-ready");
      });
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("animations-ready");
    };
  }, []);

  return null;
}
