"use client";

import { useState, useCallback, useEffect } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type GalleryImage = {
  src: string;
  caption: string;
};

type ExperienceItem = {
  id: string;
  category: "work" | "organization";
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  techs: string[];
  gallery: GalleryImage[];
};

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "castavia",
    category: "work",
    role: "Marketing Intern",
    company: "Castavia Property",
    location: "Pekanbaru, Riau",
    period: "Oktober — November 2026",
    bullets: [
      "Mengelola dan memvalidasi ribuan kontak database konsumen aktif menggunakan Microsoft Excel secara akurat.",
      "Menjalankan penawaran telemarketing via WhatsApp Business serta mengelola follow-up calon pembeli properti.",
      "Mengelompokkan status prospek secara terstruktur mulai dari tindak lanjut informasi hingga koordinasi survei unit.",
    ],
    techs: ["Excel", "WhatsApp Business", "Telemarketing", "Database Management", "Digital Ads"],
    gallery: [
      {
        src: "/images/certificates/magangcastavia.jpg",
        caption: "Sertifikat Resmi Magang Marketing di Castavia Property Pekanbaru",
      },
      {
        src: "/images/experience/dokumen1castavia.jpeg",
        caption: "Call Konsumen setiap hari agar memenuhi hasil call out",
      },
      {
        src: "/images/experience/dokumen2castavia.jpeg",
        caption: "Ikut serta dalam kegiiatan pembagian brosur di Universitas Abdurrab",
      },
      {
        src: "/images/experience/bukti3castavia.jpeg",
        caption: "Foto bersama dengan rekan magang",
      },
    ],
  },
  {
    id: "bluudonut",
    category: "work",
    role: "Kasir & Crew Store (Part-time)",
    company: "Bluu Donut",
    location: "Pekanbaru, Riau",
    period: "Februari — Maret 2026",
    bullets: [
      "Memproses seluruh transaksi harian tunai dan non-tunai melalui sistem POS serta menyusun rekapitulasi kas.",
      "Memberikan pelayanan pelanggan secara langsung dengan sikap ramah, sigap, dan komunikatif di area gerai.",
      "Mengontrol ketersediaan stok produk harian dan menjaga standar kerapian serta kebersihan toko.",
    ],
    techs: ["POS System", "Customer Service", "Cash Reconciliation", "Inventory Check", "Teamwork"],
    gallery: [
      {
        src: "/images/experience/bluudonut.jpeg",
        caption: "Dokumentasi Operasional Kasir & Layanan Gerai Bluu Donut",
      },
      {
        src: "/images/experience/bukti1bluu.jpeg",
        caption: "Dokumentasi Pekerjaan",
      },
      {
        src: "/images/experience/bukti2bluu.jpeg",
        caption: "Dokumentasii Foto Produk",
      },
      {
        src: "/images/experience/bukti3bluu.jpeg",
        caption: "Laporan Harian Penjualan, Update stok harian",
      },
    ],
  },
  {
    id: "lintasarta",
    category: "work",
    role: "Web Developer & Data Admin Intern",
    company: "PT Aplikanusa Lintasarta",
    location: "Duri, Bengkalis, Riau",
    period: "Juli — September 2025",
    bullets: [
      "Merancang dan membangun aplikasi web Inventaris Teknisi menggunakan framework Laravel dan MySQL.",
      "Melakukan input, verifikasi, dan validasi data inventaris perangkat IT serta menyusun dokumentasi sistem.",
      "Mendampingi teknisi lapangan dalam troubleshooting jaringan LAN dan perakitan kabel Fiber Optik.",
    ],
    techs: ["Laravel", "PHP", "MySQL", "LAN & Fiber Optik", "Troubleshooting", "Data Administration"],
    gallery: [
      {
        src: "/images/experience/lintasartaa.jpeg",
        caption: "Praktik Kerja Lapangan (PKL) & Data Admin di Lintasarta Duri",
      },
      {
        src: "/images/projects/inventaris-1.png",
        caption: "Sistem Informasi Inventaris Teknisi Berbasis Laravel & MySQL",
      },
      {
        src: "/images/projects/magang.jpeg",
        caption: "Dokumentasi Pendampingan Teknisi Jaringan Lapangan",
      },
      {
        src: "/images/certificates/maganglintasarta.jpeg",
        caption: "Sertifikat Magang Resmi PT Aplikanusa Lintasarta",
      },
      {
        src: "/images/experience/nilaikp.jpg",
        caption: "Nilai Kerja Praktek Resmi PT Aplikanusa Lintasarta",
      },
      {
        src: "/images/experience/bukti1la.jpg",
        caption: "Perakitan Kabel FO Menggunakan Fusion Slipcer",
      },
      {
        src: "/images/experience/bukti2la.jpg",
        caption: "Kunjungan ke Pertamina Rokan Hulu Kantor IT",
      },
      {
        src: "/images/experience/bukti3la.jpg",
        caption: "Pengecekan Box ODC untuk tes gangguan jaringan menggunakan OTDR",
      },
    ],
  },
  {
    id: "himalkom",
    category: "organization",
    role: "Anggota Divisi Dana dan Usaha",
    company: "HIMALKOM Universitas Riau",
    location: "Pekanbaru, Riau",
    period: "Februari 2024 — November 2025",
    bullets: [
      "Mengelola strategi fundraising dan penjualan merchandise kegiatan organisasi mahasiswa.",
      "Memasarkan produk dan atribut himpunan secara aktif melalui metode digital selling.",
      "Menyusun pembukuan modal, rekapitulasi transaksi pesanan, dan laporan keuangan berkala.",
    ],
    techs: ["Fundraising", "Digital Selling", "Bookkeeping", "Microsoft Excel", "Team Collaboration"],
    gallery: [
      {
        src: "/images/experience/buktidanus1.jpeg",
        caption: "Dokumentasi Kegiatan Himalkom Acara Musyawarah Tahunan 2025",
      },
      {
        src: "/images/experience/buktidanus2.jpeg",
        caption: "Kegiatan Kunjungan KWU (Kewirausahaan) dengan tema: Belajar Bisnis Langsung Dari ahlinya di Cafe Homes",
      },
      {
        src: "/images/experience/bukti3danus.jpeg",
        caption: "Dokumentasi Kegiatan SKUTER Himalkom",
      },
      {
        src: "/images/experience/buktidanus4.jpeg",
        caption: "Dokumentasi Kegiatan BATRAI.ORG XVI Himalkom",
      },
    ],
  },
];

export default function Experience() {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCES[0].id);

  // Lightbox Modal State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const activeExperience =
    EXPERIENCES.find((item) => item.id === selectedId) || EXPERIENCES[0];

  const handleSelectExperience = (id: string) => {
    setSelectedId(id);
    setLightboxIndex(0);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextLightboxImage = useCallback(() => {
    if (!activeExperience.gallery.length) return;
    setLightboxIndex((prev) =>
      prev < activeExperience.gallery.length - 1 ? prev + 1 : 0
    );
  }, [activeExperience.gallery.length]);

  const prevLightboxImage = useCallback(() => {
    if (!activeExperience.gallery.length) return;
    setLightboxIndex((prev) =>
      prev > 0 ? prev - 1 : activeExperience.gallery.length - 1
    );
  }, [activeExperience.gallery.length]);

  // Keyboard Navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
    };

    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, nextLightboxImage, prevLightboxImage]);

  const currentGallery = activeExperience.gallery;

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
      {/* Background glow effects */}
      <div className="animate-pulse-glow absolute left-[-150px] top-1/3 h-[420px] w-[420px] rounded-full bg-[var(--sakura-300)]/8 blur-[180px]" />
      <div
        className="animate-pulse-glow absolute right-[-150px] bottom-1/3 h-[380px] w-[380px] rounded-full bg-[var(--accent)]/8 blur-[180px]"
        style={{ animationDelay: "3s" }}
      />

      <Container>
        <SectionTitle
          title="Experience"
          subtitle="Jejak pengalaman kerja profesional, magang, dan kepengurusan organisasi."
        />

        {/* ================= COMPACT BENTO FRAME ================= */}
        <div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:h-[560px] lg:grid-cols-12 lg:items-stretch"
          data-aos="fade-up"
        >
          {/* ── LEFT COLUMN: Clean List Navigator (lg:col-span-5) ── */}
          <div className="flex flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-4 sm:p-5 backdrop-blur-xl lg:col-span-5 lg:h-full">
            <div>
              <p className="px-2 pb-3 text-xs font-semibold tracking-wider uppercase text-[var(--text-muted)]">
                Riwayat Pengalaman
              </p>

              <div className="space-y-2.5">
                {EXPERIENCES.map((item) => {
                  const isActive = item.id === activeExperience.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectExperience(item.id)}
                      className={`w-full rounded-2xl border p-3.5 text-left transition-all duration-300 ${isActive
                        ? "border-[var(--sakura-300)]/40 bg-gradient-to-r from-[var(--sakura-300)]/12 to-transparent shadow-[0_0_25px_rgba(244,167,187,0.08)]"
                        : "border-transparent bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.05]"
                        }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-[var(--text-muted)]">
                          {item.period}
                        </span>
                        {item.gallery.length > 0 && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--sakura-300)]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                              <circle cx="9" cy="9" r="2" />
                              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                            </svg>
                            {item.gallery.length} Bukti
                          </span>
                        )}
                      </div>

                      <h4
                        className={`mt-1.5 text-sm font-bold sm:text-base ${isActive ? "text-white" : "text-white/80"
                          }`}
                      >
                        {item.role}
                      </h4>

                      <div className="mt-1 flex items-center justify-between text-xs">
                        <span
                          className={`font-medium ${isActive
                            ? "text-[var(--sakura-300)]"
                            : "text-[var(--text-secondary)]"
                            }`}
                        >
                          {item.company}
                        </span>
                        <span className="text-[var(--text-muted)]">
                          {item.location.split(",")[0]}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 border-t border-[var(--border)]/60 px-2 pt-3 text-[11px] text-[var(--text-muted)]">
              Pilih peran di atas untuk melihat detail & foto bukti dokumentasi.
            </div>
          </div>

          {/* ── RIGHT COLUMN: Showcase Detail Card (lg:col-span-7) ── */}
          <div className="flex flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)]/70 p-5 sm:p-6 backdrop-blur-2xl lg:col-span-7 lg:h-full">
            {/* 1. Header (Role & Period) */}
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-[var(--sakura-300)]">
                  {activeExperience.period}
                </span>
                <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {activeExperience.location}
                </span>
              </div>

              <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                {activeExperience.role}
              </h3>
              <p className="text-xs font-semibold text-[var(--text-secondary)] sm:text-sm">
                {activeExperience.company}
              </p>
            </div>

            {/* 2. Foto Bukti: Grid Kotak-Kotak Kecil Sejajar (3-4 Foto) */}
            {currentGallery.length > 0 && (
              <div className="my-3.5">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-medium text-[var(--text-muted)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--sakura-300)]"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                    Bukti Dokumentasi ({currentGallery.length} Foto)
                  </span>
                  <span className="hidden text-[11px] text-[var(--text-muted)] sm:inline">
                    Klik foto untuk memperbesar
                  </span>
                </div>

                <div
                  className={`grid gap-2.5 ${currentGallery.length >= 4
                    ? "grid-cols-2 sm:grid-cols-4"
                    : currentGallery.length === 3
                      ? "grid-cols-3"
                      : currentGallery.length === 2
                        ? "grid-cols-2 sm:grid-cols-4"
                        : "grid-cols-1 sm:grid-cols-2"
                    }`}
                >
                  {currentGallery.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => openLightbox(idx)}
                      className={`group relative flex h-20 sm:h-22 w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-black/40 text-left transition-all duration-300 hover:border-[var(--sakura-300)]/70 hover:shadow-[0_0_20px_rgba(244,167,187,0.18)] focus:outline-none focus:ring-1 focus:ring-[var(--sakura-300)] ${currentGallery.length === 1 ? "sm:col-span-2" : ""
                        }`}
                      title={img.caption}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity group-hover:opacity-60" />

                      {/* Caption text */}
                      <span className="absolute bottom-1.5 left-2 right-2 line-clamp-1 text-[10px] font-medium text-white/95">
                        {img.caption}
                      </span>

                      {/* Zoom icon badge on top right */}
                      <span className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-md bg-black/70 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Ringkasan Tugas (Maksimal 3 Poin Singkat) */}
            <div className="my-1 space-y-2">
              {activeExperience.bullets.slice(0, 3).map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sakura-300)]" />
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[var(--text-secondary)]">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* 4. Tag Skill & Kompetensi (Di Bawah Kartu) */}
            <div className="border-t border-[var(--border)]/70 pt-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {activeExperience.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/5 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--sakura-300)]/30 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* ================= LIGHTBOX MODAL (POPUP PERBESAR FOTO) ================= */}
      {lightboxOpen && currentGallery.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-2xl animate-fade-in"
          onClick={closeLightbox}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-[var(--surface-2)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5 sm:px-6">
              <div>
                <h4 className="text-sm font-bold text-white sm:text-base">
                  {activeExperience.role} — {activeExperience.company}
                </h4>
                <p className="text-xs text-[var(--text-muted)]">
                  Bukti Dokumentasi {lightboxIndex + 1} dari{" "}
                  {currentGallery.length}
                </p>
              </div>

              <button
                onClick={closeLightbox}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Tutup pratinjau"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Image Carousel Stage */}
            <div className="relative flex min-h-[300px] max-h-[62vh] w-full items-center justify-center bg-black/90 p-3">
              {currentGallery.length > 1 && (
                <button
                  onClick={prevLightboxImage}
                  className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90"
                  aria-label="Foto sebelumnya"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentGallery[lightboxIndex].src}
                alt={currentGallery[lightboxIndex].caption}
                className="max-h-[58vh] w-auto max-w-full rounded-xl object-contain shadow-2xl transition-opacity duration-300"
              />

              {currentGallery.length > 1 && (
                <button
                  onClick={nextLightboxImage}
                  className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-black/90"
                  aria-label="Foto selanjutnya"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="20"
                    height="20"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Modal Footer with Thumbnail Strip & Caption */}
            <div className="border-t border-[var(--border)] px-5 py-3 sm:px-6">
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--sakura-300)]">
                  Keterangan:{" "}
                </span>
                {currentGallery[lightboxIndex].caption}
              </p>

              {/* In-Modal Thumbnails Selector for quick navigation */}
              {currentGallery.length > 1 && (
                <div className="mt-2.5 flex items-center gap-2 overflow-x-auto pb-1">
                  {currentGallery.map((thumb, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightboxIndex(idx)}
                      className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border transition-all ${idx === lightboxIndex
                        ? "border-[var(--sakura-300)] ring-2 ring-[var(--sakura-300)]/40 scale-105"
                        : "border-white/10 opacity-60 hover:opacity-100"
                        }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={thumb.src}
                        alt={thumb.caption}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
