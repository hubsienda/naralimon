import type { Metadata } from "next";
import { siteConfig } from "./config";
import type { Locale } from "./types";

const localeTag = { es: "es_ES", en: "en_GB" } as const;
const fallbackImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "Naralimon — Everything can be a game" };

export function pageMetadata({
  locale,
  title,
  description,
  path,
  alternatePath,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  alternatePath: string;
}): Metadata {
  const canonical = `${siteConfig.baseUrl}${path}`;
  const alternate = `${siteConfig.baseUrl}${alternatePath}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es: locale === "es" ? canonical : alternate,
        en: locale === "en" ? canonical : alternate,
        "x-default": locale === "es" ? canonical : alternate,
      },
    },
    openGraph: {
      type: "website",
      locale: localeTag[locale],
      url: canonical,
      siteName: "Naralimon",
      title,
      description,
      images: [fallbackImage],
    },
  };
}
