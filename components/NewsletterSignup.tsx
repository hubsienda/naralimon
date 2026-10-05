"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

const CONSENT_KEY = "naralimon-consent-v1";
const MAILRELAY_FORM_URL = "https://naralimon.ipzmarketing.com/f/YjqIO4P0LoY";
const MAILRELAY_SCRIPT_URL = "https://assets.ipzmarketing.com/assets/signup_form/iframe_v1.js";

function marketingConsentGranted(): boolean {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    const value = JSON.parse(raw) as { marketing?: unknown };
    return value.marketing === true;
  } catch {
    return false;
  }
}

export default function NewsletterSignup({ locale }: { locale: Locale }) {
  const c = getCopy(locale).newsletter;
  const [thirdPartyAllowed, setThirdPartyAllowed] = useState(false);
  const text = locale === "es"
    ? {
        blocked: "El formulario de Mailrelay es contenido de terceros. Activa «Marketing / terceros» para cargarlo.",
        preferences: "PREFERENCIAS DE COOKIES",
      }
    : {
        blocked: "The Mailrelay form is third-party content. Enable “Marketing / third parties” to load it.",
        preferences: "COOKIE PREFERENCES",
      };

  useEffect(() => {
    const refresh = () => setThirdPartyAllowed(marketingConsentGranted());
    refresh();
    window.addEventListener("naralimon:consent-changed", refresh);
    return () => window.removeEventListener("naralimon:consent-changed", refresh);
  }, []);

  const openPreferences = () => window.dispatchEvent(new Event("naralimon:open-consent"));

  return (
    <div className="newsletter-card newsletter-mailrelay">
      <div className="newsletter-heading"><h3>{c.title}</h3><p>{c.body}</p></div>

      {thirdPartyAllowed ? (
        <div className="mailrelay-wrap">
          <iframe
            data-skip-lazy=""
            src={MAILRELAY_FORM_URL}
            frameBorder="0"
            scrolling="no"
            width="100%"
            className="ipz-iframe"
            title={locale === "es" ? "Formulario de suscripción de Naralimon" : "Naralimon newsletter signup form"}
          />
          <Script
            id={`mailrelay-iframe-${locale}`}
            data-cfasync="false"
            type="text/javascript"
            src={MAILRELAY_SCRIPT_URL}
            strategy="afterInteractive"
          />
        </div>
      ) : (
        <div className="mailrelay-consent-gate">
          <p>{text.blocked}</p>
          <button type="button" className="button button-dark" onClick={openPreferences}>{text.preferences}</button>
        </div>
      )}
    </div>
  );
}
