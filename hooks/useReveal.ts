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
      // Do not replay an entrance on content already visible at hydration.
      if (el.dataset.revealPending === "true") el.classList.add("revealed");
      delete el.dataset.revealPending;
      observer.unobserve(el);
    }
  }, { threshold: 0 });

  for (const el of elements) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) continue;
    el.dataset.revealPending = "true";
    observer.observe(el);
  }

  return () => {
    observer.disconnect();
    for (const el of elements) delete el.dataset.revealPending;
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
