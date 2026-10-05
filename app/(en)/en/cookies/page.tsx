import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ locale: "en", title: "Cookies | Naralimon", description: "Naralimon cookie information.", path: "/en/cookies", alternatePath: "/cookies" });

export default function CookiesPage() {
  return <SimplePage title="COOKIES"><p>The first Naralimon version is designed without non-essential analytics. If analytics or other consent-dependent technology is introduced, a consent mechanism will be implemented before it is activated.</p><p>This page will be updated with final cookie information before public launch.</p></SimplePage>;
}
