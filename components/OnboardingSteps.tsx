"use client";

import onboarding from "@/data/onboarding.json";
import { SectionHeading } from "./SectionHeading";

const positions = [
  { x: 5.5, y: 57, icon: "🔎", titleY: 76 },
  { x: 29.5, y: 25, icon: "📋", titleY: 43 },
  { x: 49.5, y: 63, icon: "💻", titleY: 82 },
  { x: 69, y: 32, icon: "🛡️", titleY: 51 },
  { x: 86, y: 59, icon: "🚀", titleY: 78 },
];

export function OnboardingSteps() {
  return (
    <section id="about" className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Client Onboarding"
          title="Client Onboarding Process"
          description="A structured, collaborative onboarding journey designed to deliver tailored digital solutions with maximum precision."
        />

        {/* Desktop animated timeline */}
        <div className="relative mt-12 hidden h-[470px] lg:block">
          {/* Animated curved path */}
          <svg
            className="absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 1600 470"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="onboarding-arrow"
                markerWidth="10"
                markerHeight="10"
                refX="7"
                refY="5"
                orient="auto"
              >
                <path
                  d="M 1 1 L 8 5 L 1 9"
                  stroke="#1686d9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </marker>
            </defs>

            {/* Main dashed curve */}
            <path
              id="onboarding-curve"
              d="
                M 90 270
                C 230 350, 330 80, 475 100
                S 650 390, 790 310
                S 950 110, 1100 145
                S 1270 340, 1380 285
                S 1500 260, 1570 270
              "
              stroke="#147dcc"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeDasharray="10 8"
              className="onboarding-dash"
            />

            {/* Moving arrowhead */}
            <path
              d="M -12 -7 L 0 0 L -12 7"
              stroke="#20a8f5"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            >
              <animateMotion
                dur="19s"
                repeatCount="indefinite"
                rotate="auto"
                path="
                  M 90 270
                  C 230 350, 330 80, 475 100
                  S 650 390, 790 310
                  S 950 110, 1100 145
                  S 1270 340, 1380 285
                  S 1500 260, 1570 270
                "
              />
            </path>
          </svg>

          {/* Step markers and labels */}
          {onboarding.map((step, index) => {
            const position = positions[index];

            if (!position) return null;

            return (
              <div key={step.step}>
                {/* Faint background step number */}
                <span
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 select-none text-[78px] font-extrabold leading-none text-slate-100"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y - 4}%`,
                  }}
                  aria-hidden="true"
                >
                  {String(step.step).padStart(2, "0")}
                </span>

                {/* Numbered circle */}
                <div
                  className={`absolute z-10 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] bg-white text-[25px] font-bold shadow-md transition-all duration-300 hover:scale-110 ${
                    index === 1
                      ? "border-sky-600 text-sky-600 shadow-sky-100"
                      : "border-[#07334d] text-[#07334d]"
                  }`}
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                  }}
                >
                  {step.step}
                </div>

                {/* Icon */}
                <div
                  className="absolute flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-slate-50 text-2xl shadow-sm"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y + 7}%`,
                  }}
                >
                  {position.icon}
                </div>

                {/* Step title */}
                <div
                  className="absolute w-56 -translate-x-1/2 text-center"
                  style={{
                    left: `${position.x}%`,
                    top: `${position.titleY}%`,
                  }}
                >
                  <h3 className="text-base font-bold leading-snug text-[#07334d]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile and tablet: responsive step list */}
        <ol className="relative mt-12 space-y-8 lg:hidden">
          {onboarding.map((step, index) => {
            const position = positions[index];

            return (
              <li key={step.step} className="relative flex gap-5">
                {/* Vertical connector */}
                {index !== onboarding.length - 1 && (
                  <span
                    className="absolute left-[23px] top-12 h-[calc(100%+16px)] w-0.5 bg-sky-200"
                    aria-hidden="true"
                  />
                )}

                {/* Number */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-sky-600 bg-white font-bold text-sky-700 shadow-sm">
                  {step.step}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 text-2xl">{position?.icon}</div>

                  <h3 className="text-lg font-bold text-[#07334d]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Continuous dashed-line animation */}
      <style jsx>{`
        .onboarding-dash {
          animation: dash-flow 1.5s linear infinite;
        }

        @keyframes dash-flow {
          from {
            stroke-dashoffset: 36;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .onboarding-dash {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
