
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  { label: "Website Design", href: "/website-design" },
  { label: "Mobile Application", href: "/services/mobile-application" },
  { label: "Video Production", href: "/services/video-production" },
  { label: "SEO", href: "/services/seo" },
  { label: "YouTube SEO", href: "/services/youtube-seo" },
  { label: "AIO (AI Optimization)", href: "/services/ai-optimization" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Ecommerce Application", href: "/services/ecommerce-app" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "GEO (Google Engine)", href: "/services/geo" },
  { label: "YouTube Ads", href: "/services/youtube-ads" },
  { label: "SXO (Search Experience)", href: "/services/sxo" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
];

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-7">
      <h3 className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
        {children}
      </h3>

      <span className="mt-3 block h-[3px] w-11 rounded-full bg-orange-500" />
    </div>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#073047] text-slate-300"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-80 w-80 rounded-full bg-sky-400/[0.04] blur-3xl"
      />

      {/* Main footer content */}
      <div className="relative mx-auto max-w-[1600px] px-6 pb-12 pt-14 sm:px-8 sm:pt-16 lg:px-12 lg:pb-16 lg:pt-20">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.65fr_1.35fr_1.15fr] lg:gap-x-10 xl:gap-x-14">
          {/* Company information */}
          <div>
            <Link
              href="/"
              aria-label="Deeparas Solutions home"
              className="group mb-6 inline-flex flex-col"
            >
              <span className="flex items-center text-[27px] font-extrabold leading-none tracking-tight text-[#2696D0] sm:text-[30px]">
                Deeparas
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

            <p className="max-w-sm text-[15px] leading-[1.8] text-slate-400 sm:text-base">
              We are a professional Web Design &amp; Digital Marketing agency in
              Hyderabad, delivering creative solutions that help businesses grow
              online.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-[15px] text-slate-400 transition-colors duration-200 hover:text-orange-400 sm:text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="sm:col-span-2 lg:col-span-1">
            <FooterHeading>Our Services</FooterHeading>

            <div className="grid grid-cols-1 gap-x-7 gap-y-4 sm:grid-cols-2 lg:gap-x-6">
              {services.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="w-fit max-w-full text-[15px] leading-6 text-slate-400 transition-colors duration-200 hover:text-orange-400 sm:text-base"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact information */}
          <div>
            <FooterHeading>Contact Info</FooterHeading>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin
                  size={21}
                  strokeWidth={1.8}
                  className="mt-1 shrink-0 text-pink-400"
                  aria-hidden="true"
                />

                <p className="text-[15px] leading-[1.8] text-slate-400 sm:text-base">
                  Flat No. 2b, Begumpet, Near Metro, Greenlands,
                  Hyderabad, Telangana 500082
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+91919985888237"
                className="group flex items-center gap-4"
              >
                <Phone
                  size={21}
                  strokeWidth={1.8}
                  className="shrink-0 text-pink-400 transition-transform duration-200 group-hover:rotate-12"
                  aria-hidden="true"
                />

                <span className="text-[15px] text-slate-400 transition-colors group-hover:text-orange-400 sm:text-base">
                  (+91) 9985888237
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@deeparasolutions.com"
                className="group flex items-center gap-4"
              >
                <Mail
                  size={21}
                  strokeWidth={1.8}
                  className="shrink-0 text-pink-400"
                  aria-hidden="true"
                />

                <span className="break-words text-[15px] text-slate-400 transition-colors group-hover:text-orange-400 sm:text-base">
                  info@deeparasolutions.com
                </span>
              </a>
            </div>

            {/* Social media icons */}
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.07] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    <Icon size={21} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative border-t border-white/[0.10]">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-center gap-3 px-6 py-6 text-center sm:px-8 sm:py-7">
          <p className="text-sm text-slate-400 sm:text-base">
            © {new Date().getFullYear()} Deepara Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

