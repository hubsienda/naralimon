import type { Locale } from "./types";

export const copy = {
  es: {
    stories: {
      kicker: "ARCHIVO NARALIMON",
      title: "HISTORIAS",
      body: "Archivo de historias y contenidos de la etapa de entretenimiento de Naralimon.",
      viewAll: "VER TODAS",
      read: "LEER",
      back: "VOLVER A HISTORIAS",
      empty: "No hay historias publicadas.",
    },
  },
  en: {
    stories: {
      kicker: "NARALIMON ARCHIVE",
      title: "STORIES",
      body: "Archive of stories and content from Naralimon's entertainment activity.",
      viewAll: "VIEW ALL",
      read: "READ",
      back: "BACK TO STORIES",
      empty: "No stories are published.",
    },
  },
} satisfies Record<Locale, unknown>;

export function getCopy(locale: Locale) {
  return copy[locale] as typeof copy.es;
}
