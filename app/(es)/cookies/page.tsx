import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ locale: "es", title: "Cookies | Naralimon", description: "Información sobre cookies de Naralimon.", path: "/cookies", alternatePath: "/en/cookies" });

export default function CookiesPage() {
  return <SimplePage title="COOKIES"><p>La primera versión de Naralimon está diseñada sin analítica no esencial. Si se añade analítica u otra tecnología que requiera consentimiento, se implementará un mecanismo de consentimiento antes de activarla.</p><p>Esta página se actualizará con la información definitiva sobre cookies antes del lanzamiento público.</p></SimplePage>;
}
