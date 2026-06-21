import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Phone,
  Plane,
  Tag,
  Users,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    emoji: "💰",
    icon: Tag,
    title: "Lowest Fares",
    desc: "We scan all airlines and aggregate deals to secure the lowest available airfare for every route.",
    gradient:
      "linear-gradient(135deg, oklch(0.45 0.2 253) 0%, oklch(0.55 0.18 253) 100%)",
    shadow: "0 8px 32px oklch(0.45 0.2 253 / 0.35)",
  },
  {
    emoji: "✈️",
    icon: Plane,
    title: "All Airlines",
    desc: "Access to all domestic and international airlines — IndiGo, Air India, Vistara, Emirates, and more.",
    gradient:
      "linear-gradient(135deg, oklch(0.6 0.2 300) 0%, oklch(0.5 0.22 310) 100%)",
    shadow: "0 8px 32px oklch(0.6 0.2 300 / 0.35)",
  },
  {
    emoji: "📅",
    icon: Calendar,
    title: "Flexible Dates",
    desc: "Explore alternate dates to find the cheapest fares for your travel window.",
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.18 253) 0%, oklch(0.6 0.2 300) 100%)",
    shadow: "0 8px 32px oklch(0.55 0.18 253 / 0.35)",
  },
  {
    emoji: "👥",
    icon: Users,
    title: "Group Discounts",
    desc: "Travelling with 10 or more? We negotiate special group fares directly with airlines.",
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.72 0.2 35) 50%, oklch(0.6 0.2 300) 100%)",
    shadow: "0 8px 32px oklch(0.72 0.2 35 / 0.35)",
  },
];

const stats = [
  { icon: "✈️", value: "200+", label: "Routes Covered" },
  { icon: "🌍", value: "50+", label: "International Destinations" },
  { icon: "💸", value: "30%", label: "Avg. Savings" },
  { icon: "💫", value: "15+", label: "Years Experience" },
];

const popularRoutes = [
  "✈️ Kolkata → Mumbai",
  "✈️ Kolkata → Delhi",
  "✈️ Kolkata → Goa",
  "✈️ Kolkata → Dubai",
  "✈️ Kolkata → Bangkok",
  "✈️ Delhi → Leh",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export default function FlightsPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "Flight Booking",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative min-h-[520px] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.25 0.18 265) 0%, oklch(0.45 0.2 253) 40%, oklch(0.55 0.22 300) 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top right, oklch(0.65 0.22 300 / 0.5) 0%, transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.30 0.2 253 / 0.4) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 text-center px-4 py-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/30">
            <span>✈️</span> Our Services
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-5 leading-tight drop-shadow-lg">
            Flight Bookings
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Get the best flight deals with our expert travel consultants for
            domestic and international routes.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {popularRoutes.map((r) => (
              <span
                key={r}
                className="bg-white/20 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/25 hover:bg-white/30 transition-colors cursor-default"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          background:
            "linear-gradient(90deg, oklch(0.45 0.2 253) 0%, oklch(0.6 0.2 300) 50%, oklch(0.72 0.2 35) 100%)",
        }}
        className="py-8"
      >
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl mb-1">{s.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-white font-display">
                {s.value}
              </div>
              <div className="text-white/80 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2
              className="font-display text-4xl font-bold mb-4"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.45 0.2 253), oklch(0.6 0.2 300))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Why Book Flights With Us?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Trusted by thousands of travellers for transparent, affordable
              flight bookings.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-6 text-center text-white transition-all duration-300 hover:-translate-y-2 cursor-default"
                style={{ background: b.gradient, boxShadow: b.shadow }}
              >
                <div className="text-4xl mb-4">{b.emoji}</div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {b.title}
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry + Contact */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.25 0.18 265) 0%, oklch(0.45 0.2 253) 50%, oklch(0.55 0.22 300) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-white mb-3">
              Book Your Flight
            </h2>
            <p className="text-white/80 text-lg">
              Tell us your route and dates — we'll find the best fares for you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3
                className="font-display text-2xl font-bold mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.45 0.2 253), oklch(0.6 0.2 300))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Flight Enquiry
              </h3>
              {submitted ? (
                <div
                  data-ocid="flights.success_state"
                  className="rounded-2xl p-8 text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.45 0.2 253 / 0.1), oklch(0.6 0.2 300 / 0.1))",
                  }}
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3
                    className="font-display text-xl font-bold mb-2"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.45 0.2 253), oklch(0.6 0.2 300))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Enquiry Received!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We'll call <strong>{form.phone}</strong> with flight
                    options. Expect a call within 2 hours!
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    type="button"
                    data-ocid="flights.secondary_button"
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  data-ocid="flights.form"
                >
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="flight-name"
                    >
                      Full Name *
                    </label>
                    <input
                      id="flight-name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                      placeholder="Your full name"
                      data-ocid="flights.input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="flight-email"
                    >
                      Email Address *
                    </label>
                    <input
                      id="flight-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                      placeholder="your@email.com"
                      data-ocid="flights.email_input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="flight-phone"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="flight-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                      placeholder="+91 98765 43210"
                      data-ocid="flights.phone_input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="flight-service"
                    >
                      Service Interest
                    </label>
                    <select
                      id="flight-service"
                      name="serviceInterest"
                      value={form.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition"
                      data-ocid="flights.select"
                    >
                      <option>Flight Booking</option>
                      <option>Domestic Flight</option>
                      <option>International Flight</option>
                      <option>Group Flight Booking</option>
                      <option>Flight + Hotel Package</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="flight-msg"
                    >
                      Route, Dates &amp; Passenger Details
                    </label>
                    <textarea
                      id="flight-msg"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition resize-none"
                      placeholder="E.g. Kolkata to Goa, 15th July, 2 adults 1 child, economy..."
                      data-ocid="flights.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full font-bold py-3 text-base rounded-xl text-white border-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.45 0.2 253), oklch(0.6 0.2 300))",
                    }}
                    data-ocid="flights.submit_button"
                  >
                    ✈️ Get Flight Options
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  Contact Our Flight Desk
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 text-xl">
                      📞
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Call / WhatsApp</p>
                      <a
                        href="tel:+919831398372"
                        className="text-white font-bold text-lg hover:text-white/80 transition-colors"
                        data-ocid="flights.phone_link"
                      >
                        +91 98313-98372
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 text-xl">
                      🕐
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Office Hours</p>
                      <p className="text-white font-bold">
                        10:00 AM – 10:00 PM
                      </p>
                      <p className="text-white/60 text-xs">
                        Mon – Sun, All Days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 text-xl">
                      📍
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Visit Our Office</p>
                      <p className="text-white font-bold">AVS House</p>
                      <p className="text-white/70 text-sm">
                        42/1A Gurupada Halder Road, Kolkata – 700026
                      </p>
                    </div>
                  </div>
                </div>
                <a href="tel:+919831398372">
                  <Button
                    className="w-full mt-6 font-bold py-3 rounded-xl text-foreground border-0 bg-white hover:bg-white/90"
                    type="button"
                    data-ocid="flights.cta_button"
                  >
                    📞 Call for Lowest Fares
                  </Button>
                </a>
              </div>
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-6">
                <p className="text-white font-semibold mb-2">
                  💺 Planning a complete trip?
                </p>
                <p className="text-white/75 text-sm mb-4">
                  Bundle your flights with hotel and sightseeing for a complete
                  holiday package.
                </p>
                <Link to="/packages">
                  <Button
                    type="button"
                    className="font-semibold rounded-xl bg-white/20 border border-white/40 text-white hover:bg-white/30"
                    data-ocid="flights.packages_link"
                  >
                    View Tour Packages →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
