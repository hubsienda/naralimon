import StoryCard from "./StoryCard";
import { getPublishedStories } from "@/lib/content/stories";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default function StoriesIndex({ locale }: { locale: Locale }) {
  const c = getCopy(locale).stories;
  const stories = getPublishedStories(locale);

  return (
    <main className="stories-index section-pad">
      <div className="shell">
        <header className="stories-index-header">
          <p className="eyebrow">NARALIMON</p>
          <h1>{c.title}</h1>
          <p>{c.body}</p>
        </header>
        {stories.length ? (
          <div className="story-grid">{stories.map((story) => <StoryCard key={story.translationKey} story={story} locale={locale} />)}</div>
        ) : (
          <div className="stories-empty stories-empty-index"><span aria-hidden="true">…</span><p>{c.empty}</p></div>
        )}
      </div>
    </main>
  );
}
