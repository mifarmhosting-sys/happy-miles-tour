import { j as jsxRuntimeExports, L as Link } from "./index-SaEUJ-ct.js";
import { c as createLucideIcon, L as Layout, M as MapPin, P as Phone } from "./Layout-BQiaAfqM.js";
import { B as Button } from "./button-Bx-8MXqo.js";
import { m as motion } from "./proxy-CoJ5ZHuU.js";
import { A as ArrowLeft } from "./arrow-left-DGdp9vaS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("house", __iconNode);
function NotFoundPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "min-h-[70vh] flex items-center justify-center bg-background py-20",
      "data-ocid": "not_found.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.5 },
            className: "mb-8",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[10rem] sm:text-[14rem] font-extrabold text-muted/60 leading-none select-none", children: "404" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-10 w-10 text-primary" }) }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.15 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground mb-4", children: "Looks Like You're Off the Map!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg mx-auto", children: "The page you're looking for doesn't exist. Don't worry — our expert team can help you find the perfect destination instead." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    size: "lg",
                    className: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 transition-smooth",
                    "data-ocid": "not_found.home_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "mr-2 h-4 w-4" }),
                      "Back to Home"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    size: "lg",
                    variant: "outline",
                    className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 transition-smooth",
                    "data-ocid": "not_found.packages_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/packages", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                      "View Tour Packages"
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-muted/40 rounded-2xl p-6 border border-border",
                  "data-ocid": "not_found.quick_links",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-4", children: "Popular Destinations" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: [
                      { label: "Himachal Pradesh", id: "himachal-hills" },
                      { label: "Shimla & Manali", id: "shimla-manali" },
                      { label: "Uttarakhand", id: "uttarakhand-divine" },
                      { label: "Chardham Yatra", id: "chardham-yatra" },
                      { label: "Goa Beaches", id: "goa-beaches" },
                      { label: "Kerala Backwaters", id: "kerala-backwaters" }
                    ].map(({ label, id }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        asChild: true,
                        variant: "ghost",
                        size: "sm",
                        className: "text-primary hover:bg-primary/10 transition-smooth",
                        "data-ocid": `not_found.quick_link.${id}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tour/$id", params: { id }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 mr-1" }),
                          label
                        ] })
                      },
                      id
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "tel:+919831398372",
                        className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors",
                        "data-ocid": "not_found.phone_link",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
                          "Need help? Call us: +91 98313 98372"
                        ]
                      }
                    ) })
                  ]
                }
              )
            ]
          }
        )
      ] }) })
    }
  ) });
}
export {
  NotFoundPage as default
};
