import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ locale: "es", title: "Privacidad | Naralimon", description: "Información de privacidad de Naralimon.", path: "/privacidad", alternatePath: "/en/privacy" });

export default function PrivacyPage() {
  return <SimplePage title="PRIVACIDAD"><p>Esta ruta está preparada para la política de privacidad definitiva. Los datos identificativos del responsable y cualquier tratamiento específico se incorporarán antes del lanzamiento público sin inventar información legal.</p><p>La versión actual del sitio no utiliza cuentas de usuario ni una base de datos propia.</p></SimplePage>;
}
