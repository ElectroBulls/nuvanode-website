import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Our Approach | Nuvanode Talent Advisory",
  description:
    "Nuvanode's structured 5-phase approach: Diagnosis, Design, Execute, Calibrate, Enable, and Scale — a proven methodology for people transformation.",
};

interface Phase {
  id: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  icon: ReactNode;
  image: string;
  imageAlt: string;
}

const phases: Phase[] = [
  {
    id: "01",
    title: "Diagnosis",
    tagline: "Understand before you act",
    description:
      "Every effective people solution begins with an honest diagnosis. We start by deeply understanding your organization — its context, history, culture, and the specific challenge at hand. Through structured discovery sessions, gap analyses, HR audits, and stakeholder interviews, we build a clear picture of where you are today and what's actually driving the challenge.",
    items: ["Discovery & Context Setting", "Gap Analysis", "HR & Talent Audits", "Stakeholder Interviews"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Data analysis and discovery",
  },
  {
    id: "02",
    title: "Design",
    tagline: "Build the right solution, not just a solution",
    description:
      "Armed with insight, we move into design. This is where strategy takes shape — we build frameworks, define systems, and set the success metrics that will guide the work ahead. Good design is both ambitious and realistic: it's grounded in your organizational reality while pushing for meaningful change.",
    items: ["Frameworks & Blueprints", "Systems Architecture", "Success Metrics & KPIs", "Solution Roadmaps"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Framework design and planning",
  },
  {
    id: "03",
    title: "Execute",
    tagline: "Deliver with discipline and care",
    description:
      "Execution is where most people initiatives fall apart. We bring structured change management principles to every deployment — starting with pilot testing to validate approach, gathering early feedback, and then managing a thoughtful, phased full rollout. We work alongside your teams, not in isolation from them.",
    items: ["Change Management", "Pilot Testing & Validation", "Full Deployment", "Stakeholder Communication"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Execution and deployment",
  },
  {
    id: "04",
    title: "Calibrate",
    tagline: "Stay honest about what's working",
    description:
      "Once an initiative is live, we don't walk away. We build structured feedback loops to assess what's working and what needs adjustment. Calibration is an ongoing discipline — using data, observation, and stakeholder input to course-correct and optimize as the initiative matures.",
    items: ["Feedback Loops & Listening", "Performance Data Review", "Course Correction", "Optimization & Refinement"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Calibration and feedback analysis",
  },
  {
    id: "05",
    title: "Enable",
    tagline: "Build internal capability, not dependency",
    description:
      "Our work isn't done until your team can own and run what we've built. We invest in knowledge transfer — through training programs, standard operating procedures, and structured handover — ensuring your people have the capability and confidence to sustain the initiative long after our engagement ends.",
    items: ["Team Training Programs", "SOPs & Documentation", "Structured Handover", "Ongoing Advisory Support"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Team training and enablement",
  },
  {
    id: "06",
    title: "Scale",
    tagline: "From initiative to institution",
    description:
      "The final phase is about making what works, permanent. Scaling means strengthening the architecture so it can grow with your organization — building a talent pipeline that continuously delivers capability, and embedding the right structures, tools, and habits so that performance becomes self-sustaining.",
    items: ["Architectural Strengthening", "Talent Pipeline Development", "Scalability Planning", "Continuous Improvement Systems"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Growth chart on a vision board in a board meeting",
  },
];

export default function ApproachPage() {
  return (
    <div className="pt-24">
      {/* ── Hero ── */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=60&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.08) saturate(0.4)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05151b]/40 to-[#05151b]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 text-center">
          <p className="font-mono text-base md:text-lg font-bold tracking-[0.12em] text-[#00aeef] uppercase mb-4 animate-on-scroll">
            How We Work
          </p>
          <h1
            className="text-gradient font-sans font-bold mb-6 animate-on-scroll"
            style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
          >
            Our Approach
          </h1>
          <p className="text-[#bdc8d1] text-lg leading-relaxed max-w-2xl mx-auto animate-on-scroll">
            A structured, six-phase methodology that moves from deep understanding
            to sustainable impact — designed to deliver results that last.
          </p>
        </div>
      </section>

      {/* ── Phase Overview Strip ── */}
      <section className="py-8 bg-[#021016] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {phases.map((phase) => (
              <div
                key={phase.id}
                className="flex flex-col items-center text-center px-2 py-3 rounded-sm border border-[#3e4850]/40 hover:border-[#82cfff]/40 hover:bg-[#00aeef]/5 transition-all duration-200 cursor-default"
              >
                <span className="font-mono text-[9px] tracking-[0.1em] text-[#87929b] uppercase mb-1">
                  {phase.id}
                </span>
                <span className="text-[#82cfff] font-semibold text-xs md:text-sm leading-tight">
                  {phase.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00aeef]/50 via-[#3e4850] to-transparent" />

            <div className="space-y-16">
              {phases.map((phase, i) => (
                <div
                  key={phase.id}
                  className="relative pl-14 md:pl-20 animate-on-scroll group"
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  {/* Dot */}
                  <div className="absolute left-3 md:left-5 top-0 w-5 h-5 rounded-full border-2 border-[#00aeef] bg-[#05151b] group-hover:bg-[#00aeef] transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(0,174,239,0.7)] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00aeef] group-hover:bg-white transition-colors" />
                  </div>

                  <div className="glass-card rounded-xl overflow-hidden hover-glow transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* Image */}
                      <div className="lg:col-span-4 relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={phase.image}
                          alt={phase.imageAlt}
                          className="w-full h-48 lg:h-full object-cover"
                          style={{ filter: "brightness(0.5) saturate(0.5)" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#122228]/80 hidden lg:block" />
                        <div className="absolute top-4 left-4">
                          <span className="font-mono text-[11px] tracking-[0.1em] text-[#00aeef] bg-[#05151b]/80 px-3 py-1 rounded-sm border border-[#00aeef]/30">
                            Phase {phase.id}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-8 p-8 space-y-5">
                        <div className="flex items-start gap-4">
                          <div className="text-[#82cfff] mt-0.5 flex-shrink-0">{phase.icon}</div>
                          <div>
                            <h2 className="text-white font-sans font-bold text-2xl group-hover:text-[#82cfff] transition-colors">
                              {phase.title}
                            </h2>
                            <p className="font-mono text-[11px] tracking-[0.1em] text-[#00aeef] uppercase mt-1">
                              {phase.tagline}
                            </p>
                          </div>
                        </div>

                        <p className="text-[#bdc8d1] text-base leading-relaxed">
                          {phase.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 pt-2">
                          {phase.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2 text-sm text-[#bdc8d1]"
                            >
                              <div className="w-1 h-1 rounded-full bg-[#00aeef] flex-shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing Quote ── */}
      <section className="py-20 md:py-28 bg-[#021016] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-center animate-on-scroll">
          <svg
            className="mx-auto mb-8 text-[#00aeef]/30"
            width="48" height="48" viewBox="0 0 24 24" fill="currentColor"
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

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-center animate-on-scroll">
          <h2
            className="text-gradient font-sans font-bold mb-6"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
          >
            Ready to start the journey?
          </h2>
          <p className="text-[#bdc8d1] text-lg max-w-xl mx-auto mb-10">
            Every engagement begins with a conversation. Tell us where you are,
            and we&apos;ll help you chart the path forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3.5 rounded-sm text-[12px]"
            >
              Get In Touch
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
