import { Layout } from "@/components/Layout";
import { TourCard } from "@/components/TourCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { testimonials, tours } from "@/data/tours";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  CreditCard,
  Hotel,
  MapPin,
  Mountain,
  Palmtree,
  Plane,
  Shield,
  Star,
  Sun,
  Tag,
  Train,
  Trophy,
  Users,
  Waves,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Hotel,
    title: "Hotels",
    description: "Curated stays across India",
    href: "/hotels",
  },
  {
    icon: Plane,
    title: "Flights",
    description: "Best fares domestic & international",
    href: "/flights",
  },
  {
    icon: Train,
    title: "Trains",
    description: "Hassle-free train bookings",
    href: "/trains",
  },
  {
    icon: CreditCard,
    title: "Forex",
    description: "Competitive currency exchange",
    href: "/forex",
  },
];

const features = [
  {
    icon: Shield,
    title: "Safe Traveling",
    description:
      "Your safety is our top priority. All our tours follow stringent safety protocols with experienced, vetted guides and drivers.",
  },
  {
    icon: Tag,
    title: "Affordable Price",
    description:
      "Get the best value for your money. We offer competitive pricing with no hidden charges, ensuring memorable trips within your budget.",
  },
  {
    icon: Hotel,
    title: "Comfort Accommodation",
    description:
      "Stay at carefully selected hotels and resorts that offer quality comfort and authentic hospitality at every destination.",
  },
];

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Travelers" },
  { icon: MapPin, value: "100+", label: "Destinations Covered" },
  { icon: Trophy, value: "15+", label: "Years of Experience" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section — Multi-Landscape Collage */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        data-ocid="home.hero_section"
      >
        {/* 2x2 landscape collage panels */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {/* Mountain panel — top-left */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 hover:scale-100 transition-transform duration-[8000ms]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85')",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, rgba(30,40,120,0.72) 0%, rgba(60,80,180,0.55) 100%)",
              }}
            />
            {/* Label badge */}
            <motion.div
              className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 text-white text-xs font-bold shadow-lg"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Mountain className="h-3.5 w-3.5 text-blue-200" />
              Himalayas
            </motion.div>
          </motion.div>

          {/* Sea/Ocean panel — top-right */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 hover:scale-100 transition-transform duration-[8000ms]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=85')",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, rgba(0,160,160,0.65) 0%, rgba(0,200,200,0.45) 100%)",
              }}
            />
            <motion.div
              className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 text-white text-xs font-bold shadow-lg"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.95, duration: 0.5 }}
            >
              <Waves className="h-3.5 w-3.5 text-cyan-200" />
              Goa Beaches
            </motion.div>
          </motion.div>

          {/* Jungle panel — bottom-left */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 hover:scale-100 transition-transform duration-[8000ms]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=85')",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, rgba(10,100,40,0.68) 0%, rgba(20,140,60,0.50) 100%)",
              }}
            />
            <motion.div
              className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 text-white text-xs font-bold shadow-lg"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Palmtree className="h-3.5 w-3.5 text-green-200" />
              Kerala Jungles
            </motion.div>
          </motion.div>

          {/* Desert panel — bottom-right */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.45, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 hover:scale-100 transition-transform duration-[8000ms]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=85')",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, rgba(200,100,10,0.68) 0%, rgba(230,150,20,0.50) 100%)",
              }}
            />
            <motion.div
              className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 text-white text-xs font-bold shadow-lg"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.25, duration: 0.5 }}
            >
              <Sun className="h-3.5 w-3.5 text-amber-200" />
              Rajasthan Deserts
            </motion.div>
          </motion.div>
        </div>

        {/* Central dark vignette for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.12) 70%, transparent 100%)",
          }}
        />
        {/* Top/bottom darkening strips */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        {/* Hero text content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-5"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold tracking-widest uppercase text-white shadow-2xl border border-white/35 backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(135deg, rgba(220,100,10,0.80), rgba(30,60,180,0.75))",
              }}
            >
              ✈&nbsp; India's Greatest Landscapes
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-5 drop-shadow-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            Discover India's
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.92 0.18 75), oklch(0.95 0.16 55), oklch(0.88 0.18 190))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Wonders
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Mountains &bull; Beaches &bull; Jungles &bull; Deserts
            <br />
            <span className="text-white/80 text-sm">
              Every Journey, Unforgettable
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
          >
            <Button
              size="lg"
              className="font-bold px-10 py-6 text-base sm:text-lg transition-smooth shadow-2xl border-0 text-white hover:scale-105 hover:opacity-95 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.72 0.20 35), oklch(0.65 0.22 25))",
              }}
              onClick={() => {
                const el = document.getElementById("tour-packages");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              data-ocid="home.hero_explore_button"
            >
              Explore Tours <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 text-white hover:bg-white/20 font-semibold px-10 py-6 text-base transition-smooth backdrop-blur-md bg-white/10 rounded-full"
              data-ocid="home.hero_contact_button"
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 50"
            className="w-full block"
            fill="white"
            preserveAspectRatio="none"
            role="presentation"
            aria-hidden="true"
          >
            <path d="M0,25 C360,50 720,0 1080,25 C1260,37 1380,30 1440,25 L1440,50 L0,50 Z" />
          </svg>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="h-7 w-7 text-white/80" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section
        className="py-10"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.70 0.22 48), oklch(0.68 0.22 35), oklch(0.65 0.22 25))",
        }}
        data-ocid="home.stats_section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 text-white"
              >
                <div className="h-14 w-14 rounded-2xl bg-white/25 flex items-center justify-center shrink-0 border border-white/40 shadow-lg">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="font-display text-3xl font-bold leading-none text-white drop-shadow">
                    {value}
                  </div>
                  <div className="text-xs text-white/85 mt-1 font-semibold tracking-widest uppercase">
                    {label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-20 bg-background"
        data-ocid="home.services_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="border-primary text-primary mb-3 font-semibold"
            >
              Our Services
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Everything You Need to Travel
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From flights and hotels to foreign exchange, we handle every
              detail of your journey.
            </p>
            {/* Colorful decorative accent line */}
            <div className="flex justify-center gap-1.5 mt-5">
              <div
                className="h-1 w-10 rounded-full"
                style={{ background: "oklch(0.70 0.22 48)" }}
              />
              <div
                className="h-1 w-6 rounded-full"
                style={{ background: "oklch(0.60 0.18 190)" }}
              />
              <div
                className="h-1 w-4 rounded-full"
                style={{ background: "oklch(0.72 0.20 35)" }}
              />
            </div>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, description, href }, i) => {
              const cardGradients = [
                "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.65 0.20 35))",
                "linear-gradient(135deg, oklch(0.45 0.20 253), oklch(0.60 0.18 190))",
                "linear-gradient(135deg, oklch(0.55 0.22 145), oklch(0.60 0.18 190))",
                "linear-gradient(135deg, oklch(0.60 0.20 300), oklch(0.45 0.20 253))",
              ];
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  data-ocid={`home.service.item.${i + 1}`}
                >
                  <Link
                    to={href}
                    className="group flex flex-col items-center text-center p-7 rounded-2xl text-white transition-smooth cursor-pointer hover:scale-105 hover:shadow-2xl shadow-lg"
                    style={{ background: cardGradients[i] }}
                  >
                    <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-smooth border border-white/30">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-xs text-white/85 leading-relaxed">
                      {description}
                    </p>
                    <span className="mt-3 text-xs font-bold text-white/90 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-smooth">
                      Explore <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.99 0.005 75) 0%, oklch(0.97 0.01 48)/50% 50%, oklch(0.99 0.005 190)/30% 100%)",
        }}
        data-ocid="home.features_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="border-primary text-primary mb-3 font-semibold"
            >
              Why Choose Us
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Travel with Confidence
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We go beyond just booking trips — we craft experiences that stay
              with you forever.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description }, i) => {
              const borderColors = [
                "oklch(0.70 0.22 48)",
                "oklch(0.60 0.18 190)",
                "oklch(0.72 0.20 35)",
              ];
              const iconGradients = [
                "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.72 0.20 35))",
                "linear-gradient(135deg, oklch(0.45 0.20 253), oklch(0.60 0.18 190))",
                "linear-gradient(135deg, oklch(0.60 0.20 300), oklch(0.45 0.20 253))",
              ];
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-2xl p-7 border-l-4 shadow-md hover:shadow-xl transition-smooth group"
                  style={{ borderLeftColor: borderColors[i] }}
                  data-ocid={`home.feature.item.${i + 1}`}
                >
                  <div
                    className="h-14 w-14 rounded-xl flex items-center justify-center mb-5 shadow-lg"
                    style={{ background: iconGradients[i] }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section
        id="tour-packages"
        className="py-20 bg-background"
        data-ocid="home.packages_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="border-primary text-primary mb-3 font-semibold"
            >
              Featured Tours
            </Badge>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold mb-3"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.72 0.20 35))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Popular Tour Packages
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Handcrafted itineraries for the most beloved destinations across
              India.
            </p>
            {/* Colorful decorative dots */}
            <div className="flex justify-center gap-2 mt-5">
              {[
                "oklch(0.70 0.22 48)",
                "oklch(0.60 0.18 190)",
                "oklch(0.72 0.20 35)",
                "oklch(0.60 0.20 300)",
              ].map((c) => (
                <div
                  key={c}
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.slice(0, 6).map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="font-bold px-10 text-white hover:opacity-90 transition-smooth shadow-lg border-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.72 0.20 35))",
              }}
              data-ocid="home.view_all_packages_button"
            >
              <Link to="/packages">
                View All Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.45 0.20 253)/8% 0%, oklch(0.70 0.22 48)/5% 50%, oklch(0.60 0.18 190)/8% 100%)",
          backgroundColor: "oklch(0.97 0.01 75)",
        }}
        data-ocid="home.testimonials_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="border-primary text-primary mb-3 font-semibold"
            >
              Traveler Stories
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              What Our Travelers Say
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-md hover:shadow-xl transition-smooth"
                data-ocid={`home.testimonial.item.${i + 1}`}
              >
                {/* Vivid saffron quote mark */}
                <div
                  className="text-5xl font-bold leading-none mb-2 select-none"
                  style={{ color: "oklch(0.70 0.22 48)" }}
                >
                  &ldquo;
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }, (_, s) => s + 1).map(
                    (s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ),
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.72 0.20 35))",
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.location} &bull; {t.tour}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="relative py-20 overflow-hidden"
        data-ocid="home.cta_section"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.70 0.22 48) 0%, oklch(0.65 0.20 35) 40%, oklch(0.45 0.20 253) 100%)",
          }}
        />
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />
        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-5 bg-white/20 text-white border-white/30 text-sm font-semibold backdrop-blur-sm">
              Kolkata's Most Trusted Travel Partner
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Ready to Start Your Dream Journey?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Talk to our travel experts and get a customised itinerary tailored
              just for you. Open daily 10 AM to 10 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 font-bold px-10 transition-smooth shadow-2xl border-0"
                style={{ color: "oklch(0.65 0.20 35)" }}
                data-ocid="home.cta_contact_button"
              >
                <Link to="/contact">Contact Us Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/80 text-white hover:bg-white/20 font-semibold px-10 transition-smooth backdrop-blur-sm"
                data-ocid="home.cta_packages_button"
              >
                <Link to="/packages">Browse Packages</Link>
              </Button>
            </div>
            <p className="mt-8 text-white/75 text-sm">
              AVS House, 42/1A Gurupada Halder Road, Kolkata - 700026 | Ph:
              98313-98372
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
