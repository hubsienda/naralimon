import "server-only";

import nodemailer from "nodemailer";

export const CONTACT_RECIPIENT = "naralimongroup@naralimon.com";

function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export function createMailTransport() {
  // SMTP_USER must be a real mailbox that can authenticate. The public
  // naralimongroup@naralimon.com address is a Google Group recipient, not
  // an SMTP account, and therefore must not be used as SMTP_USER.
  const user = required("SMTP_USER");
  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const rawPass = required("SMTP_PASS");
  // Google displays app passwords in space-separated groups. Those spaces are
  // for readability only; Gmail SMTP expects the continuous 16 characters.
  // Do not change passwords for non-Google SMTP hosts, where spaces may matter.
  const pass = host.toLowerCase() === "smtp.gmail.com"
    ? rawPass.replace(/\s+/g, "")
    : rawPass;
  const port = Number(process.env.SMTP_PORT || 587);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("Invalid SMTP_PORT");
  }

  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  return {
    transporter: nodemailer.createTransport({
      host,
      port,
      secure,
      requireTLS: !secure,
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    }),
    // Keep the envelope/display sender aligned with the authenticated mailbox
    // unless an explicitly authorised SMTP_FROM address has been configured.
    from: process.env.SMTP_FROM?.trim() || user,
  };
}

export function mailErrorDetails(error: unknown) {
  const value = error as {
    code?: unknown;
    responseCode?: unknown;
    command?: unknown;
    message?: unknown;
  };

  return {
    code: typeof value?.code === "string" ? value.code : undefined,
    responseCode: typeof value?.responseCode === "number" ? value.responseCode : undefined,
    command: typeof value?.command === "string" ? value.command : undefined,
    message: typeof value?.message === "string" ? value.message : "Unknown SMTP error",
  };
}
