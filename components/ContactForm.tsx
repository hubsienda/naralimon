"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/types";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm({ locale }: { locale: Locale }) {
  const [state, setState] = useState<FormState>("idle");
  const text = locale === "es"
    ? {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        button: "ENVIAR",
        sending: "ENVIANDO…",
        consentPrefix: "He leído y acepto la",
        privacy: "Política de Privacidad",
        successTitle: "MENSAJE ENVIADO",
        successBody: "Gracias. Te responderemos lo antes posible.",
        error: "No hemos podido enviar el mensaje. Inténtalo de nuevo.",
      }
    : {
        name: "Name",
        email: "Email",
        message: "Message",
        button: "SEND",
        sending: "SENDING…",
        consentPrefix: "I have read and accept the",
        privacy: "Privacy Policy",
        successTitle: "MESSAGE SENT",
        successBody: "Thank you. We'll get back to you as soon as possible.",
        error: "We couldn't send your message. Please try again.",
      };
  const privacyHref = locale === "es" ? "/privacidad" : "/en/privacy";

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state === "loading") return;

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
          company: form.get("company"),
          privacyAccepted: form.get("privacy") === "on",
          locale,
        }),
      });

      if (!response.ok) throw new Error("send_failed");
      formElement.reset();
      setState("success");
    } catch {
      setState("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={submit} noValidate={false}>
      <label><span>{text.name}</span><input name="name" autoComplete="name" maxLength={120} required /></label>
      <label><span>{text.email}</span><input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
      <label><span>{text.message}</span><textarea name="message" rows={7} maxLength={5000} required /></label>

      <div className="contact-honeypot" aria-hidden="true">
        <label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="contact-consent">
        <input name="privacy" type="checkbox" required />
        <span>{text.consentPrefix} <Link href={privacyHref}>{text.privacy}</Link>.</span>
      </label>

      <button type="submit" className="button button-dark" disabled={state === "loading"}>
        {state === "loading" ? text.sending : text.button}
      </button>

      {state === "success" && (
        <div className="form-status form-success" role="status">
          <strong>{text.successTitle}</strong>
          <p>{text.successBody}</p>
        </div>
      )}
      {state === "error" && <p className="form-note form-error" role="alert">{text.error}</p>}
    </form>
  );
}
