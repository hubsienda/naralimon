import { permanentRedirect } from "next/navigation";

export default function LegacyAboutRedirect() {
  permanentRedirect("/en/about");
}
