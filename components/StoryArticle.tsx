import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "nextra/mdx-remote";
import { compileStory, type Story } from "@/lib/content/stories";
import { getCopy } from "@/lib/i18n";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

export default async function StoryArticle({ story }: { story: Story }) {
  const c = getCopy(story.locale).stories;
  const compiledSource = await compileStory(story);
  const backHref = story.locale === "es" ? "/historias" : "/en/stories";
  const date = new Intl.DateTimeFormat(story.locale === "es" ? "es-ES" : "en-GB", { dateStyle: "long" }).format(new Date(`${story.date}T12:00:00Z`));

  return (
    <main className="story-page section-pad">
      <article className="story-shell">
        <Link href={backHref} className="text-link story-back">← {c.back}</Link>
        <header className="story-header">
          <div className="story-meta story-meta-large">
            {story.category ? <span>{story.category}</span> : null}
            <time dateTime={story.date}>{date}</time>
          </div>
          <h1>{story.title}</h1>
          <p className="story-deck">{story.description}</p>
          {story.author ? <p className="story-author">{story.author}</p> : null}
        </header>
        {story.image ? (
          <div className="story-hero-image"><Image src={story.image} alt="" fill priority sizes="(max-width: 900px) 100vw, 860px" /></div>
        ) : null}
        <div className="story-prose">
          <MDXRemote compiledSource={compiledSource} components={getMDXComponents()} />
        </div>
      </article>
    </main>
  );
}
