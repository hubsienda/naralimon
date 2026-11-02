import CommercialServicePage from "@/components/CommercialServicePage";
import { getCommercialCopy } from "@/lib/commercial-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Nosotros | Naralimon",
  description: "Naralimon S.C., agencia comercial independiente en Mijas Costa, Málaga, dedicada a intermediación alimentaria, representación y aprovisionamiento.",
  path: "/nosotros",
  alternatePath: "/en/about",
});

export default function AboutPage() {
  const c = getCommercialCopy("es").about;
  return <CommercialServicePage locale="es" kicker={c.kicker} title={c.title} intro={c.intro} sections={c.sections} cta={c.cta} />;
}
