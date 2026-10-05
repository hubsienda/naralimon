import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ locale: "en", title: "Privacy | Naralimon", description: "Naralimon privacy information.", path: "/en/privacy", alternatePath: "/privacidad" });

export default function PrivacyPage() {
  return <SimplePage title="PRIVACY"><p>This route is ready for the final privacy policy. Controller identification and any specific processing information will be added before public launch rather than inventing legal details.</p><p>The current site does not use user accounts or a proprietary database.</p></SimplePage>;
}
