import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import CookieSettingsButton from "./CookieSettingsButton";
import InstagramIcon from "./InstagramIcon";

export default function Footer({ locale }: { locale: Locale }) {
  const c = getCopy(locale).footer;
  const legal = locale === "es"
    ? [[c.privacy, "/privacidad"], [c.cookies, "/cookies"], [c.legal, "/aviso-legal"]]
    : [[c.privacy, "/en/privacy"], [c.cookies, "/en/cookies"], [c.legal, "/en/legal"]];

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <span className="footer-logo"><Image src="/logo/logo.png" alt="Naralimon" fill sizes="160px" className="object-contain" /></span>
          <p>{c.line}</p>
        </div>
        <div className="footer-right">
          <div className="footer-social">
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon /> Instagram</a>
            <CookieSettingsButton label={c.manageCookies} />
          </div>
          <div className="footer-links">{legal.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
        </div>
      </div>
    </footer>
  );
}
