import { tours } from "@/data/tours";
import { Link } from "@tanstack/react-router";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const socialLinks = [
  {
    Icon: Facebook,
    href: "#",
    label: "Facebook",
    gradient:
      "linear-gradient(135deg, oklch(0.52 0.22 255), oklch(0.42 0.22 265))",
  },
  {
    Icon: Instagram,
    href: "#",
    label: "Instagram",
    gradient:
      "linear-gradient(135deg, oklch(0.62 0.22 15), oklch(0.58 0.20 330))",
  },
  {
    Icon: Twitter,
    href: "#",
    label: "Twitter",
    gradient:
      "linear-gradient(135deg, oklch(0.58 0.22 220), oklch(0.48 0.20 245))",
  },
  {
    Icon: Youtube,
    href: "#",
    label: "YouTube",
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.25 25), oklch(0.45 0.22 18))",
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer data-ocid="footer" className="relative overflow-hidden">
      {/* Colorful wave divider */}
      <div
        className="h-2 w-full"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.62 0.20 55) 0%, oklch(0.62 0.22 15) 25%, oklch(0.55 0.22 220) 50%, oklch(0.55 0.22 175) 75%, oklch(0.55 0.20 290) 100%)",
        }}
      />

      {/* Main footer body */}
      <div
        style={{
          background:
            "linear-gradient(160deg, oklch(0.14 0.06 265) 0%, oklch(0.18 0.07 255) 50%, oklch(0.12 0.05 265) 100%)",
        }}
      >
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link
                to="/"
                className="inline-block mb-5"
                data-ocid="footer.logo_link"
              >
                <div
                  className="rounded-xl p-0.5 inline-block"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.88 0.18 80), oklch(0.70 0.20 55))",
                    boxShadow: "0 0 20px oklch(0.72 0.20 55 / 0.3)",
                  }}
                >
                  <img
                    src="/assets/images/logo_hm.jpg"
                    alt="Happy Miles"
                    className="h-14 w-auto object-contain rounded-lg"
                  />
                </div>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                The Happy Miles Tourism — your trusted travel partner for
                unforgettable journeys across India and beyond. Crafting
                memories since 2010.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href, label, gradient }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="h-10 w-10 rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 hover:shadow-lg"
                    style={{ background: gradient }}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Tour Packages */}
            <div>
              <h4
                className="font-display font-bold text-base mb-5"
                style={{ color: "oklch(0.82 0.18 65)" }}
              >
                🗺 Tour Packages
              </h4>
              <ul className="space-y-2.5">
                {tours.slice(0, 6).map((tour) => (
                  <li key={tour.id}>
                    <Link
                      to="/tour/$id"
                      params={{ id: tour.id }}
                      className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                      data-ocid={`footer.tour_link.${tour.id}`}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 transition-transform group-hover:scale-150"
                        style={{ background: "oklch(0.72 0.20 55)" }}
                      />
                      {tour.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="font-display font-bold text-base mb-5"
                style={{ color: "oklch(0.70 0.22 15)" }}
              >
                🔗 Quick Links
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Home", to: "/" },
                  { label: "Hotels", to: "/hotels" },
                  { label: "Flights", to: "/flights" },
                  { label: "Trains", to: "/trains" },
                  { label: "Forex", to: "/forex" },
                  { label: "Gallery", to: "/gallery" },
                  { label: "About Us", to: "/about" },
                  { label: "Contact Us", to: "/contact" },
                ].map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 transition-transform group-hover:scale-150"
                        style={{ background: "oklch(0.60 0.22 220)" }}
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="font-display font-bold text-base mb-5"
                style={{ color: "oklch(0.65 0.20 175)" }}
              >
                📍 Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div
                    className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: "oklch(0.62 0.20 55 / 0.2)",
                      border: "1px solid oklch(0.62 0.20 55 / 0.4)",
                    }}
                  >
                    <MapPin
                      className="h-4 w-4"
                      style={{ color: "oklch(0.80 0.18 65)" }}
                    />
                  </div>
                  <span className="text-sm text-white/60 leading-snug">
                    AVS House, 42/1A Gurupada Halder Road,
                    <br />
                    Kolkata – 700026
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+919831398372"
                    className="flex gap-3 text-sm text-white/60 hover:text-white transition-colors group"
                    data-ocid="footer.phone_link"
                  >
                    <div
                      className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "oklch(0.62 0.22 15 / 0.2)",
                        border: "1px solid oklch(0.62 0.22 15 / 0.4)",
                      }}
                    >
                      <Phone
                        className="h-4 w-4"
                        style={{ color: "oklch(0.75 0.20 25)" }}
                      />
                    </div>
                    98313-98372
                  </a>
                </li>
                <li className="flex gap-3">
                  <div
                    className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "oklch(0.55 0.22 175 / 0.2)",
                      border: "1px solid oklch(0.55 0.22 175 / 0.4)",
                    }}
                  >
                    <Clock
                      className="h-4 w-4"
                      style={{ color: "oklch(0.65 0.20 175)" }}
                    />
                  </div>
                  <span className="text-sm text-white/60">
                    Mon–Sun: 10:00 AM – 10:00 PM
                  </span>
                </li>
                <li>
                  <a
                    href="mailto:info@happymiles.in"
                    className="flex gap-3 text-sm text-white/60 hover:text-white transition-colors"
                    data-ocid="footer.email_link"
                  >
                    <div
                      className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "oklch(0.52 0.22 255 / 0.2)",
                        border: "1px solid oklch(0.52 0.22 255 / 0.4)",
                      }}
                    >
                      <Mail
                        className="h-4 w-4"
                        style={{ color: "oklch(0.65 0.20 240)" }}
                      />
                    </div>
                    info@happymiles.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t"
          style={{ borderColor: "oklch(0.35 0.05 265 / 0.5)" }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-xs text-white/40">
              © {year} The Happy Miles Tourism. All rights reserved.
            </span>
            <span className="text-xs text-white/40">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                style={{ color: "oklch(0.72 0.20 55)" }}
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
