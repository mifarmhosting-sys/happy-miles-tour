import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Shield, Star, Wallet } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: Wallet,
    emoji: "💰",
    title: "Best Rate Guarantee",
    desc: "We match or beat any published hotel rate. You'll never overpay when you book through us.",
    gradient:
      "linear-gradient(135deg, oklch(0.70 0.22 48) 0%, oklch(0.72 0.2 35) 100%)",
    shadow: "0 8px 32px oklch(0.70 0.22 48 / 0.35)",
  },
  {
    icon: Star,
    emoji: "⭐",
    title: "Hand-picked Hotels",
    desc: "Every property is personally vetted by our team for quality, comfort, and value.",
    gradient:
      "linear-gradient(135deg, oklch(0.45 0.2 253) 0%, oklch(0.6 0.2 300) 100%)",
    shadow: "0 8px 32px oklch(0.45 0.2 253 / 0.35)",
  },
  {
    icon: Shield,
    emoji: "🛡️",
    title: "24/7 Support",
    desc: "Our travel experts are available round-the-clock to assist with any queries or changes.",
    gradient:
      "linear-gradient(135deg, oklch(0.60 0.18 190) 0%, oklch(0.45 0.2 253) 100%)",
    shadow: "0 8px 32px oklch(0.60 0.18 190 / 0.35)",
  },
  {
    icon: CheckCircle,
    emoji: "✅",
    title: "Free Cancellation",
    desc: "Flexible booking options with free cancellation on select properties.",
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.70 0.22 48) 100%)",
    shadow: "0 8px 32px oklch(0.72 0.2 35 / 0.35)",
  },
];

const stats = [
  { icon: "🏨", value: "500+", label: "Hotels Listed" },
  { icon: "🌟", value: "15+", label: "Years Experience" },
  { icon: "😊", value: "10K+", label: "Happy Guests" },
  { icon: "📍", value: "50+", label: "Destinations" },
];

const popularDestinations = [
  "🏖️ Goa",
  "🏔️ Shimla",
  "🌴 Kerala",
  "🏯 Jaipur",
  "🗼 Delhi",
  "🌆 Mumbai",
  "⛰️ Manali",
  "🕌 Agra",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export default function HotelsPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "Hotel Booking",
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
            "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.70 0.22 48) 40%, oklch(0.75 0.18 55) 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top right, oklch(0.80 0.15 60 / 0.4) 0%, transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.45 0.2 253 / 0.3) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 text-center px-4 py-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/30">
            <span>🏨</span> Our Services
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-5 leading-tight drop-shadow-lg">
            Hotel Bookings
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Find the best hotel deals for your travel. We partner with premium
            hotels across India and internationally.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {popularDestinations.map((d) => (
              <span
                key={d}
                className="bg-white/20 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/25 hover:bg-white/30 transition-colors cursor-default"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          background:
            "linear-gradient(90deg, oklch(0.45 0.2 253) 0%, oklch(0.6 0.2 300) 50%, oklch(0.70 0.22 48) 100%)",
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
                  "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.72 0.2 35), oklch(0.70 0.22 48))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Why Book Hotels With Us?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Over 15 years of experience connecting travellers with the finest
              stays.
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
            "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.70 0.22 48) 50%, oklch(0.75 0.18 55) 100%)",
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
              Send an Enquiry
            </h2>
            <p className="text-white/80 text-lg">
              Fill in your details and we'll get back to you within 2 hours.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3
                className="font-display text-2xl font-bold mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.70 0.22 48))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Book Your Stay
              </h3>
              {submitted ? (
                <div
                  data-ocid="hotels.success_state"
                  className="rounded-2xl p-8 text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.2 35 / 0.1), oklch(0.70 0.22 48 / 0.1))",
                  }}
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3
                    className="font-display text-xl font-bold mb-2"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.70 0.22 48))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Enquiry Received!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our team will call you at <strong>{form.phone}</strong>{" "}
                    shortly. Thank you!
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    type="button"
                    data-ocid="hotels.secondary_button"
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  data-ocid="hotels.form"
                >
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="hotel-name"
                    >
                      Full Name *
                    </label>
                    <input
                      id="hotel-name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                      placeholder="Your full name"
                      data-ocid="hotels.input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="hotel-email"
                    >
                      Email Address *
                    </label>
                    <input
                      id="hotel-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                      placeholder="your@email.com"
                      data-ocid="hotels.email_input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="hotel-phone"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="hotel-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                      placeholder="+91 98765 43210"
                      data-ocid="hotels.phone_input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="hotel-service"
                    >
                      Service Interest
                    </label>
                    <select
                      id="hotel-service"
                      name="serviceInterest"
                      value={form.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition"
                      data-ocid="hotels.select"
                    >
                      <option>Hotel Booking</option>
                      <option>Hotel + Tour Package</option>
                      <option>Corporate Hotel Stay</option>
                      <option>Honeymoon Hotel Package</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="hotel-msg"
                    >
                      Travel Details / Notes
                    </label>
                    <textarea
                      id="hotel-msg"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition resize-none"
                      placeholder="Destination, dates, no. of guests, preferences..."
                      data-ocid="hotels.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full font-bold py-3 text-base rounded-xl text-white border-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.70 0.22 48))",
                    }}
                    data-ocid="hotels.submit_button"
                  >
                    🏨 Send Enquiry
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  Contact Our Hotel Desk
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
                        data-ocid="hotels.phone_link"
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
                    data-ocid="hotels.cta_button"
                  >
                    📞 Call Now for Best Rates
                  </Button>
                </a>
              </div>
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-6">
                <p className="text-white font-semibold mb-2">
                  🌟 Looking for a complete trip?
                </p>
                <p className="text-white/75 text-sm mb-4">
                  Combine your hotel booking with a full tour package and save
                  more.
                </p>
                <Link to="/packages">
                  <Button
                    type="button"
                    className="font-semibold rounded-xl bg-white/20 border border-white/40 text-white hover:bg-white/30"
                    data-ocid="hotels.packages_link"
                  >
                    Explore Tour Packages →
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
