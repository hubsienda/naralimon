import Link from "next/link";
import type { Locale } from "@/lib/types";

type Section = {
  title: string;
  body: string;
  points?: readonly string[];
};

export default function CommercialServicePage({
  locale,
  kicker,
  title,
  intro,
  sections,
  cta,
}: {
  locale: Locale;
  kicker: string;
  title: string;
  intro: string;
  sections: readonly Section[];
  cta: string;
}) {
  const contactHref = locale === "es" ? "/contacto" : "/en/contact";

  return (
    <main className="commercial-site commercial-page">
      <section className="commercial-page-hero">
        <div className="shell commercial-page-hero-inner">
          <p className="commercial-kicker">{kicker}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>

      <section className="commercial-section">
        <div className="shell commercial-page-sections">
          {sections.map((section, index) => (
            <article className="commercial-page-section" key={section.title}>
              <div className="commercial-page-number">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.points?.length ? (
                  <ul className="commercial-detail-list">
                    {section.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-cta commercial-page-cta">
        <div className="shell commercial-cta-inner">
          <div>
            <p className="commercial-kicker">{locale === "es" ? "CONTACTO COMERCIAL" : "COMMERCIAL ENQUIRY"}</p>
            <h2>{locale === "es" ? "Hablemos de su oportunidad." : "Let's discuss your opportunity."}</h2>
          </div>
          <Link className="button button-primary" href={contactHref}>{cta}</Link>
        </div>
      </section>
    </main>
  );
}
