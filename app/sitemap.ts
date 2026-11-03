import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pairs = [
    ["/", "/en", 1],
    ["/nosotros", "/en/about", 0.8],
    ["/contacto", "/en/contact", 0.8],
    ["/privacidad", "/en/privacy", 0.4],
    ["/cookies", "/en/cookies", 0.4],
    ["/aviso-legal", "/en/legal", 0.4],
  ] as const;

  return pairs.flatMap(([esPath, enPath, priority]) => {
    const esUrl = `${siteConfig.baseUrl}${esPath}`;
    const enUrl = `${siteConfig.baseUrl}${enPath}`;
    const alternates = { languages: { es: esUrl, en: enUrl, "x-default": esUrl } };

    return [
      { url: esUrl, changeFrequency: "monthly" as const, priority, alternates },
      { url: enUrl, changeFrequency: "monthly" as const, priority: Math.max(priority - 0.05, 0.35), alternates },
    ];
  });
}
