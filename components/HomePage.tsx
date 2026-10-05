import type { Locale } from "@/lib/types";
import AboutShort from "./AboutShort";
import ChoiceGame from "./ChoiceGame";
import ComingSoon from "./ComingSoon";
import Hero from "./Hero";
import KlansTeaser from "./KlansTeaser";
import RandomChallenge from "./RandomChallenge";
import SocialFollow from "./SocialFollow";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <main>
      <Hero locale={locale} />
      <RandomChallenge locale={locale} />
      <KlansTeaser locale={locale} />
      <ComingSoon locale={locale} />
      <ChoiceGame locale={locale} />
      <SocialFollow locale={locale} />
      <AboutShort locale={locale} />
    </main>
  );
}
