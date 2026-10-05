import LegalContent from "@/components/LegalContent";
import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Cookies | Naralimon",
  description: "Naralimon cookie, local storage and consent policy.",
  path: "/en/cookies",
  alternatePath: "/cookies",
});

export default function CookiesPage() {
  return <SimplePage eyebrow="NARALIMON" title="COOKIES"><LegalContent locale="en" kind="cookies" /></SimplePage>;
}
