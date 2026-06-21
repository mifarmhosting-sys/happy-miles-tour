import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Phone } from "lucide-react";
import { motion } from "motion/react";

interface IntlDestination {
  name: string;
  country: string;
  image: string;
  status: "coming-soon" | "available";
  highlights: string[];
  tagline: string;
  price: string;
  duration: string;
  overlayFrom: string;
  overlayMid: string;
}

const destinations: IntlDestination[] = [
  {
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    status: "available",
    tagline: "Island of Gods",
    price: "\u20b975,000",
    duration: "6N/7D",
    highlights: ["Ubud Rice Terraces", "Kuta Beach", "Tanah Lot Temple"],
    overlayFrom: "oklch(0.25 0.15 48 / 0.95)",
    overlayMid: "oklch(0.45 0.22 48 / 0.6)",
  },
  {
    name: "Thailand",
    country: "Thailand",
    image:
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80",
    status: "available",
    tagline: "Land of Smiles",
    price: "\u20b965,000",
    duration: "5N/6D",
    highlights: ["Bangkok Temples", "Phuket Beaches", "Chiang Mai"],
    overlayFrom: "oklch(0.20 0.15 253 / 0.95)",
    overlayMid: "oklch(0.40 0.20 253 / 0.6)",
  },
  {
    name: "Dubai",
    country: "UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    status: "available",
    tagline: "City of Gold",
    price: "\u20b985,000",
    duration: "4N/5D",
    highlights: ["Burj Khalifa", "Desert Safari", "Palm Jumeirah"],
    overlayFrom: "oklch(0.25 0.10 75 / 0.95)",
    overlayMid: "oklch(0.50 0.18 58 / 0.6)",
  },
  {
    name: "Singapore",
    country: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    status: "available",
    tagline: "City of Gardens",
    price: "\u20b990,000",
    duration: "5N/6D",
    highlights: ["Marina Bay Sands", "Sentosa Island", "Gardens by the Bay"],
    overlayFrom: "oklch(0.20 0.15 190 / 0.95)",
    overlayMid: "oklch(0.40 0.18 190 / 0.6)",
  },
  {
    name: "Maldives",
    country: "Maldives",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    status: "coming-soon",
    tagline: "Tropical Paradise",
    price: "\u20b91,50,000",
    duration: "5N/6D",
    highlights: ["Overwater Villas", "Coral Reefs", "Crystal Lagoons"],
    overlayFrom: "oklch(0.20 0.18 210 / 0.95)",
    overlayMid: "oklch(0.45 0.20 210 / 0.6)",
  },
  {
    name: "Europe",
    country: "Multiple Countries",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
    status: "coming-soon",
    tagline: "Old World Charm",
    price: "\u20b92,50,000",
    duration: "10N/11D",
    highlights: ["Paris & Eiffel Tower", "Swiss Alps", "Rome & Colosseum"],
    overlayFrom: "oklch(0.22 0.15 300 / 0.95)",
    overlayMid: "oklch(0.45 0.20 290 / 0.6)",
  },
];

export default function InternationalToursPage() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative py-32 overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.45 0.22 253) 0%, oklch(0.50 0.22 270) 40%, oklch(0.55 0.2 300) 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.45 0.22 253 / 0.88) 0%, oklch(0.55 0.2 300 / 0.80) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.7 0.2 300)" }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 blur-3xl"
          style={{ background: "oklch(0.65 0.22 210)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold mb-5">
              <Globe className="h-4 w-4" /> International Tours
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Explore the{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.9 0.15 75), oklch(0.85 0.12 85))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                World
              </span>
            </h1>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              Beyond India's borders lies a world of breathtaking beauty. From
              tropical Bali to the glittering skyline of Dubai, let The Happy
              Miles Tourism take you on global adventures crafted for Indian
              travellers.
            </p>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 w-fit">
              <Globe className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold">
                {destinations.length} international destinations available
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="py-6 bg-card border-b border-border"
        data-ocid="intl-tours.stats_section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { val: "6+", label: "Destinations", color: "text-blue-600" },
              {
                val: "1000+",
                label: "Int'l Travellers",
                color: "text-purple-600",
              },
              { val: "Visa", label: "Assistance", color: "text-indigo-600" },
              {
                val: "24/7",
                label: "Travel Support",
                color: "text-violet-600",
              },
            ].map(({ val, label, color }) => (
              <div key={label}>
                <div className={`font-display text-2xl font-bold ${color}`}>
                  {val}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.45 0.22 253), oklch(0.55 0.2 300))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                International Destinations
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our curated selection of global getaways, specially
              designed for Indian travellers.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="intl-tours.list"
          >
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                data-ocid={`intl-tours.item.${index + 1}`}
              >
                {/* Magazine cover style */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${dest.overlayFrom} 0%, ${dest.overlayMid} 50%, transparent 100%)`,
                    }}
                  />
                  {dest.status === "coming-soon" ? (
                    <span
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.45 0.22 253), oklch(0.55 0.2 300))",
                      }}
                    >
                      Coming Soon
                    </span>
                  ) : (
                    <span
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.65 0.22 48), oklch(0.68 0.20 35))",
                      }}
                    >
                      Available Now
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white/75 text-sm font-semibold uppercase tracking-widest mb-1">
                      {dest.country}
                    </p>
                    <h3 className="text-white font-display text-2xl font-bold">
                      {dest.name}
                    </h3>
                    <p className="text-white/80 text-sm italic mt-1">
                      {dest.tagline}
                    </p>
                  </div>
                </div>
                {/* Card body */}
                <div className="bg-card p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Starting from
                      </p>
                      <p
                        className="font-display text-xl font-bold"
                        style={{
                          background:
                            "linear-gradient(90deg, oklch(0.45 0.22 253), oklch(0.55 0.2 300))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {dest.price}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground border border-border rounded-full px-2 py-1">
                      {dest.duration}
                    </span>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {dest.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-muted-foreground text-sm flex items-center gap-2"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                          style={{ background: "oklch(0.45 0.22 253)" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="sm"
                    className="w-full font-semibold text-white"
                    style={{
                      background:
                        dest.status === "coming-soon"
                          ? "linear-gradient(90deg, oklch(0.55 0.18 253), oklch(0.60 0.18 280))"
                          : "linear-gradient(90deg, oklch(0.45 0.22 253), oklch(0.55 0.2 300))",
                    }}
                    data-ocid={`intl-tours.enquire.${index + 1}`}
                  >
                    <Link to="/contact">
                      {dest.status === "coming-soon"
                        ? "Register Interest"
                        : "Enquire Now"}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section
        className="py-16 text-white relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.20 0.05 255) 0%, oklch(0.18 0.05 270) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-6">
            Your Trusted Global Travel Partner
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-10">
            We handle every aspect of your international journey — from visa
            assistance and travel insurance to flights, hotels, and guided
            tours.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                label: "Visa Assistance",
                icon: "📌",
                grad: "from-blue-600 to-indigo-600",
              },
              {
                label: "Travel Insurance",
                icon: "🛡️",
                grad: "from-indigo-600 to-purple-600",
              },
              {
                label: "Group & Solo Tours",
                icon: "👥",
                grad: "from-purple-600 to-fuchsia-600",
              },
              {
                label: "24/7 Support",
                icon: "📞",
                grad: "from-fuchsia-600 to-pink-600",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${item.grad} rounded-2xl p-5 text-center`}
              >
                <span className="text-3xl block mb-2">{item.icon}</span>
                <p className="font-semibold text-white text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-white relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.45 0.22 253) 0%, oklch(0.55 0.2 300) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Plan Your International Trip
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Contact us to customise your dream international vacation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919831398372"
              className="inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-white/80 transition-colors"
              data-ocid="intl-tours.phone_link"
            >
              <Phone className="h-6 w-6" />
              98313-98372
            </a>
            <Button
              asChild
              size="lg"
              className="bg-white font-bold hover:bg-white/90 shadow-xl"
              style={{ color: "oklch(0.45 0.22 253)" }}
              data-ocid="intl-tours.contact_button"
            >
              <Link to="/contact">
                Send Enquiry <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
