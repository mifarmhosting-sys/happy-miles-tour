import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Clock, Menu, Phone, X } from "lucide-react";
import { useRef, useState } from "react";

const tourDropdown = [
  { label: "🇮🇳 Indian Tours", to: "/indian-tours" },
  { label: "🌍 International Tours", to: "/international-tours" },
  { label: "💕 Honeymoon Packages", to: "/honeymoon-packages" },
  { label: "💼 Corporate Tours", to: "/corporate-tours" },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Hotels", to: "/hotels" },
  { label: "Flights", to: "/flights" },
  { label: "Trains", to: "/trains" },
  { label: "Forex", to: "/forex" },
  { label: "Tour Packages", to: "/packages", hasDropdown: true },
  { label: "Gallery", to: "/gallery" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const isPackagesActive =
    currentPath.startsWith("/packages") ||
    currentPath.startsWith("/indian") ||
    currentPath.startsWith("/international") ||
    currentPath.startsWith("/honeymoon") ||
    currentPath.startsWith("/corporate");

  return (
    <header className="sticky top-0 z-50 shadow-lg" data-ocid="header">
      {/* Top bar — deep saffron to coral */}
      <div
        style={{
          background:
            "linear-gradient(90deg, oklch(0.55 0.22 50) 0%, oklch(0.58 0.22 30) 100%)",
        }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between text-xs py-1.5">
          <span className="hidden sm:flex items-center gap-2 text-white font-medium">
            <Clock className="h-3 w-3" />
            Mon–Sun: 10:00 AM – 10:00 PM
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:+919831398372"
              className="flex items-center gap-1.5 text-white hover:text-yellow-200 transition-colors font-semibold tracking-wide"
              data-ocid="header.phone_link"
            >
              <Phone className="h-3 w-3" />
              98313-98372
            </a>
          </div>
        </div>
      </div>

      {/* Main nav — bold saffron→blue gradient */}
      <div
        style={{
          background:
            "linear-gradient(105deg, oklch(0.62 0.20 55) 0%, oklch(0.52 0.22 255) 55%, oklch(0.40 0.22 265) 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo with gold glow */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 group"
              data-ocid="header.logo_link"
            >
              <div
                className="rounded-xl p-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.88 0.18 80), oklch(0.70 0.20 55))",
                  boxShadow: "0 0 16px oklch(0.75 0.20 60 / 0.5)",
                }}
              >
                <img
                  src="/assets/images/logo_hm.jpg"
                  alt="Happy Miles"
                  className="h-11 w-auto object-contain rounded-lg"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-0"
              aria-label="Main navigation"
            >
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.to} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((v) => !v)}
                      onBlur={(e) => {
                        if (
                          !dropdownRef.current?.contains(
                            e.relatedTarget as Node,
                          )
                        ) {
                          setDropdownOpen(false);
                        }
                      }}
                      className={cn(
                        "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-bold transition-all duration-200 relative group",
                        isPackagesActive
                          ? "bg-white/25 text-white"
                          : "text-white/90 hover:bg-white/15 hover:text-white",
                      )}
                      data-ocid="header.nav.tour_packages"
                    >
                      Tour Packages
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform",
                          dropdownOpen && "rotate-180",
                        )}
                      />
                      {/* gradient underline */}
                      <span
                        className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                        style={{
                          background:
                            "linear-gradient(90deg, oklch(0.88 0.18 80), oklch(0.72 0.22 30))",
                        }}
                      />
                    </button>
                    {dropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-56 rounded-2xl py-2 z-50 overflow-hidden"
                        style={{
                          background:
                            "linear-gradient(160deg, oklch(0.18 0.05 265 / 0.97), oklch(0.22 0.06 255 / 0.97))",
                          backdropFilter: "blur(20px)",
                          border: "1px solid oklch(0.55 0.20 55 / 0.4)",
                          boxShadow:
                            "0 20px 40px oklch(0.10 0.05 265 / 0.5), 0 0 0 1px oklch(0.60 0.20 55 / 0.2)",
                        }}
                        data-ocid="header.packages_dropdown"
                      >
                        {tourDropdown.map((item, i) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setDropdownOpen(false)}
                            className="block px-4 py-2.5 text-sm font-semibold text-white/90 hover:text-white transition-all"
                            style={{
                              borderLeft: `3px solid ${
                                i === 0
                                  ? "oklch(0.72 0.20 55)"
                                  : i === 1
                                    ? "oklch(0.60 0.22 220)"
                                    : i === 2
                                      ? "oklch(0.62 0.22 15)"
                                      : "oklch(0.55 0.20 290)"
                              }`,
                              marginBottom: "1px",
                            }}
                            data-ocid={`header.dropdown.${item.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={cn(
                      "relative px-3 py-1.5 rounded-full text-sm font-bold transition-all duration-200 group",
                      currentPath === link.to
                        ? "bg-white/25 text-white"
                        : "text-white/90 hover:bg-white/15 hover:text-white",
                    )}
                    data-ocid={`header.nav.${link.label.toLowerCase().replace(/ /g, "_")}`}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute bottom-0 left-2 right-2 h-0.5 rounded-full transition-transform origin-left",
                        currentPath === link.to
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      )}
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.88 0.18 80), oklch(0.72 0.22 30))",
                      }}
                    />
                  </Link>
                ),
              )}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.88 0.18 80), oklch(0.72 0.20 55))",
                  color: "oklch(0.15 0.05 55)",
                  boxShadow: "0 4px 14px oklch(0.72 0.22 55 / 0.45)",
                }}
                data-ocid="header.enquire_button"
              >
                ✈ Get a Quote
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl text-white hover:bg-white/20 transition-all"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                data-ocid="header.mobile_menu_toggle"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu — dark glass with colorful accents */}
      {mobileOpen && (
        <div
          className="lg:hidden max-h-[80vh] overflow-y-auto"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.18 0.06 265 / 0.98), oklch(0.14 0.04 265 / 0.98))",
            backdropFilter: "blur(20px)",
            borderTop: "2px solid oklch(0.62 0.20 55 / 0.5)",
          }}
          data-ocid="header.mobile_menu"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.to}>
                  <button
                    type="button"
                    onClick={() => setMobilePackagesOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-white/90 hover:bg-white/10 transition-all"
                    data-ocid="header.mobile_nav.tour_packages"
                  >
                    Tour Packages
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform text-yellow-300",
                        mobilePackagesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {mobilePackagesOpen && (
                    <div
                      className="ml-4 mt-1 flex flex-col gap-1 border-l-2"
                      style={{ borderColor: "oklch(0.62 0.20 55 / 0.5)" }}
                    >
                      {tourDropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobilePackagesOpen(false);
                          }}
                          className="px-4 py-2.5 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all"
                          data-ocid={`header.mobile_nav.${item.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-bold transition-all",
                    currentPath === link.to
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white",
                  )}
                  data-ocid={`header.mobile_nav.${link.label.toLowerCase().replace(/ /g, "_")}`}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.88 0.18 80), oklch(0.72 0.20 55))",
                color: "oklch(0.15 0.05 55)",
              }}
              data-ocid="header.mobile_enquire_button"
            >
              ✈ Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
