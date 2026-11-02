import CommercialServicePage from "@/components/CommercialServicePage";
import { getCommercialCopy } from "@/lib/commercial-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Representación comercial alimentaria | Naralimon",
  description: "Representación comercial independiente para fabricantes y productores de alimentación: desarrollo de mercado, clientes profesionales y canales de distribución.",
  path: "/representacion-comercial",
  alternatePath: "/en/sales-representation",
});

export default function RepresentationPage() {
  const c = getCommercialCopy("es").representation;
  return <CommercialServicePage locale="es" kicker={c.kicker} title={c.title} intro={c.intro} sections={c.sections} cta={c.cta} />;
}
