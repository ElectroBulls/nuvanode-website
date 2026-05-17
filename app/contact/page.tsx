import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Nuvanode Talent Advisory",
  description:
    "Connect with Nuvanode Talent Advisory — reach out via email, phone, WhatsApp, or LinkedIn to start a conversation about your talent and people strategy needs.",
};

const contactItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "shalini@nuvanode.com",
    href: "mailto:shalini@nuvanode.com",
    sub: "We typically respond within 24 hours",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 75063 68068",
    href: "tel:+917506368068",
    sub: "Monday to Friday, 9am – 7pm IST",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Chat Directly",
    href: "https://wa.me/+917506368068",
    sub: "Fastest way to reach us",
    isWhatsApp: true,
  },
];

const socialLinks = [
  {
    label: "Nuvanode on LinkedIn",
    sub: "Company page — updates, insights & news",
    href: "https://www.linkedin.com/company/nuvanode-consulting/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Salini C on LinkedIn",
    sub: "Founder profile — connect directly",
    href: "https://www.linkedin.com/in/salinic/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* ── Hero ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=60&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.08) saturate(0.4)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05151b]/40 to-[#05151b]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16">
          <p className="font-mono text-[11px] tracking-[0.15em] text-[#00aeef] uppercase mb-4 animate-on-scroll">
            Let&apos;s Talk
          </p>
          <h1
            className="text-gradient font-sans font-bold mb-6 animate-on-scroll"
            style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}
          >
            Connect with Precision.
          </h1>
          <p className="text-[#bdc8d1] text-lg leading-relaxed max-w-2xl animate-on-scroll">
            Whether you&apos;re ready to start a search, explore a strategic
            challenge, or simply want to understand how we can help — we&apos;d love
            to hear from you.
          </p>
        </div>
      </section>

      {/* ── Main Contact Grid ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* ── Contact Form ── */}
            <div className="lg:col-span-7 animate-on-scroll">
              <div className="glass-card rounded-xl p-8 md:p-12 hover-glow transition-all duration-300 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00aeef]/5 rounded-full blur-[60px]" />
                <h2 className="text-white font-sans font-bold text-2xl mb-2">Send an Inquiry</h2>
                <p className="text-[#87929b] text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <form
                  action="mailto:shalini@nuvanode.com"
                  method="post"
                  encType="text/plain"
                  className="space-y-6 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-[10px] tracking-[0.1em] text-[#87929b] uppercase mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="w-full bg-[#0d1e24] border border-[#3e4850] rounded-sm px-4 py-3 text-[#d4e5ee] text-sm placeholder-[#3e4850] transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] tracking-[0.1em] text-[#87929b] uppercase mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your organization"
                        className="w-full bg-[#0d1e24] border border-[#3e4850] rounded-sm px-4 py-3 text-[#d4e5ee] text-sm placeholder-[#3e4850] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.1em] text-[#87929b] uppercase mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full bg-[#0d1e24] border border-[#3e4850] rounded-sm px-4 py-3 text-[#d4e5ee] text-sm placeholder-[#3e4850] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.1em] text-[#87929b] uppercase mb-2">
                      How Can We Help?
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your talent or people strategy challenge..."
                      className="w-full bg-[#0d1e24] border border-[#3e4850] rounded-sm px-4 py-3 text-[#d4e5ee] text-sm placeholder-[#3e4850] transition-all resize-none"
                      required
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      type="submit"
                      className="btn-primary px-8 py-3.5 rounded-sm text-[12px] flex items-center gap-2"
                    >
                      Submit Inquiry
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                    <Link
                      href="https://wa.me/+917506368068"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline px-8 py-3.5 rounded-sm text-[12px] flex items-center gap-2"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Chat Now
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            {/* ── Right Column ── */}
            <div className="lg:col-span-5 space-y-6 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>

              {/* Direct Contact */}
              <div className="glass-card rounded-xl p-8 hover-glow transition-all duration-300">
                <h3 className="text-white font-semibold text-xl mb-6 pb-4 border-b border-[#3e4850]">
                  Direct Access
                </h3>
                <div className="space-y-6">
                  {contactItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 bg-[#122228] rounded-sm border border-[#3e4850] group-hover:border-[#82cfff]/50 group-hover:bg-[#00aeef]/10 transition-all flex-shrink-0">
                        <div className="text-[#82cfff]">{item.icon}</div>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] tracking-[0.1em] text-[#87929b] uppercase mb-1">
                          {item.label}
                        </p>
                        <p className="text-[#d4e5ee] font-semibold text-sm group-hover:text-[#82cfff] transition-colors">
                          {item.value}
                        </p>
                        <p className="text-[#87929b] text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* LinkedIn Cards */}
              <div className="glass-card rounded-xl p-8 hover-glow transition-all duration-300">
                <h3 className="text-white font-semibold text-xl mb-6 pb-4 border-b border-[#3e4850]">
                  Professional Network
                </h3>
                <p className="text-[#87929b] text-sm mb-6">
                  Connect with our leadership and follow our insights on the talent
                  and HR space.
                </p>
                <div className="space-y-3">
                  {socialLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-[#0d1e24] border border-[#3e4850] rounded-sm hover:border-[#82cfff]/50 hover:bg-[#00aeef]/5 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-[#0A66C2] group-hover:text-[#82cfff] transition-colors">
                          {s.icon}
                        </div>
                        <div>
                          <p className="text-[#d4e5ee] text-sm font-medium group-hover:text-[#82cfff] transition-colors">
                            {s.label}
                          </p>
                          <p className="text-[#87929b] text-xs mt-0.5">{s.sub}</p>
                        </div>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#3e4850] group-hover:text-[#82cfff] group-hover:translate-x-0.5 transition-all">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 mt-6">
                  <Link
                    href="https://www.linkedin.com/company/nuvanode-consulting/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary py-3 rounded-sm text-[11px]"
                  >
                    Connect Now
                  </Link>
                  <Link
                    href="https://wa.me/+917506368068"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-outline py-3 rounded-sm text-[11px]"
                  >
                    Chat Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Atmospheric Image ── */}
      <section className="py-8 pb-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 animate-on-scroll">
          <div className="relative rounded-xl overflow-hidden border border-[#3e4850]/40 h-56 md:h-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=70&auto=format&fit=crop"
              alt="Modern corporate office interior"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.35) saturate(0.5)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05151b] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05151b]/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 max-w-lg">
              <p className="font-mono text-[11px] tracking-[0.15em] text-[#00aeef] uppercase mb-2">
                Start the Conversation
              </p>
              <p className="text-white font-semibold text-xl leading-snug">
                Every great organization begins with the right people conversation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
