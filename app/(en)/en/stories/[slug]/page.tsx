import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StoryArticle from "@/components/StoryArticle";
import { getAllStories, getPublishedStories, getStory, getStoryTranslation } from "@/lib/content/stories";
import { storyMetadata } from "@/lib/content/story-metadata";

const includeDrafts = process.env.NODE_ENV !== "production";
export const dynamicParams = false;

export function generateStaticParams() {
  const stories = includeDrafts ? getAllStories("en") : getPublishedStories("en");
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory("en", slug, includeDrafts);
  if (!story) return {};
  return storyMetadata(story, getStoryTranslation(story));
}

export default async function EnglishStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory("en", slug, includeDrafts);
  if (!story) notFound();
  return <StoryArticle story={story} />;
}
