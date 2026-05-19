"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".animate-on-scroll")
    );

    if (els.length === 0) return;

    const vh = window.innerHeight;

    // ── Step 1: Classify every element immediately (synchronously) ──
    // Above-fold / in-viewport → mark visible now, no hiding ever.
    // Below-fold → hide via JS inline styles (user can't see them yet).
    // CSS never hides anything, so there is zero blank-page window.
    els.forEach((el) => {
      el.classList.remove("visible");
      const rect = el.getBoundingClientRect();
      const inViewport = rect.top < vh * 0.98 && rect.bottom > 0;

      if (inViewport) {
        // Ensure fully visible, clear any stale inline styles
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.transition = "";
        el.classList.add("visible");
      } else {
        // Safe to hide — it's off-screen
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        el.style.transition = "opacity 0.65s ease, transform 0.65s ease";
      }
    });

    // ── Step 2: Observe below-fold elements, animate on scroll ──
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "none";
            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.05 }
    );

    els.forEach((el) => {
      if (!el.classList.contains("visible")) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();

    // Re-run on every SPA page navigation so new page elements are handled
  }, [pathname]);

  return null;
}
