import Link from "next/link";
import SimplePage from "@/components/SimplePage";
import { siteConfig } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "KLANS | Naralimon",
  description: "Estrategia, facciones, alianzas y traición. Descubre KLANS, un juego de cartas de Naralimon.",
  path: "/klans",
  alternatePath: "/en/klans",
});

export default function KlansPage() {
  return (
    <SimplePage eyebrow="UN JUEGO DE NARALIMON" title="KLANS">
      <p className="large-copy">Estrategia. Facciones. Alianzas. Traición.</p>
      <p>KLANS es un juego de cartas de Naralimon. Tiene su propio espacio, sus propias reglas y su propia identidad.</p>
      <div className="mini-card-row" aria-hidden="true"><span>◆</span><span>✦</span><span>▲</span></div>
      <p>No vamos a duplicarlo aquí. Si quieres saber qué ocurre cuando las alianzas duran exactamente lo que tardan en dejar de convenir, entra en KLANS.</p>
      <a className="button button-dark" href={siteConfig.klansUrl} target="_blank" rel="noreferrer">DESCUBRE KLANS ↗</a>
      <Link className="text-link inline-back" href="/">← VOLVER A NARALIMON</Link>
    </SimplePage>
  );
}
