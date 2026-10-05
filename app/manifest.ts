import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Naralimon",
    short_name: "Naralimon",
    description: "Todo puede ser un juego. Everything can be a game.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf8",
    theme_color: "#ffa800",
    icons: [{ src: "/logo/favicon.png", sizes: "any", type: "image/png" }],
  };
}
