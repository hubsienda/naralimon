import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ locale: "es", title: "Aviso legal | Naralimon", description: "Aviso legal de Naralimon.", path: "/aviso-legal", alternatePath: "/en/legal" });

export default function LegalPage() {
  return <SimplePage title="AVISO LEGAL"><p>La estructura de esta página está preparada para incorporar los datos legales definitivos del titular del sitio antes del lanzamiento público.</p><p>No se han añadido nombres societarios, domicilios, números fiscales ni otros datos que no hayan sido suministrados para este proyecto.</p></SimplePage>;
}
