import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Nuvanode Talent Advisory",
  description:
    "Nuvanode offers Leadership & Critical Talent Search, Talent Strategy & Advisory, People Systems & HR Infrastructure, and Culture & Organization Transformation services.",
};

const services = [
  {
    id: "01",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Leadership & Critical Talent Search",
    tagline: "Precision placement for high-stakes roles",
    description:
      "Finding the right leader can define a company's next decade. At Nuvanode, we bring structured rigor and deep market intelligence to every search — ensuring every candidate we put forward isn't just qualified, but genuinely the right fit for your organization's culture, strategy, and stage of growth.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Executive professional in a boardroom setting",
    items: [
      {
        sub: "Executive Hiring",
        detail: "C-suite, VP, and Director-level search with comprehensive market mapping, deep candidate assessment, and structured onboarding support.",
      },
      {
        sub: "Mid-Level / Niche Hiring",
        detail: "Targeted search for specialized, hard-to-find profiles — technical leads, domain experts, and critical functional roles.",
      },
      {
        sub: "Volume Hiring Programs",
        detail: "Scalable hiring solutions for organizations growing rapidly — designed to maintain quality at speed without overwhelming your internal teams.",
      },
    ],
  },
  {
    id: "02",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Talent Strategy & Advisory",
    tagline: "Aligning your workforce to your vision",
    description:
      "People decisions are business decisions. We help you build the strategic foundation for how your organization acquires, develops, and deploys talent — ensuring every people investment is directly connected to your growth objectives and organizational priorities.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Strategy planning session with business professionals",
    items: [
      {
        sub: "Org Design",
        detail: "Structuring your organization for clarity, accountability, and agility — redesigning spans of control, team structures, and decision-making frameworks to support your business model.",
      },
      {
        sub: "Workforce Planning",
        detail: "Anticipating your talent needs before they become urgent — building a forward-looking people plan that aligns headcount, capability, and timing with business strategy.",
      },
      {
        sub: "Role Architecture",
        detail: "Designing a coherent role framework — job families, levels, and competencies — that brings consistency to hiring, performance, and career development.",
      },
    ],
  },
  {
    id: "03",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "People Systems & HR Infrastructure",
    tagline: "The backbone every growing business needs",
    description:
      "Scaling organizations often outgrow their people processes before they realize it. We help you build HR infrastructure that's right-sized for today and scalable for tomorrow — from basic process design for early-stage startups to full HR technology implementation for growing enterprises.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop",
    imageAlt: "HR systems and digital infrastructure",
    items: [
      {
        sub: "HR Setup for Startups",
        detail: "Building your people function from the ground up — hiring policies, onboarding frameworks, compliance foundations, and the core processes that make you employer-ready.",
      },
      {
        sub: "HR Process Design",
        detail: "Streamlining and standardizing your people processes — from performance cycles and leave management to hiring workflows and employee lifecycle management.",
      },
      {
        sub: "HR Tech Implementation",
        detail: "Selecting and deploying the right HRMS, ATS, or people analytics tools for your business — with change management support to ensure adoption.",
      },
    ],
  },
  {
    id: "04",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Culture & Organization Transformation",
    tagline: "Making culture your competitive advantage",
    description:
      "Culture isn't a poster on the wall — it's the collective behavior of your people. We help organizations make their culture intentional, measurable, and resilient. Whether you&apos;re going through rapid growth, a leadership transition, or a strategic pivot, we support you in shaping a culture that enables high performance.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Collaborative team culture and transformation",
    items: [
      {
        sub: "Culture Programs",
        detail: "Diagnosing your current culture, defining your desired culture, and building the programs, rituals, and interventions that bring the gap.",
      },
      {
        sub: "Performance Management",
        detail: "Designing performance systems that actually motivate — moving beyond annual reviews to continuous feedback, clear goal-setting, and meaningful recognition.",
      },
      {
        sub: "Talent Management Frameworks",
        detail: "Building integrated frameworks for career development, succession planning, and high-potential identification that retain your best people and grow your next generation of leaders.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* ── Hero ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=60&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.08) saturate(0.3)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05151b]/40 to-[#05151b]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 text-center">
          <p className="font-mono text-[11px] tracking-[0.15em] text-[#00aeef] uppercase mb-4 animate-on-scroll">
            What We Offer
          </p>
          <h1
            className="text-gradient font-sans font-bold mb-6 animate-on-scroll"
            style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
          >
            Our Services
          </h1>
          <p className="text-[#bdc8d1] text-lg leading-relaxed max-w-2xl mx-auto animate-on-scroll">
            Precision advisory and talent acquisition solutions designed for
            visionary organizations. We build the foundations of future performance.
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 space-y-16">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="animate-on-scroll"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative rounded-xl overflow-hidden glass-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full aspect-[4/3] object-cover"
                      style={{ filter: "brightness(0.6) saturate(0.6)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05151b]/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-[11px] tracking-[0.1em] text-[#00aeef] bg-[#05151b]/80 px-3 py-1 rounded-sm border border-[#00aeef]/30">
                        Service {service.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-6 ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-4">
                    <div className="text-[#82cfff]">{service.icon}</div>
                    <div className="flex-1 h-px bg-[#3e4850]" />
                  </div>
                  <div>
                    <h2
                      className="text-white font-sans font-bold mb-2"
                      style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
                    >
                      {service.title}
                    </h2>
                    <p className="font-mono text-[11px] tracking-[0.1em] text-[#00aeef] uppercase">
                      {service.tagline}
                    </p>
                  </div>
                  <p className="text-[#bdc8d1] text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />

                  <div className="space-y-4 pt-2">
                    {service.items.map((item) => (
                      <div
                        key={item.sub}
                        className="glass-card rounded-lg p-5 hover-glow transition-all duration-200 group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00aeef] mt-2 flex-shrink-0 group-hover:shadow-[0_0_6px_rgba(0,174,239,0.8)]" />
                          <div>
                            <p className="text-white font-semibold text-sm mb-1 group-hover:text-[#82cfff] transition-colors">
                              {item.sub}
                            </p>
                            <p className="text-[#87929b] text-sm leading-relaxed">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {i < services.length - 1 && (
                <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#3e4850] to-transparent" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#021016] border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 text-center animate-on-scroll">
          <h2
            className="text-gradient font-sans font-bold mb-6"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
          >
            Not sure where to start?
          </h2>
          <p className="text-[#bdc8d1] text-lg max-w-xl mx-auto mb-10">
            Most organizations come to us with a specific pain point. We listen
            first, then recommend. Let&apos;s have a conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://wa.me/+917506368068"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5 rounded-sm text-[12px]"
            >
              Chat on WhatsApp
            </Link>
            <Link
              href="/contact"
              className="btn-outline px-8 py-3.5 rounded-sm text-[12px]"
            >
              Send an Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
