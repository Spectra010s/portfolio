import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import projects from "@/data/projects.json";
import { slugify } from "@/lib/utils";

export const runtime = "nodejs";

function getScreenshotUrl(demoUrl: string) {
  return `https://v1.screenshot.11ty.dev/${encodeURIComponent(demoUrl)}/opengraph/_wait:3/_timeout:15`;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ image: string }> }
) {
  const { image } = await params;
  const fileName = path.basename(image);
  const localImagePath = path.join(process.cwd(), "public", "images", fileName);

  try {
    const file = await readFile(localImagePath);
    return new NextResponse(file, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {}

  const slug = fileName.replace(/\.png$/i, "");
  const project = projects.find((item) => slugify(item.name) === slug);

  if (!project?.demo) {
    return NextResponse.json({ error: "Preview not found" }, { status: 404 });
  }

  const screenshot = await fetch(getScreenshotUrl(project.demo), {
    next: { revalidate: 86400 },
  });

  if (!screenshot.ok) {
    return NextResponse.json({ error: "Unable to fetch preview" }, { status: 502 });
  }

  const body = await screenshot.arrayBuffer();

  return new NextResponse(body, {
    headers: {
      "Content-Type": screenshot.headers.get("content-type") ?? "image/png",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
