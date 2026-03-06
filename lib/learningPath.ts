import fs from "node:fs/promises";
import path from "node:path";

export type LearningStep = {
  index: number;
  slug: string;
  title: string;
  summary: string;
  duration: string;
  body: string;
};

export type LearningPath = {
  course: string;
  title: string;
  description: string;
  steps: LearningStep[];
};

const learningPathsDir = path.join(process.cwd(), "content", "learning-paths");

function stripQuotes(value: string) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseMarkdownFile(fileContent: string) {
  const startsWithFrontmatter = fileContent.startsWith("---\n");
  if (!startsWithFrontmatter) {
    return { frontmatter: {}, body: fileContent.trim() };
  }

  const endIndex = fileContent.indexOf("\n---\n", 4);
  if (endIndex < 0) {
    return { frontmatter: {}, body: fileContent.trim() };
  }

  const rawFrontmatter = fileContent.slice(4, endIndex);
  const body = fileContent.slice(endIndex + 5).trim();
  const frontmatter: Record<string, string> = {};

  for (const line of rawFrontmatter.split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx < 0) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (!key) continue;
    frontmatter[key] = stripQuotes(value);
  }

  return { frontmatter, body };
}

function sortStepFiles(files: string[]) {
  return files.sort((a, b) => {
    const aMatch = a.match(/^(\d+)/);
    const bMatch = b.match(/^(\d+)/);
    if (!aMatch || !bMatch) return a.localeCompare(b);
    return Number(aMatch[1]) - Number(bMatch[1]);
  });
}

export async function getLearningPath(course: string): Promise<LearningPath> {
  const safeCourse = String(course).trim();
  const courseDir = path.join(learningPathsDir, safeCourse);
  const files = await fs.readdir(courseDir);
  const mdFiles = sortStepFiles(files.filter((file) => file.endsWith(".md")));

  const steps = await Promise.all(
    mdFiles.map(async (fileName, index) => {
      const raw = await fs.readFile(path.join(courseDir, fileName), "utf8");
      const { frontmatter, body } = parseMarkdownFile(raw);
      const fallbackSlug = fileName.replace(/\.md$/i, "");

      return {
        index,
        slug: frontmatter.slug || fallbackSlug,
        title: frontmatter.title || fallbackSlug,
        summary: frontmatter.summary || "",
        duration: frontmatter.duration || "",
        body,
      } as LearningStep;
    })
  );

  let title = safeCourse;
  let description = "";

  try {
    const metaRaw = await fs.readFile(path.join(courseDir, "meta.json"), "utf8");
    const meta = JSON.parse(metaRaw) as { title?: string; description?: string };
    title = meta.title || title;
    description = meta.description || "";
  } catch {
    // Optional metadata file.
  }

  return {
    course: safeCourse,
    title,
    description,
    steps,
  };
}

export async function getLearningStep(course: string, stepSlug: string) {
  const pathData = await getLearningPath(course);
  const step = pathData.steps.find((item) => item.slug === stepSlug) || null;
  return { pathData, step };
}
