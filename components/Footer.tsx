import Image from "next/image";
import Link from "next/link";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

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
        <div className="footer-links">{legal.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      </div>
    </footer>
  );
}
