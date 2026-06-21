import { j as jsxRuntimeExports, L as Link, c as cn } from "./index-SaEUJ-ct.js";
import { B as Button } from "./button-Bx-8MXqo.js";
import { m as motion } from "./proxy-CoJ5ZHuU.js";
import { c as createLucideIcon, b as Clock, M as MapPin } from "./Layout-BQiaAfqM.js";
import { I as IndianRupee } from "./indian-rupee-CdxrdqRD.js";
import { A as ArrowRight } from "./arrow-right-YruP0H7h.js";
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
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
const BORDER_COLORS = [
  "border-l-[var(--color-saffron,oklch(0.75_0.18_70))]",
  "border-l-[var(--color-coral,oklch(0.68_0.19_28))]",
  "border-l-[var(--color-teal,oklch(0.65_0.14_195))]",
  "border-l-[var(--color-blue,oklch(0.55_0.18_265))]",
  "border-l-[var(--color-purple,oklch(0.60_0.22_300))]"
];
function TourCard({ tour, index = 0, className }) {
  const borderColor = BORDER_COLORS[index % BORDER_COLORS.length];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.08 },
      whileHover: { y: -6, transition: { duration: 0.2 } },
      className: cn(
        "group rounded-2xl overflow-hidden bg-card border border-border/60 border-l-4 shadow-md transition-all duration-300",
        borderColor,
        className
      ),
      style: {
        boxShadow: "0 4px 20px -4px rgba(0,0,0,0.1)"
      },
      "data-ocid": `tour.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden h-56", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: tour.image,
              alt: tour.name,
              className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[11px] font-bold shadow-sm",
              style: {
                background: "linear-gradient(135deg, oklch(0.65 0.14 195), oklch(0.55 0.18 265))"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                tour.duration
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-3 right-3 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full",
              style: {
                background: "linear-gradient(135deg, oklch(0.75 0.18 70), oklch(0.68 0.19 28))"
              },
              children: tour.category === "indian" ? "Indian Tour" : tour.category
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3 flex items-center gap-1 text-white text-sm drop-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 shrink-0 text-yellow-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-medium", children: tour.destinations.slice(0, 3).join(" · ") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-200", children: tour.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed", children: tour.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: tour.highlights.slice(0, 2).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "text-[11px] bg-primary/10 text-primary border border-primary/20 rounded-full px-2.5 py-0.5 font-medium flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-2.5 w-2.5" }),
                h
              ]
            },
            h
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-border/50 pt-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5", children: "Starting from" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-0.5 font-bold text-xl",
                  style: {
                    background: "linear-gradient(90deg, oklch(0.75 0.18 70), oklch(0.68 0.19 28))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      IndianRupee,
                      {
                        className: "h-4 w-4",
                        style: { WebkitTextFillColor: "initial" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tour.price.toLocaleString("en-IN") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs font-normal ml-0.5",
                        style: {
                          background: "none",
                          WebkitTextFillColor: "var(--color-muted-foreground, #888)"
                        },
                        children: "/person"
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-[10px] font-bold text-white px-2.5 py-1 rounded-full",
                style: {
                  background: "linear-gradient(135deg, oklch(0.65 0.14 195), oklch(0.55 0.18 265))"
                },
                children: "Best Value"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                variant: "outline",
                size: "sm",
                className: "flex-1 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/tour/$id",
                    params: { id: tour.id },
                    "data-ocid": `tour.view_details.${index + 1}`,
                    children: "View Details"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/tour/$id",
                params: { id: tour.id },
                hash: "enquiry",
                className: "flex-1 flex items-center justify-center gap-1 text-sm font-semibold text-white rounded-md px-3 py-1.5 shadow-sm hover:opacity-90 hover:shadow-md transition-all duration-200",
                style: {
                  background: "linear-gradient(135deg, oklch(0.75 0.18 70), oklch(0.68 0.19 28))"
                },
                "data-ocid": `tour.book_now.${index + 1}`,
                children: [
                  "Book Now ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  TourCard as T
};
