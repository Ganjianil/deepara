import Link from "next/link";
import { FAQ } from "./FAQ";

type Feature = {
  title: string;
  description: string;
};

type ServicePageLayoutProps = {
  title: string;
  tagline: string;
  heroDescription: string;
  features: Feature[];
  faqIds: string[];
};

export function ServicePageLayout({
  title,
  tagline,
  heroDescription,
  features,
  faqIds,
}: ServicePageLayoutProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-darker pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Link
            href="/#services"
            className="mb-6 inline-flex items-center text-sm text-slate-400 transition hover:text-white"
          >
            ← Back to services
          </Link>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">Service</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-brand-200">{tagline}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{heroDescription}</p>
          <Link
            href="/#contact"
            className="mt-10 inline-block rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400"
          >
            Request a Consultation
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            What&apos;s included
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-brand-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQ ids={faqIds} />
    </>
  );
}
