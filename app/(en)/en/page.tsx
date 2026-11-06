import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Naralimon | Commercial Brokerage & Market Development",
  description: "Independent commercial brokerage agency focused on product commercialisation, market development and B2B opportunities for manufacturers, suppliers, distributors and professional buyers.",
  path: "/en",
  alternatePath: "/",
});

export default function Page() {
  return <HomePage locale="en" />;
}
