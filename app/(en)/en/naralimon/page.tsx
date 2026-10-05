import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Naralimon | What it is",
  description: "Naralimon was born on the Costa del Sol with a simple idea: everything can be a game.",
  path: "/en/naralimon",
  alternatePath: "/naralimon",
});

export default function NaralimonPage() {
  return (
    <SimplePage eyebrow="COSTA DEL SOL" title="NARALIMON">
      <p className="large-copy">Naralimon was born on the Costa del Sol with a simple idea:</p>
      <p className="statement-line">everything can be a game.</p>
      <p>We create games, objects and ideas that turn ordinary things into something more playful.</p>
      <p>And this is just the beginning.</p>
    </SimplePage>
  );
}
