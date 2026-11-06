import { NextRequest, NextResponse } from "next/server";
import { CONTACT_RECIPIENTS, createMailTransport, mailErrorDetails } from "@/lib/server/mail";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const attempts = new Map<string, number[]>();
const enquiryTypes = new Set(["manufacturer", "buyer", "partnership", "other"]);

function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")?.trim()
    || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    attempts.set(ip, recent);
    return true;
  }
  recent.push(now);
  attempts.set(ip, recent);
  return false;
}

function clean(value: unknown, maxLength: number): string {
  return String(value ?? "").trim().slice(0, maxLength);
}

function validEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;",
  }[character] ?? character));
}

function enquiryLabel(value: string, locale: "es" | "en"): string {
  const labels = locale === "es"
    ? {
        manufacturer: "Fabricante o proveedor",
        buyer: "Comprador o distribuidor",
        partnership: "Colaboración comercial",
        other: "Otra consulta",
      }
    : {
        manufacturer: "Manufacturer or supplier",
        buyer: "Buyer or distributor",
        partnership: "Commercial partnership",
        other: "Other enquiry",
      };
  return labels[value as keyof typeof labels] ?? value;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const companyName = clean(body.companyName, 180);
  const email = clean(body.email, 254);
  const telephone = clean(body.telephone, 50);
  const enquiryType = clean(body.enquiryType, 30);
  const productInterest = clean(body.productInterest, 300);
  const message = clean(body.message, 5000);
  const locale: "es" | "en" = body.locale === "en" ? "en" : "es";
  const privacyAccepted = body.privacyAccepted === true;

  if (!name || !companyName || !validEmail(email) || !enquiryTypes.has(enquiryType) || !productInterest || !message || !privacyAccepted) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const sentAt = new Date().toISOString();
  const typeLabel = enquiryLabel(enquiryType, locale);
  const text = [
    "Name: " + name,
    "Company: " + companyName,
    "Email: " + email,
    "Telephone: " + (telephone || "Not provided"),
    "Enquiry type: " + typeLabel,
    "Product / commercial interest: " + productInterest,
    "",
    "Message:",
    message,
    "",
    "Language: " + locale,
    "Date/time: " + sentAt,
  ].join("\n");

  const html = [
    "<p><strong>Name:</strong> " + escapeHtml(name) + "</p>",
    "<p><strong>Company:</strong> " + escapeHtml(companyName) + "</p>",
    "<p><strong>Email:</strong> " + escapeHtml(email) + "</p>",
    "<p><strong>Telephone:</strong> " + escapeHtml(telephone || "Not provided") + "</p>",
    "<p><strong>Enquiry type:</strong> " + escapeHtml(typeLabel) + "</p>",
    "<p><strong>Product / commercial interest:</strong> " + escapeHtml(productInterest) + "</p>",
    "<p><strong>Message:</strong><br>" + escapeHtml(message).replace(/\n/g, "<br>") + "</p>",
    "<p><strong>Language:</strong> " + locale + "</p>",
    "<p><strong>Date/time:</strong> " + sentAt + "</p>",
  ].join("");

  try {
    const { transporter, from } = createMailTransport();
    const delivery = await transporter.sendMail({
      from: "Naralimon website <" + from + ">",
      to: [...CONTACT_RECIPIENTS],
      replyTo: email,
      subject: "Naralimon commercial enquiry — " + companyName + " — " + typeLabel,
      text,
      html,
    });

    // Nodemailer can resolve when SMTP accepts only some recipients.
    // Do not claim success unless both direct destinations were accepted.
    const accepted = new Set(delivery.accepted.map((address) => String(address).toLowerCase()));
    if (CONTACT_RECIPIENTS.some((address) => !accepted.has(address))) {
      console.error("Naralimon contact email partially rejected", {
        accepted: delivery.accepted,
        rejected: delivery.rejected,
      });
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Naralimon commercial enquiry email failed", mailErrorDetails(error));
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
