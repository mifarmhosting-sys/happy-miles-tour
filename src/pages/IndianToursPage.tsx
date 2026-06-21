import { Layout } from "@/components/Layout";
import { TourCard } from "@/components/TourCard";
import { Button } from "@/components/ui/button";
import { tours } from "@/data/tours";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Star, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    value: "50K+",
    label: "Happy Travellers",
    icon: Users,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    value: "15+",
    label: "Destinations",
    icon: MapPin,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    value: "4.9★",
    label: "Average Rating",
    icon: Star,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    value: "15+",
    label: "Years Experience",
    icon: Phone,
    color: "text-teal-500",
    bg: "bg-teal-500/10",
  },
];

const filters = [
  "All",
  "Himachal",
  "Uttarakhand",
  "Pilgrimage",
  "South India",
  "Beach",
];

export default function IndianToursPage() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative py-32 overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.65 0.22 48) 0%, oklch(0.68 0.20 35) 50%, oklch(0.62 0.22 22) 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.22 48 / 0.85) 0%, oklch(0.68 0.20 35 / 0.75) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.9 0.15 75)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold mb-5">
              🇳 Indian Tours
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.95 0.15 75), oklch(0.90 0.12 55))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Incredible
              </span>{" "}
              India
            </h1>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              From the snow-capped Himalayas to the sun-kissed beaches of Goa —
              India is a journey like no other. Let The Happy Miles Tourism
              guide you through the soul of Bharat.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white font-bold hover:bg-white/90 shadow-xl transition-all hover:-translate-y-0.5"
                style={{ color: "oklch(0.65 0.22 48)" }}
                data-ocid="indian-tours.explore_button"
              >
                <a href="#packages">
                  Explore Packages <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/60 text-white hover:bg-white/15 bg-white/10 backdrop-blur-sm"
                data-ocid="indian-tours.enquire_button"
              >
                <Link to="/contact">Enquire Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="py-8 bg-card border-b border-border"
        data-ocid="indian-tours.stats_section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-3 rounded-xl p-4 ${s.bg}`}
              >
                <div className="p-2 rounded-lg bg-white shadow-sm">
                  <s.icon className={`h-5 w-5 ${s.color}`} />
                </div>
                <div>
                  <p className={`font-display text-2xl font-bold ${s.color}`}>
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            <span
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.65 0.22 48), oklch(0.68 0.20 35))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Why Travel India with Us?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            India is a land of infinite diversity. With over a decade of
            experience crafting unforgettable journeys, The Happy Miles Tourism
            offers hand-picked itineraries that blend comfort, culture, and
            authentic experiences.
          </p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="py-6 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="flex flex-wrap gap-2 justify-center"
            data-ocid="indian-tours.filter_pills"
          >
            {filters.map((f, i) => (
              <span
                key={f}
                className="px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all hover:-translate-y-0.5"
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(90deg, oklch(0.65 0.22 48), oklch(0.68 0.20 35))"
                      : "oklch(0.96 0.01 75)",
                  color: i === 0 ? "white" : "oklch(0.35 0.05 255)",
                  boxShadow:
                    i === 0
                      ? "0 4px 12px oklch(0.65 0.22 48 / 0.4)"
                      : undefined,
                }}
                data-ocid={`indian-tours.filter.${i + 1}`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Grid */}
      <section id="packages" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Our Indian Tour Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Handcrafted journeys across the length and breadth of incredible
              India.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
            data-ocid="indian-tours.list"
          >
            {tours.map((tour, index) => (
              <TourCard key={tour.id} tour={tour} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-white relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.65 0.22 48) 0%, oklch(0.68 0.20 35) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            We specialize in tailoring unique Indian tours just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919831398372"
              className="inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-white/80 transition-colors"
              data-ocid="indian-tours.phone_link"
            >
              <Phone className="h-6 w-6" />
              98313-98372
            </a>
            <Button
              asChild
              size="lg"
              className="bg-white font-bold hover:bg-white/90 shadow-xl"
              style={{ color: "oklch(0.65 0.22 48)" }}
              data-ocid="indian-tours.contact_button"
            >
              <Link to="/contact">
                Send an Enquiry <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            Available 10 AM – 10 PM, 7 days a week
          </p>
        </div>
      </section>
    </Layout>
  );
}
