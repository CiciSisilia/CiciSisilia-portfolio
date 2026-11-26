"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/90 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">

          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--sakura-300)] to-[var(--accent)] text-sm font-bold text-[var(--background)] shadow-lg shadow-[var(--sakura-300)]/20 transition-transform duration-300 group-hover:scale-110">
              C
            </span>
            <span className="text-lg font-bold text-white">
              Cici<span className="text-[var(--sakura-300)]">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-all duration-200 hover:bg-white/5 hover:text-[var(--sakura-300)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-r from-[var(--sakura-300)] to-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] shadow-lg shadow-[var(--sakura-300)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--sakura-300)]/40 md:inline-flex"
          >
            Hire Me
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--background)]/98 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex w-full max-w-xs flex-col items-center justify-center space-y-4 px-6 py-12 text-center overflow-y-auto max-h-screen">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block w-full py-2.5 text-xl font-bold text-white transition-colors duration-200 hover:text-[var(--sakura-300)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-4 block w-full rounded-xl bg-gradient-to-r from-[var(--sakura-300)] to-[var(--accent)] py-3.5 text-center text-sm font-bold text-[var(--background)] shadow-lg shadow-[var(--sakura-300)]/20 transition-transform active:scale-95"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}