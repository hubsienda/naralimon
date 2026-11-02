import CommercialServicePage from "@/components/CommercialServicePage";
import { getCommercialCopy } from "@/lib/commercial-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Food sales representation | Naralimon",
  description: "Independent commercial representation for food manufacturers and producers: market development, professional customers and distribution channels.",
  path: "/en/sales-representation",
  alternatePath: "/representacion-comercial",
});

export default function RepresentationPage() {
  const c = getCommercialCopy("en").representation;
  return <CommercialServicePage locale="en" kicker={c.kicker} title={c.title} intro={c.intro} sections={c.sections} cta={c.cta} />;
}
