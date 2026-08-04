"use client";

import { useState, useCallback, useEffect } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  icon: string;
  color: string;
  images: string[];
};

const CERTIFICATES: Certificate[] = [
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "2026",
    icon: "🌐",
    color: "from-blue-500/20 to-cyan-500/20",
    images: [
      "/images/certificates/sertifikatbasicai1.png",
      "/images/certificates/sertifikatbasicai2.png",
    ],
  },
  {
    title: "Fundamental of Assistant Web Developer – Nasional",
    issuer: "Pusat Pengembangan Talenta Digital (PPTD) – Badan Pengembangan SDM Komunikasi dan Digital (Komdigi) ",
    date: "2026",
    icon: "⚛️",
    color: "from-cyan-500/20 to-blue-500/20",
    images: [
      "/images/certificates/fundamental1.png",
      "/images/certificates/fundamental2.png",
    ],
  },
  {
    title: "Web3 on Campus FMIPA Universitas Riau 2024 & 2025",
    issuer: "IDNFT | Web3 Education and Adoption Center",
    date: "2024 & 2025",
    icon: "🗃️",
    color: "from-green-500/20 to-emerald-500/20",
    images: [
      "/images/certificates/sertifikatweb32024.jpeg",
      "/images/certificates/sertifikatweb32025.png",
    ],
  },
  {
    title: "Work Practice Certificate – PT Aplikanusa Lintasarta",
    issuer: "PT Aplikanusa Lintasarta",
    date: "Juli 2025 — September 2025",
    icon: "📊",
    color: "from-orange-500/20 to-amber-500/20",
    images: [
      "/images/certificates/sertifikatmagang.jpeg",
    ],
  },
  {
    title: "IDCamp Connect Roadshow-Riau (Certificate of Attendance)",
    issuer: "Dicoding Indonesia",
    date: "Rabu 5 November 2025",
    icon: "📊",
    color: "from-orange-500/20 to-amber-500/20",
    images: [
      "/images/certificates/kehadirandicoding.jpg",
    ],
  },
  {
    title: "Pelatihan Gerakan Nasional Indonesia Kompeten",
    issuer: "GNIK",
    date: "2026",
    icon: "🎨",
    color: "from-purple-500/20 to-pink-500/20",
    images: [
      "/images/certificates/gnik1.png",
      "/images/certificates/gnik2.png",
      "/images/certificates/gnik3.png",
      "/images/certificates/gnik4.jpg",
      "/images/certificates/gnik5.jpg",
      "/images/certificates/gnik6.jpg",

    ],
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPagesCert = Math.ceil(CERTIFICATES.length / itemsPerPage);
  
  const currentCertificates = CERTIFICATES.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPagesCert ? prev + 1 : 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPagesCert));
  };

  const openCert = (cert: Certificate) => {
    setSelectedCert(cert);
    setPageIndex(0);
  };

  const closeCert = () => {
    setSelectedCert(null);
    setPageIndex(0);
  };

  const totalPages = selectedCert ? selectedCert.images.length : 0;

  const handleNext = useCallback(() => {
    setPageIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setPageIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  }, [totalPages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCert) return;
      if (e.key === "Escape") closeCert();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCert, handleNext, handlePrev]);

  return (
    <section id="certificates" className="section-padding relative overflow-hidden scroll-mt-20 md:scroll-mt-24">

      {/* Background glow */}
      <div className="animate-pulse-glow absolute left-[-100px] top-1/3 h-[350px] w-[350px] rounded-full bg-[var(--accent)]/8 blur-[160px]" />

      <Container>
        <SectionTitle
          title="Certificates"
          subtitle="Sertifikasi dan pelatihan resmi yang telah saya selesaikan."
        />

        <div className="mx-auto grid max-w-4xl gap-4">
          {currentCertificates.map((cert, i) => (
            <div
              key={i}
              className="group flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 p-4 backdrop-blur-md transition-all duration-300 hover:border-[var(--sakura-300)]/20 hover:bg-[var(--surface)]/60 sm:flex-row sm:items-center sm:p-5"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Certificate Image Column / Thumbnail */}
              <div
                onClick={() => openCert(cert)}
                className="relative h-28 w-full shrink-0 cursor-pointer overflow-hidden rounded-xl border border-[var(--border)] bg-black/40 sm:h-20 sm:w-32"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.images[0]}
                  alt={`Sertifikat ${cert.title}`}
                  className="h-full w-full object-cover opacity-85 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sakura-300)] text-[var(--background)] shadow-md">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                </div>
                {/* Multi-page badge */}
                {cert.images.length > 1 && (
                  <span className="absolute bottom-1.5 right-1.5 rounded-md bg-black/70 px-1.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                    {cert.images.length} hal
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{cert.icon}</span>
                  <h3 className="text-base font-bold text-white group-hover:text-[var(--sakura-300)] transition-colors duration-300 truncate">
                    {cert.title}
                  </h3>
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] sm:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] sm:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* View Action Button & Verified Badge */}
              <div className="flex items-center justify-between gap-3 shrink-0 sm:justify-end">
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  Verified
                </span>

                <button
                  onClick={() => openCert(cert)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:border-[var(--sakura-300)]/40 hover:bg-[var(--sakura-300)]/10 hover:text-[var(--sakura-300)]"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {totalPagesCert > 1 && (
          <div className="mx-auto mt-8 flex max-w-4xl items-center justify-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[var(--sakura-300)]/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Sebelumnya
            </button>
            <span className="text-sm font-medium text-[var(--text-muted)]">
              {currentPage} / {totalPagesCert}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPagesCert}
              className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[var(--sakura-300)]/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Selanjutnya
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </Container>

      {/* Lightbox Modal for Certificate Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl animate-fade-in"
          onClick={closeCert}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface-2)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3 sm:px-6 sm:py-4">
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-base font-bold text-white sm:text-lg">{selectedCert.title}</h3>
                <p className="text-xs text-[var(--text-muted)]">{selectedCert.issuer} — {selectedCert.date}</p>
              </div>
              <button
                onClick={closeCert}
                className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close modal"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Certificate Image with Navigation */}
            <div className="relative flex items-center justify-center bg-black/60 p-4">
              {/* Prev Button */}
              {totalPages > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/25 hover:scale-110 sm:left-4 sm:h-11 sm:w-11"
                  aria-label="Previous page"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedCert.images[pageIndex]}
                alt={`${selectedCert.title} — Halaman ${pageIndex + 1}`}
                className="max-h-[65vh] w-auto max-w-full rounded-lg object-contain shadow-lg transition-opacity duration-300"
              />

              {/* Next Button */}
              {totalPages > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/25 hover:scale-110 sm:right-4 sm:h-11 sm:w-11"
                  aria-label="Next page"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Page Indicator Footer */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 border-t border-[var(--border)] bg-[var(--surface-2)] px-4 py-3">
                {/* Dot indicators */}
                <div className="flex items-center gap-2">
                  {selectedCert.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPageIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === pageIndex
                        ? "w-6 bg-[var(--sakura-300)]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                        }`}
                      aria-label={`Go to page ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[var(--text-muted)]">
                  Halaman {pageIndex + 1} dari {totalPages}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

