import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Eye,
  Globe,
  Heart,
  MapPin,
  Phone,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make quality travel accessible for every Indian family by delivering exceptional, personalised tour experiences with transparency and care.",
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become India's most trusted travel brand, known for creating lifelong memories and fostering a love for exploration.",
    gradient: "from-teal-400 via-cyan-500 to-blue-500",
  },
  {
    icon: Heart,
    title: "Our Passion",
    description:
      "We genuinely love travel. Every itinerary is crafted by passionate explorers who have personally visited the destinations we sell.",
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
  },
  {
    icon: Zap,
    title: "Our Promise",
    description:
      "Zero hidden costs, transparent pricing, and 24/7 support. We deliver exactly what we promise — and a little more.",
    gradient: "from-yellow-400 via-amber-500 to-orange-500",
  },
];

const milestones = [
  {
    year: "2010",
    event: "The Happy Miles Tourism founded in Kolkata with a passionate team",
  },
  { year: "2013", event: "Expanded to cover all major pilgrimage circuits" },
  { year: "2016", event: "Crossed 10,000 satisfied customers milestone" },
  { year: "2019", event: "Launched premium Kashmir and South India packages" },
  {
    year: "2022",
    event: "50,000+ travelers served, 100+ destinations covered",
  },
  { year: "2024", event: "Ranked among top travel agencies in East India" },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative py-32 text-white overflow-hidden"
        data-ocid="about.header_section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-india-travel.dim_1920x700.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.35 0.25 48 / 0.92) 0%, oklch(0.3 0.22 300 / 0.7) 50%, oklch(0.3 0.2 253 / 0.88) 100%)",
          }}
        />
        <div
          className="absolute top-10 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.72 0.2 35)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.6 0.18 190)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
              ✦ About The Happy Miles Tourism
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold mb-5 leading-tight">
              15 Years of Crafting
              <br />
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.85 0.2 85), oklch(0.72 0.2 35))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Unforgettable Journeys
              </span>
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-xl font-light">
              We are more than a travel agency — we are your companions on every
              unforgettable adventure across India.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mt-10"
          >
            {[
              { val: "50K+", label: "Happy Travelers" },
              { val: "100+", label: "Destinations" },
              { val: "15+", label: "Years" },
              { val: "9+", label: "Tour Categories" },
            ].map(({ val, label }) => (
              <div
                key={label}
                className="px-5 py-3 rounded-2xl border border-white/25 text-center"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="font-display text-2xl font-bold">{val}</div>
                <div className="text-white/75 text-xs">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background" data-ocid="about.story_section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="h-1 w-12 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.72 0.2 35), oklch(0.6 0.18 190))",
                  }}
                />
                <span
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.72 0.2 35), oklch(0.6 0.18 190))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Our Story
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-5">
                Born Out of a
                <span
                  className="ml-2"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.6 0.2 300))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Love for India
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                The Happy Miles Tourism was born with a simple belief — that
                every Indian deserves to experience the extraordinary beauty of
                their own country. Founded in Kolkata, we have grown to serve
                travelers across India.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Starting with just Himachal Pradesh and Uttarakhand tours, we
                have grown to cover over 100 destinations across India. Every
                tour we design reflects our deep knowledge, genuine care, and
                commitment to value-for-money travel.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    Icon: Users,
                    val: "50K+",
                    label: "Customers",
                    color: "oklch(0.72 0.2 35)",
                  },
                  {
                    Icon: Globe,
                    val: "100+",
                    label: "Destinations",
                    color: "oklch(0.6 0.18 190)",
                  },
                  {
                    Icon: Award,
                    val: "15+",
                    label: "Years",
                    color: "oklch(0.6 0.2 300)",
                  },
                ].map(({ Icon, val, label, color }) => (
                  <div
                    key={label}
                    className="text-center p-5 rounded-2xl"
                    style={{
                      background: `${color}18`,
                      border: `1.5px solid ${color}40`,
                    }}
                  >
                    <Icon className="h-6 w-6 mx-auto mb-2" style={{ color }} />
                    <div className="font-display text-2xl font-bold text-foreground">
                      {val}
                    </div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute -inset-3 rounded-3xl opacity-30 blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.6 0.2 300))",
                }}
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
                <img
                  src="/assets/generated/tour-himachal.dim_600x400.jpg"
                  alt="Happy Miles team"
                  className="w-full h-96 object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Star
                      className="h-4 w-4"
                      style={{ color: "oklch(0.85 0.2 85)" }}
                    />
                    <span className="text-white font-semibold">
                      Trusted by 50,000+ travelers
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.97 0.01 75) 0%, oklch(0.95 0.02 200) 50%, oklch(0.97 0.01 75) 100%)",
        }}
        data-ocid="about.values_section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="h-0.5 w-10 rounded"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.72 0.2 35), oklch(0.6 0.2 300))",
                }}
              />
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.72 0.2 35), oklch(0.6 0.2 300))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                What Drives Us
              </span>
              <div
                className="h-0.5 w-10 rounded"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.6 0.2 300), oklch(0.72 0.2 35))",
                }}
              />
            </div>
            <h2
              className="font-display text-4xl font-bold"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.2 0.02 255), oklch(0.45 0.2 253))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mission, Vision & Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description, gradient }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`bg-gradient-to-br ${gradient} rounded-2xl p-7 text-white shadow-xl hover:scale-105 transition-transform duration-300`}
                data-ocid={`about.value.item.${i + 1}`}
              >
                <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-20 bg-background"
        data-ocid="about.timeline_section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="h-0.5 w-10 rounded"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.6 0.18 190), oklch(0.45 0.2 253))",
                }}
              />
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.6 0.18 190), oklch(0.45 0.2 253))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Journey
              </span>
              <div
                className="h-0.5 w-10 rounded"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.45 0.2 253), oklch(0.6 0.18 190))",
                }}
              />
            </div>
            <h2
              className="font-display text-4xl font-bold"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.6 0.18 190), oklch(0.6 0.2 300))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Milestones That Made Us
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map(({ year, event }, i) => {
              const colors = [
                "oklch(0.72 0.2 35)",
                "oklch(0.6 0.18 190)",
                "oklch(0.6 0.2 300)",
                "oklch(0.7 0.22 48)",
                "oklch(0.45 0.2 253)",
                "oklch(0.72 0.17 58)",
              ];
              const c = colors[i % colors.length];
              return (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 mb-6"
                  data-ocid={`about.milestone.item.${i + 1}`}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="h-12 w-12 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${c}, ${colors[(i + 1) % colors.length]})`,
                      }}
                    >
                      {year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div
                        className="w-0.5 flex-1 mt-2"
                        style={{
                          background: `linear-gradient(to bottom, ${c}, ${colors[(i + 1) % colors.length]})`,
                        }}
                      />
                    )}
                  </div>
                  <div
                    className="pb-6 flex-1 px-5 py-4 rounded-xl mb-1"
                    style={{ background: `${c}12`, border: `1px solid ${c}30` }}
                  >
                    <span className="font-bold text-sm" style={{ color: c }}>
                      {year}
                    </span>
                    <p className="text-foreground mt-1 text-sm">{event}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.35 0.22 48) 0%, oklch(0.3 0.2 300) 50%, oklch(0.3 0.2 253) 100%)",
        }}
        data-ocid="about.stats_section"
      >
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.72 0.2 35)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.6 0.18 190)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                Icon: Users,
                val: "50,000+",
                label: "Happy Travelers",
                color: "oklch(0.85 0.2 85)",
              },
              {
                Icon: Globe,
                val: "100+",
                label: "Destinations",
                color: "oklch(0.75 0.18 190)",
              },
              {
                Icon: Award,
                val: "15+",
                label: "Years of Service",
                color: "oklch(0.75 0.18 300)",
              },
              {
                Icon: Star,
                val: "4.9★",
                label: "Customer Rating",
                color: "oklch(0.85 0.15 85)",
              },
            ].map(({ Icon, val, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`about.stat.item.${i + 1}`}
              >
                <Icon className="h-8 w-8 mx-auto mb-3" style={{ color }} />
                <div
                  className="font-display text-4xl font-bold mb-1"
                  style={{ color }}
                >
                  {val}
                </div>
                <div className="text-white/75 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Card */}
      <section
        className="py-16 bg-background"
        data-ocid="about.contact_section"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="px-8 py-6 text-center text-white"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.45 0.2 253), oklch(0.35 0.22 48))",
                }}
              >
                <h2 className="font-display text-2xl font-bold">
                  Visit The Happy Miles Tourism
                </h2>
                <p className="text-white/80 text-sm mt-1">
                  We'd love to meet you in person
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3">
                {[
                  {
                    Icon: MapPin,
                    label: "Address",
                    text: "AVS House, 42/1A Gurupada Halder Road, Kolkata – 700026",
                    sub: "West Bengal, India",
                    grad: "from-orange-500 to-pink-500",
                  },
                  {
                    Icon: Phone,
                    label: "Phone",
                    text: "+91 98313-98372",
                    sub: "Call / WhatsApp",
                    grad: "from-teal-400 to-blue-500",
                  },
                  {
                    Icon: Award,
                    label: "Hours",
                    text: "10:00 AM – 10:00 PM",
                    sub: "All Days Open",
                    grad: "from-violet-500 to-purple-600",
                  },
                ].map(({ Icon, label, text, sub, grad }) => (
                  <div
                    key={label}
                    className={`bg-gradient-to-br ${grad} p-7 text-white text-center`}
                  >
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-bold text-sm uppercase tracking-wider mb-2 text-white/80">
                      {label}
                    </p>
                    <p className="font-semibold text-sm leading-relaxed">
                      {text}
                    </p>
                    <p className="text-white/70 text-xs mt-1">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.6 0.2 300) 50%, oklch(0.45 0.2 253) 100%)",
        }}
        data-ocid="about.cta_section"
      >
        <div
          className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-25 blur-3xl"
          style={{ background: "oklch(0.72 0.17 58)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.6 0.18 190)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Ready to Travel with Us?
          </h2>
          <p className="text-white/85 mb-8 max-w-lg mx-auto text-lg">
            Join 50,000+ happy travelers who chose The Happy Miles Tourism for
            their dream India journey.
          </p>
          <Button
            asChild
            size="lg"
            className="font-bold px-10 py-6 text-lg rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            style={{ background: "white", color: "oklch(0.45 0.2 253)" }}
            data-ocid="about.cta_button"
          >
            <Link to="/packages">
              View Tour Packages <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
