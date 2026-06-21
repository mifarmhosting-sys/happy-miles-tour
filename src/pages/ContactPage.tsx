import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const serviceOptions = [
  "Indian Tour",
  "International Tour",
  "Honeymoon Package",
  "Corporate Tour",
  "Hotel Booking",
  "Flight Booking",
  "Train Booking",
  "Forex Services",
  "Custom Package",
];

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

const contactInfo = [
  {
    emoji: "📞",
    label: "Phone",
    value: "+91 98313-98372",
    sub: "Call / WhatsApp",
    href: "tel:+919831398372",
    grad: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    emoji: "✉️",
    label: "Email",
    value: "info@thehappymiles.in",
    sub: "We reply within 24h",
    href: "mailto:info@thehappymiles.in",
    grad: "from-teal-400 via-cyan-500 to-blue-500",
  },
  {
    emoji: "📍",
    label: "Address",
    value: "AVS House, 42/1A Gurupada Halder Road, Kolkata – 700026",
    sub: "West Bengal, India",
    href: "#",
    grad: "from-violet-500 via-purple-500 to-indigo-600",
  },
  {
    emoji: "🕙",
    label: "Hours",
    value: "10:00 AM – 10:00 PM",
    sub: "All Days Open",
    href: "#",
    grad: "from-yellow-400 via-amber-500 to-orange-500",
  },
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success("Message sent! We'll get back to you within 24 hours.");
    reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative py-32 text-white overflow-hidden"
        data-ocid="contact.header_section"
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
              "linear-gradient(135deg, oklch(0.3 0.18 190 / 0.92) 0%, oklch(0.3 0.22 48 / 0.75) 55%, oklch(0.35 0.2 35 / 0.88) 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-25 blur-3xl"
          style={{ background: "oklch(0.6 0.18 190)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.72 0.2 35)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
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
              ✦ Get in Touch
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold mb-5 leading-tight">
              Contact{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.85 0.2 85), oklch(0.75 0.18 190))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                The Happy Miles
              </span>
            </h1>
            <p className="text-white/90 max-w-xl mx-auto text-xl">
              Our travel experts are ready to help you plan your perfect India
              journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vibrant Info Cards */}
      <section
        className="py-14"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.97 0.01 75) 0%, oklch(0.95 0.02 200) 100%)",
        }}
        data-ocid="contact.info_section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              className="font-display text-3xl font-bold"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.45 0.2 253), oklch(0.72 0.2 35))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We'd Love to Hear From You
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              Whether you have a question, want to customise a tour, or need
              travel advice — reach out anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {contactInfo.map(
              ({ emoji, label, value, sub, href, grad }, idx) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`block bg-gradient-to-br ${grad} rounded-2xl p-6 text-white text-center shadow-xl hover:scale-105 transition-transform duration-300`}
                  data-ocid={`contact.info.${label.toLowerCase()}`}
                >
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <span
                      className="text-2xl"
                      role="presentation"
                      aria-hidden="true"
                    >
                      {emoji}
                    </span>
                  </div>
                  <p className="font-bold text-sm uppercase tracking-wider mb-2 text-white/80">
                    {label}
                  </p>
                  <p className="font-semibold text-sm leading-relaxed">
                    {value}
                  </p>
                  <p className="text-white/70 text-xs mt-1">{sub}</p>
                </motion.a>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 bg-background" data-ocid="contact.main_section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: "1px solid oklch(0.72 0.2 35 / 0.2)" }}
            >
              <div
                className="px-8 py-7 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.45 0.2 253), oklch(0.6 0.2 300), oklch(0.35 0.22 48))",
                }}
              >
                <h3 className="font-display text-2xl font-bold">
                  Send Us an Enquiry
                </h3>
                <p className="text-white/80 mt-1">
                  Fill in your details and we'll get back within 24 hours.
                </p>
              </div>
              <div className="p-8 bg-card">
                {submitted ? (
                  <div
                    className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                    data-ocid="contact.success_state"
                  >
                    <div
                      className="h-20 w-20 rounded-full flex items-center justify-center text-3xl text-white shadow-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.6 0.18 190), oklch(0.45 0.2 253))",
                      }}
                    >
                      ✓
                    </div>
                    <h4 className="font-display text-2xl font-semibold text-foreground">
                      Message Received!
                    </h4>
                    <p className="text-muted-foreground max-w-xs">
                      We'll get back to you at the email provided within 24
                      hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      className="mt-2"
                      data-ocid="contact.new_message_button"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    data-ocid="contact.form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="c-name">Full Name *</Label>
                        <Input
                          id="c-name"
                          placeholder="Your full name"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          className={errors.name ? "border-destructive" : ""}
                          data-ocid="contact.name_input"
                        />
                        {errors.name && (
                          <p
                            className="text-destructive text-xs"
                            data-ocid="contact.name_field_error"
                          >
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="c-email">Email Address *</Label>
                        <Input
                          id="c-email"
                          type="email"
                          placeholder="your@email.com"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^@]+@[^@]+\.[^@]+$/,
                              message: "Invalid email",
                            },
                          })}
                          className={errors.email ? "border-destructive" : ""}
                          data-ocid="contact.email_input"
                        />
                        {errors.email && (
                          <p
                            className="text-destructive text-xs"
                            data-ocid="contact.email_field_error"
                          >
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="c-phone">Phone Number *</Label>
                        <Input
                          id="c-phone"
                          type="tel"
                          placeholder="+91 98313 98372"
                          {...register("phone", {
                            required: "Phone is required",
                          })}
                          className={errors.phone ? "border-destructive" : ""}
                          data-ocid="contact.phone_input"
                        />
                        {errors.phone && (
                          <p
                            className="text-destructive text-xs"
                            data-ocid="contact.phone_field_error"
                          >
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="c-service">Service Interest</Label>
                        <select
                          id="c-service"
                          {...register("serviceInterest")}
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          data-ocid="contact.service_select"
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="c-message">Message *</Label>
                      <Textarea
                        id="c-message"
                        placeholder="Tell us about your travel plans, preferred dates, number of people..."
                        rows={5}
                        {...register("message", {
                          required: "Please enter your message",
                        })}
                        className={errors.message ? "border-destructive" : ""}
                        data-ocid="contact.message_textarea"
                      />
                      {errors.message && (
                        <p
                          className="text-destructive text-xs"
                          data-ocid="contact.message_field_error"
                        >
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full font-bold py-6 text-base rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.6 0.2 300), oklch(0.45 0.2 253))",
                        color: "white",
                      }}
                      disabled={isSubmitting}
                      data-ocid="contact.submit_button"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />{" "}
                          Sending...
                        </>
                      ) : (
                        "Send Enquiry →"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Frame */}
      <section
        className="py-14"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.96 0.02 75) 0%, oklch(0.94 0.02 190) 100%)",
        }}
        data-ocid="contact.location_section"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2
              className="font-display text-3xl font-bold"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.6 0.18 190), oklch(0.72 0.2 35))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Find Us in Kolkata
            </h2>
            <p className="text-muted-foreground mt-2">
              AVS House, 42/1A Gurupada Halder Road, Kolkata – 700026
            </p>
          </div>
          <div
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl p-1"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.2 35), oklch(0.6 0.2 300), oklch(0.45 0.2 253))",
            }}
          >
            <div className="rounded-xl overflow-hidden">
              <img
                src="/assets/generated/tour-tajmahal.dim_600x400.jpg"
                alt="Kolkata office location"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
