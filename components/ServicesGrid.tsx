import Link from "next/link";
import { services } from "@/data/services";
import { SectionHeading } from "./SectionHeading";
import { ServiceIcon } from "./ServiceIcon";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
};

export function ServicesGrid() {
  return (
    <section id="services" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Core Services"
          title="Everything you need to win online"
          description="From first impression to long-term retention, we cover the full digital lifecycle with specialized teams and unified strategy."
        />

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(services as ServiceItem[]).map((service) => {
            const inner = (
              <>
                {/* Single Colorful Service Icon */}
                <div className="mb-5 inline-flex">
                  <ServiceIcon name={service.icon} className="h-8 w-8" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-brand-600">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                {/* Learn More Link */}
                {service.href && (
                  <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700">
                    Learn more
                    <svg
                      className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                )}
              </>
            );

            const className = `
              group relative flex h-full flex-col overflow-hidden
              rounded-2xl border border-slate-200/80
              bg-white p-6 shadow-sm
              transition-all duration-300 ease-out
              hover:-translate-y-1.5
              hover:border-brand-200
              hover:shadow-xl hover:shadow-brand-500/10
              md:p-8
            `;

            return service.href ? (
              <Link key={service.id} href={service.href} className={className}>
                {inner}
              </Link>
            ) : (
              <article key={service.id} className={className}>
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
