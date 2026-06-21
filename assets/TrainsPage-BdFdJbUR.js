import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-SaEUJ-ct.js";
import { L as Layout } from "./Layout-BQiaAfqM.js";
import { B as Button } from "./button-Bx-8MXqo.js";
const benefits = [
  {
    emoji: "🎟️",
    title: "Tatkal & General Booking",
    desc: "Book regular and Tatkal tickets across all classes — Sleeper, 3AC, 2AC, 1AC, and more.",
    gradient: "linear-gradient(135deg, oklch(0.60 0.18 190) 0%, oklch(0.55 0.18 200) 100%)",
    shadow: "0 8px 32px oklch(0.60 0.18 190 / 0.35)"
  },
  {
    emoji: "🗺️",
    title: "Pan-India Routes",
    desc: "All major Indian Railway routes covered — express, superfast, and special trains across zones.",
    gradient: "linear-gradient(135deg, oklch(0.45 0.2 253) 0%, oklch(0.60 0.18 190) 100%)",
    shadow: "0 8px 32px oklch(0.45 0.2 253 / 0.35)"
  },
  {
    emoji: "🧳",
    title: "Baggage Assistance",
    desc: "We advise on luggage allowances, parcel booking, and large-group baggage coordination.",
    gradient: "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.60 0.18 190) 100%)",
    shadow: "0 8px 32px oklch(0.72 0.2 35 / 0.35)"
  },
  {
    emoji: "⚡",
    title: "Instant Confirmation",
    desc: "Speedy booking with instant PNR and ticket delivery to your email or WhatsApp.",
    gradient: "linear-gradient(135deg, oklch(0.6 0.2 300) 0%, oklch(0.60 0.18 190) 100%)",
    shadow: "0 8px 32px oklch(0.6 0.2 300 / 0.35)"
  }
];
const stats = [
  { icon: "🚂", value: "1000+", label: "Train Routes" },
  { icon: "📍", value: "500+", label: "Stations" },
  { icon: "🎟️", value: "50K+", label: "Tickets Booked" },
  { icon: "⭐", value: "4.8★", label: "Customer Rating" }
];
const popularRoutes = [
  "🚂 Kolkata → Delhi",
  "🚂 Kolkata → Mumbai",
  "🚂 Kolkata → Chennai",
  "🚂 Kolkata → Puri",
  "🚂 Kolkata → Darjeeling",
  "🚂 Delhi → Agra"
];
function TrainsPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "Train Reservation",
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
          background: "linear-gradient(135deg, oklch(0.30 0.15 185) 0%, oklch(0.60 0.18 190) 40%, oklch(0.50 0.20 200) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "radial-gradient(ellipse at top right, oklch(0.70 0.18 190 / 0.5) 0%, transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.45 0.2 253 / 0.4) 0%, transparent 60%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.06]",
              style: {
                backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
                backgroundSize: "24px 24px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-4 py-24 max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🚂" }),
              " Our Services"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl font-bold text-white mb-5 leading-tight drop-shadow-lg", children: "Train Bookings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed", children: "Book train tickets with expert assistance — Tatkal, group bookings, and special journey planning across India." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: popularRoutes.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "bg-white/20 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/25 hover:bg-white/30 transition-colors cursor-default",
                children: r
              },
              r
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: {
          background: "linear-gradient(90deg, oklch(0.60 0.18 190) 0%, oklch(0.45 0.2 253) 50%, oklch(0.72 0.2 35) 100%)"
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
              background: "linear-gradient(135deg, oklch(0.60 0.18 190), oklch(0.45 0.2 253))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            },
            children: "Why Book Trains With Us?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-lg", children: "Hassle-free train booking with expert guidance and real-time support." })
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
          background: "linear-gradient(135deg, oklch(0.30 0.15 185) 0%, oklch(0.60 0.18 190) 50%, oklch(0.45 0.2 253) 100%)"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold text-white mb-3", children: "Book Your Train Journey" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-lg", children: "Share your travel details — we'll handle the booking for you." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display text-2xl font-bold mb-6",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.60 0.18 190), oklch(0.45 0.2 253))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    },
                    children: "Train Ticket Enquiry"
                  }
                ),
                submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": "trains.success_state",
                    className: "rounded-2xl p-8 text-center",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.60 0.18 190 / 0.1), oklch(0.45 0.2 253 / 0.1))"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🎉" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "font-display text-xl font-bold mb-2",
                          style: {
                            background: "linear-gradient(135deg, oklch(0.60 0.18 190), oklch(0.45 0.2 253))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          },
                          children: "Enquiry Received!"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-4", children: [
                        "We'll call ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: form.phone }),
                        " with booking options. Expect a call within 2 hours!"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "outline",
                          onClick: () => setSubmitted(false),
                          type: "button",
                          "data-ocid": "trains.secondary_button",
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
                    "data-ocid": "trains.form",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            className: "block text-sm font-semibold text-foreground mb-1.5",
                            htmlFor: "train-name",
                            children: "Full Name *"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "train-name",
                            name: "name",
                            required: true,
                            value: form.name,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition",
                            placeholder: "Your full name",
                            "data-ocid": "trains.input"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            className: "block text-sm font-semibold text-foreground mb-1.5",
                            htmlFor: "train-email",
                            children: "Email Address *"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "train-email",
                            name: "email",
                            type: "email",
                            required: true,
                            value: form.email,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition",
                            placeholder: "your@email.com",
                            "data-ocid": "trains.email_input"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            className: "block text-sm font-semibold text-foreground mb-1.5",
                            htmlFor: "train-phone",
                            children: "Phone Number *"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "train-phone",
                            name: "phone",
                            type: "tel",
                            required: true,
                            value: form.phone,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition",
                            placeholder: "+91 98765 43210",
                            "data-ocid": "trains.phone_input"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            className: "block text-sm font-semibold text-foreground mb-1.5",
                            htmlFor: "train-service",
                            children: "Service Interest"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "select",
                          {
                            id: "train-service",
                            name: "serviceInterest",
                            value: form.serviceInterest,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition",
                            "data-ocid": "trains.select",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Train Ticket Booking" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Tatkal Booking" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Group Train Booking" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Sleeper Class" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "AC Class (1AC/2AC/3AC)" })
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            className: "block text-sm font-semibold text-foreground mb-1.5",
                            htmlFor: "train-msg",
                            children: "Route, Date & Passenger Details"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "textarea",
                          {
                            id: "train-msg",
                            name: "message",
                            rows: 4,
                            value: form.message,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition resize-none",
                            placeholder: "E.g. Kolkata to Delhi, 20th July, 3 passengers, 2AC...",
                            "data-ocid": "trains.textarea"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "submit",
                          className: "w-full font-bold py-3 text-base rounded-xl text-white border-0",
                          style: {
                            background: "linear-gradient(135deg, oklch(0.60 0.18 190), oklch(0.45 0.2 253))"
                          },
                          "data-ocid": "trains.submit_button",
                          children: "🚂 Book Train Ticket"
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-white mb-6", children: "Contact Our Train Desk" }),
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
                            "data-ocid": "trains.phone_link",
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
                      "data-ocid": "trains.cta_button",
                      children: "📞 Call to Book Tickets"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold mb-2", children: "🗺️ Planning a complete tour?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 text-sm mb-4", children: "Combine your train journey with hotels and sightseeing for a seamless trip." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/packages", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      className: "font-semibold rounded-xl bg-white/20 border border-white/40 text-white hover:bg-white/30",
                      "data-ocid": "trains.packages_link",
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
  TrainsPage as default
};
