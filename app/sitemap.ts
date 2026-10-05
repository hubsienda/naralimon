import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pairs = [
    ["/", "/en"],
    ["/klans", "/en/klans"],
    ["/naralimon", "/en/naralimon"],
    ["/contacto", "/en/contact"],
    ["/privacidad", "/en/privacy"],
    ["/cookies", "/en/cookies"],
    ["/aviso-legal", "/en/legal"],
  ] as const;

  return pairs.flatMap(([esPath, enPath]) => {
    const esUrl = `${siteConfig.baseUrl}${esPath}`;
    const enUrl = `${siteConfig.baseUrl}${enPath}`;
    const alternates = { languages: { es: esUrl, en: enUrl, "x-default": esUrl } };
    return [
      { url: esUrl, changeFrequency: "weekly" as const, priority: esPath === "/" ? 1 : 0.7, alternates },
      { url: enUrl, changeFrequency: "weekly" as const, priority: enPath === "/en" ? 0.9 : 0.7, alternates },
    ];
  });
}
