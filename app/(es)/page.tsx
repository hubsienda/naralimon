import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Naralimon | Brokerage Comercial y Desarrollo de Mercados",
  description: "Agencia independiente de brokerage comercial, comercialización de productos y desarrollo de mercados para fabricantes, proveedores, distribuidores y compradores profesionales.",
  path: "/",
  alternatePath: "/en",
});

export default function Page() {
  return <HomePage locale="es" />;
}
