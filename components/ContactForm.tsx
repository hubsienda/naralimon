"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/types";

type FormState = "idle" | "loading" | "success" | "error";
type ErrorKind = "validation" | "rate_limited" | "send_failed" | "unknown" | null;

export default function ContactForm({ locale }: { locale: Locale }) {
  const [state, setState] = useState<FormState>("idle");
  const [errorKind, setErrorKind] = useState<ErrorKind>(null);

  const text = locale === "es"
    ? {
        name: "Nombre",
        company: "Empresa",
        email: "Email",
        telephone: "Teléfono (opcional)",
        enquiryType: "Tipo de consulta",
        manufacturer: "Fabricante o proveedor",
        buyer: "Comprador o distribuidor",
        partnership: "Colaboración comercial",
        other: "Otra consulta",
        choose: "Selecciona una opción",
        interest: "Producto o interés comercial",
        interestPlaceholder: "Producto, categoría, mercado o necesidad comercial",
        message: "Mensaje",
        button: "ENVIAR CONSULTA",
        sending: "ENVIANDO…",
        consentPrefix: "He leído y acepto la",
        privacy: "Política de Privacidad",
        successTitle: "CONSULTA ENVIADA",
        successBody: "Gracias. Estudiaremos la información y las posibilidades de colaboración.",
        validation: "Revisa los campos obligatorios y vuelve a intentarlo.",
        rateLimited: "Se han enviado demasiadas solicitudes desde esta conexión. Inténtalo de nuevo más tarde.",
        sendFailed: "No hemos podido entregar el mensaje. Inténtalo de nuevo o escribe a naralimongroup@naralimon.com.",
      }
    : {
        name: "Name",
        company: "Company",
        email: "Email",
        telephone: "Telephone (optional)",
        enquiryType: "Enquiry type",
        manufacturer: "Manufacturer or supplier",
        buyer: "Buyer or distributor",
        partnership: "Commercial partnership",
        other: "Other enquiry",
        choose: "Choose an option",
        interest: "Product or commercial interest",
        interestPlaceholder: "Product, category, market or commercial requirement",
        message: "Message",
        button: "SEND ENQUIRY",
        sending: "SENDING…",
        consentPrefix: "I have read and accept the",
        privacy: "Privacy Policy",
        successTitle: "ENQUIRY SENT",
        successBody: "Thank you. We will review the information and the potential for cooperation.",
        validation: "Please review the required fields and try again.",
        rateLimited: "Too many requests have been sent from this connection. Please try again later.",
        sendFailed: "We could not deliver your message. Please try again or email naralimongroup@naralimon.com.",
      };

  const privacyHref = locale === "es" ? "/privacidad" : "/en/privacy";

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state === "loading") return;

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setState("loading");
    setErrorKind(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          companyName: form.get("companyName"),
          email: form.get("email"),
          telephone: form.get("telephone"),
          enquiryType: form.get("enquiryType"),
          productInterest: form.get("productInterest"),
          message: form.get("message"),
          website: form.get("website"),
          privacyAccepted: form.get("privacy") === "on",
          locale,
        }),
      });

      const result = await response.json().catch(() => ({ error: "unknown" })) as { ok?: boolean; error?: string };
      if (!response.ok || result.ok !== true) {
        setErrorKind(
          result.error === "validation" ? "validation"
            : result.error === "rate_limited" ? "rate_limited"
              : result.error === "send_failed" ? "send_failed"
                : "unknown",
        );
        setState("error");
        return;
      }

      formElement.reset();
      setState("success");
    } catch {
      setErrorKind("send_failed");
      setState("error");
    }
  };

  const errorMessage = errorKind === "validation"
    ? text.validation
    : errorKind === "rate_limited"
      ? text.rateLimited
      : text.sendFailed;

  return (
    <form className="contact-form commercial-contact-form" onSubmit={submit}>
      <div className="contact-form-grid">
        <label><span>{text.name}</span><input name="name" autoComplete="name" maxLength={120} required /></label>
        <label><span>{text.company}</span><input name="companyName" autoComplete="organization" maxLength={180} required /></label>
        <label><span>{text.email}</span><input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
        <label><span>{text.telephone}</span><input name="telephone" type="tel" autoComplete="tel" maxLength={50} /></label>
        <label>
          <span>{text.enquiryType}</span>
          <select name="enquiryType" required defaultValue="">
            <option value="" disabled>{text.choose}</option>
            <option value="manufacturer">{text.manufacturer}</option>
            <option value="buyer">{text.buyer}</option>
            <option value="partnership">{text.partnership}</option>
            <option value="other">{text.other}</option>
          </select>
        </label>
        <label>
          <span>{text.interest}</span>
          <input name="productInterest" maxLength={300} placeholder={text.interestPlaceholder} required />
        </label>
      </div>

      <label><span>{text.message}</span><textarea name="message" rows={7} maxLength={5000} required /></label>

      <div className="contact-honeypot" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="contact-consent">
        <input name="privacy" type="checkbox" required />
        <span>{text.consentPrefix} <Link href={privacyHref}>{text.privacy}</Link>.</span>
      </label>

      <button type="submit" className="button button-primary" disabled={state === "loading"}>
        {state === "loading" ? text.sending : text.button}
      </button>

      {state === "success" ? (
        <div className="form-status form-success" role="status">
          <strong>{text.successTitle}</strong>
          <p>{text.successBody}</p>
        </div>
      ) : null}
      {state === "error" ? <p className="form-note form-error" role="alert">{errorMessage}</p> : null}
    </form>
  );
}
