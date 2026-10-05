import LegalContent from "@/components/LegalContent";
import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Cookies | Naralimon",
  description: "Política de cookies, almacenamiento local y consentimiento de Naralimon.",
  path: "/cookies",
  alternatePath: "/en/cookies",
});

export default function CookiesPage() {
  return <SimplePage eyebrow="NARALIMON" title="COOKIES"><LegalContent locale="es" kind="cookies" /></SimplePage>;
}
