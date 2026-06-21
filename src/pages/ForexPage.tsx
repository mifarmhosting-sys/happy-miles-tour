import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const benefits = [
  {
    emoji: "💱",
    title: "Best Exchange Rates",
    desc: "We source competitive rates across all major foreign currencies — no hidden charges, no surprises.",
    gradient:
      "linear-gradient(135deg, oklch(0.70 0.22 48) 0%, oklch(0.60 0.18 190) 100%)",
    shadow: "0 8px 32px oklch(0.70 0.22 48 / 0.35)",
  },
  {
    emoji: "🌍",
    title: "30+ Currencies",
    desc: "USD, EUR, GBP, AED, SGD, THB, JPY and more — ready for your international adventures.",
    gradient:
      "linear-gradient(135deg, oklch(0.60 0.18 190) 0%, oklch(0.45 0.2 253) 100%)",
    shadow: "0 8px 32px oklch(0.60 0.18 190 / 0.35)",
  },
  {
    emoji: "💳",
    title: "Travel Cards & Cash",
    desc: "Get multi-currency travel cards or physical foreign currency notes — we handle both.",
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.70 0.22 48) 100%)",
    shadow: "0 8px 32px oklch(0.72 0.2 35 / 0.35)",
  },
  {
    emoji: "🔒",
    title: "RBI Authorized",
    desc: "Fully regulated and RBI-authorized forex services — your funds are completely safe.",
    gradient:
      "linear-gradient(135deg, oklch(0.6 0.2 300) 0%, oklch(0.45 0.2 253) 100%)",
    shadow: "0 8px 32px oklch(0.6 0.2 300 / 0.35)",
  },
];

const stats = [
  { icon: "🌍", value: "30+", label: "Currencies Handled" },
  { icon: "💰", value: "₹0", label: "Hidden Charges" },
  { icon: "⚡", value: "Same Day", label: "Delivery Available" },
  { icon: "✅", value: "RBI", label: "Authorized Dealer" },
];

const currencies = [
  { flag: "🇺🇸", code: "USD", name: "US Dollar" },
  { flag: "🇪🇺", code: "EUR", name: "Euro" },
  { flag: "🇬🇧", code: "GBP", name: "British Pound" },
  { flag: "🇦🇪", code: "AED", name: "UAE Dirham" },
  { flag: "🇸🇬", code: "SGD", name: "Singapore Dollar" },
  { flag: "🇹🇭", code: "THB", name: "Thai Baht" },
  { flag: "🇯🇵", code: "JPY", name: "Japanese Yen" },
  { flag: "🇦🇺", code: "AUD", name: "Australian Dollar" },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export default function ForexPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "Foreign Currency Exchange",
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
            "linear-gradient(135deg, oklch(0.65 0.22 48) 0%, oklch(0.70 0.22 55) 40%, oklch(0.55 0.20 180) 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top right, oklch(0.65 0.20 190 / 0.5) 0%, transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.72 0.22 48 / 0.4) 0%, transparent 60%)",
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
            <span>💱</span> Our Services
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-5 leading-tight drop-shadow-lg">
            Forex Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Best-rate foreign exchange for your international travels — cash,
            travel cards, and wire transfers.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {currencies.map((c) => (
              <span
                key={c.code}
                className="bg-white/20 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/25 hover:bg-white/30 transition-colors cursor-default"
              >
                {c.flag} {c.code}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          background:
            "linear-gradient(90deg, oklch(0.70 0.22 48) 0%, oklch(0.60 0.18 190) 50%, oklch(0.45 0.2 253) 100%)",
        }}
        className="py-8"
      >
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl mb-1">{s.icon}</div>
              <div className="text-xl md:text-2xl font-bold text-white font-display">
                {s.value}
              </div>
              <div className="text-white/80 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Currency Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2
              className="font-display text-4xl font-bold mb-4"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.60 0.18 190))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Popular Currencies
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              We deal in 30+ currencies. Mention your destination and we'll
              arrange the best rate.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {currencies.map((c, i) => {
              const gradients = [
                "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.72 0.2 35))",
                "linear-gradient(135deg, oklch(0.45 0.2 253), oklch(0.6 0.2 300))",
                "linear-gradient(135deg, oklch(0.60 0.18 190), oklch(0.45 0.2 253))",
                "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.70 0.22 48))",
                "linear-gradient(135deg, oklch(0.6 0.2 300), oklch(0.60 0.18 190))",
                "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.60 0.18 190))",
                "linear-gradient(135deg, oklch(0.45 0.2 253), oklch(0.70 0.22 48))",
                "linear-gradient(135deg, oklch(0.60 0.18 190), oklch(0.6 0.2 300))",
              ];
              return (
                <div
                  key={c.code}
                  className="rounded-2xl p-6 text-center text-white transition-all duration-300 hover:-translate-y-1 cursor-default"
                  style={{
                    background: gradients[i % gradients.length],
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  }}
                >
                  <div className="text-3xl mb-2">{c.flag}</div>
                  <div className="font-display font-bold text-xl">{c.code}</div>
                  <div className="text-white/80 text-xs mt-1">{c.name}</div>
                </div>
              );
            })}
          </div>

          {/* Benefits */}
          <div className="text-center mb-14">
            <h2
              className="font-display text-4xl font-bold mb-4"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.60 0.18 190))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Why Choose Our Forex Services?
            </h2>
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
            "linear-gradient(135deg, oklch(0.65 0.22 48) 0%, oklch(0.70 0.22 55) 50%, oklch(0.55 0.20 180) 100%)",
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
              Get Your Foreign Exchange
            </h2>
            <p className="text-white/80 text-lg">
              Tell us your destination and currency needs — we'll get you the
              best rate.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3
                className="font-display text-2xl font-bold mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.60 0.18 190))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Forex Enquiry
              </h3>
              {submitted ? (
                <div
                  data-ocid="forex.success_state"
                  className="rounded-2xl p-8 text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.70 0.22 48 / 0.1), oklch(0.60 0.18 190 / 0.1))",
                  }}
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3
                    className="font-display text-xl font-bold mb-2"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.60 0.18 190))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Enquiry Received!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We'll call <strong>{form.phone}</strong> with the best forex
                    rates. Expect a call within 2 hours!
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    type="button"
                    data-ocid="forex.secondary_button"
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  data-ocid="forex.form"
                >
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="forex-name"
                    >
                      Full Name *
                    </label>
                    <input
                      id="forex-name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                      placeholder="Your full name"
                      data-ocid="forex.input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="forex-email"
                    >
                      Email Address *
                    </label>
                    <input
                      id="forex-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                      placeholder="your@email.com"
                      data-ocid="forex.email_input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="forex-phone"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="forex-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                      placeholder="+91 98765 43210"
                      data-ocid="forex.phone_input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="forex-service"
                    >
                      Service Interest
                    </label>
                    <select
                      id="forex-service"
                      name="serviceInterest"
                      value={form.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition"
                      data-ocid="forex.select"
                    >
                      <option>Currency Exchange</option>
                      <option>Travel Card (Multi-currency)</option>
                      <option>USD – US Dollar</option>
                      <option>EUR – Euro</option>
                      <option>GBP – British Pound</option>
                      <option>AED – UAE Dirham</option>
                      <option>SGD – Singapore Dollar</option>
                      <option>Other Currency</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="forex-msg"
                    >
                      Destination &amp; Amount Required
                    </label>
                    <textarea
                      id="forex-msg"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition resize-none"
                      placeholder="E.g. Travelling to Dubai on 10th Aug, need AED 2000..."
                      data-ocid="forex.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full font-bold py-3 text-base rounded-xl text-white border-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.70 0.22 48), oklch(0.60 0.18 190))",
                    }}
                    data-ocid="forex.submit_button"
                  >
                    💱 Get Best Forex Rate
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  Contact Our Forex Desk
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
                        data-ocid="forex.phone_link"
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
                    data-ocid="forex.cta_button"
                  >
                    📞 Call for Best Rates
                  </Button>
                </a>
              </div>
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-6">
                <p className="text-white font-semibold mb-2">
                  ✈️ Planning an international trip?
                </p>
                <p className="text-white/75 text-sm mb-4">
                  Bundle your forex with flights and hotels for a complete
                  international package.
                </p>
                <Link to="/international-tours">
                  <Button
                    type="button"
                    className="font-semibold rounded-xl bg-white/20 border border-white/40 text-white hover:bg-white/30"
                    data-ocid="forex.packages_link"
                  >
                    International Tours →
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
