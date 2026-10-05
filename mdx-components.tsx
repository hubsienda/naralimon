import Image from "next/image";
import Link from "next/link";
import type { AnchorHTMLAttributes, ComponentPropsWithoutRef, ReactNode } from "react";

function MdxLink({ href = "#", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  }
  return <Link href={href} {...props}>{children}</Link>;
}

function Challenge({ children }: { children: ReactNode }) {
  return <aside className="mdx-challenge"><span aria-hidden="true">?</span><div>{children}</div></aside>;
}

function Quote({ children }: { children: ReactNode }) {
  return <blockquote className="mdx-quote">{children}</blockquote>;
}

function CTA({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  return external
    ? <a className="button button-dark mdx-cta" href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    : <Link className="button button-dark mdx-cta" href={href}>{children}</Link>;
}

function StoryImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mdx-image">
      <Image src={src} alt={alt} width={1200} height={675} sizes="(max-width: 900px) 100vw, 760px" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function useMDXComponents(components: Record<string, unknown> = {}) {
  return {
    h2: (props: ComponentPropsWithoutRef<"h2">) => <h2 className="story-h2" {...props} />,
    h3: (props: ComponentPropsWithoutRef<"h3">) => <h3 className="story-h3" {...props} />,
    p: (props: ComponentPropsWithoutRef<"p">) => <p className="story-paragraph" {...props} />,
    a: MdxLink,
    Challenge,
    Quote,
    Image: StoryImage,
    CTA,
    ...components,
  };
}
