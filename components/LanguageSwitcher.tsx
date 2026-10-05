"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/types";

const esToEn: Record<string, string> = {
  "/": "/en",
  "/klans": "/en/klans",
  "/naralimon": "/en/naralimon",
  "/contacto": "/en/contact",
  "/privacidad": "/en/privacy",
  "/cookies": "/en/cookies",
  "/aviso-legal": "/en/legal",
};

const enToEs = Object.fromEntries(Object.entries(esToEn).map(([es, en]) => [en, es])) as Record<string, string>;

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const esHref = locale === "es" ? pathname : (enToEs[pathname] ?? "/");
  const enHref = locale === "en" ? pathname : (esToEn[pathname] ?? "/en");

  return (
    <div className="language-switch" aria-label={locale === "es" ? "Idioma" : "Language"}>
      <Link href={esHref} aria-current={locale === "es" ? "page" : undefined}>ES</Link>
      <span aria-hidden="true">|</span>
      <Link href={enHref} aria-current={locale === "en" ? "page" : undefined}>EN</Link>
    </div>
  );
}
