
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    badge: "Your Digital Growth Partner",
    title: "Websites That Grow Your Business",
    highlight: "Design. Develop. Succeed.",
    description:
      "Deepara Solutions creates affordable, SEO-friendly, mobile-optimized websites that help your business attract visitors, generate leads, and grow online.",
    image: "/web.jpg",
    imageAlt: "Website design and development on desktop and mobile",
    primaryText: "Get Free Consultation",
    primaryHref: "/#contact",
    secondaryText: "Explore Services",
    secondaryHref: "/#services",
    services: "Website Design · Web Development · Responsive Design",
    accent: "#0875b7",
    gradient: "from-[#edf7ff] via-[#e4f2fc] to-[#d8eaf7]",
  },
  {
    badge: "Digital Marketing That Delivers",
    title: "Turn More Visitors Into Customers",
    highlight: "Reach. Engage. Convert.",
    description:
      "Grow your online visibility with data-driven SEO, Google Ads, social media campaigns, and digital strategies designed to attract the right audience.",
    image: "/static.jpg",
    imageAlt: "Digital marketing analytics and campaign performance",
    primaryText: "Grow Your Business",
    primaryHref: "/#contact",
    secondaryText: "Explore Marketing",
    secondaryHref: "/services/digital-marketing",
    services: "SEO · Google Ads · Social Media Marketing",
    accent: "#7c3aed",
    gradient: "from-[#f5f0ff] via-[#eee8ff] to-[#e3ddff]",
  },
  {
    badge: "Innovative Software Solutions",
    title: "Powerful Apps Built Around Your Business",
    highlight: "Innovate. Build. Scale.",
    description:
      "Bring your ideas to life with modern mobile applications, custom software, and e-commerce solutions built for performance and growth.",
    image: "/website.jpg",
    imageAlt: "Mobile application and custom software development",
    primaryText: "Build Your Solution",
    primaryHref: "/#contact",
    secondaryText: "View Our Services",
    secondaryHref: "/#services",
    services: "Mobile Apps · Custom Software · E-commerce",
    accent: "#059669",
    gradient: "from-[#ecfdf5] via-[#dcfce7] to-[#d1fae5]",
  },
  {
    badge: "Get Found. Get Recommended.",
    title: "Make Your Brand Stand Out Online",
    highlight: "Rank. Connect. Grow.",
    description:
      "Strengthen your digital presence with search engine optimization, AI optimization, YouTube growth, and strategies that help customers discover your brand.",
    image: "/seo.jpg",
    imageAlt: "SEO analytics and AI-powered search optimization",
    primaryText: "Boost Your Visibility",
    primaryHref: "/#contact",
    secondaryText: "Explore SEO Services",
    secondaryHref: "/services/aeo",
    services: "SEO · AI Optimization · YouTube Marketing",
    accent: "#ea580c",
    gradient: "from-[#fff7ed] via-[#ffedd5] to-[#fed7aa]",
  },
];

const SLIDE_DURATION = 7000;

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = slides[activeSlide];

  // Automatically advance every 7 seconds.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      aria-label="Featured services"
      aria-roledescription="carousel"
      className={`relative overflow-hidden bg-gradient-to-br ${currentSlide.gradient} transition-colors duration-700`}
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-white/40 blur-3xl"
      />

      {/* Hero content */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-20">
        {/* Left content */}
        <div
          key={`content-${activeSlide}`}
          className="relative z-10 animate-[heroEnter_0.6s_ease-out] text-center lg:text-left"
        >
          <span
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm"
            style={{ color: currentSlide.accent }}
          >
            <span
              className="h-2 w-2 animate-pulse rounded-full"
              style={{ backgroundColor: currentSlide.accent }}
            />
            {currentSlide.badge}
          </span>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#082f49] sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px]">
            {currentSlide.title}

            <span
              className="mt-2 block"
              style={{ color: currentSlide.accent }}
            >
              {currentSlide.highlight}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
            {currentSlide.description}
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            {/* Primary button */}
            <Link
              href={currentSlide.primaryHref}
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#f58220] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#e97412] sm:w-auto"
            >
              {currentSlide.primaryText}
              <ArrowUpRight className="h-5 w-5" />
            </Link>

            {/* Secondary button */}
            <Link
              href={currentSlide.secondaryHref}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-xl border border-white/80 bg-white/70 px-7 py-4 text-base font-semibold transition duration-200 hover:bg-white sm:w-auto"
              style={{ color: currentSlide.accent }}
            >
              {currentSlide.secondaryText}
            </Link>

            {/* View Packages button */}
            <Link
              href="/packages"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border border-[#0871ae]/20 bg-[#0871ae] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#075b8d] sm:w-auto"
            >
              View Packages
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Service summary */}
          <p className="mt-6 text-sm leading-6 text-slate-500">
            {currentSlide.services}
          </p>
        </div>

        {/* Right image */}
        <div
          key={`image-${activeSlide}`}
          className="relative mx-auto w-full max-w-2xl animate-[heroEnter_0.7s_ease-out] lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-[2rem] blur-3xl"
            style={{ backgroundColor: `${currentSlide.accent}20` }}
          />

          <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/60 shadow-[0_25px_70px_rgba(8,65,105,0.13)]">
            <Image
              src={currentSlide.image}
              alt={currentSlide.imageAlt}
              width={1536}
              height={1024}
              priority={activeSlide === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Four clickable slide indicators */}
      <div className="relative flex items-center justify-center gap-2 px-5 pb-8">
        {slides.map((slide, index) => (
          <button
            key={slide.badge}
            type="button"
            aria-label={`Go to slide ${index + 1}: ${slide.badge}`}
            aria-current={activeSlide === index ? "true" : undefined}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              activeSlide === index
                ? "w-9"
                : "w-2.5 bg-slate-400/50 hover:bg-slate-500"
            }`}
            style={
              activeSlide === index
                ? { backgroundColor: currentSlide.accent }
                : undefined
            }
          />
        ))}
      </div>

      {/* Slide entrance animation */}
      <style jsx>{`
        @keyframes heroEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
