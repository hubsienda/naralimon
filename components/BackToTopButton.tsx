"use client";

import type { Locale } from "@/lib/types";

export default function BackToTopButton({ locale }: { locale: Locale }) {
  const label = locale === "es" ? "Volver arriba" : "Back to top";

  return (
    <>
      <button
        type="button"
        className="footer-top-button"
        aria-label={label}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        TOP
      </button>
      <style jsx>{`
        .footer-top-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 56px;
          min-height: 34px;
          padding: .3rem .72rem;
          border: 2px solid var(--orange);
          border-radius: 999px;
          background: var(--orange);
          color: var(--ink);
          font-family: var(--font-baloo), ui-rounded, sans-serif;
          font-size: .72rem;
          font-weight: 900;
          letter-spacing: .06em;
          cursor: pointer;
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }

        .footer-top-button:hover {
          transform: translateY(-2px);
          background: var(--lemon);
          border-color: var(--lemon);
        }

        .footer-top-button:focus-visible {
          outline: 3px solid var(--lemon);
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-top-button {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
