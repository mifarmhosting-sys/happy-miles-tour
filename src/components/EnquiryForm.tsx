
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { tours } from "@/data/tours";
import type { EnquiryFormData, EnquiryInput } from "@/types";
import { CheckCircle, Loader2, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface EnquiryFormProps {
  defaultTour?: string;
  compact?: boolean;
}

export function EnquiryForm({
  defaultTour,
  compact = false,
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<EnquiryFormData>({
    defaultValues: { tourInterest: defaultTour ?? "" },
  });

  const tourInterestValue = watch("tourInterest");

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    try {
      const input: EnquiryInput = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        tourInterest: data.tourInterest,
        message: data.message ?? "",
      };
      console.log("Mock API Submission:", input);
      await new Promise((r) => setTimeout(r, 1000));
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success(
        "Enquiry submitted! The Happy Miles Tourism team will contact you within 24 hours.",
      );
      reset();
    } catch {
      setIsSubmitting(false);
      toast.error(
        "Something went wrong. Please try again or call us directly.",
      );
    }
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center py-12 gap-5 text-center"
        data-ocid="enquiry.success_state"
      >
        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">
            Thank You!
          </h3>
          <p className="text-muted-foreground max-w-xs">
            Your enquiry has been received by The Happy Miles Tourism. Our
            travel expert will call you within 24 hours.
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setSubmitted(false)}
            data-ocid="enquiry.new_enquiry_button"
          >
            Submit Another Enquiry
          </Button>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="tel:+919831398372">
              <Phone className="h-4 w-4 mr-2" />
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      data-ocid="enquiry.form"
    >
      <div
        className={
          compact
            ? "grid grid-cols-1 gap-4"
            : "grid grid-cols-1 sm:grid-cols-2 gap-5"
        }
      >
        {/* Full Name */}
        <div className="space-y-1.5">
          <Label
            htmlFor="enq-name"
            className="font-semibold text-sm"
            style={{ color: "oklch(0.75 0.18 70)" }}
          >
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="enq-name"
            placeholder="Your full name"
            {...register("name", { required: "Name is required" })}
            className={`transition-colors ${errors.name ? "border-destructive focus-visible:ring-destructive/30" : "focus-visible:ring-[oklch(0.75_0.18_70)/50] focus-visible:border-[oklch(0.75_0.18_70)]"}`}
            data-ocid="enquiry.name_input"
          />
          {errors.name && (
            <p
              className="text-destructive text-xs flex items-center gap-1"
              data-ocid="enquiry.name_field_error"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <Label
            htmlFor="enq-email"
            className="font-semibold text-sm"
            style={{ color: "oklch(0.55 0.18 265)" }}
          >
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="enq-email"
            type="email"
            placeholder="your@email.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Invalid email",
              },
            })}
            className={`transition-colors ${errors.email ? "border-destructive focus-visible:ring-destructive/30" : "focus-visible:ring-[oklch(0.75_0.18_70)/50] focus-visible:border-[oklch(0.75_0.18_70)]"}`}
            data-ocid="enquiry.email_input"
          />
          {errors.email && (
            <p
              className="text-destructive text-xs"
              data-ocid="enquiry.email_field_error"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <Label
            htmlFor="enq-phone"
            className="font-semibold text-sm"
            style={{ color: "oklch(0.75 0.18 70)" }}
          >
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="enq-phone"
            type="tel"
            placeholder="+91 98313 98372"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^[+\d][\d\s\-]{7,14}$/,
                message: "Invalid phone number",
              },
            })}
            className={`transition-colors ${errors.phone ? "border-destructive focus-visible:ring-destructive/30" : "focus-visible:ring-[oklch(0.75_0.18_70)/50] focus-visible:border-[oklch(0.75_0.18_70)]"}`}
            data-ocid="enquiry.phone_input"
          />
          {errors.phone && (
            <p
              className="text-destructive text-xs"
              data-ocid="enquiry.phone_field_error"
            >
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Tour of Interest */}
        <div className="space-y-1.5">
          <Label
            htmlFor="enq-tour"
            className="font-semibold text-sm"
            style={{ color: "oklch(0.55 0.18 265)" }}
          >
            Tour of Interest <span className="text-destructive">*</span>
          </Label>
          <Select
            value={tourInterestValue}
            defaultValue={defaultTour}
            onValueChange={(val) =>
              setValue("tourInterest", val, { shouldValidate: true })
            }
          >
            <SelectTrigger
              id="enq-tour"
              className="focus:ring-primary/30 focus:border-primary"
              data-ocid="enquiry.tour_select"
            >
              <SelectValue placeholder="Select a tour package" />
            </SelectTrigger>
            <SelectContent>
              {tours.map((t) => (
                <SelectItem key={t.id} value={t.id}>
                  {t.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {!compact && (
          <>
            <div className="space-y-1.5">
              <Label
                htmlFor="enq-date"
                className="font-semibold text-sm"
                style={{ color: "oklch(0.75 0.18 70)" }}
              >
                Preferred Travel Date
              </Label>
              <Input
                id="enq-date"
                type="date"
                {...register("travelDate")}
                className="focus-visible:ring-primary/30 focus-visible:border-primary transition-colors"
                data-ocid="enquiry.date_input"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="enq-persons"
                className="font-semibold text-sm"
                style={{ color: "oklch(0.55 0.18 265)" }}
              >
                Number of Persons
              </Label>
              <Input
                id="enq-persons"
                type="number"
                placeholder="2"
                min="1"
                {...register("numberOfPersons")}
                className="focus-visible:ring-primary/30 focus-visible:border-primary transition-colors"
                data-ocid="enquiry.persons_input"
              />
            </div>
          </>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label
          htmlFor="enq-message"
          className="font-semibold text-sm"
          style={{ color: "oklch(0.75 0.18 70)" }}
        >
          Additional Message
        </Label>
        <Textarea
          id="enq-message"
          placeholder="Special requirements, dietary preferences, accessibility needs..."
          rows={compact ? 2 : 3}
          {...register("message")}
          className="focus-visible:ring-primary/30 focus-visible:border-primary transition-colors resize-none"
          data-ocid="enquiry.message_textarea"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full font-semibold py-3 px-6 text-base rounded-md text-white shadow-sm hover:opacity-90 hover:shadow-md transition-all duration-200 disabled:opacity-60"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.75 0.18 70), oklch(0.68 0.19 28))",
        }}
        disabled={isSubmitting}
        data-ocid="enquiry.submit_button"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Sending Enquiry...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Send className="h-4 w-4" /> Send Enquiry to Happy Miles
          </span>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to be contacted by The Happy Miles Tourism. We
        respond within 24 hours.
      </p>
    </form>
  );
}
