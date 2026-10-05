import type { Locale } from "./types";

export const copy = {
  es: {
    nav: { home: "INICIO", klans: "KLANS", naralimon: "NARALIMON", contact: "CONTACTO" },
    hero: {
      eyebrow: "NACIDO EN LA COSTA DEL SOL",
      title: "TODO PUEDE SER UN JUEGO.",
      body: "Convertimos cosas normales en cosas con las que se puede jugar.",
      primary: "JUEGA A ALGO",
      secondary: "SIGUE A NARALIMON",
      spark: "¿Y si lo normal dejara de ser normal?",
    },
    challenge: {
      kicker: "PRIMERA PRUEBA",
      title: "NO PULSES ESTE BOTÓN",
      body: "En serio. Puedes seguir bajando. Nadie te obliga.",
      button: "NO PULSAR",
      again: "OTRA",
      reset: "YA ESTÁ",
    },
    klans: {
      kicker: "UN JUEGO REAL DE NARALIMON",
      title: "KLANS",
      body: "Estrategia. Facciones. Alianzas. Traición.",
      sub: "Un juego de cartas de Naralimon.",
      cta: "DESCUBRE KLANS",
    },
    coming: {
      label: "PRÓXIMAMENTE",
      title: "TODO PUEDE SER UN JUEGO",
      lines: ["Una camiseta.", "Una toalla.", "Una mesa.", "Una botella.", "Un código QR.", "O algo que todavía no se nos ha ocurrido."],
      ending: "Estamos jugando con lo que viene después.",
    },
    choice: {
      kicker: "SEGUNDA PRUEBA",
      title: "ELIGE MAL",
      body: "Tres botones. Ninguna garantía de que hayas elegido bien.",
      truth: "VERDAD", dare: "RETO", bad: "MALA IDEA", again: "OTRA",
    },
    follow: {
      title: "ESTO ACABA DE EMPEZAR.",
      body: "Juegos nuevos. Ideas extrañas. Cosas con las que jugar. Síguenos y descubre qué aparece después.",
      instagram: "INSTAGRAM", facebook: "FACEBOOK",
    },
    newsletter: {
      title: "ÚNETE A NARALIMON", body: "Nada de newsletters aburridas.", placeholder: "tu@email.com", button: "ME APUNTO", pending: "Muy pronto.",
    },
    aboutShort: {
      kicker: "¿QUÉ ES ESTO?", title: "NARALIMON", body: "Nació en la Costa del Sol con una idea sencilla: todo puede ser un juego.", cta: "CONÓCENOS",
    },
    footer: { privacy: "PRIVACIDAD", cookies: "COOKIES", legal: "AVISO LEGAL", line: "TODO PUEDE SER UN JUEGO." },
  },
  en: {
    nav: { home: "HOME", klans: "KLANS", naralimon: "NARALIMON", contact: "CONTACT" },
    hero: {
      eyebrow: "BORN ON THE COSTA DEL SOL",
      title: "EVERYTHING CAN BE A GAME.",
      body: "We turn ordinary things into things you can play with.",
      primary: "PLAY SOMETHING",
      secondary: "FOLLOW NARALIMON",
      spark: "What if ordinary stopped being ordinary?",
    },
    challenge: {
      kicker: "FIRST TEST", title: "DO NOT PRESS THIS BUTTON", body: "Seriously. You can keep scrolling. Nobody is making you do it.", button: "DO NOT PRESS", again: "AGAIN", reset: "THAT'S ENOUGH",
    },
    klans: {
      kicker: "A REAL NARALIMON GAME", title: "KLANS", body: "Strategy. Factions. Alliances. Betrayal.", sub: "A Naralimon card game.", cta: "DISCOVER KLANS",
    },
    coming: {
      label: "COMING SOON", title: "EVERYTHING CAN BE A GAME",
      lines: ["A T-shirt.", "A towel.", "A table.", "A bottle.", "A QR code.", "Or something we haven't thought of yet."],
      ending: "We're playing with what comes next.",
    },
    choice: {
      kicker: "SECOND TEST", title: "CHOOSE BADLY", body: "Three buttons. No guarantee you chose well.", truth: "TRUTH", dare: "DARE", bad: "BAD IDEA", again: "AGAIN",
    },
    follow: {
      title: "THIS IS JUST STARTING.", body: "New games. Strange ideas. Things to play with. Follow us and see what appears next.", instagram: "INSTAGRAM", facebook: "FACEBOOK",
    },
    newsletter: {
      title: "JOIN NARALIMON", body: "No boring newsletters.", placeholder: "you@email.com", button: "I'M IN", pending: "Very soon.",
    },
    aboutShort: {
      kicker: "WHAT IS THIS?", title: "NARALIMON", body: "It was born on the Costa del Sol with a simple idea: everything can be a game.", cta: "MEET NARALIMON",
    },
    footer: { privacy: "PRIVACY", cookies: "COOKIES", legal: "LEGAL", line: "EVERYTHING CAN BE A GAME." },
  },
} satisfies Record<Locale, unknown>;

export function getCopy(locale: Locale) {
  return copy[locale] as typeof copy.es;
}
