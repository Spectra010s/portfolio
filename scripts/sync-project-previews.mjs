import { mkdir, access, writeFile } from "node:fs/promises";
import { join } from "node:path";
import projects from "../data/projects.json" with { type: "json" };

const outputDir = join(process.cwd(), "public", "images");
const refresh = process.argv.includes("--refresh");

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function screenshotUrl(url) {
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

const previewProjects = projects.filter((project) =>
  project.demo &&
  (project.building ||
    project.featured ||
    project.category === "Freelance" ||
    project.name === "Term-Invader Console")
);

await mkdir(outputDir, { recursive: true });

let downloaded = 0;
let skipped = 0;
const failures = [];

for (const project of previewProjects) {
  const filename = `${slugify(project.name)}.png`;
  const filepath = join(outputDir, filename);

  if (!refresh) {
    try {
      await access(filepath);
      console.log(`Skipped existing: ${filename}`);
      skipped++;
      continue;
    } catch {
      // The image is missing; fetch it below.
    }
  }

  try {
    const response = await fetch(screenshotUrl(project.demo), {
      signal: AbortSignal.timeout(30_000),
    });
    const contentType = response.headers.get("content-type") ?? "";

    if (!response.ok || !contentType.startsWith("image/")) {
      throw new Error(`Unexpected response: HTTP ${response.status}, ${contentType || "no content type"}`);
    }

    const image = Buffer.from(await response.arrayBuffer());
    if (image.length === 0) throw new Error("Received an empty image");

    await writeFile(filepath, image);
    console.log(`Saved: ${filename} (${Math.round(image.length / 1024)} KB)`);
    downloaded++;
  } catch (error) {
    failures.push(project.name);
    console.error(`Failed: ${project.name}: ${error.message}`);
  }
}

console.log(`\nPreview sync complete: ${downloaded} downloaded, ${skipped} already present, ${failures.length} failed.`);
if (failures.length) {
  console.error(`Failed projects: ${failures.join(", ")}`);
  process.exitCode = 1;
}
