"use client";

import type { Locale } from "@/lib/types";

export default function BackToTopButton({ locale }: { locale: Locale }) {
  const label = locale === "es" ? "Volver arriba" : "Back to top";

  return (
    <button
      type="button"
      className="footer-top-button"
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      TOP
    </button>
  );
}
