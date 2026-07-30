"use client";

/**
 * SakuraParticles — CSS‑only falling cherry‑blossom petals.
 * Each petal is positioned randomly across the viewport and
 * uses one of two fall keyframes with staggered delays.
 */

const PETALS = [
  { size: "sm", left: "5%",  delay: "0s",   duration: "12s", variant: 1 },
  { size: "md", left: "12%", delay: "2s",   duration: "14s", variant: 2 },
  { size: "lg", left: "20%", delay: "4s",   duration: "11s", variant: 1 },
  { size: "sm", left: "28%", delay: "1s",   duration: "13s", variant: 2 },
  { size: "md", left: "35%", delay: "5s",   duration: "15s", variant: 1 },
  { size: "lg", left: "42%", delay: "3s",   duration: "12s", variant: 2 },
  { size: "sm", left: "50%", delay: "6s",   duration: "14s", variant: 1 },
  { size: "md", left: "58%", delay: "0.5s", duration: "11s", variant: 2 },
  { size: "sm", left: "65%", delay: "3.5s", duration: "13s", variant: 1 },
  { size: "lg", left: "72%", delay: "7s",   duration: "15s", variant: 2 },
  { size: "md", left: "80%", delay: "1.5s", duration: "12s", variant: 1 },
  { size: "sm", left: "88%", delay: "4.5s", duration: "14s", variant: 2 },
  { size: "md", left: "95%", delay: "2.5s", duration: "11s", variant: 1 },
  { size: "lg", left: "8%",  delay: "8s",   duration: "16s", variant: 2 },
  { size: "sm", left: "45%", delay: "9s",   duration: "13s", variant: 1 },
  { size: "md", left: "75%", delay: "6.5s", duration: "15s", variant: 2 },
];

export default function SakuraParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {PETALS.map((p, i) => (
        <div
          key={i}
          className={`sakura-petal sakura-petal--${p.size}`}
          style={{
            left: p.left,
            animationName: p.variant === 1 ? "sakura-fall" : "sakura-fall-2",
            animationDuration: p.duration,
            animationDelay: p.delay,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </div>
  );
}
