import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Naralimon | Food Brokerage & Commercial Representation",
  description: "Independent commercial agency in Málaga for food manufacturer representation, B2B brokerage and international sourcing.",
  path: "/en",
  alternatePath: "/",
});

export default function Page() {
  return <HomePage locale="en" />;
}
