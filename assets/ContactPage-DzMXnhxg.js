import { r as reactExports, j as jsxRuntimeExports } from "./index-SaEUJ-ct.js";
import { L as Layout, u as ue } from "./Layout-BQiaAfqM.js";
import { B as Button } from "./button-Bx-8MXqo.js";
import { L as Label, I as Input, T as Textarea } from "./textarea-CmWG-PMw.js";
import { u as useForm, L as LoaderCircle } from "./index.esm-CHqQGln1.js";
import { m as motion } from "./proxy-CoJ5ZHuU.js";
const serviceOptions = [
  "Indian Tour",
  "International Tour",
  "Honeymoon Package",
  "Corporate Tour",
  "Hotel Booking",
  "Flight Booking",
  "Train Booking",
  "Forex Services",
  "Custom Package"
];
const contactInfo = [
  {
    emoji: "📞",
    label: "Phone",
    value: "+91 98313-98372",
    sub: "Call / WhatsApp",
    href: "tel:+919831398372",
    grad: "from-orange-500 via-red-500 to-pink-500"
  },
  {
    emoji: "✉️",
    label: "Email",
    value: "info@thehappymiles.in",
    sub: "We reply within 24h",
    href: "mailto:info@thehappymiles.in",
    grad: "from-teal-400 via-cyan-500 to-blue-500"
  },
  {
    emoji: "📍",
    label: "Address",
    value: "AVS House, 42/1A Gurupada Halder Road, Kolkata – 700026",
    sub: "West Bengal, India",
    href: "#",
    grad: "from-violet-500 via-purple-500 to-indigo-600"
  },
  {
    emoji: "🕙",
    label: "Hours",
    value: "10:00 AM – 10:00 PM",
    sub: "All Days Open",
    href: "#",
    grad: "from-yellow-400 via-amber-500 to-orange-500"
  }
];
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = async (_data) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
    ue.success("Message sent! We'll get back to you within 24 hours.");
    reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative py-32 text-white overflow-hidden",
        "data-ocid": "contact.header_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center",
              style: {
                backgroundImage: "url('/assets/generated/hero-india-travel.dim_1920x700.jpg')"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(135deg, oklch(0.3 0.18 190 / 0.92) 0%, oklch(0.3 0.22 48 / 0.75) 55%, oklch(0.35 0.2 35 / 0.88) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-80 h-80 rounded-full opacity-25 blur-3xl",
              style: { background: "oklch(0.6 0.18 190)" },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-20 blur-3xl",
              style: { background: "oklch(0.72 0.2 35)" },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 25 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-block px-5 py-1.5 rounded-full text-sm font-semibold mb-5 border border-white/30",
                    style: {
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)"
                    },
                    children: "✦ Get in Touch"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl font-bold mb-5 leading-tight", children: [
                  "Contact",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(90deg, oklch(0.85 0.2 85), oklch(0.75 0.18 190))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      },
                      children: "The Happy Miles"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 max-w-xl mx-auto text-xl", children: "Our travel experts are ready to help you plan your perfect India journey." })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14",
        style: {
          background: "linear-gradient(160deg, oklch(0.97 0.01 75) 0%, oklch(0.95 0.02 200) 100%)"
        },
        "data-ocid": "contact.info_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-display text-3xl font-bold",
                style: {
                  background: "linear-gradient(135deg, oklch(0.45 0.2 253), oklch(0.72 0.2 35))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                },
                children: "We'd Love to Hear From You"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 max-w-md mx-auto", children: "Whether you have a question, want to customise a tour, or need travel advice — reach out anytime." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto", children: contactInfo.map(
            ({ emoji, label, value, sub, href, grad }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.a,
              {
                href,
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: idx * 0.1 },
                className: `block bg-gradient-to-br ${grad} rounded-2xl p-6 text-white text-center shadow-xl hover:scale-105 transition-transform duration-300`,
                "data-ocid": `contact.info.${label.toLowerCase()}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-2xl",
                      role: "presentation",
                      "aria-hidden": "true",
                      children: emoji
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm uppercase tracking-wider mb-2 text-white/80", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm leading-relaxed", children: value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs mt-1", children: sub })
                ]
              },
              label
            )
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", "data-ocid": "contact.main_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-3xl overflow-hidden shadow-2xl",
        style: { border: "1px solid oklch(0.72 0.2 35 / 0.2)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "px-8 py-7 text-white",
              style: {
                background: "linear-gradient(135deg, oklch(0.45 0.2 253), oklch(0.6 0.2 300), oklch(0.35 0.22 48))"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: "Send Us an Enquiry" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 mt-1", children: "Fill in your details and we'll get back within 24 hours." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 bg-card", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center justify-center py-12 gap-4 text-center",
              "data-ocid": "contact.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-20 w-20 rounded-full flex items-center justify-center text-3xl text-white shadow-xl",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.6 0.18 190), oklch(0.45 0.2 253))"
                    },
                    children: "✓"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-2xl font-semibold text-foreground", children: "Message Received!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xs", children: "We'll get back to you at the email provided within 24 hours." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => setSubmitted(false),
                    className: "mt-2",
                    "data-ocid": "contact.new_message_button",
                    children: "Send Another Message"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit(onSubmit),
              className: "space-y-5",
              "data-ocid": "contact.form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-name", children: "Full Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "c-name",
                        placeholder: "Your full name",
                        ...register("name", {
                          required: "Name is required"
                        }),
                        className: errors.name ? "border-destructive" : "",
                        "data-ocid": "contact.name_input"
                      }
                    ),
                    errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-destructive text-xs",
                        "data-ocid": "contact.name_field_error",
                        children: errors.name.message
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-email", children: "Email Address *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "c-email",
                        type: "email",
                        placeholder: "your@email.com",
                        ...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^@]+@[^@]+\.[^@]+$/,
                            message: "Invalid email"
                          }
                        }),
                        className: errors.email ? "border-destructive" : "",
                        "data-ocid": "contact.email_input"
                      }
                    ),
                    errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-destructive text-xs",
                        "data-ocid": "contact.email_field_error",
                        children: errors.email.message
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-phone", children: "Phone Number *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "c-phone",
                        type: "tel",
                        placeholder: "+91 98313 98372",
                        ...register("phone", {
                          required: "Phone is required"
                        }),
                        className: errors.phone ? "border-destructive" : "",
                        "data-ocid": "contact.phone_input"
                      }
                    ),
                    errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-destructive text-xs",
                        "data-ocid": "contact.phone_field_error",
                        children: errors.phone.message
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-service", children: "Service Interest" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "c-service",
                        ...register("serviceInterest"),
                        className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                        "data-ocid": "contact.service_select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a service..." }),
                          serviceOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c-message", children: "Message *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      id: "c-message",
                      placeholder: "Tell us about your travel plans, preferred dates, number of people...",
                      rows: 5,
                      ...register("message", {
                        required: "Please enter your message"
                      }),
                      className: errors.message ? "border-destructive" : "",
                      "data-ocid": "contact.message_textarea"
                    }
                  ),
                  errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-destructive text-xs",
                      "data-ocid": "contact.message_field_error",
                      children: errors.message.message
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    className: "w-full font-bold py-6 text-base rounded-xl shadow-lg hover:scale-105 transition-transform duration-300",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.6 0.2 300), oklch(0.45 0.2 253))",
                      color: "white"
                    },
                    disabled: isSubmitting,
                    "data-ocid": "contact.submit_button",
                    children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
                      " ",
                      "Sending..."
                    ] }) : "Send Enquiry →"
                  }
                )
              ]
            }
          ) })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14",
        style: {
          background: "linear-gradient(160deg, oklch(0.96 0.02 75) 0%, oklch(0.94 0.02 190) 100%)"
        },
        "data-ocid": "contact.location_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-display text-3xl font-bold",
                style: {
                  background: "linear-gradient(135deg, oklch(0.6 0.18 190), oklch(0.72 0.2 35))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                },
                children: "Find Us in Kolkata"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "AVS House, 42/1A Gurupada Halder Road, Kolkata – 700026" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl p-1",
              style: {
                background: "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.6 0.2 300), oklch(0.45 0.2 253))"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/generated/tour-tajmahal.dim_600x400.jpg",
                  alt: "Kolkata office location",
                  className: "w-full h-64 object-cover"
                }
              ) })
            }
          )
        ] })
      }
    )
  ] });
}
export {
  ContactPage as default
};
