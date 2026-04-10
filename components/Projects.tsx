"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, Globe } from "lucide-react";
import { useReveal, useStaggerRevealOnChange } from "@/hooks/useReveal";
import pjs from "@/data/projects.json";
import { getProjectPreviewPath } from "@/lib/utils";

const CATEGORIES = ["Web", "CLI", "Web3", "Open Source", "Freelance", "Contribution", "Product"];
const SHOW_DEFAULT = 4;
const PREVIEW_PROJECTS = new Set(["Term-Invader Console"]);

const categoryColors: Record<string, string> = {
  Web: "text-zinc-300 border-white/10 bg-white/[0.03]",
  CLI: "text-zinc-300 border-white/10 bg-white/[0.03]",
  Web3: "text-zinc-300 border-white/10 bg-white/[0.03]",
  "Open Source": "text-zinc-300 border-white/10 bg-white/[0.03]",
  Freelance: "text-zinc-300 border-white/10 bg-white/[0.03]",
  Contribution: "text-zinc-300 border-white/10 bg-white/[0.03]",
  Product: "text-zinc-300 border-white/10 bg-white/[0.03]",
};

function SectionHeader({ category }: { category: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal flex items-center gap-3 mb-6">
      <span className={`font-mono text-xs px-2 py-0.5 rounded-full border ${categoryColors[category] ?? "border-white/10 bg-white/[0.03] text-zinc-300"}`}>
        {category}
      </span>
      <div className="flex-1 h-px bg-white/5" />
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: typeof pjs[0]; featured?: boolean }) {
  const showPreview =
    featured ||
    project.category === "Freelance" ||
    PREVIEW_PROJECTS.has(project.name);
  const previewSrc = getProjectPreviewPath(project.name);

  return (
    <div className="stagger-card reveal-scale group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden card-lift">
      <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {showPreview && (
        <div className="relative w-full aspect-video overflow-hidden border-b border-white/5 bg-[#111215]">
          {project.demo ? (
            <Image
              src={previewSrc}
              alt={`${project.name} preview`}
              width={1200}
              height={675}
              className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Globe className="w-10 h-10 text-gray-700" />
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors leading-tight mb-2">
          {project.name}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/10 text-gray-600">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/10 text-gray-600">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
              <Github className="w-3 h-3" /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-zinc-200 hover:bg-white/[0.1] transition-all">
              <ExternalLink className="w-3 h-3" /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function CategorySection({ category }: { category: string }) {
  const projects = pjs.filter((p) => p.category === category);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const all = [...featured, ...rest];

  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? all : all.slice(0, SHOW_DEFAULT);
  const hasMore = all.length > SHOW_DEFAULT;
  const gridRef = useStaggerRevealOnChange(showAll, all.length);

  if (all.length === 0) return null;

  return (
    <div className="mb-16">
      <SectionHeader category={category} />
      <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((project) => (
          <ProjectCard key={project.name} project={project} featured={project.featured} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="font-mono text-xs px-5 py-2 rounded-full border border-white/10 text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all"
          >
            {showAll ? "Show less" : `Show ${all.length - SHOW_DEFAULT} more`}
          </button>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const headerRef = useReveal();

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto" id="portfolio-content">
      <div ref={headerRef} className="reveal mb-12">
        <span className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase">Projects</span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-2 leading-tight">
          Things I&apos;ve Built
        </h2>
      </div>

      {CATEGORIES.map((cat) => (
        <CategorySection key={cat} category={cat} />
      ))}
    </section>
  );
}
