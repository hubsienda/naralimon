import Link from "next/link";
import { getCommercialCopy } from "@/lib/commercial-content";
import type { Locale } from "@/lib/types";

export default function Hero({ locale }: { locale: Locale }) {
  const c = getCommercialCopy(locale).hero;
  const manufacturerHref = locale === "es" ? "/representacion-comercial" : "/en/sales-representation";
  const sourcingHref = locale === "es" ? "/aprovisionamiento" : "/en/sourcing";

  return (
    <section className="commercial-hero">
      <div className="shell commercial-hero-grid">
        <div className="commercial-hero-copy">
          <p className="commercial-kicker">{c.eyebrow}</p>
          <h1>{c.title}</h1>
          <p className="commercial-hero-lead">{c.lead}</p>
          <p className="commercial-hero-body">{c.body}</p>
          <p className="commercial-hero-sub">{c.sub}</p>
          <div className="commercial-actions">
            <Link className="button button-primary" href={manufacturerHref}>{c.manufacturer}</Link>
            <Link className="button button-secondary" href={sourcingHref}>{c.buyer}</Link>
          </div>
        </div>
        <aside className="commercial-hero-panel" aria-label={locale === "es" ? "Áreas de actividad" : "Areas of activity"}>
          <div className="commercial-hero-brand">NARALIMON</div>
          <div className="commercial-hero-rule" />
          <p>{locale === "es" ? "Intermediación Alimentaria y Representación Comercial" : "Food Brokerage & Commercial Representation"}</p>
          <ul>
            <li>{locale === "es" ? "Representación de fabricantes y productores" : "Representation of manufacturers and producers"}</li>
            <li>{locale === "es" ? "Intermediación B2B" : "B2B brokerage"}</li>
            <li>{locale === "es" ? "Aprovisionamiento internacional" : "International sourcing"}</li>
            <li>{locale === "es" ? "Desarrollo de mercados y canales" : "Market and channel development"}</li>
          </ul>
          <span>{locale === "es" ? "Mijas Costa · Málaga · España" : "Mijas Costa · Málaga · Spain"}</span>
        </aside>
      </div>
    </section>
  );
}
