import type { Locale } from "@/lib/types";
import AboutShort from "./AboutShort";
import ComingSoon from "./ComingSoon";
import Hero from "./Hero";
import KlanzTeaser from "./KlanzTeaser";
import SocialFollow from "./SocialFollow";
import StoriesTeaser from "./StoriesTeaser";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <main>
      <Hero locale={locale} />
      <KlanzTeaser locale={locale} />
      <ComingSoon locale={locale} />
      <StoriesTeaser locale={locale} />
      <SocialFollow locale={locale} />
      <AboutShort locale={locale} />
    </main>
  );
}
