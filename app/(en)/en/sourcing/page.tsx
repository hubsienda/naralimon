import CommercialServicePage from "@/components/CommercialServicePage";
import { getCommercialCopy } from "@/lib/commercial-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "International food sourcing | Naralimon",
  description: "Supplier research for foodservice distributors, wholesalers and professional food buyers based on defined purchasing requirements.",
  path: "/en/sourcing",
  alternatePath: "/aprovisionamiento",
});

export default function SourcingPage() {
  const c = getCommercialCopy("en").sourcing;
  return <CommercialServicePage locale="en" kicker={c.kicker} title={c.title} intro={c.intro} sections={c.sections} cta={c.cta} />;
}
