import CommercialServicePage from "@/components/CommercialServicePage";
import { getCommercialCopy } from "@/lib/commercial-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "About Naralimon | Food commercial agency",
  description: "Naralimon S.C. is an independent commercial agency based in Mijas Costa, Málaga, developing food brokerage, representation and sourcing activity.",
  path: "/en/about",
  alternatePath: "/nosotros",
});

export default function AboutPage() {
  const c = getCommercialCopy("en").about;
  return <CommercialServicePage locale="en" kicker={c.kicker} title={c.title} intro={c.intro} sections={c.sections} cta={c.cta} />;
}
