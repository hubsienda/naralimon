import { siteConfig } from "@/lib/config";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import NewsletterSignup from "./NewsletterSignup";

export default function SocialFollow({ locale }: { locale: Locale }) {
  const c = getCopy(locale).follow;
  const socialLinks = [
    [c.instagram, siteConfig.socials.instagram],
    [c.facebook, siteConfig.socials.facebook],
  ].filter(([, url]) => Boolean(url));

  return (
    <section id="follow" className="section-pad follow-section">
      <div className="shell">
        <div className="follow-top">
          <div><p className="eyebrow">NARALIMON</p><h2>{c.title}</h2></div>
          <p className="follow-copy">{c.body}</p>
        </div>
        {socialLinks.length > 0 && (
          <div className="social-links">
            {socialLinks.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label} ↗</a>)}
          </div>
        )}
        <NewsletterSignup locale={locale} />
      </div>
    </section>
  );
}
