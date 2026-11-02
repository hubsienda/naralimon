import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Naralimon",
    short_name: "Naralimon",
    description: "Intermediación alimentaria, representación comercial y aprovisionamiento internacional.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7f2",
    theme_color: "#252525",
    icons: [{ src: "/logo/favicon.png", sizes: "any", type: "image/png" }],
  };
}
