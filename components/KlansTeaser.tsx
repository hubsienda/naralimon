import Link from "next/link";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default function KlansTeaser({ locale }: { locale: Locale }) {
  const c = getCopy(locale).klans;
  const href = locale === "es" ? "/klans" : "/en/klans";

  return (
    <section className="section-pad klans-section">
      <div className="shell klans-grid">
        <div className="klans-copy">
          <p className="eyebrow eyebrow-light">{c.kicker}</p>
          <h2>{c.title}</h2>
          <p className="klans-lead">{c.body}</p>
          <p>{c.sub}</p>
          <Link href={href} className="button button-lemon">{c.cta}</Link>
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
