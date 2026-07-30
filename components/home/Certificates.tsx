import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  icon: string;
  color: string;
};

const CERTIFICATES: Certificate[] = [
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "2024",
    icon: "🌐",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "2024",
    icon: "⚛️",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    date: "2024",
    icon: "🗃️",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Microsoft Office Specialist",
    issuer: "Microsoft",
    date: "2023",
    icon: "📊",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2024",
    icon: "🎨",
    color: "from-purple-500/20 to-pink-500/20",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding relative overflow-hidden">

      {/* Background glow */}
      <div className="animate-pulse-glow absolute left-[-100px] top-1/3 h-[350px] w-[350px] rounded-full bg-[var(--accent)]/8 blur-[160px]" />

      <Container>
        <SectionTitle
          title="Certificates"
          subtitle="Sertifikasi dan pelatihan yang telah saya selesaikan."
        />

        <div className="mx-auto grid max-w-4xl gap-4">
          {CERTIFICATES.map((cert, i) => (
            <div
              key={i}
              className="group flex items-center gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-[var(--sakura-300)]/15 hover:bg-[var(--surface)]/60 hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.color} text-2xl transition-transform duration-300 group-hover:scale-110`}>
                {cert.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-white group-hover:text-[var(--sakura-300)] transition-colors duration-300 truncate">
                  {cert.title}
                </h3>
                <div className="mt-1.5 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Badge */}
              <div className="hidden shrink-0 sm:flex">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
