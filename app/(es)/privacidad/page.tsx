import LegalContent from "@/components/LegalContent";
import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Privacidad | Naralimon",
  description: "Política de privacidad de Naralimon y tratamiento de datos en naralimon.com.",
  path: "/privacidad",
  alternatePath: "/en/privacy",
});

export default function PrivacyPage() {
  return <SimplePage eyebrow="NARALIMON" title="PRIVACIDAD"><LegalContent locale="es" kind="privacy" /></SimplePage>;
}
