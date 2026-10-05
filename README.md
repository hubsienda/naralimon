# Naralimon

New `naralimon.com` website built with Next.js, TypeScript, App Router and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Configuration

The first version deliberately has no database, login or proprietary newsletter backend.

Optional public environment variables:

```text
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_MAILRELAY_EMBED_URL=
```

- `NEXT_PUBLIC_CONTACT_EMAIL`: enables the contact form's `mailto:` delivery.
- `NEXT_PUBLIC_INSTAGRAM_URL` and `NEXT_PUBLIC_FACEBOOK_URL`: reveal the social buttons.
- `NEXT_PUBLIC_MAILRELAY_EMBED_URL`: connects the newsletter CTA to Mailrelay.

KLANS currently links to `https://klans.vercel.app/` through `lib/config.ts`. Change the single `klansUrl` value when `https://klans.naralimon.com` is ready.

Spanish is the default language. English lives under `/en`.

Legal pages are structurally present but intentionally do not invent legal entity information. Replace the launch placeholders with final supplied legal details before production domain cutover.
