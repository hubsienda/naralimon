export const siteConfig = {
  baseUrl: "https://naralimon.com",
  klansUrl: "https://klans.vercel.app/",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  },
  mailrelayEmbedUrl: process.env.NEXT_PUBLIC_MAILRELAY_EMBED_URL ?? "",
} as const;
