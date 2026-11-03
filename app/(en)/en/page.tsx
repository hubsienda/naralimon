import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Naralimon | B2B Commercial Brokerage & Market Development",
  description: "Independent B2B commercial brokerage and market-development agency, drawing on more than 30 years of professional experience in international agrifood trade.",
  path: "/en",
  alternatePath: "/",
});

export default function Page() {
  return <HomePage locale="en" />;
}
