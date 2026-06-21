import { Layout } from "@/components/Layout";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type FilterType = "All" | "Mountains" | "Beaches" | "Heritage" | "Pilgrimage";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  location: string;
  category: FilterType;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    title: "Taj Mahal at Sunrise",
    location: "Agra, Uttar Pradesh",
    category: "Heritage",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
    title: "Shimla Snow Valley",
    location: "Shimla, Himachal Pradesh",
    category: "Mountains",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    title: "Kerala Backwaters",
    location: "Alleppey, Kerala",
    category: "Beaches",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    title: "Himalayan Peaks",
    location: "Manali, Himachal Pradesh",
    category: "Mountains",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
    title: "Goa Beach Sunset",
    location: "Calangute, Goa",
    category: "Beaches",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
    title: "Vaishno Devi Temple",
    location: "Katra, J&K",
    category: "Pilgrimage",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    title: "Rajasthan Palace",
    location: "Jaipur, Rajasthan",
    category: "Heritage",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1601923393931-8e06adf1b44e?auto=format&fit=crop&w=800&q=80",
    title: "Rohtang Pass",
    location: "Kullu, Himachal Pradesh",
    category: "Mountains",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80",
    title: "Palolem Beach",
    location: "South Goa",
    category: "Beaches",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=800&q=80",
    title: "Kedarnath Temple",
    location: "Rudraprayag, Uttarakhand",
    category: "Pilgrimage",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1565019011521-b0575012ae9f?auto=format&fit=crop&w=800&q=80",
    title: "Dal Lake Shikara",
    location: "Srinagar, Kashmir",
    category: "Mountains",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
    title: "Humayun's Tomb",
    location: "New Delhi",
    category: "Heritage",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1562679299-bf87b6e69e1b?auto=format&fit=crop&w=800&q=80",
    title: "Rishikesh Ghats",
    location: "Rishikesh, Uttarakhand",
    category: "Pilgrimage",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    title: "Valley of Flowers",
    location: "Chamoli, Uttarakhand",
    category: "Mountains",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80",
    title: "Udaipur Lake Palace",
    location: "Udaipur, Rajasthan",
    category: "Heritage",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=800&q=80",
    title: "Kovalam Lighthouse Beach",
    location: "Kovalam, Kerala",
    category: "Beaches",
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1609766857246-c23bf0e16bc4?auto=format&fit=crop&w=800&q=80",
    title: "Haridwar Ganga Aarti",
    location: "Haridwar, Uttarakhand",
    category: "Pilgrimage",
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    title: "Spiti Valley",
    location: "Spiti, Himachal Pradesh",
    category: "Mountains",
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    title: "Amber Fort",
    location: "Jaipur, Rajasthan",
    category: "Heritage",
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?auto=format&fit=crop&w=800&q=80",
    title: "Dudhsagar Waterfall",
    location: "Goa-Karnataka Border",
    category: "Beaches",
  },
  {
    id: 21,
    src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    title: "Golden Temple",
    location: "Amritsar, Punjab",
    category: "Pilgrimage",
  },
  {
    id: 22,
    src: "https://images.unsplash.com/photo-1539650116574-75c0c6d73ce6?auto=format&fit=crop&w=800&q=80",
    title: "Badrinath Shrine",
    location: "Chamoli, Uttarakhand",
    category: "Pilgrimage",
  },
];

const filterConfig: {
  label: FilterType;
  grad: string;
  activeGrad: string;
}[] = [
  {
    label: "All",
    grad: "from-orange-400 to-pink-500",
    activeGrad: "from-orange-500 to-pink-600",
  },
  {
    label: "Mountains",
    grad: "from-teal-400 to-blue-500",
    activeGrad: "from-teal-500 to-blue-600",
  },
  {
    label: "Beaches",
    grad: "from-cyan-400 to-sky-500",
    activeGrad: "from-cyan-500 to-sky-600",
  },
  {
    label: "Heritage",
    grad: "from-amber-400 to-orange-500",
    activeGrad: "from-amber-500 to-orange-600",
  },
  {
    label: "Pilgrimage",
    grad: "from-violet-400 to-purple-500",
    activeGrad: "from-violet-500 to-purple-600",
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative py-32 text-white overflow-hidden"
        data-ocid="gallery.header_section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.3 0.22 48 / 0.88) 0%, oklch(0.3 0.2 300 / 0.7) 50%, oklch(0.3 0.18 190 / 0.85) 100%)",
          }}
        />
        <div
          className="absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-25 blur-3xl"
          style={{ background: "oklch(0.72 0.2 35)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.6 0.18 190)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block px-5 py-1.5 rounded-full text-sm font-semibold mb-5 border border-white/30"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              ✦ Explore India
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold mb-5 leading-tight">
              Our{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.85 0.2 85), oklch(0.75 0.18 190))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Photo Gallery
              </span>
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-xl">
              Journey through India's most breathtaking landscapes, heritage
              sites, and spiritual landmarks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gradient Filter Buttons */}
      <section
        className="py-8 sticky top-0 z-20"
        style={{
          background:
            "linear-gradient(to right, oklch(0.97 0.01 75), oklch(0.95 0.02 200), oklch(0.97 0.01 75))",
          borderBottom: "1px solid oklch(0.88 0.02 75)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3 justify-center">
          {filterConfig.map(({ label, grad, activeGrad }) => (
            <button
              type="button"
              key={label}
              onClick={() => setActiveFilter(label)}
              className={`px-5 py-2 rounded-full text-sm font-bold text-white shadow-lg transition-all duration-300 bg-gradient-to-r ${
                activeFilter === label
                  ? `${activeGrad} scale-110 shadow-xl`
                  : `${grad} opacity-75 hover:opacity-100 hover:scale-105`
              }`}
              data-ocid={`gallery.filter.${label.toLowerCase()}`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Magazine Masonry Grid */}
      <section
        className="py-12"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.98 0.005 75) 0%, oklch(0.96 0.01 200) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300"
                  onClick={() => setLightboxItem(item)}
                  data-ocid={`gallery.item.${index + 1}`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Gradient hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.25 0.15 48 / 0.9) 0%, oklch(0.3 0.12 300 / 0.5) 50%, transparent 100%)",
                    }}
                  />
                  {/* Category badge */}
                  <span
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                    style={{
                      background:
                        item.category === "Mountains"
                          ? "oklch(0.6 0.18 190)"
                          : item.category === "Beaches"
                            ? "oklch(0.6 0.17 220)"
                            : item.category === "Heritage"
                              ? "oklch(0.7 0.18 48)"
                              : "oklch(0.55 0.2 300)",
                    }}
                  >
                    {item.category}
                  </span>
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <p
                      className="font-display font-bold text-sm leading-snug"
                      style={{ color: "oklch(0.85 0.2 85)" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-white/80 text-xs mt-0.5">
                      {item.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            data-ocid="gallery.dialog"
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setLightboxItem(null)}
                aria-label="Close lightbox"
                data-ocid="gallery.close_button"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={lightboxItem.src.replace("w=800", "w=1200")}
                alt={lightboxItem.title}
                className="w-full rounded-xl object-cover max-h-[78vh]"
              />
              <div
                className="rounded-b-xl px-6 py-5"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.2 0.05 253), oklch(0.18 0.04 48))",
                }}
              >
                <h3
                  className="font-display text-xl font-bold"
                  style={{ color: "oklch(0.85 0.2 85)" }}
                >
                  {lightboxItem.title}
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  {lightboxItem.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
