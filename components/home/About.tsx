import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

const INFO_CARDS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
    label: "Lokasi",
    value: "Riau, Indonesia",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 10 3 12 0v-5" /></svg>
    ),
    label: "Universitas",
    value: "Universitas Riau",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
    ),
    label: "Gelar",
    value: "Ahli Madya (A.Md.)",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
    label: "Status",
    value: "Open to Work/Internship",
  },
];

const INTERESTS = [
  "Web Development",
  "UI/UX Design",
  "Graphic Design",
  "Data Analytics",
  "Microsoft Fabric",
  "Artificial Intelligence",
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">

      {/* Background glow */}
      <div className="animate-pulse-glow absolute right-[-200px] top-1/3 h-[400px] w-[400px] rounded-full bg-[var(--sakura-300)]/10 blur-[180px]" />

      <Container>
        <SectionTitle
          title="About Me"
          subtitle="Mengenal lebih dekat siapa saya, latar belakang pendidikan, dan passion saya di dunia teknologi."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left — Photo */}
          <div className="relative flex justify-center">
            <div className="animate-pulse-glow absolute h-[350px] w-[350px] rounded-full bg-[var(--accent)]/10 blur-[120px]" />
            <GlassCard className="relative z-10 h-[400px] w-[320px] overflow-hidden sm:h-[450px] sm:w-[360px]">
              <Image
                src="/images/profile/sidang2.jpeg"
                alt="Cici Sisilia — Sidang"
                fill
                sizes="(max-width: 640px) 320px, 360px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent" />
            </GlassCard>
          </div>

          {/* Right — Info */}
          <div className="relative z-10">

            <h3 className="text-2xl font-bold text-white">
              Cici <span className="text-[var(--sakura-300)]">Sisilia</span>
            </h3>

            <p className="mt-4 leading-8 text-[var(--text-secondary)]">
              Saya adalah lulusan D3 Manajemen Informatika Universitas Riau yang memiliki kompetensi dalam pengembangan sistem informasi berbasis web dan manajemen basis data. Menguasai PHP, Laravel, MySQL, HTML, CSS, JavaScript, serta konsep Object-Oriented Programming (OOP). Memiliki minat pada Artificial Intelligence (AI), kemampuan analisis, problem solving, cepat beradaptasi, dan mampu bekerja secara individu maupun dalam tim.
            </p>

            {/* Info Cards Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {INFO_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-[var(--sakura-300)]/20 hover:bg-[var(--surface)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--sakura-300)]/10 text-[var(--sakura-300)]">
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)]">{card.label}</p>
                      <p className="text-sm font-semibold text-white">{card.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-[var(--text-muted)]">
                Bidang Minat
              </p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-[var(--sakura-300)]/15 bg-[var(--sakura-300)]/5 px-4 py-1.5 text-xs font-medium text-[var(--sakura-200)] transition-all duration-200 hover:border-[var(--sakura-300)]/30 hover:bg-[var(--sakura-300)]/10"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}