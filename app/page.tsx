"use client";

import { useRef } from "react";
import Hero from "@/components/Hero";
import Building from "@/components/Building";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Hero onViewWork={scrollToPortfolio} />

      <div ref={portfolioRef}>
        <Building />
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="border-t border-white/5" />
        </div>

        <Projects />
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="border-t border-white/5" />
        </div>

        <Skills />
      </div>

      <Footer />
    </main>
  );
}
