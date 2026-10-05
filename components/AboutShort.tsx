import Link from "next/link";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default function AboutShort({ locale }: { locale: Locale }) {
  const c = getCopy(locale).aboutShort;
  return (
    <section className="section-pad about-short">
      <div className="shell about-short-grid">
        <p className="eyebrow">{c.kicker}</p>
        <div>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
          <Link className="text-link" href={locale === "es" ? "/naralimon" : "/en/naralimon"}>{c.cta} →</Link>
        </div>
      </div>
    </section>
  );
}
