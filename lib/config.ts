export const siteConfig = {
  baseUrl: "https://naralimon.com",
  klansUrl: "https://klans.vercel.app/",
  contactEmail: "naralimongroup@naralimon.com",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  socials: {
    instagram: "https://www.instagram.com/naralimonoficial",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  },
  mailrelayEmbedUrl: "https://naralimon.ipzmarketing.com/f/YjqIO4P0LoY",
  legal: {
    ownerName: process.env.NEXT_PUBLIC_LEGAL_OWNER_NAME ?? "",
    companyDetails: process.env.NEXT_PUBLIC_LEGAL_COMPANY_DETAILS ?? "",
    contactEmail: process.env.NEXT_PUBLIC_LEGAL_CONTACT_EMAIL ?? "naralimongroup@naralimon.com",
    postalAddress: process.env.NEXT_PUBLIC_LEGAL_POSTAL_ADDRESS ?? "",
    supervisoryAuthority: process.env.NEXT_PUBLIC_PRIVACY_AUTHORITY ?? "",
  },
} as const;
