import type { APIRoute } from "astro";
import projects from "../../../data/projects.json";
import { slugify, getMicrolinkScreenshotUrl } from "../../../lib/utils";

export const GET: APIRoute = async ({ params }) => {
  const slug = params.image?.replace(/\.png$/i, "");
  const project = projects.find((p) => slugify(p.name) === slug);
  if (!project?.demo) return new Response("Not found", { status: 404 });

  try {
    const response = await fetch(getMicrolinkScreenshotUrl(project.demo), {
      signal: AbortSignal.timeout(30000),
    });
    const contentType = response.headers.get("content-type");
    if (!response.ok || !contentType?.startsWith("image/")) {
      return new Response("Preview unavailable", { status: 502 });
    }
    return new Response(response.body, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new Response("Preview unavailable", { status: 502 });
  }
};
