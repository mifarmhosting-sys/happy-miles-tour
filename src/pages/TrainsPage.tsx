import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const benefits = [
  {
    emoji: "🎟️",
    title: "Tatkal & General Booking",
    desc: "Book regular and Tatkal tickets across all classes — Sleeper, 3AC, 2AC, 1AC, and more.",
    gradient:
      "linear-gradient(135deg, oklch(0.60 0.18 190) 0%, oklch(0.55 0.18 200) 100%)",
    shadow: "0 8px 32px oklch(0.60 0.18 190 / 0.35)",
  },
  {
    emoji: "🗺️",
    title: "Pan-India Routes",
    desc: "All major Indian Railway routes covered — express, superfast, and special trains across zones.",
    gradient:
      "linear-gradient(135deg, oklch(0.45 0.2 253) 0%, oklch(0.60 0.18 190) 100%)",
    shadow: "0 8px 32px oklch(0.45 0.2 253 / 0.35)",
  },
  {
    emoji: "🧳",
    title: "Baggage Assistance",
    desc: "We advise on luggage allowances, parcel booking, and large-group baggage coordination.",
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.2 35) 0%, oklch(0.60 0.18 190) 100%)",
    shadow: "0 8px 32px oklch(0.72 0.2 35 / 0.35)",
  },
  {
    emoji: "⚡",
    title: "Instant Confirmation",
    desc: "Speedy booking with instant PNR and ticket delivery to your email or WhatsApp.",
    gradient:
      "linear-gradient(135deg, oklch(0.6 0.2 300) 0%, oklch(0.60 0.18 190) 100%)",
    shadow: "0 8px 32px oklch(0.6 0.2 300 / 0.35)",
  },
];

const stats = [
  { icon: "🚂", value: "1000+", label: "Train Routes" },
  { icon: "📍", value: "500+", label: "Stations" },
  { icon: "🎟️", value: "50K+", label: "Tickets Booked" },
  { icon: "⭐", value: "4.8★", label: "Customer Rating" },
];

const popularRoutes = [
  "🚂 Kolkata → Delhi",
  "🚂 Kolkata → Mumbai",
  "🚂 Kolkata → Chennai",
  "🚂 Kolkata → Puri",
  "🚂 Kolkata → Darjeeling",
  "🚂 Delhi → Agra",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export default function TrainsPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "Train Reservation",
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
            "linear-gradient(135deg, oklch(0.30 0.15 185) 0%, oklch(0.60 0.18 190) 40%, oklch(0.50 0.20 200) 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top right, oklch(0.70 0.18 190 / 0.5) 0%, transparent 60%), radial-gradient(ellipse at bottom left, oklch(0.45 0.2 253 / 0.4) 0%, transparent 60%)",
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
            <span>🚂</span> Our Services
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-5 leading-tight drop-shadow-lg">
            Train Bookings
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Book train tickets with expert assistance — Tatkal, group bookings,
            and special journey planning across India.
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
            "linear-gradient(90deg, oklch(0.60 0.18 190) 0%, oklch(0.45 0.2 253) 50%, oklch(0.72 0.2 35) 100%)",
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
                  "linear-gradient(135deg, oklch(0.60 0.18 190), oklch(0.45 0.2 253))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Why Book Trains With Us?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Hassle-free train booking with expert guidance and real-time
              support.
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
            "linear-gradient(135deg, oklch(0.30 0.15 185) 0%, oklch(0.60 0.18 190) 50%, oklch(0.45 0.2 253) 100%)",
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
              Book Your Train Journey
            </h2>
            <p className="text-white/80 text-lg">
              Share your travel details — we'll handle the booking for you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3
                className="font-display text-2xl font-bold mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.60 0.18 190), oklch(0.45 0.2 253))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Train Ticket Enquiry
              </h3>
              {submitted ? (
                <div
                  data-ocid="trains.success_state"
                  className="rounded-2xl p-8 text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.60 0.18 190 / 0.1), oklch(0.45 0.2 253 / 0.1))",
                  }}
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3
                    className="font-display text-xl font-bold mb-2"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.60 0.18 190), oklch(0.45 0.2 253))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Enquiry Received!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We'll call <strong>{form.phone}</strong> with booking
                    options. Expect a call within 2 hours!
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    type="button"
                    data-ocid="trains.secondary_button"
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  data-ocid="trains.form"
                >
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="train-name"
                    >
                      Full Name *
                    </label>
                    <input
                      id="train-name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                      placeholder="Your full name"
                      data-ocid="trains.input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="train-email"
                    >
                      Email Address *
                    </label>
                    <input
                      id="train-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                      placeholder="your@email.com"
                      data-ocid="trains.email_input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="train-phone"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="train-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                      placeholder="+91 98765 43210"
                      data-ocid="trains.phone_input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="train-service"
                    >
                      Service Interest
                    </label>
                    <select
                      id="train-service"
                      name="serviceInterest"
                      value={form.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:border-primary transition"
                      data-ocid="trains.select"
                    >
                      <option>Train Ticket Booking</option>
                      <option>Tatkal Booking</option>
                      <option>Group Train Booking</option>
                      <option>Sleeper Class</option>
                      <option>AC Class (1AC/2AC/3AC)</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-foreground mb-1.5"
                      htmlFor="train-msg"
                    >
                      Route, Date &amp; Passenger Details
                    </label>
                    <textarea
                      id="train-msg"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition resize-none"
                      placeholder="E.g. Kolkata to Delhi, 20th July, 3 passengers, 2AC..."
                      data-ocid="trains.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full font-bold py-3 text-base rounded-xl text-white border-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.60 0.18 190), oklch(0.45 0.2 253))",
                    }}
                    data-ocid="trains.submit_button"
                  >
                    🚂 Book Train Ticket
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-8">
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  Contact Our Train Desk
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
                        data-ocid="trains.phone_link"
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
                    data-ocid="trains.cta_button"
                  >
                    📞 Call to Book Tickets
                  </Button>
                </a>
              </div>
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-3xl p-6">
                <p className="text-white font-semibold mb-2">
                  🗺️ Planning a complete tour?
                </p>
                <p className="text-white/75 text-sm mb-4">
                  Combine your train journey with hotels and sightseeing for a
                  seamless trip.
                </p>
                <Link to="/packages">
                  <Button
                    type="button"
                    className="font-semibold rounded-xl bg-white/20 border border-white/40 text-white hover:bg-white/30"
                    data-ocid="trains.packages_link"
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
