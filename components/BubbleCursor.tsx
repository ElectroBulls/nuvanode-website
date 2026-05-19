"use client";

import { useEffect } from "react";

// Palette: white, soft-cyan, brand-cyan — keeps sparkles elegant, not garish
const SPARKLE_COLORS = [
  ["rgba(255,255,255,0.92)",  "4px"],
  ["rgba(130,207,255,0.88)",  "5px"],
  ["rgba(0,174,239,0.80)",    "6px"],
  ["rgba(200,235,255,0.85)",  "4px"],
];

function spawnSparkle(x: number, y: number) {
  const el = document.createElement("div");
  el.className = "cursor-sparkle";

  const [col, glow] = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
  const sz   = (2 + Math.random() * 3).toFixed(1) + "px";          // 2–5 px
  const dx   = ((Math.random() - 0.5) * 36).toFixed(1) + "px";     // ±18 px horizontal
  const dy   = (-8  - Math.random() * 22).toFixed(1) + "px";       // 8–30 px upward
  const dur  = (0.45 + Math.random() * 0.35).toFixed(2) + "s";     // 0.45–0.80 s

  el.style.cssText =
    `left:${x}px;top:${y}px;` +
    `--sz:${sz};--col:${col};--glow:${glow};--dx:${dx};--dy:${dy};--dur:${dur};`;

  document.body.appendChild(el);
  setTimeout(() => el.remove(), parseFloat(dur) * 1000 + 50);
}

export default function BubbleCursor() {
  useEffect(() => {
    const cursor = document.getElementById("bubble-cursor");
    if (!cursor) return;

    // ── Bubble cursor state ──────────────────────────────────────────
    let mouseX = -100, mouseY = -100;
    let curX   = -100, curY   = -100;
    let rafId: number;
    let visible = false;

    // ── Sparkle throttle state ───────────────────────────────────────
    let lastSX = 0, lastSY = 0, lastSTime = 0;
    const DIST_THRESHOLD = 14;   // px moved before next sparkle
    const TIME_THRESHOLD = 55;   // ms between sparkles

    // ── Mouse handlers ───────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!visible) {
        visible = true;
        cursor.classList.add("visible");
      }

      // Spawn sparkle when cursor has moved enough distance/time
      const now  = Date.now();
      const dist = Math.hypot(e.clientX - lastSX, e.clientY - lastSY);
      if (dist > DIST_THRESHOLD && now - lastSTime > TIME_THRESHOLD) {
        spawnSparkle(e.clientX, e.clientY);
        lastSX = e.clientX; lastSY = e.clientY; lastSTime = now;
      }
    };

    const onLeave = () => {
      visible = false;
      cursor.classList.remove("visible");
    };

    const checkHover = () => {
      const el = document.elementFromPoint(mouseX, mouseY);
      const isClickable = el?.closest("a, button, [role='button'], input, textarea, select, label");
      cursor.classList.toggle("hovering", !!isClickable);
    };

    const loop = () => {
      curX += (mouseX - curX) * 0.4;
      curY += (mouseY - curY) * 0.4;
      cursor.style.left = `${curX}px`;
      cursor.style.top  = `${curY}px`;
      checkHover();
      rafId = requestAnimationFrame(loop);
    };

    // ── Touch handlers (mobile / tablet) ────────────────────────────
    const onTouchStart = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];

        // Existing ripple
        const ripple = document.createElement("div");
        ripple.className = "touch-ripple";
        ripple.style.left = `${t.clientX}px`;
        ripple.style.top  = `${t.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);

        // Sparkle burst — 5 particles staggered 0–80 ms
        const burst = 5;
        for (let j = 0; j < burst; j++) {
          setTimeout(() => spawnSparkle(t.clientX, t.clientY), j * 16);
        }

        lastSX = t.clientX; lastSY = t.clientY; lastSTime = Date.now();
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t   = e.changedTouches[i];
        const now = Date.now();
        const dist = Math.hypot(t.clientX - lastSX, t.clientY - lastSY);
        if (dist > DIST_THRESHOLD && now - lastSTime > TIME_THRESHOLD) {
          spawnSparkle(t.clientX, t.clientY);
          lastSX = t.clientX; lastSY = t.clientY; lastSTime = now;
        }
      }
    };

    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove",  onTouchMove,  { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove",  onTouchMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div id="bubble-cursor" aria-hidden="true" />;
}
