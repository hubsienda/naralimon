import CommercialServicePage from "@/components/CommercialServicePage";
import { getPublicCopy } from "@/lib/public-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "About Naralimon | B2B Commercial Brokerage",
  description: "Naralimon combines more than 30 years of professional experience in international agrifood trade with management engineering, B2B marketing and business intelligence.",
  path: "/en/about",
  alternatePath: "/nosotros",
});

export default function AboutPage() {
  const c = getPublicCopy("en").about;
  return <CommercialServicePage locale="en" kicker={c.kicker} title={c.title} intro={c.intro} sections={c.sections} cta={c.cta} />;
}
