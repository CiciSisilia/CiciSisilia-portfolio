import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">

      {/* Background glow */}
      <div className="animate-pulse-glow absolute right-[-100px] top-1/2 h-[400px] w-[400px] rounded-full bg-[var(--sakura-300)]/8 blur-[180px]" />

      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Beberapa proyek yang telah saya kerjakan selama perkuliahan dan magang."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <GlassCard
              key={project.title}
              className="group flex flex-col overflow-hidden p-0 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(244,167,187,0.1)]"
            >
              {/* Project Header with Image Cover */}
              <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                {project.images && project.images[0] ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-[var(--text-muted)]">
                    No Preview Available
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-black/20" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-[var(--sakura-300)] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--sakura-300)]/15 bg-[var(--sakura-300)]/5 px-3 py-1 text-xs font-medium text-[var(--sakura-200)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="mt-5 flex gap-3">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="flex flex-1 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:border-[var(--sakura-300)]/30 hover:bg-white/10"
                  >
                    View Details
                  </Link>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--sakura-300)] to-[var(--accent)] py-2.5 text-xs font-semibold text-[var(--background)] shadow-lg shadow-[var(--sakura-300)]/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--sakura-300)]/40"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    Source Code
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}