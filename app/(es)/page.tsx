import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Naralimon | Todo puede ser un juego",
  description: "Naralimon convierte objetos, ideas y experiencias en juegos. Nacido en la Costa del Sol.",
  path: "/",
  alternatePath: "/en",
});

export default function Page() {
  return <HomePage locale="es" />;
}
