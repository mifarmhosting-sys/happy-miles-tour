import { j as jsxRuntimeExports, L as Link } from "./index-SaEUJ-ct.js";
import { L as Layout, M as MapPin, P as Phone, t as tours } from "./Layout-BQiaAfqM.js";
import { T as TourCard } from "./TourCard-ByyuRqH5.js";
import { B as Button } from "./button-Bx-8MXqo.js";
import { m as motion } from "./proxy-CoJ5ZHuU.js";
import { A as ArrowRight } from "./arrow-right-YruP0H7h.js";
import { U as Users } from "./users-EZ1IOBo_.js";
import { S as Star } from "./star-BpXHg6Ce.js";
import "./indian-rupee-CdxrdqRD.js";
const stats = [
  {
    value: "50K+",
    label: "Happy Travellers",
    icon: Users,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    value: "15+",
    label: "Destinations",
    icon: MapPin,
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    value: "4.9★",
    label: "Average Rating",
    icon: Star,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    value: "15+",
    label: "Years Experience",
    icon: Phone,
    color: "text-teal-500",
    bg: "bg-teal-500/10"
  }
];
const filters = [
  "All",
  "Himachal",
  "Uttarakhand",
  "Pilgrimage",
  "South India",
  "Beach"
];
function IndianToursPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative py-32 overflow-hidden text-white",
        style: {
          background: "linear-gradient(135deg, oklch(0.65 0.22 48) 0%, oklch(0.68 0.20 35) 50%, oklch(0.62 0.22 22) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute inset-0 opacity-15",
              style: {
                backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(135deg, oklch(0.65 0.22 48 / 0.85) 0%, oklch(0.68 0.20 35 / 0.75) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-20 blur-3xl",
              style: { background: "oklch(0.9 0.15 75)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.7 },
              className: "max-w-2xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold mb-5", children: "🇳 Indian Tours" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold mb-6 leading-tight", children: [
                  "Discover",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(90deg, oklch(0.95 0.15 75), oklch(0.90 0.12 55))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      },
                      children: "Incredible"
                    }
                  ),
                  " ",
                  "India"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 text-lg leading-relaxed mb-8", children: "From the snow-capped Himalayas to the sun-kissed beaches of Goa — India is a journey like no other. Let The Happy Miles Tourism guide you through the soul of Bharat." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      size: "lg",
                      className: "bg-white font-bold hover:bg-white/90 shadow-xl transition-all hover:-translate-y-0.5",
                      style: { color: "oklch(0.65 0.22 48)" },
                      "data-ocid": "indian-tours.explore_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#packages", children: [
                        "Explore Packages ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      variant: "outline",
                      size: "lg",
                      className: "border-white/60 text-white hover:bg-white/15 bg-white/10 backdrop-blur-sm",
                      "data-ocid": "indian-tours.enquire_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Enquire Now" })
                    }
                  )
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-8 bg-card border-b border-border",
        "data-ocid": "indian-tours.stats_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: `flex items-center gap-3 rounded-xl p-4 ${s.bg}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: `h-5 w-5 ${s.color}` }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display text-2xl font-bold ${s.color}`, children: s.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.label })
              ] })
            ]
          },
          s.label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          style: {
            background: "linear-gradient(90deg, oklch(0.65 0.22 48), oklch(0.68 0.20 35))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          },
          children: "Why Travel India with Us?"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "India is a land of infinite diversity. With over a decade of experience crafting unforgettable journeys, The Happy Miles Tourism offers hand-picked itineraries that blend comfort, culture, and authentic experiences." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-6 bg-background border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex flex-wrap gap-2 justify-center",
        "data-ocid": "indian-tours.filter_pills",
        children: filters.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all hover:-translate-y-0.5",
            style: {
              background: i === 0 ? "linear-gradient(90deg, oklch(0.65 0.22 48), oklch(0.68 0.20 35))" : "oklch(0.96 0.01 75)",
              color: i === 0 ? "white" : "oklch(0.35 0.05 255)",
              boxShadow: i === 0 ? "0 4px 12px oklch(0.65 0.22 48 / 0.4)" : void 0
            },
            "data-ocid": `indian-tours.filter.${i + 1}`,
            children: f
          },
          f
        ))
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "packages", className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold text-foreground mb-4", children: "Our Indian Tour Packages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "Handcrafted journeys across the length and breadth of incredible India." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7",
          "data-ocid": "indian-tours.list",
          children: tours.map((tour, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(TourCard, { tour, index }, tour.id))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 text-white relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.65 0.22 48) 0%, oklch(0.68 0.20 35) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold mb-4", children: "Need a Custom Package?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 text-lg mb-8", children: "We specialize in tailoring unique Indian tours just for you." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+919831398372",
                className: "inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-white/80 transition-colors",
                "data-ocid": "indian-tours.phone_link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6" }),
                  "98313-98372"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                size: "lg",
                className: "bg-white font-bold hover:bg-white/90 shadow-xl",
                style: { color: "oklch(0.65 0.22 48)" },
                "data-ocid": "indian-tours.contact_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                  "Send an Enquiry ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm mt-4", children: "Available 10 AM – 10 PM, 7 days a week" })
        ] })
      }
    )
  ] });
}
export {
  IndianToursPage as default
};
