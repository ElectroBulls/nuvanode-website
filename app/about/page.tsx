import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nuvanode Talent Advisory",
  description:
    "Learn about Nuvanode — a talent and HR advisory firm led by Salini C, with 17+ years of experience building high-impact people foundations for organizations.",
};

const experiences = [
  { name: "Unilever" },
  { name: "Wipro" },
  { name: "KPMG" },
  { name: "Deloitte" },
  { name: "Crompton" },
];

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Strategic Thinking",
    body: "We bring a macro view to every engagement — understanding your business stage, market context, and long-term ambition before recommending a path forward.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    title: "Hands-On Execution",
    body: "We don&apos;t just consult from the sidelines. We roll up our sleeves, work alongside your teams, and see initiatives through from diagnosis to delivery.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Practical Solutions",
    body: "Every recommendation we make is grounded in what&apos;s pragmatic for your organization&apos;s size, stage, and culture — not what sounds good on paper.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Long-Term Partnership",
    body: "We invest in understanding your organization deeply. Our goal isn&apos;t a single transaction — it&apos;s a relationship that evolves as you grow.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* ── Page Hero ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=60&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.08) saturate(0.4)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05151b]/50 to-[#05151b]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16">
          <p className="font-mono text-[11px] tracking-[0.15em] text-[#00aeef] uppercase mb-4 animate-on-scroll">
            Who We Are
          </p>
          <h1
            className="text-gradient font-sans font-bold mb-6 animate-on-scroll"
            style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
          >
            About Nuvanode
          </h1>
          <p className="text-[#bdc8d1] text-lg leading-relaxed max-w-2xl animate-on-scroll">
            We partner with organizations to build strong people foundations that
            enable growth, scale, and long-term performance.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Text */}
            <div className="lg:col-span-7 space-y-8 animate-on-scroll">
              <div className="space-y-6 text-[#bdc8d1] text-base leading-relaxed">
                <p>
                  At Nuvanode, we partner with organizations to build strong people
                  foundations that enable growth, scale, and long-term performance.
                  From talent acquisition and organization design to HR systems,
                  culture, and transformation initiatives, we work closely with
                  businesses to create practical, scalable solutions aligned to their
                  stage of growth.
                </p>
                <p>
                  Our approach combines strategic thinking with hands-on execution —
                  helping organizations hire the right talent, strengthen people
                  processes, implement effective systems, and build high-performing
                  teams and cultures.
                </p>
                <p>
                  We work with startups, growing businesses, and evolving organizations
                  across leadership hiring, talent strategy, HR infrastructure,
                  workforce planning, and transformation projects.
                </p>
              </div>

              <div className="glass-card rounded-lg p-6 border-l-2 border-l-[#00aeef]">
                <p className="text-[#d4e5ee] text-base leading-relaxed italic">
                  &ldquo;At Nuvanode, we believe organizations grow stronger when the
                  right talent, systems, and ways of working come together with
                  clarity and intent.&rdquo;
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5 animate-on-scroll">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#00aeef]/10 blur-3xl rounded-full" />
                <div className="glass-card rounded-xl overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop"
                    alt="Professional leader in a corporate setting"
                    className="w-full aspect-[4/5] object-cover"
                    style={{ filter: "brightness(0.75) saturate(0.7)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05151b] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="font-mono text-[10px] tracking-[0.1em] text-[#00aeef] uppercase mb-1">
                      Strategic People Partnerships
                    </p>
                    <p className="text-white text-sm font-semibold">
                      Building the foundations of growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 md:py-28 bg-[#021016] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="font-mono text-[11px] tracking-[0.15em] text-[#00aeef] uppercase mb-4">
              How We Work
            </p>
            <h2
              className="text-white font-sans font-bold"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              What sets us apart
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="glass-card rounded-lg p-8 hover-glow transition-all duration-300 group animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-[#82cfff] mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {v.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#82cfff] transition-colors">
                  {v.title}
                </h3>
                <p
                  className="text-[#bdc8d1] text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Section ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="mb-12 animate-on-scroll">
            <p className="font-mono text-[11px] tracking-[0.15em] text-[#00aeef] uppercase mb-4">
              Leadership
            </p>
            <div className="flex items-center gap-6">
              <h2
                className="text-white font-sans font-bold"
                style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
              >
                The person behind Nuvanode
              </h2>
              <div className="flex-1 h-px bg-[#3e4850] hidden md:block" />
            </div>
          </div>

          <div className="glass-card rounded-xl p-8 md:p-12 border-l-2 border-l-[#00aeef] hover-glow transition-all duration-300 animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Profile */}
              <div className="md:col-span-4 space-y-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#00aeef]/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80&auto=format&fit=crop"
                    alt="Salini C, Founder"
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.85) saturate(0.7)" }}
                  />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,174,239,0.2)]" />
                </div>
                <div>
                  <h3 className="text-gradient font-sans font-bold text-2xl">Salini C</h3>
                  <p className="font-mono text-[11px] tracking-[0.1em] text-[#00aeef] uppercase mt-1">
                    Founder & Principal Advisor
                  </p>
                </div>
                <div className="space-y-3 text-[#bdc8d1] text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#00aeef]" />
                    <span>17+ Years of Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#00aeef]" />
                    <span>Executive & Large-scale Hiring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#00aeef]" />
                    <span>Talent Strategy & Transformation</span>
                  </div>
                </div>
                <Link
                  href="https://www.linkedin.com/in/salinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-5 py-2.5 rounded-sm text-[11px] inline-flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </Link>
              </div>

              {/* Bio */}
              <div className="md:col-span-8 space-y-6">
                <p className="text-[#d4e5ee] text-lg leading-relaxed font-light">
                  Nuvanode is led by Salini C, a talent and HR leader with over 17 years
                  of experience across leading organizations including Unilever, Wipro,
                  KPMG, Deloitte, and Crompton.
                </p>
                <p className="text-[#bdc8d1] text-base leading-relaxed">
                  Her experience spans executive and large-scale hiring, talent strategy,
                  employer branding, organization development, and people transformation
                  initiatives across diverse business environments. She has partnered with
                  organizations at various stages of growth — from high-growth startups
                  to large enterprises — helping them build the talent foundations needed
                  to perform and scale.
                </p>

                {/* Experience grid */}
                <div className="pt-4">
                  <p className="font-mono text-[11px] tracking-[0.1em] text-[#87929b] uppercase mb-4">
                    Select Experience
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {experiences.map((exp) => (
                      <div
                        key={exp.name}
                        className="px-4 py-2 rounded-sm border border-[#3e4850] hover:border-[#82cfff]/50 hover:bg-[#00aeef]/5 transition-all duration-200 text-sm text-[#d4e5ee] font-semibold"
                      >
                        {exp.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-center animate-on-scroll">
          <h2
            className="text-gradient font-sans font-bold mb-6"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
          >
            Let&apos;s start a conversation
          </h2>
          <p className="text-[#bdc8d1] text-lg max-w-xl mx-auto mb-10">
            Tell us about your people challenges. We&apos;ll bring the clarity,
            the strategy, and the execution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3.5 rounded-sm text-[12px]"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="btn-outline px-8 py-3.5 rounded-sm text-[12px]"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
