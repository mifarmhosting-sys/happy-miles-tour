import { r as reactExports, j as jsxRuntimeExports } from "./index-SaEUJ-ct.js";
import { L as Layout, X } from "./Layout-BQiaAfqM.js";
import { M as MotionConfigContext, i as isHTMLElement, u as useConstant, P as PresenceContext, a as usePresence, b as useIsomorphicLayoutEffect, L as LayoutGroupContext, m as motion } from "./proxy-CoJ5ZHuU.js";
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
      const parent = element.offsetParent;
      const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
      const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
      const computedStyle = getComputedStyle(element);
      const size = this.props.sizeRef.current;
      size.height = parseFloat(computedStyle.height);
      size.width = parseFloat(computedStyle.width);
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
      size.right = parentWidth - size.width - size.left;
      size.bottom = parentHeight - size.height - size.top;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
  var _a;
  const id = reactExports.useId();
  const ref = reactExports.useRef(null);
  const size = reactExports.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  const { nonce } = reactExports.useContext(MotionConfigContext);
  const childRef = ((_a = children.props) == null ? void 0 : _a.ref) ?? (children == null ? void 0 : children.ref);
  const composedRef = useComposedRefs(ref, childRef);
  reactExports.useInsertionEffect(() => {
    const { width, height, top, left, right, bottom } = size.current;
    if (isPresent || pop === false || !ref.current || !width || !height)
      return;
    const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
    const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
    ref.current.dataset.motionPopId = id;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    const parent = root ?? document.head;
    parent.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
    }
    return () => {
      var _a2;
      (_a2 = ref.current) == null ? void 0 : _a2.removeAttribute("data-motion-pop-id");
      if (parent.contains(style)) {
        parent.removeChild(style);
      }
    };
  }, [isPresent]);
  return jsxRuntimeExports.jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, pop, children: pop === false ? children : reactExports.cloneElement(children, { ref: composedRef }) });
}
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id = reactExports.useId();
  let isReusedContext = true;
  let context = reactExports.useMemo(() => {
    isReusedContext = false;
    return {
      id,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  }, [isPresent, presenceChildren, onExitComplete]);
  if (presenceAffectsLayout && isReusedContext) {
    context = { ...context };
  }
  reactExports.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  reactExports.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  children = jsxRuntimeExports.jsx(PopChild, { pop: mode === "popLayout", isPresent, anchorX, anchorY, root, children });
  return jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  reactExports.Children.forEach(children, (child) => {
    if (reactExports.isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = reactExports.useRef(true);
  const pendingPresentChildren = reactExports.useRef(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const exitingComponents = reactExports.useRef(/* @__PURE__ */ new Set());
  const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
        exitingComponents.current.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  const { forceRender } = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitingComponents.current.has(key)) {
        return;
      }
      if (exitComplete.has(key)) {
        exitingComponents.current.add(key);
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender == null ? void 0 : forceRender();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && (safeToRemove == null ? void 0 : safeToRemove());
        onExitComplete && onExitComplete();
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
  }) });
};
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    title: "Taj Mahal at Sunrise",
    location: "Agra, Uttar Pradesh",
    category: "Heritage"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
    title: "Shimla Snow Valley",
    location: "Shimla, Himachal Pradesh",
    category: "Mountains"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    title: "Kerala Backwaters",
    location: "Alleppey, Kerala",
    category: "Beaches"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    title: "Himalayan Peaks",
    location: "Manali, Himachal Pradesh",
    category: "Mountains"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
    title: "Goa Beach Sunset",
    location: "Calangute, Goa",
    category: "Beaches"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
    title: "Vaishno Devi Temple",
    location: "Katra, J&K",
    category: "Pilgrimage"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    title: "Rajasthan Palace",
    location: "Jaipur, Rajasthan",
    category: "Heritage"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1601923393931-8e06adf1b44e?auto=format&fit=crop&w=800&q=80",
    title: "Rohtang Pass",
    location: "Kullu, Himachal Pradesh",
    category: "Mountains"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80",
    title: "Palolem Beach",
    location: "South Goa",
    category: "Beaches"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=800&q=80",
    title: "Kedarnath Temple",
    location: "Rudraprayag, Uttarakhand",
    category: "Pilgrimage"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1565019011521-b0575012ae9f?auto=format&fit=crop&w=800&q=80",
    title: "Dal Lake Shikara",
    location: "Srinagar, Kashmir",
    category: "Mountains"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
    title: "Humayun's Tomb",
    location: "New Delhi",
    category: "Heritage"
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1562679299-bf87b6e69e1b?auto=format&fit=crop&w=800&q=80",
    title: "Rishikesh Ghats",
    location: "Rishikesh, Uttarakhand",
    category: "Pilgrimage"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    title: "Valley of Flowers",
    location: "Chamoli, Uttarakhand",
    category: "Mountains"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    title: "Udaipur Lake Palace",
    location: "Udaipur, Rajasthan",
    category: "Heritage"
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=800&q=80",
    title: "Kovalam Lighthouse Beach",
    location: "Kovalam, Kerala",
    category: "Beaches"
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1609766857246-c23bf0e16bc4?auto=format&fit=crop&w=800&q=80",
    title: "Haridwar Ganga Aarti",
    location: "Haridwar, Uttarakhand",
    category: "Pilgrimage"
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    title: "Spiti Valley",
    location: "Spiti, Himachal Pradesh",
    category: "Mountains"
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    title: "Amber Fort",
    location: "Jaipur, Rajasthan",
    category: "Heritage"
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?auto=format&fit=crop&w=800&q=80",
    title: "Dudhsagar Waterfall",
    location: "Goa-Karnataka Border",
    category: "Beaches"
  },
  {
    id: 21,
    src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    title: "Golden Temple",
    location: "Amritsar, Punjab",
    category: "Pilgrimage"
  },
  {
    id: 22,
    src: "https://images.unsplash.com/photo-1539650116574-75c0c6d73ce6?auto=format&fit=crop&w=800&q=80",
    title: "Badrinath Shrine",
    location: "Chamoli, Uttarakhand",
    category: "Pilgrimage"
  }
];
const filterConfig = [
  {
    label: "All",
    grad: "from-orange-400 to-pink-500",
    activeGrad: "from-orange-500 to-pink-600"
  },
  {
    label: "Mountains",
    grad: "from-teal-400 to-blue-500",
    activeGrad: "from-teal-500 to-blue-600"
  },
  {
    label: "Beaches",
    grad: "from-cyan-400 to-sky-500",
    activeGrad: "from-cyan-500 to-sky-600"
  },
  {
    label: "Heritage",
    grad: "from-amber-400 to-orange-500",
    activeGrad: "from-amber-500 to-orange-600"
  },
  {
    label: "Pilgrimage",
    grad: "from-violet-400 to-purple-500",
    activeGrad: "from-violet-500 to-purple-600"
  }
];
function GalleryPage() {
  const [activeFilter, setActiveFilter] = reactExports.useState("All");
  const [lightboxItem, setLightboxItem] = reactExports.useState(null);
  const filtered = activeFilter === "All" ? galleryItems : galleryItems.filter((i) => i.category === activeFilter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative py-32 text-white overflow-hidden",
        "data-ocid": "gallery.header_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center",
              style: {
                backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1920&q=80')"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(135deg, oklch(0.3 0.22 48 / 0.88) 0%, oklch(0.3 0.2 300 / 0.7) 50%, oklch(0.3 0.18 190 / 0.85) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-25 blur-3xl",
              style: { background: "oklch(0.72 0.2 35)" },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl",
              style: { background: "oklch(0.6 0.18 190)" },
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
                    children: "✦ Explore India"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl font-bold mb-5 leading-tight", children: [
                  "Our",
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
                      children: "Photo Gallery"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 max-w-2xl mx-auto text-xl", children: "Journey through India's most breathtaking landscapes, heritage sites, and spiritual landmarks." })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-8 sticky top-0 z-20",
        style: {
          background: "linear-gradient(to right, oklch(0.97 0.01 75), oklch(0.95 0.02 200), oklch(0.97 0.01 75))",
          borderBottom: "1px solid oklch(0.88 0.02 75)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 flex flex-wrap gap-3 justify-center", children: filterConfig.map(({ label, grad, activeGrad }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveFilter(label),
            className: `px-5 py-2 rounded-full text-sm font-bold text-white shadow-lg transition-all duration-300 bg-gradient-to-r ${activeFilter === label ? `${activeGrad} scale-110 shadow-xl` : `${grad} opacity-75 hover:opacity-100 hover:scale-105`}`,
            "data-ocid": `gallery.filter.${label.toLowerCase()}`,
            children: label
          },
          label
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-12",
        style: {
          background: "linear-gradient(160deg, oklch(0.98 0.005 75) 0%, oklch(0.96 0.01 200) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            layout: true,
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.9 },
            transition: { duration: 0.35, delay: index * 0.04 },
            className: "relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300",
            onClick: () => setLightboxItem(item),
            "data-ocid": `gallery.item.${index + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.src,
                  alt: item.title,
                  className: "w-full object-cover group-hover:scale-110 transition-transform duration-700",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400",
                  style: {
                    background: "linear-gradient(to top, oklch(0.25 0.15 48 / 0.9) 0%, oklch(0.3 0.12 300 / 0.5) 50%, transparent 100%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0",
                  style: {
                    background: item.category === "Mountains" ? "oklch(0.6 0.18 190)" : item.category === "Beaches" ? "oklch(0.6 0.17 220)" : item.category === "Heritage" ? "oklch(0.7 0.18 48)" : "oklch(0.55 0.2 300)"
                  },
                  children: item.category
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display font-bold text-sm leading-snug",
                    style: { color: "oklch(0.85 0.2 85)" },
                    children: item.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xs mt-0.5", children: item.location })
              ] })
            ]
          },
          item.id
        )) }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: lightboxItem && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        style: { background: "rgba(0,0,0,0.92)" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setLightboxItem(null),
        "data-ocid": "gallery.dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "relative max-w-4xl w-full",
            initial: { scale: 0.9 },
            animate: { scale: 1 },
            exit: { scale: 0.9 },
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors",
                  onClick: () => setLightboxItem(null),
                  "aria-label": "Close lightbox",
                  "data-ocid": "gallery.close_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: lightboxItem.src.replace("w=800", "w=1200"),
                  alt: lightboxItem.title,
                  className: "w-full rounded-xl object-cover max-h-[78vh]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-b-xl px-6 py-5",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.2 0.05 253), oklch(0.18 0.04 48))"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: "font-display text-xl font-bold",
                        style: { color: "oklch(0.85 0.2 85)" },
                        children: lightboxItem.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm mt-1", children: lightboxItem.location })
                  ]
                }
              )
            ]
          }
        )
      }
    ) })
  ] });
}
export {
  GalleryPage as default
};
