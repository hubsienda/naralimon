import CommercialServicePage from "@/components/CommercialServicePage";
import { getPublicCopy } from "@/lib/public-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Nosotros | Naralimon — Intermediación Comercial B2B",
  description: "Naralimon S.C. combina más de 30 años de experiencia profesional en comercio internacional agroalimentario con ingeniería de gestión, marketing B2B e inteligencia de negocio.",
  path: "/nosotros",
  alternatePath: "/en/about",
});

export default function AboutPage() {
  const c = getPublicCopy("es").about;
  return <CommercialServicePage locale="es" kicker={c.kicker} title={c.title} intro={c.intro} sections={c.sections} cta={c.cta} />;
}
