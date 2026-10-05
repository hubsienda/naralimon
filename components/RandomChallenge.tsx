"use client";

import { useState } from "react";
import { challenges } from "@/lib/challenges";
import { getCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

function randomDifferent(length: number, previous: number | null) {
  if (length <= 1) return 0;
  let next = Math.floor(Math.random() * length);
  while (next === previous) next = Math.floor(Math.random() * length);
  return next;
}

export default function RandomChallenge({ locale }: { locale: Locale }) {
  const c = getCopy(locale).challenge;
  const [index, setIndex] = useState<number | null>(null);
  const play = () => setIndex((previous) => randomDifferent(challenges[locale].length, previous));

  return (
    <section id="play" className="section-pad play-section">
      <div className="shell narrow-shell">
        <div className="section-heading centered">
          <p className="eyebrow">{c.kicker}</p>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
        </div>
        <div className={`challenge-box ${index !== null ? "has-challenge" : ""}`} aria-live="polite">
          {index === null ? (
            <button type="button" className="forbidden-button" onClick={play}><span>{c.button}</span></button>
          ) : (
            <>
              <p className="challenge-text">{challenges[locale][index]}</p>
              <div className="challenge-actions">
                <button type="button" className="button button-dark" onClick={play}>{c.again}</button>
                <button type="button" className="text-button" onClick={() => setIndex(null)}>{c.reset}</button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
