import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Naralimon | Everything can be a game",
  description: "Naralimon turns objects, ideas and experiences into games. Born on the Costa del Sol.",
  path: "/en",
  alternatePath: "/",
});

export default function Page() {
  return <HomePage locale="en" />;
}
