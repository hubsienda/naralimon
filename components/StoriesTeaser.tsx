import Link from "next/link";
import StoryCard from "./StoryCard";
import { getPublishedStories } from "@/lib/content/stories";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default function StoriesTeaser({ locale }: { locale: Locale }) {
  const c = getCopy(locale).stories;
  const stories = getPublishedStories(locale).slice(0, 3);
  const href = locale === "es" ? "/historias" : "/en/stories";

  return (
    <section className="section-pad stories-teaser">
      <div className="shell">
        <div className="stories-heading">
          <div><p className="eyebrow">{c.kicker}</p><h2>{c.title}</h2></div>
          <div className="stories-intro"><p>{c.body}</p><Link className="text-link" href={href}>{c.viewAll} →</Link></div>
        </div>
        {stories.length ? (
          <div className="story-grid">{stories.map((story) => <StoryCard key={story.translationKey} story={story} locale={locale} />)}</div>
        ) : (
          <div className="stories-empty"><span aria-hidden="true">…</span><p>{c.empty}</p></div>
        )}
      </div>
    </section>
  );
}
