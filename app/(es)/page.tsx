import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Naralimon | Intermediación Comercial B2B y Desarrollo de Mercados",
  description: "Agencia independiente de intermediación comercial B2B y desarrollo de mercados, con más de 30 años de experiencia profesional en comercio internacional agroalimentario.",
  path: "/",
  alternatePath: "/en",
});

export default function Page() {
  return <HomePage locale="es" />;
}
