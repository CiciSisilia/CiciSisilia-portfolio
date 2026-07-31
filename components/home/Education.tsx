import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden scroll-mt-20 md:scroll-mt-24">

      {/* Background glow */}
      <div className="animate-pulse-glow absolute right-[-150px] top-1/3 h-[300px] w-[300px] rounded-full bg-[var(--sakura-300)]/8 blur-[150px]" />

      <Container>
        <SectionTitle
          title="Education"
          subtitle="Latar belakang pendidikan formal saya."
        />

        <div className="mx-auto max-w-2xl space-y-6">
          <div className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 backdrop-blur-md transition-all duration-500 hover:border-[var(--sakura-300)]/20 hover:shadow-[0_0_40px_rgba(244,167,187,0.08)]">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--sakura-300)]/20 to-[var(--accent)]/20 text-2xl">
                🎓
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">
                  Universitas Riau
                </h3>
                <p className="mt-1 text-[var(--accent)]">
                  D3 — Manajemen Informatika
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--sakura-300)]/20 bg-[var(--sakura-300)]/10 px-4 py-1.5 text-sm text-[var(--sakura-300)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    2023 — 2026
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300">
                    IPK: 3.64
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 backdrop-blur-md transition-all duration-500 hover:border-[var(--sakura-300)]/20 hover:shadow-[0_0_40px_rgba(244,167,187,0.08)]">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--sakura-300)]/20 to-[var(--accent)]/20 text-2xl">
                🏫
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">
                  SMA Negeri 4 Mandau
                </h3>
                <p className="mt-1 text-[var(--accent)]">
                  Ilmu Pengetahuan Sosial
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--sakura-300)]/20 bg-[var(--sakura-300)]/10 px-4 py-1.5 text-sm text-[var(--sakura-300)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    2020 — 2023
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300">
                    Nilai: 88.38
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
