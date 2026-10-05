import Link from "next/link";
import SimplePage from "@/components/SimplePage";
import { siteConfig } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "KLANS | Naralimon",
  description: "Strategy, factions, alliances and betrayal. Discover KLANS, a Naralimon card game.",
  path: "/en/klans",
  alternatePath: "/klans",
});

export default function KlansPage() {
  return (
    <SimplePage eyebrow="A NARALIMON GAME" title="KLANS">
      <p className="large-copy">Strategy. Factions. Alliances. Betrayal.</p>
      <p>KLANS is a Naralimon card game. It has its own space, its own rules and its own identity.</p>
      <div className="mini-card-row" aria-hidden="true"><span>◆</span><span>✦</span><span>▲</span></div>
      <p>We are not going to duplicate it here. If you want to see what happens when alliances last exactly as long as they remain useful, step into KLANS.</p>
      <a className="button button-dark" href={siteConfig.klansUrl} target="_blank" rel="noreferrer">DISCOVER KLANS ↗</a>
      <Link className="text-link inline-back" href="/en">← BACK TO NARALIMON</Link>
    </SimplePage>
  );
}
