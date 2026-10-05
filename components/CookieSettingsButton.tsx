"use client";

export default function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="footer-cookie-button"
      onClick={() => window.dispatchEvent(new Event("naralimon:open-consent"))}
    >
      {label}
    </button>
  );
}
