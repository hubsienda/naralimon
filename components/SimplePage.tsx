import type { ReactNode } from "react";

export default function SimplePage({ eyebrow, title, children }: { eyebrow?: string; title: string; children: ReactNode }) {
  return (
    <main className="simple-page section-pad">
      <div className="shell simple-shell">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <div className="prose-block">{children}</div>
      </div>
    </main>
  );
}
