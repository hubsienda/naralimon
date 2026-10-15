export const siteConfig = {
  baseUrl: "https://naralimon.com",
  klanzUrl: "https://klanz.naralimon.com",
  gamesBaseUrl: "https://www.naralimon.es",
  contactEmail: "naralimongroup@naralimon.com",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  socials: {
    instagram: "https://www.instagram.com/naralimonoficial",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  },
  mailrelayEmbedUrl: "https://naralimon.ipzmarketing.com/f/YjqIO4P0LoY",
  legal: {
    ownerName: "Naralimon S.C.",
    taxId: "ES J01837269",
    contactEmail: "naralimongroup@naralimon.com",
    postalAddressLines: [
      "Calle Tamarindos 7",
      "Mijas Costa",
      "29651 Málaga",
      "España",
    ],
    supervisoryAuthority: "Agencia Española de Protección de Datos (AEPD)",
  },
} as const;
