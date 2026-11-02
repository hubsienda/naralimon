import CommercialServicePage from "@/components/CommercialServicePage";
import { getCommercialCopy } from "@/lib/commercial-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Aprovisionamiento alimentario internacional | Naralimon",
  description: "Búsqueda de proveedores alimentarios para distribuidores, mayoristas, foodservice y compradores profesionales según requisitos de compra.",
  path: "/aprovisionamiento",
  alternatePath: "/en/sourcing",
});

export default function SourcingPage() {
  const c = getCommercialCopy("es").sourcing;
  return <CommercialServicePage locale="es" kicker={c.kicker} title={c.title} intro={c.intro} sections={c.sections} cta={c.cta} />;
}
