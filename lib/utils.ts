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

export function getProjectPreviewPath(name: string) {
  return `/images/${slugify(name)}.png`;
}

export function getMicrolinkScreenshotUrl(url: string) {
  const params = new URLSearchParams({
    url,
    meta: "false",
    screenshot: "true",
    embed: "screenshot.url",
    "viewport.width": "1200",
    "viewport.height": "630",
  });
  return `https://api.microlink.io/?${params}`;
}
