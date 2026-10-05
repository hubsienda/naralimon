import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default function Hero({ locale }: { locale: Locale }) {
  const c = getCopy(locale).hero;
  return (
    <section className="hero section-pad">
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{c.title}</h1>
          <p className="hero-body">{c.body}</p>
          <div className="hero-actions">
            <a href="#play" className="button button-dark">{c.primary}</a>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="button button-light">{c.secondary}</a>
          </div>
        </div>
        <div className="hero-art" aria-label={c.spark}>
          <div className="logo-stage"><Image src="/logo/logo.png" alt="Naralimon" fill sizes="(max-width: 768px) 80vw, 480px" priority className="object-contain" /></div>
          <div className="spark-card"><span className="spark-dot" aria-hidden="true" /><p>{c.spark}</p></div>
          <div className="hero-chip chip-orange" aria-hidden="true">?</div>
          <div className="hero-chip chip-lemon" aria-hidden="true">!</div>
        </div>
      </div>
    </section>
  );
}
