import { EnquiryForm } from "@/components/EnquiryForm";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { tours } from "@/data/tours";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  IndianRupee,
  MapPin,
  Phone,
  Star,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";

export default function TourDetailPage() {
  const { id } = useParams({ from: "/tour/$id" });
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return (
      <Layout>
        <div
          className="min-h-[60vh] flex flex-col items-center justify-center gap-4"
          data-ocid="tour_detail.not_found"
        >
          <h1 className="font-display text-3xl font-bold text-foreground">
            Tour Not Found
          </h1>
          <p className="text-muted-foreground">
            The tour you are looking for does not exist.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/packages">Browse All Packages</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden"
        data-ocid="tour_detail.hero_section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${tour.image}')` }}
        />
        {/* Bold saffron-to-coral gradient from left + dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, oklch(0.75 0.18 70 / 0.85) 0%, oklch(0.68 0.19 28 / 0.75) 35%, oklch(0 0 0 / 0.35) 100%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-white/80 hover:text-white hover:bg-white/10 mb-4 -ml-1"
            data-ocid="tour_detail.back_button"
          >
            <Link to="/packages">
              <ArrowLeft className="h-4 w-4 mr-1" />
              All Packages
            </Link>
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {/* Duration badge — saffron */}
              <span
                className="text-white text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: "oklch(0.75 0.18 70)" }}
              >
                {tour.duration}
              </span>
              {/* Category badge — coral */}
              <span
                className="text-white text-xs font-bold px-3 py-1 rounded-full capitalize"
                style={{ background: "oklch(0.68 0.19 28)" }}
              >
                {tour.category}
              </span>
              {tour.destinations.slice(0, 3).map((d) => (
                <span
                  key={d}
                  className="text-white/90 text-xs font-medium bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 flex items-center gap-1"
                >
                  <MapPin className="h-3 w-3" />
                  {d}
                </span>
              ))}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
              {tour.name}
            </h1>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-yellow-300 text-yellow-300"
                  />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">
                4.9 · 200+ Reviews
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div
        className="border-b border-border py-3"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.97 0.03 70), oklch(0.97 0.02 265))",
        }}
        data-ocid="tour_detail.breadcrumb"
      >
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm">
          <Link
            to="/"
            className="font-semibold transition-colors hover:underline"
            style={{ color: "oklch(0.75 0.18 70)" }}
          >
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link
            to="/packages"
            className="font-semibold transition-colors hover:underline"
            style={{ color: "oklch(0.55 0.18 265)" }}
          >
            Packages
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium truncate">
            {tour.name}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <section
        className="py-12 bg-background"
        data-ocid="tour_detail.main_section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                data-ocid="tour_detail.overview"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Tour Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {tour.description}
                </p>

                {/* Highlights Grid */}
                {tour.highlights?.length > 0 && (
                  <div className="mt-6">
                    <h3
                      className="font-display text-xl font-bold mb-4"
                      style={{
                        background:
                          "linear-gradient(90deg, oklch(0.75 0.18 70), oklch(0.65 0.14 195))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tour.highlights.map((h, i) => {
                        const gradients = [
                          "linear-gradient(135deg, oklch(0.97 0.04 70), oklch(0.95 0.05 28))",
                          "linear-gradient(135deg, oklch(0.95 0.04 195), oklch(0.95 0.04 265))",
                          "linear-gradient(135deg, oklch(0.95 0.04 300), oklch(0.95 0.05 28))",
                          "linear-gradient(135deg, oklch(0.95 0.04 265), oklch(0.95 0.04 195))",
                        ];
                        const gradientBg = gradients[i % gradients.length];
                        return (
                          <div
                            key={h}
                            className="flex items-center gap-3 rounded-xl px-4 py-3 shadow-sm"
                            style={{ background: gradientBg }}
                            data-ocid={`tour_detail.highlight.item.${i + 1}`}
                          >
                            <Star
                              className="h-4 w-4 shrink-0"
                              style={{ color: "oklch(0.75 0.18 70)" }}
                            />
                            <span className="text-sm font-medium text-foreground">
                              {h}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>

              <Separator />

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                data-ocid="tour_detail.itinerary_section"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Day-by-Day Itinerary
                </h2>
                <div className="space-y-0">
                  {tour.itinerary.map((day, i) => {
                    const dayColors = [
                      "oklch(0.75 0.18 70)", // saffron
                      "oklch(0.68 0.19 28)", // coral
                      "oklch(0.65 0.14 195)", // teal
                      "oklch(0.55 0.18 265)", // blue
                      "oklch(0.60 0.22 300)", // purple
                    ];
                    const circleColor = dayColors[i % dayColors.length];
                    return (
                      <motion.div
                        key={day.day}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex gap-5 group"
                        data-ocid={`tour_detail.itinerary.item.${i + 1}`}
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className="h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-md"
                            style={{ background: circleColor }}
                          >
                            {day.day}
                          </div>
                          {i < tour.itinerary.length - 1 && (
                            <div
                              className="w-0.5 flex-1 mt-1 mb-1"
                              style={{
                                background: `linear-gradient(to bottom, ${circleColor}, ${dayColors[(i + 1) % dayColors.length]})`,
                                opacity: 0.35,
                              }}
                            />
                          )}
                        </div>
                        <div className="pb-7 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar
                              className="h-3.5 w-3.5 shrink-0"
                              style={{ color: circleColor }}
                            />
                            <span
                              className="text-xs font-bold uppercase tracking-wide"
                              style={{ color: circleColor }}
                            >
                              Day {day.day}
                            </span>
                          </div>
                          <h4 className="font-display text-base font-semibold text-foreground mb-1.5">
                            {day.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {day.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <Separator />

              {/* Inclusions & Exclusions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                data-ocid="tour_detail.inclusions_section"
              >
                {/* Inclusions — gradient card */}
                <div
                  className="rounded-2xl p-5 shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.97 0.04 150), oklch(0.96 0.04 195))",
                  }}
                >
                  <h3
                    className="font-display text-xl font-bold mb-4 flex items-center gap-2"
                    style={{ color: "oklch(0.50 0.14 165)" }}
                  >
                    <CheckCircle2
                      className="h-5 w-5"
                      style={{ color: "oklch(0.60 0.18 155)" }}
                    />{" "}
                    What's Included
                  </h3>
                  <ul className="space-y-2.5">
                    {tour.inclusions.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5"
                        data-ocid={`tour_detail.inclusion.item.${i + 1}`}
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 mt-0.5"
                          style={{ color: "oklch(0.60 0.18 155)" }}
                        />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions — gradient card */}
                <div
                  className="rounded-2xl p-5 shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.97 0.03 28), oklch(0.97 0.04 0))",
                  }}
                >
                  <h3
                    className="font-display text-xl font-bold mb-4 flex items-center gap-2"
                    style={{ color: "oklch(0.50 0.16 28)" }}
                  >
                    <XCircle
                      className="h-5 w-5"
                      style={{ color: "oklch(0.60 0.19 28)" }}
                    />{" "}
                    Not Included
                  </h3>
                  <ul className="space-y-2.5">
                    {tour.exclusions.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5"
                        data-ocid={`tour_detail.exclusion.item.${i + 1}`}
                      >
                        <XCircle
                          className="h-4 w-4 shrink-0 mt-0.5"
                          style={{ color: "oklch(0.60 0.19 28)" }}
                        />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column — Sticky Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Price Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl shadow-lg overflow-hidden sticky top-24"
                data-ocid="tour_detail.price_card"
              >
                {/* Gradient header */}
                <div
                  className="px-6 pt-6 pb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.75 0.18 70), oklch(0.68 0.19 28))",
                  }}
                >
                  <p className="text-white/80 text-xs uppercase tracking-widest font-semibold mb-1">
                    Starting From
                  </p>
                  <div className="flex items-end gap-1">
                    <IndianRupee className="h-6 w-6 text-white mb-0.5" />
                    <span className="font-display text-4xl font-bold text-white">
                      {tour.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-white/70 text-sm mb-1">/person</span>
                  </div>
                </div>

                {/* White body */}
                <div className="bg-card p-6 border border-border border-t-0 rounded-b-2xl">
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div
                      className="rounded-xl p-3 text-center"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.97 0.03 70), oklch(0.96 0.03 28))",
                      }}
                    >
                      <Clock
                        className="h-4 w-4 mx-auto mb-1"
                        style={{ color: "oklch(0.75 0.18 70)" }}
                      />
                      <p className="text-xs font-semibold text-foreground">
                        {tour.duration}
                      </p>
                    </div>
                    <div
                      className="rounded-xl p-3 text-center"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.95 0.04 195), oklch(0.95 0.04 265))",
                      }}
                    >
                      <MapPin
                        className="h-4 w-4 mx-auto mb-1"
                        style={{ color: "oklch(0.55 0.18 265)" }}
                      />
                      <p className="text-xs font-semibold text-foreground">
                        {tour.destinations.length} Destinations
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-5">
                    {tour.destinations.map((d) => (
                      <div
                        key={d}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <MapPin
                          className="h-3.5 w-3.5 shrink-0"
                          style={{ color: "oklch(0.68 0.19 28)" }}
                        />
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Book CTA — saffron-to-coral gradient */}
                  <a
                    href="#enquiry"
                    className="w-full block text-center font-bold text-white py-3 rounded-xl text-sm hover:opacity-90 hover:shadow-lg transition-all duration-200 shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.75 0.18 70), oklch(0.68 0.19 28))",
                    }}
                    data-ocid="tour_detail.enquire_now_button"
                  >
                    Book This Tour
                  </a>
                  <div className="mt-3 text-center">
                    <a
                      href="tel:+919831398372"
                      className="flex items-center justify-center gap-2 text-sm font-medium hover:underline transition-colors"
                      style={{ color: "oklch(0.55 0.18 265)" }}
                      data-ocid="tour_detail.call_button"
                    >
                      <Phone className="h-4 w-4" />
                      Call: +91 98313 98372
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Need Help Card */}
              <div
                className="rounded-xl p-5 text-sm shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.95 0.04 265), oklch(0.94 0.04 300))",
                }}
                data-ocid="tour_detail.help_card"
              >
                <p
                  className="font-bold mb-1"
                  style={{ color: "oklch(0.40 0.18 265)" }}
                >
                  Need Help Choosing?
                </p>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "oklch(0.50 0.10 265)" }}
                >
                  Our travel experts at The Happy Miles Tourism are available
                  daily, 10am–10pm to help plan your perfect trip.
                </p>
                <a
                  href="tel:+919831398372"
                  className="flex items-center gap-2 font-bold hover:underline text-sm"
                  style={{ color: "oklch(0.55 0.18 265)" }}
                  data-ocid="tour_detail.alt_phone_link"
                >
                  <Phone className="h-3.5 w-3.5" />
                  +91 98313 98372
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section
        id="enquiry"
        className="py-16 relative overflow-hidden"
        data-ocid="tour_detail.enquiry_section"
      >
        {/* Vibrant gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.75 0.18 70) 0%, oklch(0.68 0.19 28) 30%, oklch(0.65 0.14 195) 65%, oklch(0.55 0.18 265) 100%)",
          }}
        />
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: "oklch(0.60 0.22 300)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-60 h-60 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "oklch(0.75 0.18 70)" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 text-white"
                style={{ background: "rgba(255,255,255,0.25)" }}
              >
                Free Consultation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3 drop-shadow">
                Plan Your Dream Trip
              </h2>
              <p className="text-white/85">
                Share your details and The Happy Miles Tourism expert will call
                you within 24 hours to craft your perfect journey.
              </p>
            </motion.div>

            {/* White form card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl shadow-2xl p-8"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              }}
            >
              <EnquiryForm defaultTour={tour.id} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      <section
        className="py-12 bg-background"
        data-ocid="tour_detail.related_section"
      >
        <div className="container mx-auto px-4">
          <h2
            className="font-display text-2xl font-bold mb-2"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.75 0.18 70), oklch(0.55 0.18 265))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            You May Also Like
          </h2>
          <p className="text-muted-foreground mb-8">
            Explore more of India's incredible destinations
          </p>
          <div className="flex flex-wrap gap-3">
            {tours
              .filter((t) => t.id !== tour.id)
              .slice(0, 5)
              .map((t, i) => {
                const relColors = [
                  "oklch(0.75 0.18 70)",
                  "oklch(0.68 0.19 28)",
                  "oklch(0.65 0.14 195)",
                  "oklch(0.55 0.18 265)",
                  "oklch(0.60 0.22 300)",
                ];
                return (
                  <Link
                    key={t.id}
                    to="/tour/$id"
                    params={{ id: t.id }}
                    className="px-4 py-2 rounded-full text-sm font-semibold text-white shadow-sm hover:opacity-90 hover:shadow-md transition-all duration-200"
                    style={{ background: relColors[i % relColors.length] }}
                    data-ocid={`tour_detail.related.${t.id}`}
                  >
                    {t.name}
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
