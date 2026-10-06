import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { usePageTitle } from "@/hooks/use-page-title";
import { Link } from "@/components/ReloadLink";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Bot,
  Briefcase,
  Building2,
  Code2,
  Cpu,
  Gamepad2,
  Globe,
  House,
  Landmark,
  Monitor,
  Puzzle,
  Search,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface MatrixItem {
  label: string;
  icon?: LucideIcon;
}

const focusColumns: string[][] = [
  ["Product design", "Landing pages", "Redesigns"],
  ["Apps", "Product strategy", "Brand systems"],
  ["Websites and platforms", "No-code builds", "UX audits"],
];

const industryColumns: MatrixItem[][] = [
  [
    { label: "AI products", icon: Bot },
    { label: "SaaS", icon: Monitor },
    { label: "Creator economy", icon: Briefcase },
  ],
  [
    { label: "Fintech", icon: Landmark },
    { label: "Crypto", icon: Cpu },
    { label: "Gaming", icon: Gamepad2 },
  ],
  [
    { label: "Ecommerce", icon: Building2 },
    { label: "Real estate", icon: House },
    { label: "B2B services", icon: Globe },
  ],
];

interface ToolCategory {
  name: string;
  items: MatrixItem[];
}

const toolCategories: ToolCategory[] = [
  {
    name: "Design Tools",
    items: [
      { label: "Figma", icon: Puzzle },
      { label: "Photoshop", icon: Search },
      { label: "Illustrator", icon: Wrench },
      { label: "After Effects", icon: Monitor },
    ],
  },
  {
    name: "Web Development",
    items: [
      { label: "Webflow", icon: Globe },
      { label: "JavaScript", icon: Code2 },
      { label: "Framer", icon: Building2 },
    ],
  },
  {
    name: "Motion Graphics",
    items: [
      { label: "Rive", icon: Cpu },
      { label: "Spline", icon: Bot },
    ],
  },
];

const keyStats = [
  { value: "5+", label: "Years in production systems" },
  { value: "40+", label: "Markets supported" },
  { value: "10K+", label: "Assets delivered yearly" },
  { value: "50+", label: "Brands and products" },
];

const sectionShellClassName = "container-wide pb-[72px] lg:pb-[96px]";
const sectionGridClassName = "grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-14";
const sectionIntroClassName =
  "lg:col-span-2 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground/68";
const sectionTitleClassName =
  "text-[38px] font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[44px] lg:text-[48px]";
const sectionBodyClassName =
  "max-w-[44rem] text-[24px] font-medium leading-[1.28] tracking-[-0.02em] text-foreground/86";

const revealEase = [0.25, 0.46, 0.45, 0.94] as const;

export default function About() {
  usePageTitle("About");
  const heroSection = useInView({ threshold: 0.1, once: true });
  const statsSection = useInView({ threshold: 0.1, once: true });
  const philosophySection = useInView({ threshold: 0.1, once: true });
  const focusSection = useInView({ threshold: 0.1, once: true });
  const ctaSection = useInView({ threshold: 0.1, once: true });

  return (
    <div>
      <section ref={heroSection.ref}>
        <div className="container-wide pt-24 pb-[64px] md:pt-28 lg:pt-[128px] lg:pb-[88px]">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-14">
            <motion.p
              className={sectionIntroClassName}
              initial={{ opacity: 0 }}
              animate={heroSection.isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.55, ease: revealEase }}
            >
              About
            </motion.p>

            <div className="lg:col-start-4 lg:col-end-13">
              <motion.h1
                className="max-w-[14ch] text-[56px] font-medium leading-[0.98] tracking-[-0.04em] text-foreground sm:text-[64px] lg:text-[90px]"
                initial={{ opacity: 0, y: 24 }}
                animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.82, ease: revealEase }}
              >
                Design with structure.
                <br />
                Systems with taste.
              </motion.h1>

              <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-6">
                <motion.p
                  className="lg:col-span-8 text-[34px] font-medium leading-[1.1] tracking-[-0.03em] text-foreground/92"
                  initial={{ opacity: 0, y: 16 }}
                  animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.72, delay: 0.1, ease: revealEase }}
                >
                  I build the systems behind creative work so production gets faster, cleaner, and harder to break.
                </motion.p>

                <motion.p
                  className="max-w-[18ch] lg:col-span-4 text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-foreground/58"
                  initial={{ opacity: 0, y: 12 }}
                  animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.68, delay: 0.2, ease: revealEase }}
                >
                  No overcomplicated process, just clear solutions tailored to real team needs.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsSection.ref} className="container-wide pb-[72px] lg:pb-[104px]">
        <motion.div
          className="grid grid-cols-2 gap-8 border-y border-foreground/15 py-10 lg:grid-cols-4 lg:gap-10"
          initial={{ opacity: 0, y: 18 }}
          animate={statsSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.75, ease: revealEase }}
        >
          {keyStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={statsSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.62, delay: 0.08 * index, ease: revealEase }}
            >
              <p className="text-[54px] font-medium leading-[0.95] tracking-[-0.04em] text-foreground sm:text-[64px]">
                {stat.value}
              </p>
              <p className="mt-3 max-w-[18ch] text-[19px] font-medium leading-[1.25] text-foreground/58">
                {stat.label}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section ref={philosophySection.ref} className={sectionShellClassName}>
        <div className={sectionGridClassName}>
          <motion.p
            className={sectionIntroClassName}
            initial={{ opacity: 0 }}
            animate={philosophySection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: revealEase }}
          >
            Approach
          </motion.p>

          <div className="lg:col-start-4 lg:col-end-13">
            <motion.h2
              className={sectionTitleClassName}
              initial={{ opacity: 0, y: 20 }}
              animate={philosophySection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.08, ease: revealEase }}
            >
              I do not like doing the same thing twice.
            </motion.h2>

            <motion.p
              className={`mt-8 ${sectionBodyClassName}`}
              initial={{ opacity: 0, y: 18 }}
              animate={philosophySection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.74, delay: 0.15, ease: revealEase }}
            >
              If something is repetitive, it can be improved or automated. My work sits between design and systems, building workflows and tools that make production faster, cleaner, and more reliable.
            </motion.p>

            <motion.p
              className="mt-6 max-w-[44rem] text-[24px] font-medium leading-[1.28] tracking-[-0.02em] text-foreground/62"
              initial={{ opacity: 0, y: 18 }}
              animate={philosophySection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.74, delay: 0.22, ease: revealEase }}
            >
              Over 5+ years in high-volume digital advertising, I shifted from campaign execution toward system design, templates, and automation that scale creative output without losing quality.
            </motion.p>
          </div>
        </div>
      </section>

      <section ref={focusSection.ref} className="relative overflow-hidden bg-black py-[88px] lg:py-[112px]">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-8 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-12 bottom-10 h-44 w-44 rounded-full bg-accent/15 blur-3xl"
        />

        <div className="container-wide relative">
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-14">
            <motion.p
              className="lg:col-span-2 text-[12px] font-medium uppercase tracking-[0.2em] text-white/60"
              initial={{ opacity: 0 }}
              animate={focusSection.isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, ease: revealEase }}
            >
              Services
            </motion.p>

            <motion.div
              className="lg:col-start-4 lg:col-end-13"
              initial={{ opacity: 0, y: 20 }}
              animate={focusSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.75, delay: 0.1, ease: revealEase }}
            >
              <motion.h3
                className={`${sectionTitleClassName} text-primary-foreground`}
                initial={{ opacity: 0, y: 12 }}
                animate={focusSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.68, delay: 0.16, ease: revealEase }}
              >
                Focus, industries, and tools that drive execution.
              </motion.h3>

              <motion.p
                className={`${sectionBodyClassName} mt-6 max-w-[52rem] text-primary-foreground/70`}
                initial={{ opacity: 0, y: 10 }}
                animate={focusSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.64, delay: 0.22, ease: revealEase }}
              >
                Clear product work, practical strategy, and production systems built for speed.
              </motion.p>

              <div className="mt-12 rounded-[24px] border border-white/12 bg-white/[0.03] px-5 py-6 sm:px-7 sm:py-8 lg:px-9 lg:py-9">
                <div className="space-y-9">
                  <div>
                    <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/52">
                      Focus
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-10">
                      {focusColumns.map((column, columnIndex) => (
                        <motion.ul
                          key={`focus-col-${columnIndex}`}
                          className="space-y-2.5"
                          initial={{ opacity: 0, y: 8 }}
                          animate={focusSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                          transition={{ duration: 0.58, delay: 0.24 + columnIndex * 0.06, ease: revealEase }}
                        >
                          {column.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-3 text-[19px] font-medium leading-[1.2] tracking-[-0.02em] text-white sm:text-[21px] lg:text-[23px]"
                            >
                              <span className="text-[18px] leading-none text-accent sm:text-[19px]">+</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </motion.ul>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/52">
                      Industries
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-10">
                      {industryColumns.map((column, columnIndex) => (
                        <motion.ul
                          key={`industry-col-${columnIndex}`}
                          className="space-y-2.5"
                          initial={{ opacity: 0, y: 8 }}
                          animate={focusSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                          transition={{ duration: 0.58, delay: 0.3 + columnIndex * 0.06, ease: revealEase }}
                        >
                          {column.map((item) => {
                            const Icon = item.icon;

                            return (
                              <li
                                key={item.label}
                                className="flex items-center gap-3 text-[18px] font-medium leading-[1.2] tracking-[-0.02em] text-white/95 sm:text-[20px] lg:text-[22px]"
                              >
                                {Icon ? <Icon size={15} className="shrink-0 text-accent/85" aria-hidden /> : null}
                                <span>{item.label}</span>
                              </li>
                            );
                          })}
                        </motion.ul>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/52">
                      Tools
                    </p>
                    <motion.div
                      className="mt-4 flex flex-wrap gap-x-6 gap-y-3.5"
                      initial={{ opacity: 0, y: 8 }}
                      animate={focusSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.58, delay: 0.36, ease: revealEase }}
                    >
                      {toolCategories.map((category) =>
                        category.items.map((item) => {
                          const Icon = item.icon;

                          return (
                            <div key={item.label} className="flex items-center gap-3 text-[16px] font-medium leading-[1.2] tracking-[-0.02em] text-white/95 sm:text-[17px] lg:text-[18px]">
                              {Icon ? <Icon size={15} className="shrink-0 text-accent/85" aria-hidden /> : null}
                              <span>{item.label}</span>
                            </div>
                          );
                        })
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={ctaSection.ref} className="container-wide pt-[64px] lg:pt-[96px] pb-[48px] lg:pb-[64px]">
        <div className={sectionGridClassName}>
          <motion.p
            className={sectionIntroClassName}
            initial={{ opacity: 0 }}
            animate={ctaSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: revealEase }}
          >
            Ready
          </motion.p>

          <div className="lg:col-start-4 lg:col-end-13">
            <motion.h2
              className={sectionTitleClassName}
              initial={{ opacity: 0, y: 20 }}
              animate={ctaSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.08, ease: revealEase }}
            >
              Ready to bring your ideas to life?
            </motion.h2>

            <motion.p
              className={`mt-8 ${sectionBodyClassName}`}
              initial={{ opacity: 0, y: 18 }}
              animate={ctaSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.74, delay: 0.15, ease: revealEase }}
            >
              Let's collaborate. Whether you need a complete design system built from scratch, workflow automation to scale production, or strategic guidance on product direction—I'm available for focused projects and partnerships.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={ctaSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.72, delay: 0.22, ease: revealEase }}
            >
              <Button
                asChild
                className="group h-10 rounded-full px-6 text-[16px] leading-none font-normal"
              >
                <Link to="/contact">
                  Start a conversation
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 ease-out group-hover:rotate-45"
                  />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
