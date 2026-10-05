"use client";

import { useState } from "react";
import { choicePrompts, type ChoiceKind } from "@/lib/challenges";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export default function ChoiceGame({ locale }: { locale: Locale }) {
  const c = getCopy(locale).choice;
  const [selection, setSelection] = useState<{ kind: ChoiceKind; text: string } | null>(null);

  const choose = (kind: ChoiceKind) => {
    const bank = choicePrompts[locale][kind];
    setSelection({ kind, text: bank[Math.floor(Math.random() * bank.length)] });
  };

  return (
    <section className="section-pad choice-section">
      <div className="shell narrow-shell">
        <div className="section-heading centered">
          <p className="eyebrow">{c.kicker}</p>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
        </div>
        <div className="choice-buttons">
          <button type="button" onClick={() => choose("truth")}>{c.truth}</button>
          <button type="button" onClick={() => choose("dare")}>{c.dare}</button>
          <button type="button" onClick={() => choose("bad")}>{c.bad}</button>
        </div>
        {selection && (
          <div className="choice-result" aria-live="polite">
            <p>{selection.text}</p>
            <button type="button" className="text-button" onClick={() => choose(selection.kind)}>{c.again}</button>
          </div>
        )}
      </div>
    </section>
  );
}
