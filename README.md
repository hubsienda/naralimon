# Naralimon

`naralimon.com` is the bilingual corporate website of **Naralimon S.C.**, an independent commercial agency based in Mijas Costa, Málaga, Spain.

The site presents Naralimon's food brokerage, commercial representation and international sourcing activity. Spanish is the primary language; English lives under `/en`.

## Technology

- Next.js App Router
- TypeScript
- Tailwind/PostCSS
- Nextra/MDX retained only for the unlisted legacy story archive
- Nodemailer for server-side contact delivery
- Vercel deployment

## Local development

```bash
npm install
npm run dev
```

Validation:

```bash
npm run content:check
npm run typecheck
npm run build
```

## Commercial routes

Spanish:

```text
/
/representacion-comercial
/intermediacion-alimentaria
/aprovisionamiento
/nosotros
/contacto
```

English:

```text
/en
/en/sales-representation
/en/food-brokerage
/en/sourcing
/en/about
/en/contact
```

Legal routes remain at `/privacidad`, `/cookies`, `/aviso-legal` and their English equivalents.

Legacy `/naralimon` and `/en/naralimon` routes redirect to the new About pages. The old Historias/Stories content remains available as an unlisted, noindex archive and is intentionally omitted from the commercial sitemap.

## Contact form

The commercial enquiry form posts to `/api/contact` and sends mail server-side to:

```text
naralimongroup@naralimon.com
```

Fields include name, company, email, optional telephone, enquiry type, product/commercial interest, message and mandatory privacy acceptance.

The visible company field is `companyName`. The hidden anti-spam honeypot is `website`.

No contact database is created. The visitor's email is set as `Reply-To`; the authenticated Naralimon mailbox remains the sender. Delivery failures return an error rather than a fake success response.

Server-only Vercel environment variables:

```text
SMTP_USER=
SMTP_PASS=
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_FROM=
```

## Analytics and consent

Public configuration:

```text
NEXT_PUBLIC_GA_ID=
```

Google Analytics loads only after Analytics consent. If no measurement ID is supplied, no GA script loads.

Consent preferences are stored in first-party browser local storage under `naralimon-consent-v1`. Necessary storage remains active; Analytics is optional. The footer's **GESTIONAR COOKIES / MANAGE COOKIES** control reopens preferences.

The previous gaming newsletter/Mailrelay integration is not part of the commercial website.

## Related Naralimon properties

The commercial website remains separate from:

- Naralimon Originals / online games: `https://www.naralimon.es`
- KLANZ: `https://klanz.naralimon.com`

These properties are linked discreetly from the commercial footer and are not part of the main navigation.

## Legal identity

The verified company details are fixed centrally in `lib/config.ts`:

```text
Naralimon S.C.
Calle Tamarindos 7
Mijas Costa
29651 (Málaga)
España
CIF ES J01837269
naralimongroup@naralimon.com
```
