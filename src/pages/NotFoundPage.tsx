import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Home, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function NotFoundPage() {
  return (
    <Layout>
      <section
        className="min-h-[70vh] flex items-center justify-center bg-background py-20"
        data-ocid="not_found.page"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <span className="font-display text-[10rem] sm:text-[14rem] font-extrabold text-muted/60 leading-none select-none">
                  404
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Looks Like You're Off the Map!
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg mx-auto">
                The page you're looking for doesn't exist. Don't worry — our
                expert team can help you find the perfect destination instead.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 transition-smooth"
                  data-ocid="not_found.home_button"
                >
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 transition-smooth"
                  data-ocid="not_found.packages_button"
                >
                  <Link to="/packages">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    View Tour Packages
                  </Link>
                </Button>
              </div>

              {/* Quick links */}
              <div
                className="bg-muted/40 rounded-2xl p-6 border border-border"
                data-ocid="not_found.quick_links"
              >
                <p className="text-sm font-semibold text-foreground mb-4">
                  Popular Destinations
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    { label: "Himachal Pradesh", id: "himachal-hills" },
                    { label: "Shimla & Manali", id: "shimla-manali" },
                    { label: "Uttarakhand", id: "uttarakhand-divine" },
                    { label: "Chardham Yatra", id: "chardham-yatra" },
                    { label: "Goa Beaches", id: "goa-beaches" },
                    { label: "Kerala Backwaters", id: "kerala-backwaters" },
                  ].map(({ label, id }) => (
                    <Button
                      asChild
                      key={id}
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:bg-primary/10 transition-smooth"
                      data-ocid={`not_found.quick_link.${id}`}
                    >
                      <Link to="/tour/$id" params={{ id }}>
                        <MapPin className="h-3 w-3 mr-1" />
                        {label}
                      </Link>
                    </Button>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href="tel:+919831398372"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-ocid="not_found.phone_link"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Need help? Call us: +91 98313 98372
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
