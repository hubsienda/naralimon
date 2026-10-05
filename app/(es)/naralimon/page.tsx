import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Naralimon | Qué es",
  description: "Naralimon nació en la Costa del Sol con una idea sencilla: todo puede ser un juego.",
  path: "/naralimon",
  alternatePath: "/en/naralimon",
});

export default function NaralimonPage() {
  return (
    <SimplePage eyebrow="COSTA DEL SOL" title="NARALIMON">
      <p className="large-copy">Naralimon nació en la Costa del Sol con una idea sencilla:</p>
      <p className="statement-line">todo puede ser un juego.</p>
      <p>Creamos juegos, objetos e ideas que convierten lo cotidiano en algo más divertido.</p>
      <p>Y esto acaba de empezar.</p>
    </SimplePage>
  );
}
