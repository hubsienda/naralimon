import { permanentRedirect } from "next/navigation";
import { siteConfig } from "@/lib/config";

export default function LegacyGameRedirect() {
  permanentRedirect(siteConfig.klanzUrl);
}
