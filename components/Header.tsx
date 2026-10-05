"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const c = getCopy(locale).nav;
  const home = locale === "es" ? "/" : "/en";
  const links = [
    [c.home, home],
    [c.klans, locale === "es" ? "/klans" : "/en/klans"],
    [c.stories, locale === "es" ? "/historias" : "/en/stories"],
    [c.naralimon, locale === "es" ? "/naralimon" : "/en/naralimon"],
    [c.contact, locale === "es" ? "/contacto" : "/en/contact"],
  ];

  return (
    <header className="site-header naralimon-dark-header">
      <div className="shell header-inner">
        <Link href={home} className="brand" aria-label="Naralimon">
          <span className="brand-image">
            <Image src="/logo/logo.png" alt="Naralimon" fill sizes="190px" priority className="object-contain" />
          </span>
        </Link>
        <nav className="desktop-nav" aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <LanguageSwitcher locale={locale} />
        </nav>
        <button type="button" className="menu-button" aria-expanded={open} aria-controls="mobile-menu" aria-label={locale === "es" ? "Abrir menú" : "Open menu"} onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-panel ${open ? "is-open" : ""}`}>
        <nav className="shell mobile-nav" aria-label={locale === "es" ? "Navegación móvil" : "Mobile navigation"}>
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <LanguageSwitcher locale={locale} />
        </nav>
      </div>
      <style jsx global>{`
        .naralimon-dark-header {
          background: rgba(37, 37, 37, 0.97);
          color: #ffffff;
          border-bottom-color: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(14px);
        }

        .naralimon-dark-header .desktop-nav > a,
        .naralimon-dark-header .mobile-nav > a,
        .naralimon-dark-header .language-switch a {
          color: #ffffff;
          transition: color .18s ease;
        }

        .naralimon-dark-header .desktop-nav > a:hover,
        .naralimon-dark-header .mobile-nav > a:hover,
        .naralimon-dark-header .language-switch a:hover {
          color: var(--lemon);
        }

        .naralimon-dark-header .desktop-nav > a::after {
          background: var(--orange);
        }

        .naralimon-dark-header .language-switch a[aria-current="page"] {
          background: var(--lemon);
          color: var(--ink);
        }

        .naralimon-dark-header .menu-button {
          border-color: rgba(255, 255, 255, 0.82);
          background: #303030;
        }

        .naralimon-dark-header .menu-button span {
          background: #ffffff;
        }

        .naralimon-dark-header .mobile-panel {
          background: #252525;
          color: #ffffff;
          border-top-color: rgba(255, 255, 255, 0.1);
        }

        .naralimon-dark-header .desktop-nav > a:focus-visible,
        .naralimon-dark-header .mobile-nav > a:focus-visible,
        .naralimon-dark-header .language-switch a:focus-visible,
        .naralimon-dark-header .menu-button:focus-visible {
          outline-color: var(--orange);
        }
      `}</style>
    </header>
  );
}
