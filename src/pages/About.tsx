import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { usePageTitle } from "@/hooks/use-page-title";
import { Link } from "@/components/ReloadLink";
import { Button } from "@/components/ui/button";
import { ToolIcon } from "@/components/ToolIcon";
import { ArrowUpRight } from "lucide-react";

const steps = [
  { number: "01", name: "Read", detail: "Understand what is already there.", image: "/about/step-01-read.svg" },
  { number: "02", name: "Find", detail: "Find what matters.", image: "/about/step-02-find.svg" },
  { number: "03", name: "Remove", detail: "Remove the unnecessary.", image: "/about/step-03-remove.svg" },
  {
    number: "04",
    name: "Structure",
    detail: "Give it a structure that makes it easier to understand, build, and scale.",
    image: "/about/step-04-structure.svg",
  },
  { number: "05", name: "Reveal", detail: "Make what matters visible.", image: "/about/step-05-reveal.svg" },
];

const values = [
  {
    number: "01",
    name: "Clarity",
    detail: "Understand the problem. Look closely, remove the unnecessary, and make what matters clear.",
  },
  {
    number: "02",
    name: "Structure",
    detail:
      "Look for the relationships, patterns, and dependencies beneath the surface. Turn them into systems that make things easier to understand, build, and scale.",
  },
  {
    number: "03",
    name: "Craft",
    detail: "Get the details right: spacing, naming, file structure, export settings. That's where a system holds up or breaks.",
  },
  {
    number: "04",
    name: "Curiosity",
    detail:
      "Stay interested beyond the boundaries of one discipline. Move between design, motion, UX, code, and automation to understand how different parts can work together.",
  },
  {
    number: "05",
    name: "Restraint",
    detail: "Add only what the work needs. Avoid unnecessary complexity, resist trends without purpose, and let the work speak for itself.",
  },
];

const experience = [
  {
    period: "2024–now",
    name: "Storytel",
    detail: "Motion design and creative production. Campaigns localized into more than 20 markets.",
    tags: ["Motion", "Localization", "After Effects"],
  },
  {
    period: "2018–2024",
    name: "Yettel",
    note: "Telenor until 2022",
    detail: "Visual identity, design systems and creative strategy for 6 years.",
    tags: ["Identity", "Design systems", "Strategy"],
  },
  {
    period: "Independent",
    name: "Tools and sites",
    detail:
      "Vibe Flow for After Effects, sites on Webflow, Vite and Astro, and work for Athlon Technology, Three Hills Club, Curly Ideas Studio and StreetPhoto Lab.",
    tags: ["Plugins", "Web", "Vibe coding"],
  },
];

const disciplines = [
  { name: "Creative production", items: ["Motion design", "Templates", "Localization"] },
  { name: "UX/UI design", items: ["Visual identity", "Design systems", "Interfaces"] },
  { name: "Automation", items: ["After Effects plugins", "Versioning", "Workflow design"] },
  { name: "No-code development", items: ["Webflow", "Vite and Astro, by prompting", "Prototypes"] },
];

const tools = ["Figma", "After Effects", "Illustrator", "Photoshop", "Webflow", "Framer", "JavaScript", "Rive", "Spline"];

const sectionShellClassName = "container-wide pb-[72px] lg:pb-[96px]";
const sectionGridClassName = "grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-14";
const sectionIntroClassName = "web-label lg:col-span-2 text-foreground/68";
const sectionTitleClassName = "web-headline text-foreground";

const revealEase = [0.25, 0.46, 0.45, 0.94] as const;

export default function About() {
  usePageTitle("About");
  const heroSection = useInView({ threshold: 0.1, once: true });
  const missionSection = useInView({ threshold: 0.1, once: true });
  const stepsSection = useInView({ threshold: 0.1, once: true });
  const valuesSection = useInView({ threshold: 0.1, once: true });
  const experienceSection = useInView({ threshold: 0.1, once: true });
  const disciplinesSection = useInView({ threshold: 0.1, once: true });
  const photographySection = useInView({ threshold: 0.1, once: true });

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
              <div className="flex flex-wrap items-end gap-10">
                <div className="min-w-[280px] flex-1">
                  <motion.h1
                    className="web-display max-w-[18ch] text-foreground"
                    initial={{ opacity: 0, y: 24 }}
                    animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.82, ease: revealEase }}
                  >
                    I care about both the thing and the system behind the thing.
                  </motion.h1>

                  <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-6">
                    <motion.p
                      className="web-lead lg:col-span-8 text-foreground/92"
                      initial={{ opacity: 0, y: 16 }}
                      animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      transition={{ duration: 0.72, delay: 0.1, ease: revealEase }}
                    >
                      I'm Dimitar Slavchev, a designer and creative technologist in Sofia. I spent 6 years at
                      Yettel on visual identity, design systems and creative strategy, and the last 2 at
                      Storytel on motion design and creative production across 20+ markets.
                    </motion.p>

                    <motion.p
                      className="web-body lg:col-span-8 text-muted-foreground"
                      initial={{ opacity: 0, y: 12 }}
                      animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                      transition={{ duration: 0.68, delay: 0.2, ease: revealEase }}
                    >
                      On my own I built Vibe Flow, an After Effects plugin, and a run of sites on Webflow,
                      Vite and Astro. Over those years my work moved from single outputs to the systems that
                      produce them.
                    </motion.p>
                  </div>

                  <motion.div
                    className="mt-8 flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.7, delay: 0.28, ease: revealEase }}
                  >
                    <Button asChild className="group h-10 rounded-full px-6 text-[16px] leading-none font-normal">
                      <Link to="/contact">
                        Get in Touch
                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-300 ease-out group-hover:rotate-45"
                        />
                      </Link>
                    </Button>
                    <button
                      type="button"
                      title="Add a real CV file to enable this button"
                      onClick={(event) => event.preventDefault()}
                      className="group inline-flex h-10 items-center gap-2 rounded-full bg-card px-6 text-[16px] font-normal leading-none text-foreground transition-colors hover:bg-card/70"
                    >
                      Download CV
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 ease-out group-hover:rotate-45"
                      />
                    </button>
                  </motion.div>
                </div>

                <motion.img
                  src="/about/hero-illustration.svg"
                  alt=""
                  aria-hidden="true"
                  className="aspect-[4/5] w-full max-w-[280px] rounded-[12px] object-cover sm:max-w-[320px]"
                  initial={{ opacity: 0 }}
                  animate={heroSection.isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: revealEase }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={missionSection.ref} className={sectionShellClassName}>
        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          initial={{ opacity: 0, y: 18 }}
          animate={missionSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.75, ease: revealEase }}
        >
          <div className="flex min-h-[15rem] flex-col justify-between gap-12 rounded-xl bg-card p-8">
            <span className="web-title">Mission</span>
            <p className="web-lead">
              I build systems across design, technology, and production that keep working as the work
              gets bigger.
            </p>
          </div>
          <div className="flex min-h-[15rem] flex-col justify-between gap-12 rounded-xl bg-card p-8">
            <span className="web-title">Purpose</span>
            <p className="web-lead">
              To combine what I know across disciplines to shape products and services I believe in.
              Things that actually help and actually work.
            </p>
          </div>
        </motion.div>
      </section>

      <section ref={stepsSection.ref} className={sectionShellClassName}>
        <div className="pb-12">
          <p className="web-label text-muted-foreground">How I work</p>
          <h2 className={`mt-4 max-w-[28rem] ${sectionTitleClassName}`}>Every project runs the same 5 steps.</h2>
        </div>

        <motion.ol
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5"
          initial={{ opacity: 0, y: 16 }}
          animate={stepsSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, ease: revealEase }}
        >
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-4">
              <img src={step.image} alt="" className="aspect-square w-full rounded-lg" loading="lazy" />
              <span className="web-label text-muted-foreground">
                {step.number}
              </span>
              <span className="web-title">{step.name}</span>
              <span className="web-body text-muted-foreground">{step.detail}</span>
            </li>
          ))}
        </motion.ol>
      </section>

      <section ref={valuesSection.ref} className="bg-foreground py-[72px] text-background lg:py-[96px]">
        <div className="container-wide">
          <div className="pb-12">
            <p className="web-label text-background/55">Values</p>
            <h2 className="web-headline mt-4">
              The 5 values behind the work.
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
            initial={{ opacity: 0, y: 16 }}
            animate={valuesSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, ease: revealEase }}
          >
            {values.map((value) => (
              <div key={value.number} className="flex flex-col gap-4 rounded-xl bg-background/10 p-6">
                <span className="web-label text-background/55">
                  {value.number}
                </span>
                <span className="web-title">{value.name}</span>
                <span className="web-body text-background/65">{value.detail}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={experienceSection.ref} className={`${sectionShellClassName} pt-[72px] lg:pt-[96px]`}>
        <div className="flex flex-wrap gap-12">
          <div className="min-w-[280px] flex-[1_0_calc(33%-2rem)]">
            <motion.p
              className={sectionIntroClassName}
              initial={{ opacity: 0 }}
              animate={experienceSection.isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, ease: revealEase }}
            >
              Experience
            </motion.p>
            <motion.h2
              className={`mt-4 ${sectionTitleClassName}`}
              initial={{ opacity: 0, y: 20 }}
              animate={experienceSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.08, ease: revealEase }}
            >
              From campaigns to the systems behind them.
            </motion.h2>

            <motion.div
              className="mt-8 aspect-[4/5] w-full max-w-[18rem] rounded-xl bg-card"
              initial={{ opacity: 0 }}
              animate={experienceSection.isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: revealEase }}
              aria-hidden="true"
            />
          </div>

          <div className="min-w-[280px] flex-[2_0_60%]">
            <div className="flex flex-col border-t border-foreground/15">
              {experience.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="flex flex-col gap-2 border-b border-foreground/12 py-6 sm:flex-row sm:gap-8"
                  initial={{ opacity: 0, y: 12 }}
                  animate={experienceSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: revealEase }}
                >
                  <span className="shrink-0 web-label text-muted-foreground sm:w-32">
                    {item.period}
                  </span>
                  <div className="flex flex-col gap-2">
                    <span className="web-title">
                      {item.name}
                      {item.note ? (
                        <span className="ml-2 web-small text-muted-foreground">
                          {item.note}
                        </span>
                      ) : null}
                    </span>
                    <span className="max-w-[40rem] web-body text-muted-foreground">
                      {item.detail}
                    </span>
                    <span className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex h-8 items-center rounded-full bg-card px-4 text-[14px] font-medium text-foreground/68"
                        >
                          {tag}
                        </span>
                      ))}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={disciplinesSection.ref} className={sectionShellClassName}>
        <div className={sectionGridClassName}>
          <motion.p
            className={sectionIntroClassName}
            initial={{ opacity: 0 }}
            animate={disciplinesSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: revealEase }}
          >
            What I do
          </motion.p>

          <div className="lg:col-start-4 lg:col-end-13">
            <motion.h2
              className={sectionTitleClassName}
              initial={{ opacity: 0, y: 20 }}
              animate={disciplinesSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.08, ease: revealEase }}
            >
              4 disciplines, a single way of working.
            </motion.h2>

            <div className="mt-10 grid grid-cols-1 gap-8 border-t border-foreground/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {disciplines.map((discipline) => (
                <div key={discipline.name} className="flex flex-col gap-3">
                  <span className="web-title">{discipline.name}</span>
                  <span className="web-body text-muted-foreground">
                    {discipline.items.map((item, i) => (
                      <span key={item}>
                        {item}
                        {i < discipline.items.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              <span className="mr-2 web-label text-muted-foreground">
                Tools
              </span>
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex h-8 items-center gap-2 rounded-full bg-card px-4 text-[14px] font-medium text-foreground/68"
                >
                  <ToolIcon name={tool} className="h-[14px] w-[14px] shrink-0" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={photographySection.ref} className={`${sectionShellClassName} pt-[96px] lg:pt-[128px]`}>
        <div className="flex flex-wrap items-end gap-12">
          <div className="min-w-[280px] flex-[1_0_calc(33%-2rem)]">
            <motion.p
              className={sectionIntroClassName}
              initial={{ opacity: 0 }}
              animate={photographySection.isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, ease: revealEase }}
            >
              Outside client work
            </motion.p>
            <motion.h2
              className={`mt-4 ${sectionTitleClassName}`}
              initial={{ opacity: 0, y: 20 }}
              animate={photographySection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.08, ease: revealEase }}
            >
              I photograph documentary, street and experimental series.
            </motion.h2>
          </div>

          <motion.div
            className="grid flex-[2_0_60%] grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={photographySection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.1, ease: revealEase }}
          >
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="aspect-[4/5] rounded-xl bg-card"
                aria-hidden="true"
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
