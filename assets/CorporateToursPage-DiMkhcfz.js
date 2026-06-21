import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-SaEUJ-ct.js";
import { c as createLucideIcon, L as Layout, P as Phone } from "./Layout-BQiaAfqM.js";
import { B as Button } from "./button-Bx-8MXqo.js";
import { L as Label, I as Input, T as Textarea } from "./textarea-CmWG-PMw.js";
import { m as motion } from "./proxy-CoJ5ZHuU.js";
import { U as Users } from "./users-EZ1IOBo_.js";
import { C as CircleCheck } from "./circle-check-B9gbdcye.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode);
const services = [
  {
    icon: Building2,
    title: "Conference Travel",
    desc: "End-to-end travel management for corporate conferences, seminars, and business summits. We handle flights, hotels, and local logistics.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    color1: "oklch(0.20 0.15 190 / 0.95)",
    color2: "oklch(0.45 0.18 210 / 0.6)"
  },
  {
    icon: Users,
    title: "Team Outings",
    desc: "Refreshing team outings that strengthen bonds — from local day trips to multi-day escapes across India's most scenic destinations.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    color1: "oklch(0.20 0.15 253 / 0.95)",
    color2: "oklch(0.45 0.20 253 / 0.6)"
  },
  {
    icon: Briefcase,
    title: "Corporate Retreats",
    desc: "Premium resort-based retreats with dedicated event spaces, outdoor activities, and gala dinner arrangements.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    color1: "oklch(0.18 0.12 230 / 0.95)",
    color2: "oklch(0.40 0.16 230 / 0.6)"
  },
  {
    icon: Building2,
    title: "MICE Services",
    desc: "Meetings, Incentives, Conferences & Exhibitions — full-spectrum event travel management with dedicated on-ground coordinators.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    color1: "oklch(0.20 0.18 270 / 0.95)",
    color2: "oklch(0.45 0.18 270 / 0.6)"
  }
];
const benefits = [
  {
    title: "Dedicated Account Manager",
    desc: "A single point of contact who understands your organisation's travel needs and preferences."
  },
  {
    title: "Group Discounts",
    desc: "Exclusive rates for bulk bookings on hotels, flights, and transport — the larger the group, the bigger the savings."
  },
  {
    title: "Flexible Billing",
    desc: "GST invoices, monthly billing cycles, and post-trip settlement options to fit your company's finance workflow."
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock helpline for any travel emergencies, changes, or on-trip assistance — we're always just a call away."
  },
  {
    title: "Custom Itineraries",
    desc: "Every corporate trip is uniquely planned around your objectives, team size, budget, and preferred activities."
  },
  {
    title: "Safety First",
    desc: "Vetted vehicles, verified accommodations, and fully briefed guides ensure your team travels safe at every step."
  }
];
function CorporateToursPage() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    groupSize: "",
    destination: "",
    travelDate: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative py-32 overflow-hidden text-white",
        style: {
          background: "linear-gradient(135deg, oklch(0.55 0.18 190) 0%, oklch(0.50 0.20 210) 40%, oklch(0.45 0.22 253) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute inset-0 opacity-15",
              style: {
                backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')",
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
                background: "linear-gradient(135deg, oklch(0.55 0.18 190 / 0.88) 0%, oklch(0.45 0.22 253 / 0.82) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-20 blur-3xl",
              style: { background: "oklch(0.7 0.2 190)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute -bottom-10 right-10 w-60 h-60 rounded-full opacity-15 blur-3xl",
              style: { background: "oklch(0.65 0.2 253)" }
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }),
                  " Corporate Travel"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold mb-6 leading-tight", children: [
                  "Corporate Travel",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(90deg, oklch(0.95 0.15 75), oklch(0.90 0.15 180))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      },
                      children: "Solutions"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 text-lg leading-relaxed mb-8", children: "From high-level executive retreats to large-scale team outings, The Happy Miles Tourism delivers seamless, professionally managed corporate travel experiences that go beyond expectations." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      className: "bg-white font-bold hover:bg-white/90 shadow-xl transition-all hover:-translate-y-0.5",
                      style: { color: "oklch(0.50 0.20 210)" },
                      onClick: () => {
                        var _a;
                        return (_a = document.getElementById("corp-enquiry")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                      },
                      "data-ocid": "corporate.enquire_button",
                      children: "Get a Quote"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      variant: "outline",
                      size: "lg",
                      className: "border-white/60 text-white hover:bg-white/15 bg-white/10 backdrop-blur-sm",
                      "data-ocid": "corporate.contact_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact Us" })
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
        "data-ocid": "corporate.stats_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [
          {
            val: "200+",
            label: "Corporate Clients",
            color: "text-teal-600",
            bg: "bg-teal-500/10"
          },
          {
            val: "5000+",
            label: "Employees Served",
            color: "text-cyan-600",
            bg: "bg-cyan-500/10"
          },
          {
            val: "50+",
            label: "Partner Hotels",
            color: "text-blue-600",
            bg: "bg-blue-500/10"
          },
          {
            val: "15+",
            label: "Years Experience",
            color: "text-indigo-600",
            bg: "bg-indigo-500/10"
          }
        ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: `rounded-xl p-4 text-center ${s.bg}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display text-3xl font-bold ${s.color}`, children: s.val }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: s.label })
            ]
          },
          s.label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              background: "linear-gradient(90deg, oklch(0.55 0.18 190), oklch(0.45 0.22 253))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            },
            children: "Our Corporate Travel Services"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "Comprehensive travel solutions built around your business goals." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
          "data-ocid": "corporate.services_list",
          children: services.map((svc, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: index * 0.1 },
              className: "group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
              "data-ocid": `corporate.service.${index + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: svc.image,
                      alt: svc.title,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0",
                      style: {
                        background: `linear-gradient(to top, ${svc.color1} 0%, ${svc.color2} 50%, transparent 100%)`
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-white/20 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(svc.icon, { className: "h-5 w-5 text-white" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-display text-xl font-bold", children: svc.title })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: svc.desc }) })
              ]
            },
            svc.title
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.97 0.02 210) 0%, oklch(0.97 0.01 240) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: {
                  background: "linear-gradient(90deg, oklch(0.55 0.18 190), oklch(0.45 0.22 253))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                },
                children: "Why Corporates Choose Us"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Benefits designed to make corporate travel effortless and cost-effective." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: benefits.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              className: "bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "p-2 rounded-xl flex-shrink-0",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.55 0.18 190), oklch(0.45 0.22 253))"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-2", children: b.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: b.desc })
                ] })
              ] })
            },
            b.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "corp-enquiry", className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            style: {
              background: "linear-gradient(90deg, oklch(0.55 0.18 190), oklch(0.45 0.22 253))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            },
            children: "Request a Corporate Travel Quote"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Share your requirements and our corporate travel consultant will respond within 2 business hours." })
      ] }),
      submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          className: "rounded-2xl p-10 text-center text-white",
          style: {
            background: "linear-gradient(135deg, oklch(0.55 0.18 190), oklch(0.45 0.22 253))"
          },
          "data-ocid": "corporate.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl block mb-4", children: "🏢" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-2", children: "Quote Request Received!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85", children: "Our corporate travel team will contact you within 2 business hours." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-bold text-lg", children: "📞 98313-98372" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "bg-card border border-border rounded-2xl p-8 space-y-5 shadow-sm",
          "data-ocid": "corporate.enquiry_form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "corp-name", children: "Contact Person *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "corp-name",
                    value: formData.name,
                    onChange: (e) => setFormData((p) => ({ ...p, name: e.target.value })),
                    required: true,
                    placeholder: "Your name",
                    "data-ocid": "corporate.name_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "corp-company", children: "Company Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "corp-company",
                    value: formData.company,
                    onChange: (e) => setFormData((p) => ({ ...p, company: e.target.value })),
                    required: true,
                    placeholder: "Company Pvt. Ltd.",
                    "data-ocid": "corporate.company_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "corp-email", children: "Business Email *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "corp-email",
                    type: "email",
                    value: formData.email,
                    onChange: (e) => setFormData((p) => ({ ...p, email: e.target.value })),
                    required: true,
                    placeholder: "you@company.com",
                    "data-ocid": "corporate.email_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "corp-phone", children: "Phone Number *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "corp-phone",
                    value: formData.phone,
                    onChange: (e) => setFormData((p) => ({ ...p, phone: e.target.value })),
                    required: true,
                    placeholder: "+91 XXXXX XXXXX",
                    "data-ocid": "corporate.phone_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "corp-group", children: "Group Size" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "corp-group",
                    value: formData.groupSize,
                    onChange: (e) => setFormData((p) => ({ ...p, groupSize: e.target.value })),
                    placeholder: "e.g. 25 employees",
                    "data-ocid": "corporate.group_size_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "corp-dest", children: "Preferred Destination" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "corp-dest",
                    value: formData.destination,
                    onChange: (e) => setFormData((p) => ({
                      ...p,
                      destination: e.target.value
                    })),
                    placeholder: "Goa, Ooty, Manali…",
                    "data-ocid": "corporate.destination_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "corp-date", children: "Preferred Travel Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "corp-date",
                    type: "date",
                    value: formData.travelDate,
                    onChange: (e) => setFormData((p) => ({ ...p, travelDate: e.target.value })),
                    "data-ocid": "corporate.date_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "corp-msg", children: "Additional Requirements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "corp-msg",
                  value: formData.message,
                  onChange: (e) => setFormData((p) => ({ ...p, message: e.target.value })),
                  placeholder: "Activities, budget, special requirements…",
                  rows: 3,
                  "data-ocid": "corporate.message_textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                size: "lg",
                className: "w-full font-bold text-white",
                style: {
                  background: "linear-gradient(90deg, oklch(0.55 0.18 190), oklch(0.45 0.22 253))"
                },
                "data-ocid": "corporate.submit_button",
                children: "Submit Quote Request"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Or reach us at:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:+919831398372",
            className: "inline-flex items-center gap-2 text-xl font-bold mt-1",
            style: { color: "oklch(0.50 0.20 210)" },
            "data-ocid": "corporate.phone_link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
              " 98313-98372"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  CorporateToursPage as default
};
