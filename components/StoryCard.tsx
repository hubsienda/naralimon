import Image from "next/image";
import Link from "next/link";
import type { StoryFrontmatter } from "@/lib/content/stories";
import type { Locale } from "@/lib/types";
import { getCopy } from "@/lib/i18n";

export default function StoryCard({ story, locale }: { story: StoryFrontmatter; locale: Locale }) {
  const c = getCopy(locale).stories;
  const href = locale === "es" ? `/historias/${story.slug}` : `/en/stories/${story.slug}`;
  const date = new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", { dateStyle: "medium" }).format(new Date(`${story.date}T12:00:00Z`));

  return (
    <article className="story-card">
      {story.image ? (
        <Link href={href} className="story-card-image" aria-label={story.title}>
          <Image src={story.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
        </Link>
      ) : <div className="story-card-swatch" aria-hidden="true"><span>?</span></div>}
      <div className="story-card-body">
        <div className="story-meta">
          {story.category ? <span>{story.category}</span> : null}
          <time dateTime={story.date}>{date}</time>
        </div>
        <h3><Link href={href}>{story.title}</Link></h3>
        <p>{story.description}</p>
        <Link className="text-link" href={href}>{c.read} →</Link>
      </div>
    </article>
  );
}
