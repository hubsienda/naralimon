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

## Public configuration

The project has no database, login or proprietary newsletter backend.

Environment variables used by the site:

```text
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_MAILRELAY_EMBED_URL=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_LEGAL_OWNER_NAME=
NEXT_PUBLIC_LEGAL_COMPANY_DETAILS=
NEXT_PUBLIC_LEGAL_CONTACT_EMAIL=
NEXT_PUBLIC_LEGAL_POSTAL_ADDRESS=
NEXT_PUBLIC_PRIVACY_AUTHORITY=
```

- Instagram is fixed centrally to `https://www.instagram.com/naralimonoficial`.
- `NEXT_PUBLIC_CONTACT_EMAIL` enables the contact form's `mailto:` delivery.
- `NEXT_PUBLIC_FACEBOOK_URL` is optional; no Facebook link is shown unless it is supplied.
- `NEXT_PUBLIC_MAILRELAY_EMBED_URL` connects the newsletter flow to Mailrelay. No subscription database is created by this project.
- `NEXT_PUBLIC_GA_ID` enables Google Analytics **only after Analytics consent**. With no ID, no GA script loads.
- The legal variables fill owner/controller details centrally without hard-coding or inventing them.

## Consent

Consent is stored in first-party browser local storage under `naralimon-consent-v1`. Necessary storage is always enabled. Analytics and Marketing/third-party categories are optional. Marketing consent currently activates no tracker.

The footer's **GESTIONAR COOKIES / MANAGE COOKIES** action reopens preferences at any time.

## KLANS

KLANS currently links to `https://klans.vercel.app/` through `lib/config.ts`. Change the single `klansUrl` value when `https://klans.naralimon.com` is ready.

## Launch note

The legal pages are fully structured around the implemented website services, but exact company/controller/address details remain intentionally configurable. Supply the final legal values before the production-domain cutover.
