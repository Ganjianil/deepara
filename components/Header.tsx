"use client";

import Link from "next/link";
import { ArrowUpRight, MessageCircle, CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact us" },
];

const serviceLinks = [
  { href: "/services/web-design", label: "Website Design" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/services/mobile-app", label: "Mobile Application" },
  { href: "/services/ecommerce-app", label: "Ecommerce Application" },
  { href: "/services/video-production", label: "Video Production" },
  { href: "/services/software-development", label: "Software Development" },
  { href: "/services/aeo", label: "SEO" },
  { href: "/services/geo", label: "GEO (Google Engine)" },
  { href: "/services/youtube-seo", label: "YouTube SEO" },
  { href: "/services/youtube-ads", label: "YouTube Ads" },
  { href: "/services/aio", label: "AIO (AI Optimization)" },
  { href: "/services/sxo", label: "SXO (Search Experience)" },
];

const WHATSAPP_NUMBER = "919985888237";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Free Audit form state
  const [auditOpen, setAuditOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || auditOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, auditOpen]);

  // Close dropdowns and popup using Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileServicesOpen(false);
        setMobileOpen(false);
        setAuditOpen(false);
        setFormError("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const openAuditForm = () => {
    closeMobileMenu();
    setServicesOpen(false);
    setFormError("");
    setAuditOpen(true);
  };

  const closeAuditForm = () => {
    setAuditOpen(false);
    setFormError("");
  };

  const handleAuditSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanedPhone = phone.replace(/[\s()+-]/g, "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10,15}$/.test(cleanedPhone)) {
      setFormError(
        "Please enter a valid phone number with country code if needed.",
      );
      return;
    }

    let websiteUrl = website.trim();

    if (websiteUrl) {
      if (!/^https?:\/\//i.test(websiteUrl)) {
        websiteUrl = `https://${websiteUrl}`;
      }

      try {
        const parsedUrl = new URL(websiteUrl);

        if (
          !["http:", "https:"].includes(parsedUrl.protocol) ||
          !parsedUrl.hostname.includes(".")
        ) {
          throw new Error("Invalid website URL");
        }
      } catch {
        setFormError("Please enter a valid website URL.");
        return;
      }
    }

    const message = [
      "Hello Deepara Solutions!",
      "",
      "I would like to request a Free Website Audit.",
      "",
      `Full Name: ${fullName.trim()}`,
      `Email Address: ${email.trim()}`,
      `Phone Number: ${phone.trim()}`,
      `Company Name: ${company.trim() || "Not provided"}`,
      `Website URL: ${websiteUrl || "Not provided"}`,
      "",
      "Please run a detailed search and performance audit for my brand.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    closeAuditForm();
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_5px_20px_rgba(15,103,159,0.14)]" : ""
        }`}
      >
        <div className="mx-auto flex h-[95px] max-w-[1720px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-14">
          {/* Text Logo */}
          <div className="relative z-10 shrink-0">
            <Link
              href="/"
              aria-label="Deepara home"
              className="group inline-flex flex-col"
            >
              <span className="flex items-center text-[27px] font-extrabold leading-none tracking-tight text-[#2696D0] sm:text-[30px]">
                Deepara
                <ArrowUpRight
                  size={20}
                  strokeWidth={3}
                  className="-ml-1 -mt-5 text-sky-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>

              <span className="ml-auto mt-1 text-sm font-medium tracking-wide text-sky-400">
                solutions
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="ml-auto hidden items-center gap-6 lg:flex xl:gap-9"
            aria-label="Main navigation"
          >
            <Link href="/#home" className="nav-link">
              Home
            </Link>

            <Link href="/about" className="nav-link">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                className={`nav-link flex items-center gap-2 ${
                  servicesOpen ? "text-[#086ba9]" : ""
                }`}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
              >
                Services
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path d="M5.25 7.5 10 12.25 14.75 7.5H5.25Z" />
                </svg>
              </button>

              {servicesOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Close services dropdown"
                    className="fixed inset-0 z-40 cursor-default"
                    onClick={() => setServicesOpen(false)}
                  />

                  <div className="absolute left-1/2 top-full z-50 w-[min(900px,90vw)] -translate-x-1/2 pt-5">
                    <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_15px_40px_rgba(15,70,105,0.16)] sm:grid-cols-3 lg:grid-cols-6">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="flex min-h-[58px] items-center rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#edf8ff] hover:text-[#0875b7]"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link href="/careers" className="nav-link">
              Careers
            </Link>

            <Link href="/blog" className="nav-link">
              Blog
            </Link>

            <Link href="/#contact" className="nav-link whitespace-nowrap">
              Contact us
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="ml-auto hidden shrink-0 items-center gap-3 lg:flex xl:ml-8 xl:gap-4">
            <button
              type="button"
              onClick={openAuditForm}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#f5790c] px-5 text-base font-semibold text-white shadow-[0_10px_22px_rgba(245,121,12,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#df6800] xl:h-14 xl:px-7 xl:text-lg"
            >
              Get Free Audit
            </button>

            <Link
              href="/packages"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#0871ae] px-5 text-base font-semibold text-white shadow-[0_10px_22px_rgba(8,113,174,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#075f94] xl:h-14 xl:px-7 xl:text-lg"
            >
              Choose Package
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#0871ae] transition hover:bg-sky-50 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "max-h-[calc(100vh-95px)] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <nav
            className="max-h-[calc(100vh-95px)] overflow-y-auto px-5 py-5"
            aria-label="Mobile navigation"
          >
            <Link
              href="/#home"
              className="mobile-link"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="mobile-link"
              onClick={closeMobileMenu}
            >
              About
            </Link>

            {/* Mobile Services Dropdown */}
            <button
              type="button"
              className="mobile-link flex w-full items-center justify-between"
              onClick={() => setMobileServicesOpen((open) => !open)}
              aria-expanded={mobileServicesOpen}
            >
              Services
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`h-4 w-4 transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path d="M5.25 7.5 10 12.25 14.75 7.5H5.25Z" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div className="mb-3 ml-3 border-l-2 border-sky-100 pl-3">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-sky-50 hover:text-[#0871ae]"
                    onClick={closeMobileMenu}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-link"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Action Buttons */}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={openAuditForm}
                className="flex h-12 items-center justify-center rounded-full bg-[#f5790c] px-6 font-semibold text-white"
              >
                Get Free Audit
              </button>

              <Link
                href="/packages"
                className="flex h-12 items-center justify-center rounded-full bg-[#0871ae] px-6 font-semibold text-white"
                onClick={closeMobileMenu}
              >
                Choose Package
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Free Website Audit Popup */}
      {auditOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeAuditForm();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="audit-title"
            className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-sky-800 px-6 py-7 text-white sm:px-8">
              <button
                type="button"
                onClick={closeAuditForm}
                aria-label="Close audit form"
                className="absolute right-4 top-4 rounded-full p-2 text-white/80 transition hover:bg-white/15 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <CheckCircle2 className="h-6 w-6" />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
                Complimentary Website Review
              </p>

              <h2
                id="audit-title"
                className="mt-2 pr-5 text-2xl font-bold sm:text-3xl"
              >
                Get a Free Website Audit
              </h2>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Fill in your details below and our team will run a detailed
                search and performance audit for your brand.
              </p>
            </div>

            <form onSubmit={handleAuditSubmit} className="space-y-4 p-6 sm:p-8">
              <div>
                <label
                  htmlFor="audit-full-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="audit-full-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="audit-email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="audit-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="audit-phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="audit-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={20}
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="audit-company"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Company Name{" "}
                  <span className="font-normal text-slate-400">(Optional)</span>
                </label>
                <input
                  id="audit-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  maxLength={150}
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="Your company name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="audit-website"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Website URL{" "}
                  <span className="font-normal text-slate-400">(Optional)</span>
                </label>
                <input
                  id="audit-website"
                  name="website"
                  type="text"
                  inputMode="url"
                  autoComplete="url"
                  maxLength={500}
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                  placeholder="www.yourwebsite.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              {formError && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                <MessageCircle className="h-5 w-5" />
                Get Free Audit
                <ArrowUpRight className="h-5 w-5" />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                WhatsApp will open with your audit request. Review the message
                and press Send to contact our team.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
