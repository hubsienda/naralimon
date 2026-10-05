"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

type ConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "naralimon-consent-v1";

function readConsent(): ConsentPreferences | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as Partial<ConsentPreferences>;
    if (typeof value.analytics !== "boolean" || typeof value.marketing !== "boolean") return null;
    return { analytics: value.analytics, marketing: value.marketing, updatedAt: String(value.updatedAt ?? "") };
  } catch {
    return null;
  }
}

function disableAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((part) => part.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name));
  const hostname = window.location.hostname.replace(/^www\./, "");
  for (const name of names) {
    if (!name.startsWith("_ga")) continue;
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    if (hostname.includes(".")) document.cookie = `${name}=; Max-Age=0; path=/; domain=.${hostname}; SameSite=Lax`;
  }
}

function AnalyticsLoader({ enabled }: { enabled: boolean }) {
  const gaId = siteConfig.gaId;

  useEffect(() => {
    if (!gaId) return;
    const analyticsWindow = window as typeof window & { [key: string]: unknown; gtag?: (...args: unknown[]) => void };
    analyticsWindow[`ga-disable-${gaId}`] = !enabled;
    if (analyticsWindow.gtag) {
      analyticsWindow.gtag("consent", "update", { analytics_storage: enabled ? "granted" : "denied" });
    }
    if (!enabled) disableAnalyticsCookies();
  }, [enabled, gaId]);

  if (!gaId || !enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`} strategy="afterInteractive" />
      <Script id="naralimon-ga4" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', {
          analytics_storage: 'granted',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `}</Script>
    </>
  );
}

export default function CookieConsent({ locale }: { locale: Locale }) {
  const c = getCopy(locale).consent;
  const [consent, setConsent] = useState<ConsentPreferences | null | undefined>(undefined);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const cookieHref = locale === "es" ? "/cookies" : "/en/cookies";

  useEffect(() => {
    setConsent(readConsent());
  }, []);

  const closePreferences = () => {
    setPreferencesOpen(false);
    window.setTimeout(() => previousFocus.current?.focus(), 0);
  };

  useEffect(() => {
    const open = () => {
      const current = readConsent();
      previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setPreferencesOpen(true);
    };
    window.addEventListener("naralimon:open-consent", open);
    return () => window.removeEventListener("naralimon:open-consent", open);
  }, []);

  useEffect(() => {
    if (!preferencesOpen) return;
    const dialog = dialogRef.current;
    const first = dialog?.querySelector<HTMLElement>("button:not([disabled]), input:not([disabled])");
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePreferences();
      if (event.key !== "Tab" || !dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>("button:not([disabled]), input:not([disabled]), a[href]"));
      if (!focusable.length) return;
      const firstItem = focusable[0];
      const lastItem = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === firstItem) { event.preventDefault(); lastItem.focus(); }
      else if (!event.shiftKey && document.activeElement === lastItem) { event.preventDefault(); firstItem.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [preferencesOpen]);

  const persist = (next: Omit<ConsentPreferences, "updatedAt">) => {
    const value: ConsentPreferences = { ...next, updatedAt: new Date().toISOString() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    setConsent(value);
    window.dispatchEvent(new CustomEvent("naralimon:consent-changed", { detail: value }));
  };

  const acceptAll = () => persist({ analytics: true, marketing: true });
  const rejectNonEssential = () => persist({ analytics: false, marketing: false });
  const openPreferences = () => {
    const current = consent ?? readConsent();
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setAnalytics(current?.analytics ?? false);
    setMarketing(current?.marketing ?? false);
    setPreferencesOpen(true);
  };
  const savePreferences = () => {
    persist({ analytics, marketing });
    closePreferences();
  };

  return (
    <>
      <AnalyticsLoader enabled={consent?.analytics === true} />

      {consent === null ? (
        <aside className="consent-banner" aria-label={c.bannerTitle}>
          <div className="consent-copy"><strong>{c.bannerTitle}</strong><p>{c.bannerBody} <Link href={cookieHref}>{locale === "es" ? "Política de cookies" : "Cookie policy"}</Link>.</p></div>
          <div className="consent-actions">
            <button type="button" className="button button-dark" onClick={acceptAll}>{c.acceptAll}</button>
            <button type="button" className="button button-light" onClick={rejectNonEssential}>{c.reject}</button>
            <button type="button" className="text-button" onClick={openPreferences}>{c.preferences}</button>
          </div>
        </aside>
      ) : null}

      {preferencesOpen ? (
        <div className="consent-overlay" role="presentation">
          <div ref={dialogRef} className="consent-dialog" role="dialog" aria-modal="true" aria-labelledby="consent-title">
            <div className="consent-dialog-head">
              <h2 id="consent-title">{c.preferencesTitle}</h2>
              <button type="button" className="consent-close" onClick={closePreferences} aria-label={c.close}>×</button>
            </div>
            <div className="consent-option">
              <div><strong>{c.necessary}</strong><p>{c.necessaryHelp}</p></div>
              <span className="always-on">{c.alwaysOn}</span>
            </div>
            <label className="consent-option">
              <div><strong>{c.analytics}</strong><p>{c.analyticsHelp}</p></div>
              <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} />
            </label>
            <label className="consent-option">
              <div><strong>{c.marketing}</strong><p>{c.marketingHelp}</p></div>
              <input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} />
            </label>
            <div className="consent-dialog-actions">
              <button type="button" className="button button-dark" onClick={savePreferences}>{c.save}</button>
              <button type="button" className="text-button" onClick={closePreferences}>{c.close}</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
