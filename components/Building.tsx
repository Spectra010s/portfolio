"use client";

import { ArrowUpRight } from "lucide-react";
import { useReveal, useStaggerReveal } from "@/hooks/useReveal";
import pjs from "@/data/projects.json";

const buildingProjects = pjs.filter((p) => p.building);

const categoryColors: Record<string, string> = {
  Web: "text-sky-400 border-sky-400/30 bg-sky-400/10",
  CLI: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  Product: "text-violet-400 border-violet-400/30 bg-violet-400/10",
};

export default function Building() {
  const headerRef = useReveal();
  const gridRef = useStaggerReveal();

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <div ref={headerRef} className="reveal mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/60 pulse-dot" />
          <span className="font-mono text-xs tracking-[0.2em] text-emerald-400 uppercase">
            Currently Building
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
          What I&apos;m Working On
        </h2>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
        {buildingProjects.map((project) => (
          <a
            key={project.name}
            href={project.demo ?? "#"}
            target={project.demo ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="stagger-card reveal-scale group relative block rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 card-lift hover:border-white/20"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-start justify-between mb-4">
              <div>
                <span className={`font-mono text-xs px-2 py-0.5 rounded-full border ${categoryColors[project.category] ?? "text-gray-400 border-gray-700 bg-gray-800"} mb-3 inline-block`}>
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {project.name}
                </h3>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors mt-1" strokeWidth={1.5} />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs px-2 py-0.5 rounded border border-white/10 text-gray-500 group-hover:text-gray-400 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
