import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProjectPreviewPath(name: string, url?: string | null) {
  if (url) return `https://v1.screenshot.11ty.dev/${encodeURIComponent(url)}/opengraph/`;
  return `/images/${slugify(name)}.png`;
}
