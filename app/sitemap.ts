import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { getPublishedStories, getStoryTranslation, storyPath } from "@/lib/content/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const pairs = [
    ["/", "/en"],
    ["/klans", "/en/klans"],
    ["/historias", "/en/stories"],
    ["/naralimon", "/en/naralimon"],
    ["/contacto", "/en/contact"],
    ["/privacidad", "/en/privacy"],
    ["/cookies", "/en/cookies"],
    ["/aviso-legal", "/en/legal"],
  ] as const;

  const staticEntries = pairs.flatMap(([esPath, enPath]) => {
    const esUrl = `${siteConfig.baseUrl}${esPath}`;
    const enUrl = `${siteConfig.baseUrl}${enPath}`;
    const alternates = { languages: { es: esUrl, en: enUrl, "x-default": esUrl } };
    return [
      { url: esUrl, changeFrequency: "weekly" as const, priority: esPath === "/" ? 1 : 0.7, alternates },
      { url: enUrl, changeFrequency: "weekly" as const, priority: enPath === "/en" ? 0.9 : 0.7, alternates },
    ];
  });

  const storyEntries = getPublishedStories("es").flatMap((story) => {
    const translation = getStoryTranslation(story);
    if (!translation) return [];
    const esUrl = `${siteConfig.baseUrl}${storyPath(story)}`;
    const enUrl = `${siteConfig.baseUrl}${storyPath(translation)}`;
    const alternates = { languages: { es: esUrl, en: enUrl, "x-default": esUrl } };
    return [
      { url: esUrl, lastModified: story.date, changeFrequency: "monthly" as const, priority: 0.65, alternates },
      { url: enUrl, lastModified: translation.date, changeFrequency: "monthly" as const, priority: 0.65, alternates },
    ];
  });

  return [...staticEntries, ...storyEntries];
}
