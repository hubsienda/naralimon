import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { storyPath, type Story } from "./stories";

function absoluteUrl(value: string): string {
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `${siteConfig.baseUrl}${value.startsWith("/") ? value : `/${value}`}`;
}

export function storyMetadata(story: Story, translation?: Story): Metadata {
  const canonical = `${siteConfig.baseUrl}${storyPath(story)}`;
  const esStory = story.locale === "es" ? story : translation;
  const enStory = story.locale === "en" ? story : translation;
  const esUrl = esStory ? `${siteConfig.baseUrl}${storyPath(esStory)}` : undefined;
  const enUrl = enStory ? `${siteConfig.baseUrl}${storyPath(enStory)}` : undefined;

  return {
    title: `${story.title} | Naralimon`,
    description: story.description,
    alternates: {
      canonical,
      languages: {
        ...(esUrl ? { es: esUrl, "x-default": esUrl } : {}),
        ...(enUrl ? { en: enUrl } : {}),
      },
    },
    openGraph: {
      type: "article",
      locale: story.locale === "es" ? "es_ES" : "en_GB",
      url: canonical,
      siteName: "Naralimon",
      title: story.title,
      description: story.description,
      publishedTime: `${story.date}T12:00:00.000Z`,
      ...(story.image ? { images: [{ url: absoluteUrl(story.image), alt: story.title }] } : {}),
    },
  };
}
