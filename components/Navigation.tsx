"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Our Approach" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 nav-glass transition-all duration-300 ${
          scrolled ? "shadow-[0_4px_30px_rgba(0,174,239,0.1)]" : ""
        }`}
      >
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 md:px-16 h-24">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative h-[78px] w-auto">
              <Image
                src="/nuvanode-logo.png"
                alt="Nuvanode Logo"
                height={78}
                width={312}
                className="h-[78px] w-auto object-contain group-hover:drop-shadow-[0_0_10px_rgba(0,174,239,0.7)] transition-all duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-[15px] font-extrabold tracking-[0.08em] uppercase transition-all duration-300 pb-0.5 ${
                    active
                      ? "text-[#82cfff] border-b-2 border-[#82cfff]"
                      : "text-[#bdc8d1] hover:text-[#82cfff]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/company/nuvanode-consulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary px-6 py-2.5 rounded-sm text-[11px]"
            >
              Connect Now
            </Link>
            <button
              className="md:hidden text-[#82cfff] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <rect
                  y={menuOpen ? "7" : "0"}
                  width="22"
                  height="2"
                  rx="1"
                  fill="currentColor"
                  style={{
                    transform: menuOpen ? "rotate(45deg)" : "none",
                    transformOrigin: "center",
                    transition: "all 0.3s",
                  }}
                />
                {!menuOpen && (
                  <rect y="7" width="16" height="2" rx="1" fill="currentColor" />
                )}
                <rect
                  y={menuOpen ? "7" : "14"}
                  width="22"
                  height="2"
                  rx="1"
                  fill="currentColor"
                  style={{
                    transform: menuOpen ? "rotate(-45deg)" : "none",
                    transformOrigin: "center",
                    transition: "all 0.3s",
                  }}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden nav-glass border-t border-white/5 overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 px-6">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-[15px] font-extrabold tracking-[0.08em] uppercase py-3 border-b border-white/5 transition-colors ${
                    active ? "text-[#82cfff]" : "text-[#bdc8d1] hover:text-[#82cfff]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="https://www.linkedin.com/company/nuvanode-consulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 py-3 rounded-sm text-[11px]"
            >
              Connect Now
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
