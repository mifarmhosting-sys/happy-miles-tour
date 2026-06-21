import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-SaEUJ-ct.js";
import { c as createLucideIcon, L as Layout } from "./Layout-BQiaAfqM.js";
import { B as Button } from "./button-Bx-8MXqo.js";
import { S as Star } from "./star-BpXHg6Ce.js";
import { S as Shield } from "./shield-C2U5cXo1.js";
import { C as CircleCheckBig } from "./circle-check-big-Car8aL-L.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode);
const benefits = [
  {
    icon: Wallet,
    emoji: "💰",
    title: "Best Rate Guarantee",
    desc: "We match or beat any published hotel rate. You'll never overpay when you book through us.",
    gradient: "linear-gradient(135deg, oklch(0.70 0.22 48) 0%, oklch(0.72 0.2 35) 100%)",
    shadow: "0 8px 32px oklch(0.70 0.22 48 / 0.35)"
  },
  {
    icon: Star,
    emoji: "⭐",
    title: "Hand-picked Hotels",
    desc: "Every property is personally vetted by our team for quality, comfort, and value.",
    gradient: "linear-gradient(135deg, oklch(0.45 0.2 253) 0%, oklch(0.6 0.2 300) 100%)",
    shadow: "0 8px 32px oklch(0.45 0.2 253 / 0.35)"
  },
  {
    icon: Shield,
    emoji: "🛡️",
    title: "24/7 Support",
    desc: "Our travel experts are available round-the-clock to assist with any queries or changes.",
    gradient: "linear-gradient(135deg, oklch(0.60 0.18 190) 0%, oklch(0.45 0.2 253) 100%)",
    shadow: "0 8px 32px oklch(0.60 0.18 190 / 0.35)"
  },
  {
    icon: CircleCheckBig,
    emoji: "✅",
    title: "Free Cancellation",
    desc: "Flexible booking options with free cancellation on select properties.",
    gradient: "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.70 0.22 48) 100%)",
    shadow: "0 8px 32px oklch(0.72 0.2 35 / 0.35)"
  }
];
const stats = [
  { icon: "🏨", value: "500+", label: "Hotels Listed" },
  { icon: "🌟", value: "15+", label: "Years Experience" },
  { icon: "😊", value: "10K+", label: "Happy Guests" },
  { icon: "📍", value: "50+", label: "Destinations" }
];
const popularDestinations = [
  "🏖️ Goa",
  "🏔️ Shimla",
  "🌴 Kerala",
  "🏯 Jaipur",
  "🗼 Delhi",
  "🌆 Mumbai",
  "⛰️ Manali",
  "🕌 Agra"
];
function HotelsPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "Hotel Booking",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[520px] flex items-center justify-center overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.70 0.22 48) 40%, oklch(0.75 0.18 55) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "radial-gradient(ellipse at top right, oklch(0.80 0.15 60 / 0.4) 0%, transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.45 0.2 253 / 0.3) 0%, transparent 60%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.07]",
              style: {
                backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
                backgroundSize: "24px 24px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-4 py-24 max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🏨" }),
              " Our Services"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl font-bold text-white mb-5 leading-tight drop-shadow-lg", children: "Hotel Bookings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed", children: "Find the best hotel deals for your travel. We partner with premium hotels across India and internationally." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: popularDestinations.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "bg-white/20 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/25 hover:bg-white/30 transition-colors cursor-default",
                children: d
              },
              d
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: {
          background: "linear-gradient(90deg, oklch(0.45 0.2 253) 0%, oklch(0.6 0.2 300) 50%, oklch(0.70 0.22 48) 100%)"
        },
        className: "py-8",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-1", children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl md:text-3xl font-bold text-white font-display", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-sm font-medium", children: s.label })
        ] }, s.label)) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-display text-4xl font-bold mb-4",
            style: {
              background: "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.72 0.2 35), oklch(0.70 0.22 48))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            },
            children: "Why Book Hotels With Us?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-lg", children: "Over 15 years of experience connecting travellers with the finest stays." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-6 text-center text-white transition-all duration-300 hover:-translate-y-2 cursor-default",
          style: { background: b.gradient, boxShadow: b.shadow },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: b.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg mb-2", children: b.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 text-sm leading-relaxed", children: b.desc })
          ]
        },
        b.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-20 relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.70 0.22 48) 50%, oklch(0.75 0.18 55) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-10",
              style: {
                backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold text-white mb-3", children: "Send an Enquiry" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-lg", children: "Fill in your details and we'll get back to you within 2 hours." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display text-2xl font-bold mb-6",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.70 0.22 48))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    },
                    children: "Book Your Stay"
                  }
                ),
                submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": "hotels.success_state",
                    className: "rounded-2xl p-8 text-center",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.72 0.2 35 / 0.1), oklch(0.70 0.22 48 / 0.1))"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🎉" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "font-display text-xl font-bold mb-2",
                          style: {
                            background: "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.70 0.22 48))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          },
                          children: "Enquiry Received!"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-4", children: [
                        "Our team will call you at ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: form.phone }),
                        " ",
                        "shortly. Thank you!"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "outline",
                          onClick: () => setSubmitted(false),
                          type: "button",
                          "data-ocid": "hotels.secondary_button",
                          children: "Send Another"
                        }
                      )
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "form",
                  {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    "data-ocid": "hotels.form",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            className: "block text-sm font-semibold text-foreground mb-1.5",
                            htmlFor: "hotel-name",
                            children: "Full Name *"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "hotel-name",
                            name: "name",
                            required: true,
                            value: form.name,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition",
                            placeholder: "Your full name",
                            "data-ocid": "hotels.input"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            className: "block text-sm font-semibold text-foreground mb-1.5",
                            htmlFor: "hotel-email",
                            children: "Email Address *"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "hotel-email",
                            name: "email",
                            type: "email",
                            required: true,
                            value: form.email,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition",
                            placeholder: "your@email.com",
                            "data-ocid": "hotels.email_input"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            className: "block text-sm font-semibold text-foreground mb-1.5",
                            htmlFor: "hotel-phone",
                            children: "Phone Number *"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "hotel-phone",
                            name: "phone",
                            type: "tel",
                            required: true,
                            value: form.phone,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition",
                            placeholder: "+91 98765 43210",
                            "data-ocid": "hotels.phone_input"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            className: "block text-sm font-semibold text-foreground mb-1.5",
                            htmlFor: "hotel-service",
                            children: "Service Interest"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "select",
                          {
                            id: "hotel-service",
                            name: "serviceInterest",
                            value: form.serviceInterest,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition",
                            "data-ocid": "hotels.select",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Hotel Booking" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Hotel + Tour Package" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Corporate Hotel Stay" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Honeymoon Hotel Package" })
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            className: "block text-sm font-semibold text-foreground mb-1.5",
                            htmlFor: "hotel-msg",
                            children: "Travel Details / Notes"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "textarea",
                          {
                            id: "hotel-msg",
                            name: "message",
                            rows: 4,
                            value: form.message,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition resize-none",
                            placeholder: "Destination, dates, no. of guests, preferences...",
                            "data-ocid": "hotels.textarea"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "submit",
                          className: "w-full font-bold py-3 text-base rounded-xl text-white border-0",
                          style: {
                            background: "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.70 0.22 48))"
                          },
                          "data-ocid": "hotels.submit_button",
                          children: "🏨 Send Enquiry"
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-white mb-6", children: "Contact Our Hotel Desk" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 text-xl", children: "📞" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm", children: "Call / WhatsApp" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: "tel:+919831398372",
                            className: "text-white font-bold text-lg hover:text-white/80 transition-colors",
                            "data-ocid": "hotels.phone_link",
                            children: "+91 98313-98372"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 text-xl", children: "🕐" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm", children: "Office Hours" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold", children: "10:00 AM – 10:00 PM" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs", children: "Mon – Sun, All Days" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 text-xl", children: "📍" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm", children: "Visit Our Office" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold", children: "AVS House" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm", children: "42/1A Gurupada Halder Road, Kolkata – 700026" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919831398372", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      className: "w-full mt-6 font-bold py-3 rounded-xl text-foreground border-0 bg-white hover:bg-white/90",
                      type: "button",
                      "data-ocid": "hotels.cta_button",
                      children: "📞 Call Now for Best Rates"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold mb-2", children: "🌟 Looking for a complete trip?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 text-sm mb-4", children: "Combine your hotel booking with a full tour package and save more." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/packages", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      className: "font-semibold rounded-xl bg-white/20 border border-white/40 text-white hover:bg-white/30",
                      "data-ocid": "hotels.packages_link",
                      children: "Explore Tour Packages →"
                    }
                  ) })
                ] })
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  HotelsPage as default
};
