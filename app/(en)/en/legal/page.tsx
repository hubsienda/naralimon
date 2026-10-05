import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ locale: "en", title: "Legal | Naralimon", description: "Naralimon legal information.", path: "/en/legal", alternatePath: "/aviso-legal" });

export default function LegalPage() {
  return <SimplePage title="LEGAL"><p>This page structure is ready for the website owner's final legal details before public launch.</p><p>No company names, addresses, tax numbers or other details that have not been supplied for this project have been invented.</p></SimplePage>;
}
