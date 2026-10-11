import { siteConfig } from "@/lib/config";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import SiteLink from "./SiteLink";

export default function KlanzTeaser({ locale }: { locale: Locale }) {
  const c = getCopy(locale).klanz;
  return (
    <section className="section-pad klanz-section">
      <div className="shell klanz-grid">
        <div className="klanz-copy">
          <p className="eyebrow eyebrow-light">{c.kicker}</p>
          <h2>{c.title}</h2>
          <p className="klanz-lead">{c.body}</p>
          <p>{c.sub}</p>
          <SiteLink href={siteConfig.klanzUrl} className="button button-lemon">{c.cta}</SiteLink>
        </div>
        <div className="card-stack" aria-hidden="true">
          <div className="game-card card-a"><span>◆</span></div>
          <div className="game-card card-b"><span>✦</span></div>
          <div className="game-card card-c"><span>▲</span></div>
        </div>
      </div>
    </section>
  );
}
