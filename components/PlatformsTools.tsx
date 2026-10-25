"use client";

import { Palette, Megaphone, ShieldCheck, Sparkles } from "lucide-react";

import * as SimpleIcons from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import type { ElementType } from "react";

import tools from "@/data/tools.json";
import { SectionHeading } from "./SectionHeading";

type ToolSection = {
  title: string;
  items: string[];
  color: string;
  light: string;
  icon: ElementType;
  columns: number;
};

type BrandConfig = {
  icon: string;
  color: string;
  background: string;
};

const brandStyles: Record<string, BrandConfig> = {
  Canva: {
    icon: "SiCanva",
    color: "#00C4CC",
    background: "#E5F8FF",
  },
  Photoshop: {
    icon: "SiAdobephotoshop",
    color: "#31A8FF",
    background: "#E5F3FF",
  },
  "Adobe Premiere Pro": {
    icon: "SiAdobepremierepro",
    color: "#9999FF",
    background: "#F0EDFF",
  },
  Figma: {
    icon: "SiFigma",
    color: "#F24E1E",
    background: "#FFF0EA",
  },
  Illustrator: {
    icon: "SiAdobeillustrator",
    color: "#FF9A00",
    background: "#FFF3DD",
  },
  InDesign: {
    icon: "SiAdobeindesign",
    color: "#FF3366",
    background: "#FFEAF0",
  },
  Sketch: {
    icon: "SiSketch",
    color: "#F7B500",
    background: "#FFF6D9",
  },
  "Affinity Designer": {
    icon: "SiAffinitydesigner",
    color: "#246BFD",
    background: "#E9F0FF",
  },
  CorelDRAW: {
    icon: "SiCoreldraw",
    color: "#22A447",
    background: "#E9F9ED",
  },
  "After Effects": {
    icon: "SiAdobeaftereffects",
    color: "#9999FF",
    background: "#F0EDFF",
  },

  "Google Ads": {
    icon: "SiGoogleads",
    color: "#4285F4",
    background: "#EAF2FF",
  },
  "Meta Ads": {
    icon: "SiMeta",
    color: "#0866FF",
    background: "#EAF2FF",
  },
  "LinkedIn Ads": {
    icon: "SiLinkedin",
    color: "#0A66C2",
    background: "#E8F4FF",
  },
  "Twitter/X Ads": {
    icon: "SiX",
    color: "#111827",
    background: "#F1F3F5",
  },
  "Jio Ads": {
    icon: "SiJio",
    color: "#1759D1",
    background: "#EAF1FF",
  },
  "Adobe Ads": {
    icon: "SiAdobe",
    color: "#FF0000",
    background: "#FFF0F0",
  },
  "YouTube Ads": {
    icon: "SiYoutube",
    color: "#FF0033",
    background: "#FFF0F1",
  },
  "GMAP Ads": {
    icon: "SiGooglemaps",
    color: "#34A853",
    background: "#EAF8EE",
  },
  "Google Merchant Ads": {
    icon: "SiGoogle",
    color: "#4285F4",
    background: "#EAF2FF",
  },
  "Google Analytics": {
    icon: "SiGoogleanalytics",
    color: "#E69500",
    background: "#FFF4D9",
  },
  "Google Search Console": {
    icon: "SiGooglesearchconsole",
    color: "#4285F4",
    background: "#EAF2FF",
  },
  "Bing Webmaster": {
    icon: "SiBing",
    color: "#008373",
    background: "#E5F7F3",
  },
  "SE Ranking": {
    icon: "SiSeranking",
    color: "#147DFF",
    background: "#EAF2FF",
  },
  Hootsuite: {
    icon: "SiHootsuite",
    color: "#F04B4B",
    background: "#FFF0F0",
  },

  "Meta Certification": {
    icon: "SiMeta",
    color: "#0866FF",
    background: "#EAF2FF",
  },
  "Google Certification": {
    icon: "SiGoogle",
    color: "#4285F4",
    background: "#EAF2FF",
  },
  "Microsoft Certification": {
    icon: "SiMicrosoft",
    color: "#00A4EF",
    background: "#E5F7FF",
  },
  "Google Ecommerce Certification": {
    icon: "SiGoogle",
    color: "#4285F4",
    background: "#EAF2FF",
  },
  "HubSpot Certification": {
    icon: "SiHubspot",
    color: "#F15A24",
    background: "#FFF0E8",
  },
};

function BrandIcon({ name }: { name: string }) {
  const brand = brandStyles[name];

  if (!brand) {
    return (
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-600"
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  // Resolve the SVG icon from the installed Simple Icons library.
  const Icon = (SimpleIcons as unknown as Record<string, ElementType>)[
    brand.icon
  ];

  // Use the Google icon as a fallback for unavailable brand exports.
  const BrandComponent = Icon || FaGoogle;

  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_2px_8px_rgba(15,45,75,0.07)] ring-1 ring-slate-100"
      title={name}
    >
      <BrandComponent size={27} color={brand.color} aria-hidden="true" />
    </span>
  );
}

function ToolCard({ section }: { section: ToolSection }) {
  const Icon = section.icon;

  return (
    <article className="group relative flex h-full min-w-0 flex-col rounded-2xl border border-white bg-white/90 p-5 shadow-[0_8px_35px_rgba(36,107,180,0.07)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(36,107,180,0.12)] sm:p-6">
      {/* Card heading */}
      <div className="flex items-center gap-4">
        <div
          className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: section.light }}
        >
          <Icon
            size={34}
            strokeWidth={1.9}
            style={{ color: section.color }}
            aria-hidden="true"
          />
        </div>

        <h3 className="text-lg font-extrabold tracking-tight text-[#103650] sm:text-xl">
          {section.title}
        </h3>
      </div>

      {/* Colored divider */}
      <div
        className="mb-5 mt-4 h-[2px] w-full rounded-full"
        style={{ backgroundColor: section.color }}
      />

      {/* Tool grid */}
      <div
        className={`grid flex-1 content-start gap-2.5 ${
          section.columns === 1 ? "grid-cols-1" : "grid-cols-2"
        }`}
      >
        {section.items.map((name, index) => (
          <div
            key={`${name}-${index}`}
            className={`flex min-h-[64px] min-w-0 items-center gap-3 rounded-2xl border border-[#E5EEF9] bg-gradient-to-br from-white to-[#F5F9FE] px-3 py-3 transition-all duration-200 hover:border-[#C8DDF7] hover:bg-white ${
              section.columns === 2 &&
              index === 2 &&
              section.title === "Designing Tools"
                ? "col-span-2"
                : ""
            }`}
          >
            <BrandIcon name={name} />

            <span className="min-w-0 text-[13px] font-medium leading-snug text-[#344760] sm:text-sm">
              {name}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

export function PlatformsTools() {
  const sections: ToolSection[] = [
    {
      title: "Designing Tools",
      items: tools.designingTools,
      color: "#8B36FF",
      light: "#F1E8FF",
      icon: Palette,
      columns: 2,
    },
    {
      title: "Paid Marketing Tools",
      items: tools.paidMarketingTools,
      color: "#2878FF",
      light: "#E8F1FF",
      icon: Megaphone,
      columns: 2,
    },
    {
      title: "Certifications",
      items: tools.certifications,
      color: "#F43F9B",
      light: "#FFE7F4",
      icon: ShieldCheck,
      columns: 1,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-[#F4F9FF] py-16 sm:py-20 md:py-24">
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-40 -z-10 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-blue-100/80 to-transparent blur-2xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-32 -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-100/70 to-pink-100/50 blur-3xl"
      />

      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#1684D8]">
            <Sparkles size={17} aria-hidden="true" />
            <span>Platforms &amp; Tools</span>
          </div>

          <SectionHeading
            title="Built with industry-leading stacks"
            description="We stay current with design systems, ad platforms, and certifications so your project meets professional standards."
          />
        </div>

        {/* Responsive three-card layout */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {sections.map((section) => (
            <ToolCard key={section.title} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
