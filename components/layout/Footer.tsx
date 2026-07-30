"use client";

import Container from "@/components/ui/Container";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--surface)]/30">

      {/* Sakura decorative petals */}
      <div className="absolute left-10 top-6 h-3 w-3 rotate-45 rounded-[50%_0_50%_0] bg-[var(--sakura-300)]/15" />
      <div className="absolute right-20 top-10 h-2 w-2 rotate-12 rounded-[50%_0_50%_0] bg-[var(--sakura-300)]/10" />
      <div className="absolute left-1/3 bottom-8 h-2.5 w-2.5 -rotate-30 rounded-[50%_0_50%_0] bg-[var(--accent)]/10" />

      <Container>
        <div className="py-12">

          {/* Top row */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">

            {/* Brand */}
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--sakura-300)] to-[var(--accent)] text-sm font-bold text-[var(--background)]">
                C
              </span>
              <span className="text-lg font-bold text-white">
                Cici<span className="text-[var(--sakura-300)]">.</span>Sisilia
              </span>
            </div>

            {/* Links */}
            <nav>
              <ul className="flex flex-wrap items-center justify-center gap-6">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--sakura-300)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--sakura-300)]/30 hover:text-[var(--sakura-300)]"
              aria-label="Back to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </button>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

          {/* Bottom row */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
            <p className="text-xs text-[var(--text-muted)]">
              &copy; {new Date().getFullYear()} Cici Sisilia. All rights reserved.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Built with 🌸 Next.js & React
            </p>
          </div>

        </div>
      </Container>
    </footer>
  );
}