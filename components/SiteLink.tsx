import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const MAIN_APP_HOSTS = new Set(["naralimon.com", "www.naralimon.com"]);

type SiteLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  children?: ReactNode;
};

export function isExternalHref(href: string): boolean {
  const value = href.trim();

  if (!(value.startsWith("http://") || value.startsWith("https://") || value.startsWith("//"))) {
    return false;
  }

  try {
    const url = new URL(value.startsWith("//") ? `https:${value}` : value);
    return !MAIN_APP_HOSTS.has(url.hostname.toLowerCase());
  } catch {
    return false;
  }
}

export default function SiteLink({
  href,
  children,
  target,
  rel,
  ...props
}: SiteLinkProps) {
  if (isExternalHref(href)) {
    return (
      <a {...props} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a {...props} href={href} target={target} rel={rel}>
      {children}
    </a>
  );
}
