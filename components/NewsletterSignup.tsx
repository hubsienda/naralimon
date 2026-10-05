"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/config";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default function NewsletterSignup({ locale }: { locale: Locale }) {
  const c = getCopy(locale).newsletter;
  const [message, setMessage] = useState("");
  const privacyHref = locale === "es" ? "/privacidad" : "/en/privacy";

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (siteConfig.mailrelayEmbedUrl) {
      window.open(siteConfig.mailrelayEmbedUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setMessage(c.pending);
  };

  return (
    <form className="newsletter-card" onSubmit={submit}>
      <div><h3>{c.title}</h3><p>{c.body}</p></div>
      <div className="newsletter-form">
        <label className="sr-only" htmlFor={`newsletter-${locale}`}>Email</label>
        <input id={`newsletter-${locale}`} name="email" type="email" autoComplete="email" placeholder={c.placeholder} required />
        <button className="button button-dark" type="submit">{c.button}</button>
        <label className="newsletter-consent">
          <input name="newsletter-consent" type="checkbox" required />
          <span>{c.consent} <Link href={privacyHref}>{c.privacy}</Link>.</span>
        </label>
      </div>
      {message && <p className="form-note" aria-live="polite">{message}</p>}
    </form>
  );
}
