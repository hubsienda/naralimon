import "server-only";

import nodemailer from "nodemailer";

export const CONTACT_RECIPIENT = "naralimongroup@naralimon.com";

function required(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export function createMailTransport() {
  const user = required("SMTP_USER");
  const pass = required("SMTP_PASS");
  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  return {
    transporter: nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    }),
    from: process.env.SMTP_FROM?.trim() || user,
  };
}
