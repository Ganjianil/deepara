"use client";

import { useState } from "react";
import testimonials from "@/data/testimonials.json";
import { SectionHeading } from "./SectionHeading";

export function SuccessStories() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="What our clients say"
          description="Fictional testimonials for demo purposes—replace with verified client quotes before production use."
          dark
        />

        <div className="mx-auto max-w-4xl">
          <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
            <svg className="h-10 w-10 text-brand-400 opacity-80" fill="currentColor" viewBox="0 0 32 32" aria-hidden>
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
            </svg>
            <p className="mt-6 text-lg leading-relaxed text-slate-200 md:text-xl">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-8 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-cyan-500 text-sm font-bold text-white">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <div>
                <cite className="not-italic font-semibold text-white">{t.name}</cite>
                <p className="text-sm text-slate-400">
                  {t.role}, {t.company}
                </p>
              </div>
            </footer>
          </blockquote>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  index === active
                    ? "bg-brand-500 text-white"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
                aria-current={index === active ? "true" : undefined}
              >
                {item.company}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300"
            >
              <p className="line-clamp-4 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 font-semibold text-white">{item.name}</p>
              <p className="text-xs text-slate-500">{item.company}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
