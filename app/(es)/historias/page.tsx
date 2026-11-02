import StoriesIndex from "@/components/StoriesIndex";
import { pageMetadata } from "@/lib/metadata";

export const metadata = { ...pageMetadata({
  locale: "es",
  title: "Historias | Naralimon",
  description: "Ideas, juegos, historias y otras cosas del universo Naralimon.",
  path: "/historias",
  alternatePath: "/en/stories",
}), robots: { index: false, follow: true } };

export default function HistoriasPage() {
  return <StoriesIndex locale="es" />;
}
