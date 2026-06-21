import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Heart, Mountain, Users } from "lucide-react";
import { motion } from "motion/react";

const categories = [
  {
    title: "Indian Tours",
    icon: Mountain,
    count: "9+",
    tagline: "Incredible Bharat Awaits",
    desc: "Himalayas to Kerala — explore India's soul with handcrafted itineraries.",
    to: "/packages/indian-tours",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    shadow: "shadow-orange-300/60",
    badge: "saffron-to-coral",
    emoji: "🏔️",
  },
  {
    title: "International Tours",
    icon: Globe,
    count: "6+",
    tagline: "World Without Borders",
    desc: "Bali, Dubai, Thailand & beyond — curated for Indian travellers.",
    to: "/packages/international-tours",
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
    shadow: "shadow-blue-300/60",
    badge: "blue-to-purple",
    emoji: "✈️",
  },
  {
    title: "Honeymoon Packages",
    icon: Heart,
    count: "6+",
    tagline: "Begin Your Forever",
    desc: "Romantic escapes with candlelit dinners, spa retreats & private villas.",
    to: "/packages/honeymoon",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    shadow: "shadow-rose-300/60",
    badge: "coral-to-pink",
    emoji: "💑",
  },
  {
    title: "Corporate Tours",
    icon: Users,
    count: "4+",
    tagline: "Where Business Meets Bliss",
    desc: "Team outings, retreats, and MICE events managed end-to-end.",
    to: "/packages/corporate",
    gradient: "from-teal-500 via-cyan-500 to-blue-500",
    shadow: "shadow-teal-300/60",
    badge: "teal-to-blue",
    emoji: "🏢",
  },
];

const stats = [
  { val: "15+", label: "Years Experience", color: "text-amber-500" },
  { val: "9+", label: "Tour Packages", color: "text-blue-500" },
  { val: "50K+", label: "Happy Travelers", color: "text-rose-500" },
  { val: "100%", label: "Customisable", color: "text-teal-500" },
];

export default function PackagesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative py-32 overflow-hidden text-white"
        data-ocid="packages.header_section"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.65 0.22 48) 0%, oklch(0.50 0.22 253) 40%, oklch(0.58 0.18 190) 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.9 0.15 75)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -right-16 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.6 0.2 300)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.9 0.15 75), transparent)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5 bg-white/20 backdrop-blur-sm border border-white/30">
              ✈️ 15+ Years of Happy Journeys
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Our Tour
              <br />
              <span className="relative inline-block">
                Packages
                <span
                  className="absolute -bottom-2 left-0 right-0 h-1.5 rounded-full"
                  style={{ background: "oklch(0.9 0.15 75 / 0.7)" }}
                />
              </span>
            </h1>
            <p className="text-white/85 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              From the snow-capped Himalayas to the beaches of Bali — The Happy
              Miles Tourism crafts journeys that become stories for a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="py-6 border-b border-border bg-card"
        data-ocid="packages.stats_section"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {stats.map(({ val, label, color }) => (
              <div key={label}>
                <div className={`font-display text-3xl font-bold ${color}`}>
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

      {/* Category Cards */}
      <section
        className="py-20 bg-background"
        data-ocid="packages.grid_section"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.65 0.22 48), oklch(0.50 0.22 253))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Choose Your Adventure
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pick a category and let us craft the perfect journey for you.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            data-ocid="packages.list"
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden shadow-xl ${cat.shadow} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
                data-ocid={`packages.category.${i + 1}`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-90`}
                />
                <div className="absolute inset-0 bg-black/10" />
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/10" />
                <div className="relative z-10 p-8 text-white">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-sm">
                      <cat.icon className="h-8 w-8" />
                    </div>
                    <span className="text-4xl">{cat.emoji}</span>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/25 text-xs font-bold uppercase tracking-wider">
                      {cat.count} Packages
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mt-3 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-white/80 font-semibold text-sm mb-2 italic">
                    {cat.tagline}
                  </p>
                  <p className="text-white/75 text-sm leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                  <Button
                    asChild
                    className="bg-white/90 text-gray-900 hover:bg-white font-semibold group-hover:shadow-lg transition-all"
                    data-ocid={`packages.category_link.${i + 1}`}
                  >
                    <Link to={cat.to}>
                      Explore Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 text-white relative overflow-hidden"
        data-ocid="packages.cta_section"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.65 0.22 48) 50%, oklch(0.70 0.18 58) 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="text-5xl block mb-4">🗺️</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Can't find your dream trip?
          </h2>
          <p className="text-white/85 mb-8 text-lg max-w-xl mx-auto">
            We craft fully custom itineraries tailored to your budget,
            preferences, and travel dates — just tell us where you want to go!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white font-bold text-lg px-10 py-6 hover:bg-white/90 shadow-2xl transition-all hover:-translate-y-1"
            style={{ color: "oklch(0.65 0.22 48)" }}
            data-ocid="packages.custom_enquiry_button"
          >
            <Link to="/contact">
              Request Custom Package <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
