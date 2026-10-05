import LegalContent from "@/components/LegalContent";
import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Aviso legal | Naralimon",
  description: "Aviso legal y condiciones generales de uso de naralimon.com.",
  path: "/aviso-legal",
  alternatePath: "/en/legal",
});

export default function LegalPage() {
  return <SimplePage eyebrow="NARALIMON" title="AVISO LEGAL"><LegalContent locale="es" kind="legal" /></SimplePage>;
}
