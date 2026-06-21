import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import { Briefcase, Building2, CheckCircle2, Phone, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const services = [
  {
    icon: Building2,
    title: "Conference Travel",
    desc: "End-to-end travel management for corporate conferences, seminars, and business summits. We handle flights, hotels, and local logistics.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    color1: "oklch(0.20 0.15 190 / 0.95)",
    color2: "oklch(0.45 0.18 210 / 0.6)",
  },
  {
    icon: Users,
    title: "Team Outings",
    desc: "Refreshing team outings that strengthen bonds — from local day trips to multi-day escapes across India's most scenic destinations.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    color1: "oklch(0.20 0.15 253 / 0.95)",
    color2: "oklch(0.45 0.20 253 / 0.6)",
  },
  {
    icon: Briefcase,
    title: "Corporate Retreats",
    desc: "Premium resort-based retreats with dedicated event spaces, outdoor activities, and gala dinner arrangements.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    color1: "oklch(0.18 0.12 230 / 0.95)",
    color2: "oklch(0.40 0.16 230 / 0.6)",
  },
  {
    icon: Building2,
    title: "MICE Services",
    desc: "Meetings, Incentives, Conferences & Exhibitions — full-spectrum event travel management with dedicated on-ground coordinators.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    color1: "oklch(0.20 0.18 270 / 0.95)",
    color2: "oklch(0.45 0.18 270 / 0.6)",
  },
];

const benefits = [
  {
    title: "Dedicated Account Manager",
    desc: "A single point of contact who understands your organisation's travel needs and preferences.",
  },
  {
    title: "Group Discounts",
    desc: "Exclusive rates for bulk bookings on hotels, flights, and transport — the larger the group, the bigger the savings.",
  },
  {
    title: "Flexible Billing",
    desc: "GST invoices, monthly billing cycles, and post-trip settlement options to fit your company's finance workflow.",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock helpline for any travel emergencies, changes, or on-trip assistance — we're always just a call away.",
  },
  {
    title: "Custom Itineraries",
    desc: "Every corporate trip is uniquely planned around your objectives, team size, budget, and preferred activities.",
  },
  {
    title: "Safety First",
    desc: "Vetted vehicles, verified accommodations, and fully briefed guides ensure your team travels safe at every step.",
  },
];

interface CorpFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  groupSize: string;
  destination: string;
  travelDate: string;
  message: string;
}

export default function CorporateToursPage() {
  const [formData, setFormData] = useState<CorpFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    groupSize: "",
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
            "linear-gradient(135deg, oklch(0.55 0.18 190) 0%, oklch(0.50 0.20 210) 40%, oklch(0.45 0.22 253) 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.18 190 / 0.88) 0%, oklch(0.45 0.22 253 / 0.82) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.7 0.2 190)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-10 right-10 w-60 h-60 rounded-full opacity-15 blur-3xl"
          style={{ background: "oklch(0.65 0.2 253)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold mb-5">
              <Building2 className="h-4 w-4" /> Corporate Travel
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Corporate Travel{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.95 0.15 75), oklch(0.90 0.15 180))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Solutions
              </span>
            </h1>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              From high-level executive retreats to large-scale team outings,
              The Happy Miles Tourism delivers seamless, professionally managed
              corporate travel experiences that go beyond expectations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-white font-bold hover:bg-white/90 shadow-xl transition-all hover:-translate-y-0.5"
                style={{ color: "oklch(0.50 0.20 210)" }}
                onClick={() =>
                  document
                    .getElementById("corp-enquiry")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-ocid="corporate.enquire_button"
              >
                Get a Quote
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/60 text-white hover:bg-white/15 bg-white/10 backdrop-blur-sm"
                data-ocid="corporate.contact_button"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="py-8 bg-card border-b border-border"
        data-ocid="corporate.stats_section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                val: "200+",
                label: "Corporate Clients",
                color: "text-teal-600",
                bg: "bg-teal-500/10",
              },
              {
                val: "5000+",
                label: "Employees Served",
                color: "text-cyan-600",
                bg: "bg-cyan-500/10",
              },
              {
                val: "50+",
                label: "Partner Hotels",
                color: "text-blue-600",
                bg: "bg-blue-500/10",
              },
              {
                val: "15+",
                label: "Years Experience",
                color: "text-indigo-600",
                bg: "bg-indigo-500/10",
              },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl p-4 text-center ${s.bg}`}
              >
                <p className={`font-display text-3xl font-bold ${s.color}`}>
                  {s.val}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.55 0.18 190), oklch(0.45 0.22 253))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Corporate Travel Services
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive travel solutions built around your business goals.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            data-ocid="corporate.services_list"
          >
            {services.map((svc, index) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                data-ocid={`corporate.service.${index + 1}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${svc.color1} 0%, ${svc.color2} 50%, transparent 100%)`,
                    }}
                  />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                      <svc.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-white font-display text-xl font-bold">
                      {svc.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5 bg-card">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.97 0.02 210) 0%, oklch(0.97 0.01 240) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.55 0.18 190), oklch(0.45 0.22 253))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Why Corporates Choose Us
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Benefits designed to make corporate travel effortless and
              cost-effective.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-xl flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.18 190), oklch(0.45 0.22 253))",
                    }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {b.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="corp-enquiry" className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold mb-4">
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.55 0.18 190), oklch(0.45 0.22 253))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Request a Corporate Travel Quote
              </span>
            </h2>
            <p className="text-muted-foreground">
              Share your requirements and our corporate travel consultant will
              respond within 2 business hours.
            </p>
          </div>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl p-10 text-center text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.18 190), oklch(0.45 0.22 253))",
              }}
              data-ocid="corporate.success_state"
            >
              <span className="text-5xl block mb-4">🏢</span>
              <h3 className="font-display text-2xl font-bold mb-2">
                Quote Request Received!
              </h3>
              <p className="text-white/85">
                Our corporate travel team will contact you within 2 business
                hours.
              </p>
              <p className="mt-4 font-bold text-lg">📞 98313-98372</p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 space-y-5 shadow-sm"
              data-ocid="corporate.enquiry_form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="corp-name">Contact Person *</Label>
                  <Input
                    id="corp-name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    placeholder="Your name"
                    data-ocid="corporate.name_input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="corp-company">Company Name *</Label>
                  <Input
                    id="corp-company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, company: e.target.value }))
                    }
                    required
                    placeholder="Company Pvt. Ltd."
                    data-ocid="corporate.company_input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="corp-email">Business Email *</Label>
                  <Input
                    id="corp-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    required
                    placeholder="you@company.com"
                    data-ocid="corporate.email_input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="corp-phone">Phone Number *</Label>
                  <Input
                    id="corp-phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, phone: e.target.value }))
                    }
                    required
                    placeholder="+91 XXXXX XXXXX"
                    data-ocid="corporate.phone_input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="corp-group">Group Size</Label>
                  <Input
                    id="corp-group"
                    value={formData.groupSize}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, groupSize: e.target.value }))
                    }
                    placeholder="e.g. 25 employees"
                    data-ocid="corporate.group_size_input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="corp-dest">Preferred Destination</Label>
                  <Input
                    id="corp-dest"
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData((p) => ({
                        ...p,
                        destination: e.target.value,
                      }))
                    }
                    placeholder="Goa, Ooty, Manali…"
                    data-ocid="corporate.destination_input"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="corp-date">Preferred Travel Date</Label>
                  <Input
                    id="corp-date"
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, travelDate: e.target.value }))
                    }
                    data-ocid="corporate.date_input"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="corp-msg">Additional Requirements</Label>
                <Textarea
                  id="corp-msg"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Activities, budget, special requirements…"
                  rows={3}
                  data-ocid="corporate.message_textarea"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full font-bold text-white"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.55 0.18 190), oklch(0.45 0.22 253))",
                }}
                data-ocid="corporate.submit_button"
              >
                Submit Quote Request
              </Button>
            </form>
          )}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">Or reach us at:</p>
            <a
              href="tel:+919831398372"
              className="inline-flex items-center gap-2 text-xl font-bold mt-1"
              style={{ color: "oklch(0.50 0.20 210)" }}
              data-ocid="corporate.phone_link"
            >
              <Phone className="h-5 w-5" /> 98313-98372
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
