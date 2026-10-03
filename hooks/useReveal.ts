"use client";

import { useEffect, useRef, type RefObject } from "react";

// Content is visible before hydration. Observe each item separately so a
// large grid never has to enter the viewport before its first card appears.
function observeReveals(elements: HTMLElement[]): () => void {
  if (
    typeof IntersectionObserver === "undefined" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) return () => {};

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target as HTMLElement;
      // Reveal before the item reaches the viewport, without React state updates.
      el.classList.add("revealed");
      el.classList.remove("reveal-ready");
      observer.unobserve(el);
    }
  }, { threshold: 0, rootMargin: "0px 0px 48px 0px" });

  for (const el of elements) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) continue;
    el.classList.add("reveal-ready");
    observer.observe(el);
  }

  return () => {
    observer.disconnect();
    for (const el of elements) el.classList.remove("reveal-ready");
  };
}

export function useReveal(): RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    return ref.current ? observeReveals([ref.current]) : undefined;
  }, []);
  return ref;
}

export function useStaggerReveal(): RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    return ref.current
      ? observeReveals(Array.from(ref.current.querySelectorAll<HTMLElement>(".stagger-card")))
      : undefined;
  }, []);
  return ref;
}

export function useStaggerRevealOnChange(
  showAll: boolean,
  itemCount: number,
): RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    return ref.current
      ? observeReveals(Array.from(ref.current.querySelectorAll<HTMLElement>(".stagger-card:not(.revealed)")))
      : undefined;
  }, [showAll, itemCount]);
  return ref;
}
