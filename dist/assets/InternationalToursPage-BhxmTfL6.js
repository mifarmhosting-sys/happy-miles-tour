import { j as jsxRuntimeExports, L as Link } from "./index-SaEUJ-ct.js";
import { L as Layout, P as Phone } from "./Layout-BQiaAfqM.js";
import { B as Button } from "./button-Bx-8MXqo.js";
import { m as motion } from "./proxy-CoJ5ZHuU.js";
import { G as Globe } from "./globe-6FqYPvKM.js";
import { A as ArrowRight } from "./arrow-right-YruP0H7h.js";
const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    status: "available",
    tagline: "Island of Gods",
    price: "₹75,000",
    duration: "6N/7D",
    highlights: ["Ubud Rice Terraces", "Kuta Beach", "Tanah Lot Temple"],
    overlayFrom: "oklch(0.25 0.15 48 / 0.95)",
    overlayMid: "oklch(0.45 0.22 48 / 0.6)"
  },
  {
    name: "Thailand",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80",
    status: "available",
    tagline: "Land of Smiles",
    price: "₹65,000",
    duration: "5N/6D",
    highlights: ["Bangkok Temples", "Phuket Beaches", "Chiang Mai"],
    overlayFrom: "oklch(0.20 0.15 253 / 0.95)",
    overlayMid: "oklch(0.40 0.20 253 / 0.6)"
  },
  {
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    status: "available",
    tagline: "City of Gold",
    price: "₹85,000",
    duration: "4N/5D",
    highlights: ["Burj Khalifa", "Desert Safari", "Palm Jumeirah"],
    overlayFrom: "oklch(0.25 0.10 75 / 0.95)",
    overlayMid: "oklch(0.50 0.18 58 / 0.6)"
  },
  {
    name: "Singapore",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    status: "available",
    tagline: "City of Gardens",
    price: "₹90,000",
    duration: "5N/6D",
    highlights: ["Marina Bay Sands", "Sentosa Island", "Gardens by the Bay"],
    overlayFrom: "oklch(0.20 0.15 190 / 0.95)",
    overlayMid: "oklch(0.40 0.18 190 / 0.6)"
  },
  {
    name: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    status: "coming-soon",
    tagline: "Tropical Paradise",
    price: "₹1,50,000",
    duration: "5N/6D",
    highlights: ["Overwater Villas", "Coral Reefs", "Crystal Lagoons"],
    overlayFrom: "oklch(0.20 0.18 210 / 0.95)",
    overlayMid: "oklch(0.45 0.20 210 / 0.6)"
  },
  {
    name: "Europe",
    country: "Multiple Countries",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
    status: "coming-soon",
    tagline: "Old World Charm",
    price: "₹2,50,000",
    duration: "10N/11D",
    highlights: ["Paris & Eiffel Tower", "Swiss Alps", "Rome & Colosseum"],
    overlayFrom: "oklch(0.22 0.15 300 / 0.95)",
    overlayMid: "oklch(0.45 0.20 290 / 0.6)"
  }
];
function InternationalToursPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative py-32 overflow-hidden text-white",
        style: {
          background: "linear-gradient(135deg, oklch(0.45 0.22 253) 0%, oklch(0.50 0.22 270) 40%, oklch(0.55 0.2 300) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute inset-0 opacity-15",
              style: {
                backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80')",
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
                background: "linear-gradient(135deg, oklch(0.45 0.22 253 / 0.88) 0%, oklch(0.55 0.2 300 / 0.80) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute -top-16 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl",
              style: { background: "oklch(0.7 0.2 300)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 blur-3xl",
              style: { background: "oklch(0.65 0.22 210)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7 },
              className: "max-w-2xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
                  " International Tours"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold mb-6 leading-tight", children: [
                  "Explore the",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(90deg, oklch(0.9 0.15 75), oklch(0.85 0.12 85))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      },
                      children: "World"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 text-lg leading-relaxed mb-8", children: "Beyond India's borders lies a world of breathtaking beauty. From tropical Bali to the glittering skyline of Dubai, let The Happy Miles Tourism take you on global adventures crafted for Indian travellers." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 w-fit", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-5 w-5 text-yellow-300" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold", children: [
                    destinations.length,
                    " international destinations available"
                  ] })
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
        className: "py-6 bg-card border-b border-border",
        "data-ocid": "intl-tours.stats_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-center", children: [
          { val: "6+", label: "Destinations", color: "text-blue-600" },
          {
            val: "1000+",
            label: "Int'l Travellers",
            color: "text-purple-600"
          },
          { val: "Visa", label: "Assistance", color: "text-indigo-600" },
          {
            val: "24/7",
            label: "Travel Support",
            color: "text-violet-600"
          }
        ].map(({ val, label, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-2xl font-bold ${color}`, children: val }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: label })
        ] }, label)) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              background: "linear-gradient(90deg, oklch(0.45 0.22 253), oklch(0.55 0.2 300))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            },
            children: "International Destinations"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "Discover our curated selection of global getaways, specially designed for Indian travellers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          "data-ocid": "intl-tours.list",
          children: destinations.map((dest, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: index * 0.1 },
              className: "group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
              "data-ocid": `intl-tours.item.${index + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-72 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: dest.image,
                      alt: dest.name,
                      className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0",
                      style: {
                        background: `linear-gradient(to top, ${dest.overlayFrom} 0%, ${dest.overlayMid} 50%, transparent 100%)`
                      }
                    }
                  ),
                  dest.status === "coming-soon" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white",
                      style: {
                        background: "linear-gradient(90deg, oklch(0.45 0.22 253), oklch(0.55 0.2 300))"
                      },
                      children: "Coming Soon"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white",
                      style: {
                        background: "linear-gradient(90deg, oklch(0.65 0.22 48), oklch(0.68 0.20 35))"
                      },
                      children: "Available Now"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 text-sm font-semibold uppercase tracking-widest mb-1", children: dest.country }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-display text-2xl font-bold", children: dest.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm italic mt-1", children: dest.tagline })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Starting from" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display text-xl font-bold",
                          style: {
                            background: "linear-gradient(90deg, oklch(0.45 0.22 253), oklch(0.55 0.2 300))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                          },
                          children: dest.price
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground border border-border rounded-full px-2 py-1", children: dest.duration })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 mb-4", children: dest.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "text-muted-foreground text-sm flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "h-1.5 w-1.5 rounded-full flex-shrink-0",
                            style: { background: "oklch(0.45 0.22 253)" }
                          }
                        ),
                        h
                      ]
                    },
                    h
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      size: "sm",
                      className: "w-full font-semibold text-white",
                      style: {
                        background: dest.status === "coming-soon" ? "linear-gradient(90deg, oklch(0.55 0.18 253), oklch(0.60 0.18 280))" : "linear-gradient(90deg, oklch(0.45 0.22 253), oklch(0.55 0.2 300))"
                      },
                      "data-ocid": `intl-tours.enquire.${index + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                        dest.status === "coming-soon" ? "Register Interest" : "Enquire Now",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-3.5 w-3.5" })
                      ] })
                    }
                  )
                ] })
              ]
            },
            dest.name
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 text-white relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.20 0.05 255) 0%, oklch(0.18 0.05 270) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-white mb-6", children: "Your Trusted Global Travel Partner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 text-lg leading-relaxed mb-10", children: "We handle every aspect of your international journey — from visa assistance and travel insurance to flights, hotels, and guided tours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5", children: [
            {
              label: "Visa Assistance",
              icon: "📌",
              grad: "from-blue-600 to-indigo-600"
            },
            {
              label: "Travel Insurance",
              icon: "🛡️",
              grad: "from-indigo-600 to-purple-600"
            },
            {
              label: "Group & Solo Tours",
              icon: "👥",
              grad: "from-purple-600 to-fuchsia-600"
            },
            {
              label: "24/7 Support",
              icon: "📞",
              grad: "from-fuchsia-600 to-pink-600"
            }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: `bg-gradient-to-br ${item.grad} rounded-2xl p-5 text-center`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl block mb-2", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-white text-sm", children: item.label })
              ]
            },
            item.label
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 text-white relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.45 0.22 253) 0%, oklch(0.55 0.2 300) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold mb-4", children: "Plan Your International Trip" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 text-lg mb-8", children: "Contact us to customise your dream international vacation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+919831398372",
                className: "inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-white/80 transition-colors",
                "data-ocid": "intl-tours.phone_link",
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
                style: { color: "oklch(0.45 0.22 253)" },
                "data-ocid": "intl-tours.contact_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                  "Send Enquiry ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                ] })
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  InternationalToursPage as default
};
