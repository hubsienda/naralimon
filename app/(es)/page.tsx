import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Naralimon | Intermediación alimentaria y representación comercial",
  description: "Agencia comercial independiente en Málaga para representación de fabricantes, intermediación alimentaria B2B y aprovisionamiento internacional.",
  path: "/",
  alternatePath: "/en",
});

export default function Page() {
  return <HomePage locale="es" />;
}
