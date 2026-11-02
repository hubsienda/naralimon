import CommercialServicePage from "@/components/CommercialServicePage";
import { getCommercialCopy } from "@/lib/commercial-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Intermediación alimentaria B2B | Naralimon",
  description: "Intermediación alimentaria entre fabricantes y compradores profesionales: identificación de contrapartes, introducciones y apoyo comercial.",
  path: "/intermediacion-alimentaria",
  alternatePath: "/en/food-brokerage",
});

export default function BrokeragePage() {
  const c = getCommercialCopy("es").brokerage;
  return <CommercialServicePage locale="es" kicker={c.kicker} title={c.title} intro={c.intro} sections={c.sections} cta={c.cta} />;
}
