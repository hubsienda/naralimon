import StoriesIndex from "@/components/StoriesIndex";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Stories | Naralimon",
  description: "Ideas, games, stories and other things from the Naralimon universe.",
  path: "/en/stories",
  alternatePath: "/historias",
});

export default function StoriesPage() {
  return <StoriesIndex locale="en" />;
}
