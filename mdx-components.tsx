import Image from "next/image";
import type { ComponentProps, ComponentPropsWithoutRef, ReactNode } from "react";
import type { MDXRemote } from "nextra/mdx-remote";
import SiteLink from "@/components/SiteLink";

type NextraMDXComponents = NonNullable<ComponentProps<typeof MDXRemote>["components"]>;

function Challenge({ children }: { children: ReactNode }) {
  return <aside className="mdx-challenge"><span aria-hidden="true">?</span><div>{children}</div></aside>;
}

function Quote({ children }: { children: ReactNode }) {
  return <blockquote className="mdx-quote">{children}</blockquote>;
}

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return <SiteLink className="button button-dark mdx-cta" href={href}>{children}</SiteLink>;
}

function StoryImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mdx-image">
      <Image src={src} alt={alt} width={1200} height={675} sizes="(max-width: 900px) 100vw, 760px" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function useMDXComponents(components: NextraMDXComponents = {}): NextraMDXComponents {
  return {
    h2: (props: ComponentPropsWithoutRef<"h2">) => <h2 className="story-h2" {...props} />,
    h3: (props: ComponentPropsWithoutRef<"h3">) => <h3 className="story-h3" {...props} />,
    p: (props: ComponentPropsWithoutRef<"p">) => <p className="story-paragraph" {...props} />,
    a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) => <SiteLink href={href} {...props} />,
    Challenge,
    Quote,
    Image: StoryImage,
    CTA,
    ...components,
  };
}
