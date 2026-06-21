import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Heart, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface HoneymoonDest {
  name: string;
  tagline: string;
  image: string;
  nights: string;
  price: string;
  isNew?: boolean;
}

const destinations: HoneymoonDest[] = [
  {
    name: "Goa",
    tagline: "Sunsets & Candlelit Dinners",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
    nights: "4N/5D",
    price: "₹18,500 / couple",
  },
  {
    name: "Kerala",
    tagline: "Backwater Bliss",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    nights: "5N/6D",
    price: "₹22,000 / couple",
  },
  {
    name: "Kashmir",
    tagline: "Paradise on Earth",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    nights: "6N/7D",
    price: "₹35,000 / couple",
  },
  {
    name: "Shimla & Manali",
    tagline: "Snow-Kissed Romance",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
    nights: "5N/6D",
    price: "₹25,000 / couple",
  },
  {
    name: "Maldives",
    tagline: "Overwater Villa Dream",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    nights: "5N/6D",
    price: "₹95,000 / couple",
    isNew: true,
  },
  {
    name: "Bali",
    tagline: "Tropical Lovers' Escape",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    nights: "6N/7D",
    price: "₹75,000 / couple",
    isNew: true,
  },
];

const features = [
  {
    icon: "🥂",
    title: "Romantic Dinners",
    desc: "Candlelit dinners at scenic locations, personalised menus, and fine dining experiences.",
  },
  {
    icon: "🌸",
    title: "Special Decorations",
    desc: "Room decorated with fresh flowers, petals, candles, and personalised welcome cards.",
  },
  {
    icon: "🛏️",
    title: "Honeymoon Suites",
    desc: "Premium suite upgrades with sea-view or mountain-view rooms for that extra romance.",
  },
  {
    icon: "🚗",
    title: "Private Tours",
    desc: "Exclusive private vehicle with a personalised driver for your own pace of exploration.",
  },
  {
    icon: "📸",
    title: "Couple Photoshoot",
    desc: "Professional photography session at iconic destinations to capture your special moments.",
  },
  {
    icon: "💆",
    title: "Spa & Wellness",
    desc: "Couple spa packages and wellness treatments for the ultimate relaxation experience.",
  },
];

interface HoneymoonFormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelDate: string;
  message: string;
}

export default function HoneymoonPackagesPage() {
  const [formData, setFormData] = useState<HoneymoonFormData>({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative py-32 overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.65 0.22 22) 40%, oklch(0.60 0.20 358) 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.72 0.2 35 / 0.88) 0%, oklch(0.60 0.20 358 / 0.82) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-12 -right-12 w-64 h-64 rounded-full opacity-25 blur-3xl"
          style={{ background: "oklch(0.85 0.15 340)" }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-10 w-48 h-48 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.9 0.15 75)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold mb-5">
              <Heart className="h-4 w-4 fill-white" /> Honeymoon Packages
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Romantic Escapes{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.95 0.15 75), oklch(0.90 0.10 358))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                for Two
              </span>
            </h1>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              Begin your forever with a journey to remember. Our handcrafted
              honeymoon packages are designed to create magical moments,
              intimate experiences, and lifelong memories for you and your
              beloved.
            </p>
            <Button
              size="lg"
              className="bg-white font-bold hover:bg-white/90 shadow-xl transition-all hover:-translate-y-0.5"
              style={{ color: "oklch(0.65 0.22 22)" }}
              onClick={() =>
                document
                  .getElementById("enquiry")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="honeymoon.enquire_button"
            >
              <Heart className="mr-2 h-4 w-4" /> Plan My Honeymoon
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-6 bg-card border-b border-border"
        data-ocid="honeymoon.stats_section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { val: "6+", label: "Destinations", color: "text-rose-500" },
              { val: "500+", label: "Happy Couples", color: "text-pink-500" },
              { val: "100%", label: "Personalised", color: "text-orange-500" },
              {
                val: "24/7",
                label: "Couple Support",
                color: "text-fuchsia-500",
              },
            ].map(({ val, label, color }) => (
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

      {/* Destinations */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.65 0.22 22), oklch(0.60 0.20 358))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Romantic Destinations
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Curated escapes for every kind of love story.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="honeymoon.list"
          >
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                data-ocid={`honeymoon.item.${index + 1}`}
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.20 0.15 22 / 0.95) 0%, oklch(0.45 0.18 35 / 0.5) 50%, transparent 100%)",
                    }}
                  />
                  {dest.isNew && (
                    <span
                      className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.65 0.22 48), oklch(0.68 0.20 35))",
                      }}
                    >
                      New
                    </span>
                  )}
                  <Heart
                    className="absolute top-3 left-3 h-6 w-6"
                    style={{
                      color: "oklch(0.85 0.15 358)",
                      fill: "oklch(0.85 0.15 358 / 0.5)",
                    }}
                  />
                  <div className="absolute bottom-3 left-4">
                    <p className="text-white font-display text-2xl font-bold">
                      {dest.name}
                    </p>
                    <p className="text-white/80 text-sm italic">
                      {dest.tagline}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-card flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {dest.nights}
                    </p>
                    <p
                      className="font-display text-lg font-bold"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.65 0.22 22), oklch(0.60 0.20 358))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {dest.price}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    asChild
                    className="font-semibold text-white"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.65 0.22 22), oklch(0.60 0.20 358))",
                    }}
                    data-ocid={`honeymoon.enquire.${index + 1}`}
                  >
                    <a href="#enquiry">Enquire</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Honeymoon Section */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.98 0.01 358) 0%, oklch(0.97 0.01 30) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.65 0.22 22), oklch(0.55 0.18 300))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Why Choose Us for Your Honeymoon?
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Every package comes with special touches to make your honeymoon
              truly magical.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 shadow-sm border border-rose-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: "white" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.97 0.03 358), oklch(0.95 0.05 30))",
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  className="font-display font-bold text-lg mb-2"
                  style={{ color: "oklch(0.25 0.05 22)" }}
                >
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold mb-4">
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.65 0.22 22), oklch(0.60 0.20 358))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Plan Your Dream Honeymoon
              </span>
            </h2>
            <p className="text-muted-foreground">
              Fill in the form below and our honeymoon specialists will call you
              back.
            </p>
          </div>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl p-10 text-center text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.22 22), oklch(0.60 0.20 358))",
              }}
              data-ocid="honeymoon.success_state"
            >
              <span className="text-5xl block mb-4">💖</span>
              <h3 className="font-display text-2xl font-bold mb-2">
                Enquiry Received!
              </h3>
              <p className="text-white/85">
                Our honeymoon specialist will contact you within 24 hours.
              </p>
              <p className="mt-4 font-bold text-lg">📞 98313-98372</p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 space-y-5 shadow-sm"
              data-ocid="honeymoon.enquiry_form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="hm-name">Your Name *</Label>
                  <Input
                    id="hm-name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    placeholder="Name"
                    data-ocid="honeymoon.name_input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hm-email">Email Address *</Label>
                  <Input
                    id="hm-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                    placeholder="your@email.com"
                    data-ocid="honeymoon.email_input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hm-phone">Phone Number *</Label>
                  <Input
                    id="hm-phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, phone: e.target.value }))
                    }
                    required
                    placeholder="+91 XXXXX XXXXX"
                    data-ocid="honeymoon.phone_input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hm-dest">Preferred Destination</Label>
                  <Input
                    id="hm-dest"
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData((p) => ({
                        ...p,
                        destination: e.target.value,
                      }))
                    }
                    placeholder="Goa, Kerala, Kashmir…"
                    data-ocid="honeymoon.destination_input"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="hm-date">Travel Date</Label>
                  <Input
                    id="hm-date"
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, travelDate: e.target.value }))
                    }
                    data-ocid="honeymoon.date_input"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="hm-message">Special Requests</Label>
                <Textarea
                  id="hm-message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Any special arrangements, budget, or preferences…"
                  rows={3}
                  data-ocid="honeymoon.message_textarea"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full font-bold text-white"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.65 0.22 22), oklch(0.60 0.20 358))",
                }}
                data-ocid="honeymoon.submit_button"
              >
                <Heart className="mr-2 h-4 w-4" /> Submit Honeymoon Enquiry
              </Button>
            </form>
          )}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              Or call us directly:
            </p>
            <a
              href="tel:+919831398372"
              className="inline-flex items-center gap-2 text-xl font-bold mt-1"
              style={{ color: "oklch(0.65 0.22 22)" }}
              data-ocid="honeymoon.phone_link"
            >
              <Phone className="h-5 w-5" /> 98313-98372
            </a>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <section
        className="py-8 border-t border-border"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.97 0.01 358), oklch(0.97 0.01 30))",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Trusted by hundreds of couples ·{" "}
            <Link
              to="/contact"
              className="font-semibold hover:underline"
              style={{ color: "oklch(0.65 0.22 22)" }}
            >
              Contact Us
            </Link>{" "}
            · Available 10 AM – 10 PM
          </p>
        </div>
      </section>
    </Layout>
  );
}
