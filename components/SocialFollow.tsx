import { siteConfig } from "@/lib/config";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import InstagramIcon from "./InstagramIcon";
import NewsletterSignup from "./NewsletterSignup";

export default function SocialFollow({ locale }: { locale: Locale }) {
  const c = getCopy(locale).follow;

  return (
    <section id="follow" className="section-pad follow-section">
      <div className="shell">
        <div className="follow-top">
          <div><p className="eyebrow">NARALIMON</p><h2>{c.title}</h2></div>
          <p className="follow-copy">{c.body}</p>
        </div>
        <div className="social-links">
          <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon /> {c.instagram} ↗</a>
          {siteConfig.socials.facebook ? <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer">{c.facebook} ↗</a> : null}
        </div>
        <NewsletterSignup locale={locale} />
      </div>
    </section>
  );
}
