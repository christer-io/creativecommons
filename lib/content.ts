import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ContentPost = {
  _id: string;
  title: string;
  description: string;
  slug: { current: string };
  body: string;
  posttype: string[];
  tag: string;
  mainImage: string;
  source: string;
  license: string;
};

function normalizePosttype(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    if (!value.trim()) return [];
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function toPost(filename: string, content: string): ContentPost {
  const parsed = matter(content);
  const slug = (parsed.data.slug as string) || filename.replace(/\.md$/, "");

  return {
    _id: (parsed.data.id as string) || slug,
    title: (parsed.data.title as string) || slug,
    description: (parsed.data.description as string) || "",
    slug: { current: slug },
    body: parsed.content || "",
    posttype: normalizePosttype(parsed.data.posttype),
    tag: (parsed.data.tag as string) || "",
    mainImage: (parsed.data.mainImage as string) || "",
    source: (parsed.data.source as string) || "",
    license: (parsed.data.license as string) || "",
  };
}

export async function getAllMarkdownPosts(): Promise<ContentPost[]> {
  const files = await fs.readdir(CONTENT_DIR);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const posts = await Promise.all(
    markdownFiles.map(async (file) => {
      const fullpath = path.join(CONTENT_DIR, file);
      const raw = await fs.readFile(fullpath, "utf8");
      return toPost(file, raw);
    })
  );

  return posts.sort((a, b) => a.title.localeCompare(b.title, "nb"));
}

export async function getMarkdownPostsByType(type: string): Promise<ContentPost[]> {
  const posts = await getAllMarkdownPosts();
  return posts.filter((post) => post.posttype.includes(type) || post.tag === type);
}

export async function getMarkdownPostBySlug(slug: string): Promise<ContentPost | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return toPost(`${slug}.md`, raw);
  } catch {
    return null;
  }
}
