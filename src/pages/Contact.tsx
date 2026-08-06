import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { useInView } from "@/hooks/use-in-view";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const revealEase = [0.25, 0.46, 0.45, 0.94] as const;

const serviceOptions = [
  "Product design",
  "Design systems",
  "Web experiences",
  "Creative automation",
  "Motion and interaction",
  "Consulting",
];

const timelineOptions = ["ASAP", "Within 1 month", "1-3 months", "3+ months", "Just exploring"];

const sourceOptions = ["Referral", "LinkedIn", "Dribbble", "Search", "Previous collaboration", "Other"];

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  timeline: string;
  source: string;
  message: string;
  services: string[];
  consent: boolean;
};

export default function Contact() {
  const pageSection = useInView({ threshold: 0.1, once: true });
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitted },
  } = useForm<ContactFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      timeline: "",
      source: "",
      message: "",
      services: [],
      consent: false,
    },
    mode: "onBlur",
  });

  const selectedServices = watch("services");

  const toggleService = (service: string) => {
    const current = selectedServices || [];
    const next = current.includes(service)
      ? current.filter((item) => item !== service)
      : [...current, service];

    setValue("services", next, { shouldValidate: true, shouldDirty: true });
  };

  const onSubmit = () => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      timeline: "",
      source: "",
      message: "",
      services: [],
      consent: false,
    });
  };

  const lineFieldClassName =
    "h-12 rounded-none border-0 border-b border-foreground/20 bg-transparent px-0 text-[16px] text-foreground placeholder:text-foreground/42 focus-visible:border-foreground/55 focus-visible:ring-0 focus-visible:ring-offset-0";

  return (
    <section ref={pageSection.ref} className="container-wide pt-24 pb-[136px] md:pt-28 lg:pt-[128px]">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
        <div className="lg:col-span-4">
          <motion.p
            className="[font-family:'Satoshi'] text-[12px] font-medium uppercase tracking-[0.2em] text-foreground/68"
            initial={{ opacity: 0 }}
            animate={pageSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: revealEase }}
          >
            Contact
          </motion.p>

          <motion.h1
            className="mt-5 [font-family:'Satoshi'] text-[56px] font-medium leading-[0.98] tracking-[-0.04em] text-foreground sm:text-[64px] lg:text-[90px]"
            initial={{ opacity: 0, y: 22 }}
            animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: 0.78, delay: 0.06, ease: revealEase }}
          >
            Contact
          </motion.h1>

          <motion.p
            className="mt-8 max-w-[24ch] [font-family:'Satoshi'] text-[19px] font-medium leading-[1.45] tracking-[-0.01em] text-foreground/68"
            initial={{ opacity: 0, y: 16 }}
            animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.72, delay: 0.14, ease: revealEase }}
          >
            Share what you are building, where you are blocked, and what outcome you need. I will get back with the clearest next step.
          </motion.p>

          <motion.div
            className="mt-12 space-y-6"
            initial={{ opacity: 0, y: 14 }}
            animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.7, delay: 0.2, ease: revealEase }}
          >
            <div>
              <p className="[font-family:'Satoshi'] text-[12px] font-medium uppercase tracking-[0.18em] text-foreground/55">
                Email
              </p>
              <a
                href="mailto:slavchev.dimitar@yahoo.com"
                className="mt-2 inline-block [font-family:'Satoshi'] text-[20px] font-medium leading-[1.25] tracking-[-0.02em] text-foreground transition-colors hover:text-accent"
              >
                slavchev.dimitar@yahoo.com
              </a>
            </div>

            <div>
              <p className="[font-family:'Satoshi'] text-[12px] font-medium uppercase tracking-[0.18em] text-foreground/55">
                Phone
              </p>
              <a
                href="tel:+359893401023"
                className="mt-2 inline-block [font-family:'Satoshi'] text-[20px] font-medium leading-[1.25] tracking-[-0.02em] text-foreground transition-colors hover:text-accent"
              >
                +359893401023
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-8 lg:pl-8"
          initial={{ opacity: 0, y: 18 }}
          animate={pageSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.76, delay: 0.12, ease: revealEase }}
        >
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <label className="block">
                <span className="[font-family:'Satoshi'] text-[15px] text-foreground/58">First name*</span>
                <Input
                  className={lineFieldClassName}
                  autoComplete="given-name"
                  {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName ? (
                  <p className="mt-2 [font-family:'Satoshi'] text-[13px] font-medium text-destructive">
                    {errors.firstName.message}
                  </p>
                ) : null}
              </label>

              <label className="block">
                <span className="[font-family:'Satoshi'] text-[15px] text-foreground/58">Last name*</span>
                <Input
                  className={lineFieldClassName}
                  autoComplete="family-name"
                  {...register("lastName", { required: "Last name is required" })}
                />
                {errors.lastName ? (
                  <p className="mt-2 [font-family:'Satoshi'] text-[13px] font-medium text-destructive">
                    {errors.lastName.message}
                  </p>
                ) : null}
              </label>
            </div>

            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <label className="block">
                <span className="[font-family:'Satoshi'] text-[15px] text-foreground/58">Email address*</span>
                <Input
                  className={lineFieldClassName}
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email ? (
                  <p className="mt-2 [font-family:'Satoshi'] text-[13px] font-medium text-destructive">
                    {errors.email.message}
                  </p>
                ) : null}
              </label>

              <label className="block">
                <span className="[font-family:'Satoshi'] text-[15px] text-foreground/58">Phone number</span>
                <Input
                  className={lineFieldClassName}
                  autoComplete="tel"
                  {...register("phone")}
                />
              </label>
            </div>

            <label className="block">
              <span className="[font-family:'Satoshi'] text-[15px] text-foreground/58">Company or project*</span>
              <Input
                className={lineFieldClassName}
                {...register("company", { required: "Please share your company or project" })}
              />
              {errors.company ? (
                <p className="mt-2 [font-family:'Satoshi'] text-[13px] font-medium text-destructive">
                  {errors.company.message}
                </p>
              ) : null}
            </label>

            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div>
                <span className="[font-family:'Satoshi'] text-[15px] text-foreground/58">When are you ready to start?*</span>
                <Controller
                  name="timeline"
                  control={control}
                  rules={{ required: "Please choose a timeline" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className={`${lineFieldClassName} mt-0.5`}>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        {timelineOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.timeline ? (
                  <p className="mt-2 [font-family:'Satoshi'] text-[13px] font-medium text-destructive">
                    {errors.timeline.message}
                  </p>
                ) : null}
              </div>

              <div>
                <span className="[font-family:'Satoshi'] text-[15px] text-foreground/58">How did you hear about me?*</span>
                <Controller
                  name="source"
                  control={control}
                  rules={{ required: "Please select one option" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className={`${lineFieldClassName} mt-0.5`}>
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        {sourceOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.source ? (
                  <p className="mt-2 [font-family:'Satoshi'] text-[13px] font-medium text-destructive">
                    {errors.source.message}
                  </p>
                ) : null}
              </div>
            </div>

            <label className="block">
              <span className="[font-family:'Satoshi'] text-[15px] text-foreground/58">Your message*</span>
              <Textarea
                className="mt-1 min-h-[130px] rounded-none border-0 border-b border-foreground/20 bg-transparent px-0 py-3 text-[16px] text-foreground placeholder:text-foreground/42 focus-visible:border-foreground/55 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="A few lines are enough to get started."
                {...register("message", {
                  required: "Please add a short message",
                  minLength: { value: 20, message: "Please provide at least 20 characters" },
                })}
              />
              {errors.message ? (
                <p className="mt-2 [font-family:'Satoshi'] text-[13px] font-medium text-destructive">
                  {errors.message.message}
                </p>
              ) : null}
            </label>

            <div className="border-t border-foreground/12 pt-6">
              <p className="[font-family:'Satoshi'] text-[15px] text-foreground/68">
                Services you need (select all that apply)
              </p>
              <div className="mt-4 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-6">
                {serviceOptions.map((service) => {
                  const checked = selectedServices?.includes(service) ?? false;

                  return (
                    <label key={service} className="inline-flex items-center gap-2.5">
                      <Checkbox checked={checked} onCheckedChange={() => toggleService(service)} />
                      <span className="[font-family:'Satoshi'] text-[15px] text-foreground/86">{service}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="pt-1">
              <label className="inline-flex items-start gap-2.5">
                <Checkbox {...register("consent", { required: "Please confirm consent before submitting" })} />
                <span className="max-w-[56ch] [font-family:'Satoshi'] text-[14px] leading-[1.45] text-foreground/68">
                  I consent to being contacted about this inquiry and understand my details will only be used for project communication.
                </span>
              </label>
              {errors.consent ? (
                <p className="mt-2 [font-family:'Satoshi'] text-[13px] font-medium text-destructive">
                  {errors.consent.message}
                </p>
              ) : null}
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="h-11 w-full rounded-none border border-foreground bg-foreground [font-family:'Satoshi'] text-[15px] font-normal text-background transition-colors hover:bg-foreground/90"
              >
                Send inquiry
              </Button>
              {isSubmitted ? (
                <p className="mt-3 [font-family:'Satoshi'] text-[13px] font-medium text-foreground/62">
                  Thanks, your message is ready. Hook this form to your preferred endpoint when you are ready.
                </p>
              ) : null}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
