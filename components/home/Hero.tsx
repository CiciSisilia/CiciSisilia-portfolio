import Image from "next/image";

import FloatingTech from "@/components/home/hero/FloatingTech";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">

      {/* Background Glows — Sakura */}
      <div className="animate-pulse-glow absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-[var(--sakura-300)]/15 blur-[150px]" />
      <div className="animate-pulse-glow absolute right-[-120px] bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--accent)]/15 blur-[170px]" style={{ animationDelay: "2s" }} />
      <div className="animate-pulse-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[var(--sakura-400)]/10 blur-[200px]" style={{ animationDelay: "4s" }} />

      <Container>
        <div className="grid min-h-screen items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ================= LEFT ================= */}
          <div className="relative z-10 pt-20 lg:pt-0">

            {/* Badge */}
            <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-[var(--sakura-300)]/20 bg-[var(--sakura-300)]/10 px-5 py-2.5 text-sm text-[var(--sakura-300)] backdrop-blur-md">
              🌸 Hello, I&apos;m
            </span>

            {/* Name */}
            <h1 className="animate-slide-up mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Cici
              <br />
              <span className="gradient-sakura">
                Sisilia
              </span>
            </h1>

            {/* Job */}
            <h2 className="animate-slide-up mt-6 text-xl font-medium text-[var(--text-secondary)] md:text-2xl" style={{ animationDelay: "200ms" }}>
              Computer Science Fresh Graduate | Junior Web Developer | Aspiring Data Analyst
            </h2>

            {/* Description */}
            <p className="animate-slide-up mt-8 max-w-xl leading-8 text-[var(--text-muted)]" style={{ animationDelay: "400ms" }}>
              Saya adalah lulusan D3 Manajemen Informatika Universitas Riau yang memiliki kompetensi dalam pengembangan sistem informasi berbasis web dan manajemen basis data. Menguasai PHP, Laravel, MySQL, HTML, CSS, JavaScript, serta konsep Object-Oriented Programming (OOP).

              <br />
              <br />

              Saya memiliki minat pada Artificial Intelligence (AI), kemampuan analisis, problem solving, cepat beradaptasi, dan mampu bekerja secara individu maupun dalam tim.
            </p>

            {/* Buttons */}
            <div className="animate-slide-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "600ms" }}>
              <Button href="/cv/Cici-Sisilia-CV.pdf" target="_blank">
                🌸 Show CV
              </Button>
              <Button variant="secondary" href="#projects">
                View Projects
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-slide-up mt-12 flex gap-8" style={{ animationDelay: "800ms" }}>
              {[
                { value: "3+", label: "Projects" },
                { value: "8+", label: "Tech Stack" },
                { value: "1+", label: "Year Exp" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-[var(--sakura-300)]">{stat.value}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative flex items-center justify-center">

            {/* Glow */}
            <div className="animate-pulse-glow absolute h-[420px] w-[420px] rounded-full bg-[var(--sakura-300)]/15 blur-[140px]" />

            {/* Orbiting ring */}
            <div className="animate-spin-slow absolute h-[480px] w-[480px] rounded-full border border-dashed border-[var(--sakura-300)]/10" />

            {/* Floating Tech Icons */}
            <FloatingTech />

            {/* Profile Card */}
            <GlassCard className="relative z-10 h-[480px] w-[340px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(244,167,187,0.2)] sm:h-[520px] sm:w-[370px]">

              {/* Profile Image */}
              <Image
                src="/images/profile/Pasfoto.jpeg"
                alt="Cici Sisilia"
                fill
                sizes="(max-width: 640px) 340px, 370px"
                priority
                className="object-cover scale-105 transition-transform duration-700 hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/95 via-[var(--background)]/30 to-transparent" />

              {/* Profile Information */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8">

                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/15 px-4 py-2 text-xs font-medium text-emerald-300 backdrop-blur-md">
                  <span className="h-2 w-2 animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-emerald-400" />
                  Available for Work
                </span>

                <h3 className="mt-5 text-3xl font-bold text-white">
                  Cici Sisilia
                </h3>

                <p className="mt-2 text-[var(--sakura-300)]">
                  Junior Web Developer
                </p>

              </div>

            </GlassCard>

          </div>

        </div>
      </Container>

    </section>
  );
}
