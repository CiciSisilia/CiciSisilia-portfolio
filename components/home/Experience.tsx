"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  techs?: string[];
  image?: string;
};

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Crew Kasir (Part-time)",
    company: "Bluu Donut - Kota Pekanbaru",
    period: "Februari 2026 — April 2026",
    description:
      "Selama saya kuliah pada semester akhir, saya mengisi waktu dengan bekerja untuk mencari tambahan biaya kuliah. Saya belajar tentang melayani pelanggan, mengoperasikan mesin kasir, memproses transaksi tunai dan non-tunai, menjaga kebersihan area kerja, serta membantu operasional toko untuk memberikan pelayanan yang baik.",
    techs: ["Customer Service", "Problem Solving", "Teamwork"],
    image: "/images/experience/bluudonut.jpeg",
  },
  {
    role: "Mahasiswa Magang",
    company: "PT. Aplikanusa Lintasarta (Riau) - Kab. Bengkalis",
    period: "Juli 2025 — September 2025",
    description:
      "Membantu pengelolaan data inventaris teknisi, melakukan pendataan aset, menyusun dokumentasi, serta mengumpulkan kebutuhan pengguna untuk mendukung perancangan sistem informasi inventaris berbasis web.",
    techs: ["System Analysis", "Database Management", "PHP", "MySQL", "Web Development"],
    image: "/images/experience/lintasartaa.jpeg",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden scroll-mt-20 md:scroll-mt-24">

      {/* Background glow */}
      <div className="animate-pulse-glow absolute left-[-100px] bottom-1/4 h-[350px] w-[350px] rounded-full bg-[var(--accent)]/8 blur-[160px]" />

      <Container>
        <SectionTitle
          title="Experience"
          subtitle="Pengalaman kerja dan proyek yang telah saya kerjakan."
        />

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">

          {/* Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[var(--sakura-300)]/40 via-[var(--sakura-300)]/20 to-transparent md:left-1/2 md:-translate-x-px" />

          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className={`relative mb-12 flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Timeline Node — Sakura flower */}
              <div className="absolute left-6 top-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                <span className="absolute h-6 w-6 animate-ping rounded-full bg-[var(--sakura-300)]/20" />
                <span className="relative h-3 w-3 rounded-full bg-[var(--sakura-300)] shadow-lg shadow-[var(--sakura-300)]/30" />
              </div>

              {/* Content */}
              <div className={`ml-14 w-full md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-[var(--sakura-300)]/15 hover:bg-[var(--surface)]/70">

                  {/* Period Badge */}
                  <span className="inline-flex rounded-full border border-[var(--sakura-300)]/20 bg-[var(--sakura-300)]/10 px-3 py-1 text-xs font-medium text-[var(--sakura-300)]">
                    {exp.period}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {exp.role}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                    {exp.company}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                    {exp.description}
                  </p>

                  {/* Tech Tags */}
                  {exp.techs && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs text-[var(--text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Experience Image Proof */}
                  {exp.image && (
                    <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--border)]">
                      <img
                        src={exp.image}
                        alt={`Dokumentasi ${exp.company}`}
                        className="w-full h-auto object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
                        onError={(e) => {
                          // Hide image if it doesn't exist yet
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}