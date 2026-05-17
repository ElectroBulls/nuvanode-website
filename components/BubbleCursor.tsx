"use client";

import { useEffect } from "react";

export default function BubbleCursor() {
  useEffect(() => {
    const cursor = document.getElementById("bubble-cursor");
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let curX = -100;
    let curY = -100;
    let rafId: number;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        cursor.classList.add("visible");
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
      // Smooth lag follow
      curX += (mouseX - curX) * 0.4;
      curY += (mouseY - curY) * 0.4;
      cursor.style.left = `${curX}px`;
      cursor.style.top = `${curY}px`;
      checkHover();
      rafId = requestAnimationFrame(loop);
    };

    // Touch ripple for mobile/tablet
    const onTouch = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        const ripple = document.createElement("div");
        ripple.className = "touch-ripple";
        ripple.style.left = `${touch.clientX}px`;
        ripple.style.top = `${touch.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchstart", onTouch, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchstart", onTouch);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div id="bubble-cursor" aria-hidden="true" />;
}
