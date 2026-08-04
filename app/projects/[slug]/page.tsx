import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import Container from "@/components/ui/Container";
import SakuraParticles from "@/components/ui/SakuraParticles";
import Footer from "@/components/layout/Footer";
import ProjectGallery from "@/components/projects/ProjectGallery";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SakuraParticles />

      {/* Top Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center">
            <Link 
              href="/#projects"
              className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--sakura-300)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Kembali ke Portfolio
            </Link>
          </div>
        </Container>
      </nav>

      <article className="pt-20 pb-16">
        <Container>
          {/* Streamlined Header (Icon Removed as requested) */}
          <header className="mb-10 text-center md:mb-12">
            <h1 className="mb-3 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mx-auto max-w-3xl text-base text-[var(--text-secondary)] md:text-lg">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--sakura-300)]/15 bg-[var(--sakura-300)]/5 px-3.5 py-1 text-xs font-medium text-[var(--sakura-200)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--sakura-300)] to-[var(--accent)] px-6 py-3 text-xs font-bold text-[var(--background)] shadow-lg shadow-[var(--sakura-300)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--sakura-300)]/40"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  Lihat Source Code
                </a>
              )}
            </div>
          </header>

          {/* 4-Column Image Collage Gallery */}
          <ProjectGallery images={project.images} title={project.title} />

          {/* Compact Details Content */}
          <div className="mx-auto max-w-5xl space-y-6 md:space-y-8">
            {/* Objective & Features in side-by-side or stacked grid */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Objective */}
              <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 p-6 shadow-md backdrop-blur-md md:col-span-1">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--sakura-300)]/15 text-sm text-[var(--sakura-300)]">
                    🎯
                  </span>
                  Objective
                </h2>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)] md:text-sm">
                  {project.details.objective}
                </p>
              </section>

              {/* Key Features */}
              <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 p-6 shadow-md backdrop-blur-md md:col-span-2">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)]/15 text-sm text-[var(--accent)]">
                    ✨
                  </span>
                  Key Features
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.details.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)]/50 p-3 transition-colors hover:border-[var(--sakura-300)]/20">
                      <span className="mt-0.5 shrink-0 text-[var(--sakura-300)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span className="text-xs font-medium text-[var(--text-secondary)] leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid gap-6 md:grid-cols-2">
              <section className="rounded-2xl border border-red-500/15 bg-red-500/5 p-6 backdrop-blur-md">
                <h2 className="mb-3 flex items-center gap-2 text-base font-bold text-white">
                  <span className="text-red-400">⚠️</span>
                  Challenges
                </h2>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)] md:text-sm">
                  {project.details.challenges}
                </p>
              </section>

              <section className="rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-6 backdrop-blur-md">
                <h2 className="mb-3 flex items-center gap-2 text-base font-bold text-white">
                  <span className="text-emerald-400">💡</span>
                  Solutions
                </h2>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)] md:text-sm">
                  {project.details.solutions}
                </p>
              </section>
            </div>
          </div>
        </Container>
      </article>

      <Footer />
    </main>
  );
}
