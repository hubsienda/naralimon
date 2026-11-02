import Link from "next/link";
import { getCommercialCopy } from "@/lib/commercial-content";
import type { Locale } from "@/lib/types";
import Hero from "./Hero";

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="commercial-text-link" href={href}>{children} <span aria-hidden="true">→</span></Link>;
}

export default function HomePage({ locale }: { locale: Locale }) {
  const c = getCommercialCopy(locale);
  const representationHref = locale === "es" ? "/representacion-comercial" : "/en/sales-representation";
  const sourcingHref = locale === "es" ? "/aprovisionamiento" : "/en/sourcing";
  const aboutHref = locale === "es" ? "/nosotros" : "/en/about";
  const contactHref = locale === "es" ? "/contacto" : "/en/contact";

  return (
    <main className="commercial-site">
      <Hero locale={locale} />

      <section className="commercial-section" aria-labelledby="what-we-do-title">
        <div className="shell">
          <div className="commercial-section-heading">
            <div>
              <p className="commercial-kicker">{c.home.whatWeDo.kicker}</p>
              <h2 id="what-we-do-title">{c.home.whatWeDo.title}</h2>
            </div>
            <p>{c.home.whatWeDo.intro}</p>
          </div>
          <div className="commercial-service-grid">
            {c.home.whatWeDo.cards.map((card) => (
              <article className="commercial-service-card" key={card.href}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <ArrowLink href={card.href}>{card.link}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="commercial-section commercial-section-dark">
        <div className="shell commercial-split">
          <div>
            <p className="commercial-kicker commercial-kicker-light">{c.home.manufacturers.kicker}</p>
            <h2>{c.home.manufacturers.title}</h2>
            <p className="commercial-large-copy">{c.home.manufacturers.body}</p>
            <ArrowLink href={representationHref}>{c.home.manufacturers.link}</ArrowLink>
          </div>
          <ul className="commercial-check-list">
            {c.home.manufacturers.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </section>

      <section className="commercial-section">
        <div className="shell commercial-split commercial-split-reverse">
          <div>
            <p className="commercial-kicker">{c.home.buyers.kicker}</p>
            <h2>{c.home.buyers.title}</h2>
            <p className="commercial-large-copy">{c.home.buyers.body}</p>
            <ArrowLink href={sourcingHref}>{c.home.buyers.link}</ArrowLink>
          </div>
          <ul className="commercial-check-list commercial-check-list-light">
            {c.home.buyers.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </section>

      <section className="commercial-section commercial-section-soft">
        <div className="shell">
          <div className="commercial-section-heading">
            <div>
              <p className="commercial-kicker">{c.home.sectors.kicker}</p>
              <h2>{c.home.sectors.title}</h2>
            </div>
            <p>{c.home.sectors.body}</p>
          </div>
          <div className="commercial-sector-grid">
            {c.home.sectors.items.map((item) => <div className="commercial-sector" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="commercial-section">
        <div className="shell">
          <div className="commercial-section-heading">
            <div>
              <p className="commercial-kicker">{c.home.process.kicker}</p>
              <h2>{c.home.process.title}</h2>
            </div>
            <p>{c.home.process.note}</p>
          </div>
          <div className="commercial-process-grid">
            {c.home.process.steps.map(([number, title, body]) => (
              <article className="commercial-process-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="commercial-cta">
        <div className="shell commercial-cta-inner">
          <div>
            <p className="commercial-kicker">{c.home.contact.kicker}</p>
            <h2>{c.home.contact.title}</h2>
            <p>{c.home.contact.body}</p>
          </div>
          <div className="commercial-actions">
            <Link className="button button-primary" href={contactHref}>{c.home.contact.primary}</Link>
            <Link className="button button-secondary" href={aboutHref}>{c.home.contact.secondary}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
