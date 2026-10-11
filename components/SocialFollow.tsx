import { siteConfig } from "@/lib/config";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import InstagramIcon from "./InstagramIcon";
import NewsletterSignup from "./NewsletterSignup";
import SiteLink from "./SiteLink";

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
          <SiteLink href={siteConfig.socials.instagram}><InstagramIcon /> {c.instagram} ↗</SiteLink>
          {siteConfig.socials.facebook ? <SiteLink href={siteConfig.socials.facebook}>{c.facebook} ↗</SiteLink> : null}
        </div>
        <NewsletterSignup locale={locale} />
      </div>
    </section>
  );
}
