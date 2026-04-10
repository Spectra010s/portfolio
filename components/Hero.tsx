"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const socials = [
  { name: "GitHub", href: "https://github.com/Spectra010s" },
  { name: "X", href: "https://x.com/spectra010s" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/adeloye-adetayo-273723253" },
  { name: "TikTok", href: "https://tiktok.com/@Spectra010s" },
];

export default function Hero({ onViewWork }: { onViewWork: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random(),
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 179, 237, ${p.a * 0.4})`;
        ctx.fill();
      });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(99, 179, 237, ${(1 - d / 100) * 0.08})`;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_28%),linear-gradient(to_bottom,rgba(12,12,14,0.18),rgba(12,12,14,0.72))]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col md:flex-row items-start gap-10 mb-10">
          <div className="relative shrink-0 hero-enter">
            <div className="absolute -inset-1 rounded-full bg-white/10 opacity-80 blur-md" />
            <Image
              src="/s.jpeg"
              alt="Adeloye Adetayo"
              width={128}
              height={128}
              priority
              loading="eager"
              className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border border-white/10"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight text-white hero-enter-delay-2">
              Adeloye<br />
              <span className="text-zinc-100">
                Adetayo
              </span>
            </h1>
            <p className="font-mono text-sm text-gray-400 hero-enter-delay-2">
              Spectra010s <span className="text-gray-600">·</span> Building web, tools, and strange ideas from a phone
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-gray-500 text-sm mb-6 font-mono hero-enter-delay-3">
          <div className="flex items-center gap-2">
            <span className="text-base">📍</span> Ekiti, Nigeria
          </div>
          <span className="text-gray-700">/</span>
          <span className="text-[11px] uppercase tracking-[0.22em] text-gray-400">
            Mechatronist
          </span>
        </div>

        <p className="text-gray-200 text-lg md:text-[1.45rem] leading-relaxed max-w-3xl mb-4 hero-enter-delay-3">
          I like building things that feel
          {" "}
          <span className="text-white font-medium">useful, curious, and a little unconventional</span>
          {" "}
          across web, Web3, and hardware-adjacent experiments.
        </p>

        <div className="flex flex-wrap gap-3 mb-10 hero-enter-delay-4">
          <button
            onClick={onViewWork}
            className="px-6 py-2.5 rounded-full bg-zinc-100 hover:bg-white text-black text-sm font-semibold transition-all duration-200"
          >
            View My Work
          </button>
          <a
            href="mailto:spectra010s@gmail.com"
            className="px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-sm font-semibold transition-all duration-200 hover:bg-white/[0.03]"
          >
            Email Me
          </a>
        </div>

        <div className="hero-enter-delay-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-600 mb-3">
            Around The Internet
          </p>
          <div className="flex flex-wrap gap-2">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.02] transition-all duration-200"
            >
              {s.name}
            </a>
          ))}
          </div>
        </div>
      </div>

    </section>
  );
}
