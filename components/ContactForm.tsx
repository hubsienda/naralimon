"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/config";
import type { Locale } from "@/lib/types";

export default function ContactForm({ locale }: { locale: Locale }) {
  const [note, setNote] = useState("");
  const text = locale === "es"
    ? { name: "Nombre", email: "Email", message: "Mensaje", button: "ENVIAR", missing: "El canal de contacto se activará antes del lanzamiento." }
    : { name: "Name", email: "Email", message: "Message", button: "SEND", missing: "The contact channel will be activated before launch." };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (!siteConfig.contactEmail) {
      setNote(text.missing);
      return;
    }
    const subject = encodeURIComponent(`Naralimon — ${String(form.get("name") ?? "")}`);
    const body = encodeURIComponent(`${String(form.get("message") ?? "")}\n\n${String(form.get("name") ?? "")}\n${String(form.get("email") ?? "")}`);
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <label><span>{text.name}</span><input name="name" autoComplete="name" required /></label>
      <label><span>{text.email}</span><input name="email" type="email" autoComplete="email" required /></label>
      <label><span>{text.message}</span><textarea name="message" rows={7} required /></label>
      <button type="submit" className="button button-dark">{text.button}</button>
      {note && <p className="form-note" aria-live="polite">{note}</p>}
    </form>
  );
}
