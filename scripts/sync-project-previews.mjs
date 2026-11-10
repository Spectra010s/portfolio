import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import projects from "../data/projects.json" with { type: "json" };

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function screenshotUrl(url) {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=630`;
}

// Every project with a live demo gets a preview on the projects page.
export const previewProjects = projects.filter((project) => project.demo);

const jpegSignature = Buffer.from([255, 216, 255]);

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function captureScreenshot(url, fetchImage = fetch, sleep = wait) {
  const endpoint = screenshotUrl(url);

  // mShots returns its default thumbnail while a new capture is queued.
  // Poll the same URL until the actual screenshot is ready.
  for (let attempt = 0; attempt < 10; attempt++) {
    const response = await fetchImage(endpoint, {
      signal: AbortSignal.timeout(30_000),
    });
    const contentType = response.headers.get("content-type") ?? "";
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}, ${contentType || "no content type"}`);
    }

    const pathname = response.url ? new URL(response.url).pathname : "";
    const pending = pathname.endsWith("/mshots/v1/default") || contentType.startsWith("image/gif");
    if (!pending) {
      if (!contentType.startsWith("image/jpeg")) {
        throw new Error(`Unexpected screenshot type: ${contentType || "none"}`);
      }
      const image = Buffer.from(await response.arrayBuffer());
      if (!image.subarray(0, 3).equals(jpegSignature)) {
        throw new Error("Screenshot response is not a JPEG");
      }
      return image;
    }

    if (attempt < 9) await sleep(3_000);
  }

  throw new Error("Screenshot was still generating after 30 seconds");
}

export async function syncProjectPreviews(outputDir, options = {}) {
  const { fetchImage = fetch, sleep = wait, logger = console } = options;
  const imageDir = join(outputDir, "images");
  await mkdir(imageDir, { recursive: true });
  const failures = [];
  let downloaded = 0;

  for (const project of previewProjects) {
    const filename = `${slugify(project.name)}.jpg`;
    try {
      const image = await captureScreenshot(project.demo, fetchImage, sleep);
      await writeFile(join(imageDir, filename), image);
      logger.info(`Saved images/${filename} (${Math.round(image.length / 1024)} KB)`);
      downloaded++;
    } catch (error) {
      failures.push(`${project.name}: ${error.message}`);
      logger.error(`Failed: ${project.name}: ${error.message}`);
    }
  }

  logger.info(`Preview sync complete: ${downloaded} downloaded, ${failures.length} failed.`);
  if (failures.length) {
    throw new Error(`Project preview capture failed:\n${failures.join("\n")}`);
  }
}
