"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/CiciSisilia",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/cicisisilia",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cici.slia?igsh=MXRzMG1qNXdzd3F6MQ%3D%3D&utm_source=qr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" /></svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:cicisisilia1410@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
    ),
  },

];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden scroll-mt-20 md:scroll-mt-24">

      {/* Background glows */}
      <div className="animate-pulse-glow absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[var(--sakura-300)]/8 blur-[200px]" />

      <Container>
        <SectionTitle
          title="Contact"
          subtitle="Jangan ragu untuk menghubungi saya. Mari berkolaborasi!"
        />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">

          {/* Left — Contact Form */}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white">
              Kirim Pesan 🌸
            </h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Saya akan membalas secepat mungkin.
            </p>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">Nama</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Nama lengkap"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)]/60 px-4 py-3 text-sm text-white placeholder-[var(--text-muted)] outline-none transition-all duration-200 focus:border-[var(--sakura-300)]/40 focus:ring-2 focus:ring-[var(--sakura-300)]/10"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="email@example.com"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)]/60 px-4 py-3 text-sm text-white placeholder-[var(--text-muted)] outline-none transition-all duration-200 focus:border-[var(--sakura-300)]/40 focus:ring-2 focus:ring-[var(--sakura-300)]/10"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">Pesan</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tulis pesan Anda..."
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)]/60 px-4 py-3 text-sm text-white placeholder-[var(--text-muted)] outline-none transition-all duration-200 focus:border-[var(--sakura-300)]/40 focus:ring-2 focus:ring-[var(--sakura-300)]/10"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[var(--sakura-300)] to-[var(--accent)] py-3.5 text-sm font-semibold text-[var(--background)] shadow-lg shadow-[var(--sakura-300)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--sakura-300)]/40"
              >
                Kirim Pesan 🌸
              </button>
            </form>
          </div>

          {/* Right — Info & Socials */}
          <div className="flex flex-col gap-6">

            {/* Info Card */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white">
                Mari Terhubung
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
                Saya terbuka untuk peluang kerja, kolaborasi proyek, atau sekadar berdiskusi
                tentang teknologi. Jangan ragu untuk menghubungi saya melalui form atau social media.
              </p>

              {/* Location */}
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)]/40 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--sakura-300)]/10 text-[var(--sakura-300)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)]">Lokasi</p>
                  <p className="text-sm font-semibold text-white">Riau, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 backdrop-blur-md">
              <h3 className="mb-5 text-lg font-bold text-white">
                Social Media
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)]/40 p-4 text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--sakura-300)]/20 hover:bg-[var(--sakura-300)]/5 hover:text-[var(--sakura-300)]"
                  >
                    {social.icon}
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}