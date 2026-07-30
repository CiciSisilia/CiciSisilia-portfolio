type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean | string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
  download,
  target,
  rel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-semibold transition-all duration-300 text-sm";

  const styles = {
    primary:
      "bg-gradient-to-r from-[var(--sakura-300)] to-[var(--accent)] text-[var(--background)] shadow-lg shadow-[var(--sakura-300)]/20 hover:-translate-y-1 hover:shadow-[var(--sakura-300)]/40",

    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-md hover:border-[var(--sakura-300)]/30 hover:bg-white/10",
  };

  if (href) {
    const resolvedRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={resolvedRel}
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
