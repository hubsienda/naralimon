# Naralimon

`naralimon.com` is the bilingual corporate website of **Naralimon S.C.**, an independent B2B commercial brokerage and market-development agency based in Mijas Costa, Málaga, Spain.

Spanish is the primary language. English lives under `/en`.

## Public website

Only these business pages are intentionally public:

Spanish:
- `/`
- `/nosotros`
- `/contacto`

English:
- `/en`
- `/en/about`
- `/en/contact`

Privacy, Cookies and Legal Notice remain public through the footer.

## Reversible inactive-route gate

The repository still contains the previously developed commercial-representation, food-brokerage, sourcing, Stories/Historias and KLANZ routes and their content.

They are intentionally hidden from public display by `middleware.ts`, which returns HTTP 404 plus `X-Robots-Tag: noindex, nofollow, noarchive` for the inactive route prefixes.

The hidden routes are also omitted from navigation and `app/sitemap.ts`.

To reactivate a section:
1. remove the corresponding prefix from `middleware.ts`;
2. restore its navigation and sitemap entry if it should be promoted publicly;
3. keep the existing page/component/content implementation.

No inactive page source is deleted by this simplification.

## Archived homepage

The commercial homepage that existed immediately before the 3 November 2026 simplification is preserved in:

`archive/2026-11-03-commercial-homepage/`

The archive contains the previous HomePage, Hero and full commercial-content module from main `0fca87962e3fe403e322de649fbd539f45aede6f`.

The current short public positioning is stored separately in `lib/public-content.ts`.

## Contact form

The business enquiry form posts to `/api/contact` and sends mail server-side **directly to both operators**:

- `hub@naralimon.com`
- `ale@naralimon.com`

The public-facing contact address remains `naralimongroup@naralimon.com`, but form messages bypass the Google Group. This avoids Gmail suppressing the sender's own group copy for `hub@naralimon.com`.

It uses the existing Nodemailer SMTP implementation and does not require a database or a third-party transactional email platform.

Fields include name, company, email, optional telephone, enquiry type, product/commercial interest, message and mandatory privacy acceptance.

The visible company field is `companyName`. The hidden anti-spam honeypot is `website`.

The visitor's email is used as `Reply-To`; the authenticated Naralimon mailbox remains the sender. A success response is returned only after SMTP acknowledges **both** direct recipients (not merely one). SMTP acceptance does not guarantee inbox placement; verify actual inbox delivery after deployment.

Server-only deployment variables for Google Workspace SMTP:

```text
SMTP_USER=real-user-mailbox@naralimon.com
SMTP_PASS=16-character Google App Password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_FROM=real-user-mailbox@naralimon.com
```

`naralimongroup@naralimon.com` remains the public contact address and may remain a Google Group, but is not the contact form's destination. It must not be used as `SMTP_USER` because a group cannot authenticate to SMTP. Keep `SMTP_USER=hub@naralimon.com` with the corresponding app password.

Use a real licensed Google Workspace user mailbox for `SMTP_USER` and `SMTP_FROM`. For Google Workspace, the password should be an App Password created for that user account with 2-Step Verification enabled. The application uses STARTTLS on port 587 by default. No external transactional-email provider is required.

`SMTP_USER` and `SMTP_PASS` are required at runtime. `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE` and `SMTP_FROM` remain configurable.

## Validation

```bash
npm install
npm run content:check
npm run typecheck
npm run build
```

## Analytics and consent

Google Analytics loads only after Analytics consent and only when `NEXT_PUBLIC_GA_ID` is configured.

Consent preferences are stored in first-party browser local storage under `naralimon-consent-v1`. The footer's **GESTIONAR COOKIES / MANAGE COOKIES** control reopens preferences.

## Legal identity

```text
Naralimon S.C.
Calle Tamarindos 7
Mijas Costa
29651 (Málaga)
España
CIF ES J01837269
naralimongroup@naralimon.com
```
