type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-16 max-w-2xl ${alignment}`}>
      {/* Sakura Badge */}
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--sakura-300)]/20 bg-[var(--sakura-300)]/10 px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-[var(--sakura-300)]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
          <path d="M12 2C12 2 14.5 5.5 14.5 8.5C14.5 10.4 13.4 12 12 12C10.6 12 9.5 10.4 9.5 8.5C9.5 5.5 12 2 12 2ZM12 12C12 12 15.5 13.1 17.5 15.5C18.8 17.1 18.5 19.2 17.1 20.2C15.7 21.2 13.6 20.5 12.7 18.9C11.3 16.5 12 12 12 12ZM12 12C12 12 8.5 13.1 6.5 15.5C5.2 17.1 5.5 19.2 6.9 20.2C8.3 21.2 10.4 20.5 11.3 18.9C12.7 16.5 12 12 12 12Z" />
        </svg>
        {title}
      </span>

      {/* Title */}
      <h2 className="gradient-sakura text-4xl font-extrabold tracking-tight md:text-5xl">
        {title}
      </h2>

      {/* Decorative Line */}
      <div className={`mt-4 flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-[2px] w-8 rounded-full bg-[var(--sakura-300)]/40" />
        <span className="h-2 w-2 rounded-full bg-[var(--sakura-300)]" />
        <span className="h-[2px] w-8 rounded-full bg-[var(--sakura-300)]/40" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
