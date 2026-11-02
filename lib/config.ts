export const siteConfig = {
  baseUrl: "https://naralimon.com",
  gamesBaseUrl: "https://www.naralimon.es",
  klanzUrl: "https://klanz.naralimon.com",
  contactEmail: "naralimongroup@naralimon.com",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  legal: {
    ownerName: "Naralimon S.C.",
    taxId: "ES J01837269",
    contactEmail: "naralimongroup@naralimon.com",
    postalAddressLines: [
      "Calle Tamarindos 7",
      "Mijas Costa",
      "29651 (Málaga)",
      "España",
    ],
    supervisoryAuthority: "Agencia Española de Protección de Datos (AEPD)",
  },
} as const;
