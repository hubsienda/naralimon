"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getPublicCopy } from "@/lib/public-content";
import type { Locale } from "@/lib/types";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const c = getPublicCopy(locale).nav;
  const home = locale === "es" ? "/" : "/en";
  const links = locale === "es"
    ? [[c.home, "/"], [c.about, "/nosotros"], [c.contact, "/contacto"]]
    : [[c.home, "/en"], [c.about, "/en/about"], [c.contact, "/en/contact"]];

  return (
    <header className="site-header commercial-header">
      <div className="shell header-inner">
        <Link href={home} className="brand" aria-label="Naralimon">
          <span className="brand-image">
            <Image src="/logo/logo.png" alt="Naralimon" fill sizes="190px" priority className="object-contain" />
          </span>
        </Link>

        <nav className="desktop-nav commercial-nav" aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <LanguageSwitcher locale={locale} />
        </nav>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={locale === "es" ? "Abrir menú" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-panel commercial-mobile-panel ${open ? "is-open" : ""}`}>
        <nav className="shell mobile-nav" aria-label={locale === "es" ? "Navegación móvil" : "Mobile navigation"}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <LanguageSwitcher locale={locale} />
        </nav>
      </div>
    </header>
  );
}
