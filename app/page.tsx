
import { ClientsGrid } from "@/components/ClientsGrid";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { OnboardingSteps } from "@/components/OnboardingSteps";
import { PlatformsTools } from "@/components/PlatformsTools";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SuccessStories } from "@/components/SuccessStories";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <OnboardingSteps />
      <ClientsGrid />
      <PlatformsTools />
      <SuccessStories />
      <FAQ />

      {/* Final Call to Action */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#073047] via-[#0B4564] to-[#0876AE] py-16 sm:py-20 md:py-24">
        {/* Decorative background effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-20 -z-10 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl"
        />

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-200 backdrop-blur-sm">
            Let&apos;s Build Something Great
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to grow your digital presence?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Tell us about your business goals. Our team at Deepara Solutions
            will help you discover the right digital strategy to grow your
            business online.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:info@deeparasolution.com"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-950/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl sm:w-auto"
            >
              Get in Touch
            </Link>

            <a
              href="tel:+919985888237"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20 sm:w-auto"
            >
              Call Us: +91 9985888237
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-300">
            Website Design · Digital Marketing · Software Development
          </p>
        </div>
      </section>
    </>
  );
}

