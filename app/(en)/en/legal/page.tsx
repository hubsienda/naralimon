import LegalContent from "@/components/LegalContent";
import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Legal | Naralimon",
  description: "Legal notice and general website-use information for naralimon.com.",
  path: "/en/legal",
  alternatePath: "/aviso-legal",
});

export default function LegalPage() {
  return <SimplePage eyebrow="NARALIMON" title="LEGAL"><LegalContent locale="en" kind="legal" /></SimplePage>;
}
