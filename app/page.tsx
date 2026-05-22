import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";

const whatWeDo = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Leadership & Critical Talent Search",
    body:
      "We go beyond résumés. Our rigorous, intelligence-driven search process identifies visionary leaders — from C-suite executives to mid-level specialists — who are not just qualified, but culturally aligned and ready to drive meaningful change. Whether it's an executive search, a niche technical hire, or a large-scale volume hiring program, we deliver talent that moves the needle.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Talent Strategy & Advisory",
    body:
      "Growth without strategy is chaos. We partner with organizations to design the workforce architecture that supports their next stage — mapping roles, structuring org design, building workforce plans, and ensuring every people decision is tied to a business outcome. We help you think about talent not as a function, but as a growth lever.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "People Systems & HR Infrastructure",
    body:
      "Strong businesses run on strong systems. We help organizations build the HR foundation they need — from scratch for early-stage startups, or as a redesign for scaling businesses. This means designing scalable HR processes, implementing the right HR technology, and creating the operational backbone that lets your people function perform at its best.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Culture & Organization Transformation",
    body:
      "Culture is the invisible operating system of your organization. We help you make it visible, intentional, and scalable. From culture diagnostics and employee experience design to performance frameworks and talent management systems, we work with leadership teams to create environments where your best people do their best work — and stay.",
  },
];

export default function HomePage() {
  return (
    <div className="pt-24">
      {/* ── Hero Slider ── */}
      <HeroSlider />

      {/* ── Value Proposition ── */}
      <section className="py-20 border-b border-white/5 bg-[#021016]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-center animate-on-scroll">
          <p className="font-mono text-base md:text-lg font-bold tracking-[0.12em] text-[#00aeef] uppercase mb-5">
            Our Purpose
          </p>
          <p
            className="text-[#d4e5ee] font-sans font-semibold max-w-4xl mx-auto"
            style={{ fontSize: "clamp(20px, 3vw, 28px)", lineHeight: "1.5" }}
          >
            Helping growing businesses build high-impact teams, scalable people
            practices, and strong culture.
          </p>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="font-mono text-base md:text-lg font-bold tracking-[0.12em] text-[#00aeef] uppercase mb-4">
              What We Do
            </p>
            <h2
              className="text-gradient font-sans font-bold"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              Four pillars. One mission.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDo.map((item, i) => (
              <div
                key={i}
                className="glass-card rounded-lg p-8 hover-glow transition-all duration-300 group animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-[#82cfff] mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-white font-sans font-semibold text-xl mb-4 group-hover:text-[#82cfff] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#bdc8d1] text-base leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy Quote ── */}
      <section
        className="relative py-24 md:py-32 border-y border-white/5 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(18,34,40,0.8) 0%, rgba(2,16,22,0.95) 100%)",
        }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=60&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.07) saturate(0.4)", mixBlendMode: "luminosity" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05151b]/90 to-[#05151b]/60" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 text-center animate-on-scroll">
          <svg
            className="mx-auto mb-8 text-[#00aeef]/30"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
          </svg>
          <blockquote
            className="text-white font-sans font-semibold italic max-w-4xl mx-auto"
            style={{ fontSize: "clamp(18px, 2.5vw, 26px)", lineHeight: "1.6" }}
          >
            We believe organizations are built through the right talent, supported
            by the right systems, and sustained by the right culture.
          </blockquote>
          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="w-12 h-0.5 bg-[#00aeef] rounded-full" />
            <p className="font-mono text-[11px] tracking-[0.15em] text-[#00aeef] uppercase">
              The Nuvanode Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-center animate-on-scroll">
          <h2
            className="text-gradient font-sans font-bold mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Ready to build something extraordinary?
          </h2>
          <p className="text-[#bdc8d1] text-lg max-w-xl mx-auto mb-10">
            Whether you&apos;re scaling rapidly or going through transformation,
            we&apos;re here to help you get the people side right.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://www.linkedin.com/company/nuvanode-consulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5 rounded-sm text-[12px]"
            >
              Connect Now
            </Link>
            <Link
              href="https://wa.me/+917506368068"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-3.5 rounded-sm text-[12px]"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
