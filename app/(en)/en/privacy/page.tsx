import LegalContent from "@/components/LegalContent";
import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Privacy | Naralimon",
  description: "Naralimon privacy policy and data processing information for naralimon.com.",
  path: "/en/privacy",
  alternatePath: "/privacidad",
});

export default function PrivacyPage() {
  return <SimplePage eyebrow="NARALIMON" title="PRIVACY"><LegalContent locale="en" kind="privacy" /></SimplePage>;
}
