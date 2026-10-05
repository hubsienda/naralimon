import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMdx } from "nextra/compile";
import type { Locale } from "@/lib/types";

export type StoryFrontmatter = {
  title: string;
  description: string;
  date: string;
  translationKey: string;
  slug: string;
  image?: string;
  category?: string;
  published: boolean;
  tags?: string[];
  author?: string;
  featured?: boolean;
};

export type Story = StoryFrontmatter & {
  body: string;
  filePath: string;
  locale: Locale;
};

const contentRoots: Record<Locale, string> = {
  es: path.join(process.cwd(), "content", "es", "historias"),
  en: path.join(process.cwd(), "content", "en", "stories"),
};

function normaliseDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

function readStories(locale: Locale): Story[] {
  const directory = contentRoots[locale];
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => {
      const filePath = path.join(directory, name);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);
      const fallbackSlug = name.replace(/\.mdx$/, "");

      return {
        title: String(data.title ?? fallbackSlug),
        description: String(data.description ?? ""),
        date: normaliseDate(data.date),
        translationKey: String(data.translationKey ?? fallbackSlug),
        slug: String(data.slug ?? fallbackSlug),
        image: data.image ? String(data.image) : undefined,
        category: data.category ? String(data.category) : undefined,
        published: data.published === true,
        tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
        author: data.author ? String(data.author) : undefined,
        featured: data.featured === true,
        body: content,
        filePath,
        locale,
      } satisfies Story;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllStories(locale: Locale): Story[] {
  return readStories(locale);
}

export function getPublishedStories(locale: Locale): Story[] {
  return readStories(locale).filter((story) => story.published);
}

export function getStory(locale: Locale, slug: string, includeDrafts = false): Story | undefined {
  return readStories(locale).find((story) => story.slug === slug && (story.published || includeDrafts));
}

export function getStoryTranslation(story: Story): Story | undefined {
  const otherLocale: Locale = story.locale === "es" ? "en" : "es";
  return readStories(otherLocale).find((candidate) => candidate.translationKey === story.translationKey && candidate.published === story.published);
}

export function storyPath(story: Pick<Story, "locale" | "slug">): string {
  return story.locale === "es" ? `/historias/${story.slug}` : `/en/stories/${story.slug}`;
}

export async function compileStory(story: Story): Promise<string> {
  return compileMdx(story.body, {
    filePath: story.filePath,
    readingTime: false,
    codeHighlight: false,
    staticImage: false,
    search: false,
  });
}
