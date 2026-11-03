import Image from "next/image";
import Link from "next/link";
import { getPublicCopy } from "@/lib/public-content";
import type { Locale } from "@/lib/types";
import BackToTopButton from "./BackToTopButton";
import CookieSettingsButton from "./CookieSettingsButton";

export default function Footer({ locale }: { locale: Locale }) {
  const c = getPublicCopy(locale).footer;
  const currentYear = new Date().getFullYear();
  const legal = locale === "es"
    ? [[c.privacy, "/privacidad"], [c.cookies, "/cookies"], [c.legal, "/aviso-legal"]]
    : [[c.privacy, "/en/privacy"], [c.cookies, "/en/cookies"], [c.legal, "/en/legal"]];

  return (
    <footer className="site-footer commercial-footer">
      <div className="shell commercial-footer-grid">
        <div className="commercial-footer-company">
          <span className="footer-logo">
            <Image src="/logo/logo.png" alt="Naralimon" fill sizes="160px" className="object-contain" />
          </span>
          <p>© {currentYear} All rights reserved - Naralimon S.C. Calle Tamarindos 7 Mijas Costa 29651 (Málaga) España – CIF ES J01837269</p>
          <a href="mailto:naralimongroup@naralimon.com">naralimongroup@naralimon.com</a>
        </div>

        <div className="commercial-footer-links">
          <div>
            <strong>NARALIMON</strong>
            {legal.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <CookieSettingsButton label={c.manageCookies} />
            <BackToTopButton locale={locale} />
          </div>
        </div>
      </div>
    </footer>
  );
}
