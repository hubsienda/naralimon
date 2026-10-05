"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { storyTranslationMap } from "@/lib/content/translations.generated";
import type { Locale } from "@/lib/types";

const esToEn: Record<string, string> = {
  "/": "/en",
  "/klans": "/en/klans",
  "/historias": "/en/stories",
  "/naralimon": "/en/naralimon",
  "/contacto": "/en/contact",
  "/privacidad": "/en/privacy",
  "/cookies": "/en/cookies",
  "/aviso-legal": "/en/legal",
};

const enToEs = Object.fromEntries(Object.entries(esToEn).map(([es, en]) => [en, es])) as Record<string, string>;

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const pairedStory = storyTranslationMap[pathname];
  const esHref = locale === "es" ? pathname : (pairedStory ?? enToEs[pathname] ?? "/");
  const enHref = locale === "en" ? pathname : (pairedStory ?? esToEn[pathname] ?? "/en");

  return (
    <div className="language-switch" aria-label={locale === "es" ? "Idioma" : "Language"}>
      <Link href={esHref} aria-current={locale === "es" ? "page" : undefined}>ES</Link>
      <span aria-hidden="true">|</span>
      <Link href={enHref} aria-current={locale === "en" ? "page" : undefined}>EN</Link>
    </div>
  );
}
