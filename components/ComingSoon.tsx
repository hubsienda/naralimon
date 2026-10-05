import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default function ComingSoon({ locale }: { locale: Locale }) {
  const c = getCopy(locale).coming;
  return (
    <section className="section-pad coming-section">
      <div className="shell coming-grid">
        <div>
          <span className="coming-label">{c.label}</span>
          <h2>{c.title}</h2>
        </div>
        <div className="coming-list">
          {c.lines.map((line) => <p key={line}>{line}</p>)}
          <strong>{c.ending}</strong>
        </div>
      </div>
    </section>
  );
}
