import Link from "next/link";
import { getPublicCopy } from "@/lib/public-content";
import type { Locale } from "@/lib/types";
import Hero from "./Hero";

export default function HomePage({ locale }: { locale: Locale }) {
  const c = getPublicCopy(locale);
  const contactHref = locale === "es" ? "/contacto" : "/en/contact";

  return (
    <main className="commercial-site">
      <Hero locale={locale} />

      <section className="commercial-section">
        <div className="shell">
          <div className="commercial-section-heading">
            <div>
              <p className="commercial-kicker">{c.home.approach.kicker}</p>
              <h2>{c.home.approach.title}</h2>
            </div>
            <p>{c.home.approach.intro}</p>
          </div>

          <div className="commercial-service-grid">
            {c.home.approach.capabilities.map((item) => (
              <article className="commercial-service-card commercial-service-card-static" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="commercial-section commercial-section-dark">
        <div className="shell commercial-simple-copy">
          <p className="commercial-kicker commercial-kicker-light">{c.home.model.kicker}</p>
          <h2>{c.home.model.title}</h2>
          {c.home.model.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="commercial-section commercial-section-soft">
        <div className="shell commercial-experience-grid">
          <div>
            <p className="commercial-kicker">{c.home.experience.kicker}</p>
            <h2>{c.home.experience.title}</h2>
          </div>
          <div className="commercial-experience-copy">
            {c.home.experience.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="commercial-experience-highlight">{c.home.experience.highlight}</p>
          </div>
        </div>
      </section>

      <section className="commercial-cta">
        <div className="shell commercial-cta-inner">
          <div>
            <p className="commercial-kicker">{c.home.final.kicker}</p>
            <h2>{c.home.final.title}</h2>
            <p>{c.home.final.body}</p>
          </div>
          <div className="commercial-actions">
            <Link className="button button-primary" href={contactHref}>{c.home.final.cta}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
