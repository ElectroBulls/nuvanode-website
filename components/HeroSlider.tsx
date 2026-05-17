"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    label: "High-Impact Teams",
    sub: "We identify and place visionary leaders who don't just fill roles — they elevate entire organizations.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Business professionals in a modern office setting",
  },
  {
    label: "Scalable People Practices",
    sub: "From org design to HR infrastructure, we build the systems that let your business grow without friction.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Strategy and planning session with professionals",
  },
  {
    label: "Strong Culture",
    sub: "Culture is your competitive edge. We help you define it, embed it, and sustain it as you scale.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Diverse team collaborating in a modern workspace",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(520px, 88vh, 820px)" }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === active ? "active" : ""}`}
          style={{ zIndex: i === active ? 2 : 1 }}
        >
          {/* Background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt={slide.imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.25) saturate(0.6)" }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05151b] via-[#05151b]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05151b] via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center max-w-[1280px] mx-auto px-6 md:px-16">
            <div className="max-w-2xl">
              <p className="font-mono text-base md:text-lg font-bold tracking-[0.12em] text-[#00aeef] uppercase mb-4">
                Nuvanode · Talent Search &amp; Advisory
              </p>
              <h1
                className="font-sans font-bold text-white mb-6"
                style={{
                  fontSize: "clamp(36px, 6vw, 72px)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                {slide.label}
              </h1>
              <p className="text-[#bdc8d1] text-lg leading-relaxed max-w-lg">
                {slide.sub}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/contact"
                  className="btn-primary px-7 py-3 rounded-sm text-[12px]"
                >
                  Start a Conversation
                </a>
                <a
                  href="/services"
                  className="btn-outline px-7 py-3 rounded-sm text-[12px]"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === active
                ? "w-8 h-2 bg-[#00aeef] shadow-[0_0_8px_rgba(0,174,239,0.8)]"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Slide number */}
      <div className="absolute bottom-8 right-6 md:right-16 z-10 font-mono text-[11px] text-white/30">
        {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
