# Naralimon

`naralimon.com` is built with Next.js, TypeScript, App Router, Tailwind CSS and Nextra/MDX as a lightweight file-based publishing layer.

Spanish is the default language. English lives under `/en`.

## Local development

```bash
npm install
npm run dev
```

Before a production build, the project validates bilingual content and regenerates the article translation map automatically.

```bash
npm run content:check
npm run typecheck
npm run build
```

## Stories / Historias

Editorial content is file-based:

```text
content/
  es/
    historias/
  en/
    stories/
```

Each Spanish/English pair shares the same `translationKey`. Minimum frontmatter:

```yaml
title:
description:
date:
translationKey:
slug:
image:
category:
published:
```

A draft may temporarily lack its translation, but a `published: true` item cannot build unless both Spanish and English versions exist and are both published. Published items automatically appear in `/historias`, `/en/stories`, the homepage Stories teaser and the sitemap.

`mdx-components.tsx` is the central place for Naralimon-specific MDX components. The current set includes `Challenge`, `Quote`, `Image` and `CTA` and can be extended without introducing a Nextra documentation theme.

## Contact form

The contact form posts to `/api/contact` and sends mail server-side to:

```text
naralimongroup@naralimon.com
```

No contact database is created. The visitor's email is set as `Reply-To`; the authenticated Naralimon mailbox remains the sender.

Server-only Vercel environment variables:

```text
SMTP_USER=
SMTP_PASS=
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_FROM=
```

For the current Google Workspace mailbox, `SMTP_USER` should be the authenticated Workspace account and `SMTP_PASS` its SMTP/app credential. `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE` and `SMTP_FROM` are optional because sensible Google Workspace defaults are built in.

The endpoint validates fields, requires explicit privacy acceptance, includes a honeypot and applies a lightweight in-memory/IP rate limit. Credentials are never exposed client-side.

## Newsletter / Mailrelay

The hosted Mailrelay form is fixed centrally to:

```text
https://naralimon.ipzmarketing.com/f/YjqIO4P0LoY
```

Subscribers are handled by the existing Mailrelay configuration/group (`Naralimones`). Naralimon does not create a proprietary mailing database or reproduce Mailrelay's signup logic.

Because the form is an external iframe/script, it loads only after **Marketing / third parties** consent. The Mailrelay script is loaded only in the newsletter component, not globally.

## Public configuration

Environment variables used by the public site:

```text
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_LEGAL_OWNER_NAME=
NEXT_PUBLIC_LEGAL_COMPANY_DETAILS=
NEXT_PUBLIC_LEGAL_CONTACT_EMAIL=
NEXT_PUBLIC_LEGAL_POSTAL_ADDRESS=
NEXT_PUBLIC_PRIVACY_AUTHORITY=
```

- Instagram is fixed centrally to `https://www.instagram.com/naralimonoficial`.
- The contact address is fixed centrally to `naralimongroup@naralimon.com`.
- `NEXT_PUBLIC_FACEBOOK_URL` is optional; no Facebook link is shown unless it is supplied.
- `NEXT_PUBLIC_GA_ID` enables Google Analytics **only after Analytics consent**. With no ID, no GA script loads.
- The legal variables fill owner/controller details centrally without inventing them.

## Consent

Consent is stored in first-party browser local storage under `naralimon-consent-v1`. Necessary storage is always enabled. Analytics and Marketing/third-party categories are optional.

Marketing/third-party consent currently controls the Mailrelay hosted form. Analytics consent controls Google Analytics when a measurement ID is configured.

The footer's **GESTIONAR COOKIES / MANAGE COOKIES** action reopens preferences at any time.

## KLANS

KLANS currently links to `https://klans.vercel.app/` through `lib/config.ts`. Change the single `klansUrl` value when `https://klans.naralimon.com` is ready.

## Launch note

The legal pages are structured around the implemented website services, but exact company/controller/address details remain intentionally configurable. Supply the final legal values before the production-domain cutover.
