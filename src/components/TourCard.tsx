import { Button } from "@/components/ui/button";
import type { TourPackage } from "@/data/tours";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, IndianRupee, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface TourCardProps {
  tour: TourPackage;
  index?: number;
  className?: string;
}

const BORDER_COLORS = [
  "border-l-[var(--color-saffron,oklch(0.75_0.18_70))]",
  "border-l-[var(--color-coral,oklch(0.68_0.19_28))]",
  "border-l-[var(--color-teal,oklch(0.65_0.14_195))]",
  "border-l-[var(--color-blue,oklch(0.55_0.18_265))]",
  "border-l-[var(--color-purple,oklch(0.60_0.22_300))]",
];

export function TourCard({ tour, index = 0, className }: TourCardProps) {
  const borderColor = BORDER_COLORS[index % BORDER_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={cn(
        "group rounded-2xl overflow-hidden bg-card border border-border/60 border-l-4 shadow-md transition-all duration-300",
        borderColor,
        className,
      )}
      style={{
        boxShadow: "0 4px 20px -4px rgba(0,0,0,0.1)",
      }}
      data-ocid={`tour.item.${index + 1}`}
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Bottom gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
          }}
        />
        {/* Duration badge — teal-to-blue gradient */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[11px] font-bold shadow-sm"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.14 195), oklch(0.55 0.18 265))",
          }}
        >
          <Clock className="h-3 w-3" />
          {tour.duration}
        </div>
        {/* Category ribbon */}
        <div
          className="absolute top-3 right-3 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.75 0.18 70), oklch(0.68 0.19 28))",
          }}
        >
          {tour.category === "indian" ? "Indian Tour" : tour.category}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1 text-white text-sm drop-shadow">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-yellow-300" />
          <span className="truncate font-medium">
            {tour.destinations.slice(0, 3).join(" · ")}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-200">
          {tour.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
          {tour.description}
        </p>

        {/* Highlights preview */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tour.highlights.slice(0, 2).map((h) => (
            <span
              key={h}
              className="text-[11px] bg-primary/10 text-primary border border-primary/20 rounded-full px-2.5 py-0.5 font-medium flex items-center gap-1"
            >
              <Sparkles className="h-2.5 w-2.5" />
              {h}
            </span>
          ))}
        </div>

        {/* Price + badge row */}
        <div className="flex items-center justify-between border-t border-border/50 pt-4 mb-4">
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">
              Starting from
            </p>
            {/* Saffron-to-coral gradient price text */}
            <div
              className="flex items-center gap-0.5 font-bold text-xl"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.75 0.18 70), oklch(0.68 0.19 28))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <IndianRupee
                className="h-4 w-4"
                style={{ WebkitTextFillColor: "initial" }}
              />
              <span>{tour.price.toLocaleString("en-IN")}</span>
              <span
                className="text-xs font-normal ml-0.5"
                style={{
                  background: "none",
                  WebkitTextFillColor: "var(--color-muted-foreground, #888)",
                }}
              >
                /person
              </span>
            </div>
          </div>
          <div
            className="text-[10px] font-bold text-white px-2.5 py-1 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.14 195), oklch(0.55 0.18 265))",
            }}
          >
            Best Value
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
          >
            <Link
              to="/tour/$id"
              params={{ id: tour.id }}
              data-ocid={`tour.view_details.${index + 1}`}
            >
              View Details
            </Link>
          </Button>
          {/* Book Now — saffron-to-coral gradient */}
          <Link
            to="/tour/$id"
            params={{ id: tour.id }}
            hash="enquiry"
            className="flex-1 flex items-center justify-center gap-1 text-sm font-semibold text-white rounded-md px-3 py-1.5 shadow-sm hover:opacity-90 hover:shadow-md transition-all duration-200"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.75 0.18 70), oklch(0.68 0.19 28))",
            }}
            data-ocid={`tour.book_now.${index + 1}`}
          >
            Book Now <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
