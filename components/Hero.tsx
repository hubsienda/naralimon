import Link from "next/link";
import { getPublicCopy } from "@/lib/public-content";
import type { Locale } from "@/lib/types";

export default function Hero({ locale }: { locale: Locale }) {
  const c = getPublicCopy(locale).hero;
  const aboutHref = locale === "es" ? "/nosotros" : "/en/about";
  const contactHref = locale === "es" ? "/contacto" : "/en/contact";

  return (
    <section className="commercial-hero commercial-hero-simple">
      <div className="shell commercial-hero-simple-inner">
        <p className="commercial-kicker">{c.kicker}</p>
        <h1>{c.title}</h1>
        <p className="commercial-hero-body">{c.body}</p>
        <p className="commercial-hero-proof">{c.proof}</p>
        <div className="commercial-actions">
          <Link className="button button-primary" href={aboutHref}>{c.about}</Link>
          <Link className="button button-secondary" href={contactHref}>{c.contact}</Link>
        </div>
      </div>
    </section>
  );
}
