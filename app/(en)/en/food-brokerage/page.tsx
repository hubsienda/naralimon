import CommercialServicePage from "@/components/CommercialServicePage";
import { getCommercialCopy } from "@/lib/commercial-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "B2B food brokerage | Naralimon",
  description: "Food brokerage between manufacturers and professional buyers: counterparty identification, commercial introductions and transaction support.",
  path: "/en/food-brokerage",
  alternatePath: "/intermediacion-alimentaria",
});

export default function BrokeragePage() {
  const c = getCommercialCopy("en").brokerage;
  return <CommercialServicePage locale="en" kicker={c.kicker} title={c.title} intro={c.intro} sections={c.sections} cta={c.cta} />;
}
