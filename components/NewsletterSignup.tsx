"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/config";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default function NewsletterSignup({ locale }: { locale: Locale }) {
  const c = getCopy(locale).newsletter;
  const [message, setMessage] = useState("");

  if (siteConfig.mailrelayEmbedUrl) {
    return (
      <div className="newsletter-card">
        <div><h3>{c.title}</h3><p>{c.body}</p></div>
        <a className="button button-dark" href={siteConfig.mailrelayEmbedUrl} target="_blank" rel="noreferrer">{c.button}</a>
      </div>
    );
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(c.pending);
  };

  return (
    <form className="newsletter-card" onSubmit={submit}>
      <div><h3>{c.title}</h3><p>{c.body}</p></div>
      <div className="newsletter-form">
        <label className="sr-only" htmlFor={`newsletter-${locale}`}>Email</label>
        <input id={`newsletter-${locale}`} name="email" type="email" autoComplete="email" placeholder={c.placeholder} required />
        <button className="button button-dark" type="submit">{c.button}</button>
      </div>
      {message && <p className="form-note" aria-live="polite">{message}</p>}
    </form>
  );
}
