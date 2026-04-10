"use client";

import { useReveal, useStaggerReveal } from "@/hooks/useReveal";

const skills = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS", "Astro"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase", "Better Auth", "MySQL", "FastApi"],
  },
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Rust", "C++", "PLpgSQL", "Shell", "Astro", "Go"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "Supabase", "Socket.IO", "Vercel", "Railway", "Render", "Electron.js", "WebContainers"],
  },
  {
    name: "Web3",
    items: ["Blockchain", "DApps", "Smart Contracts", "Web3.js"],
  },
];

export default function Skills() {
  const headerRef = useReveal();
  const gridRef = useStaggerReveal();

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <div ref={headerRef} className="reveal mb-10">
        <span className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase">Skills</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-2 leading-tight">
          What I Work With
        </h2>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => (
          <div
            key={group.name}
            className="stagger-card reveal-scale group rounded-2xl border border-white/10 bg-white/[0.02] p-6 card-lift hover:border-white/20 hover:bg-white/[0.04]"
          >
            <h3 className="font-mono text-xs tracking-widest text-gray-500 uppercase mb-4">
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-300 hover:border-sky-500/30 hover:text-sky-300 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
