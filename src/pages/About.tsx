import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "@/components/ReloadLink";

const focusAreas = [
  {
    title: "Creative production for digital campaigns",
  },
  {
    title: "Motion design and video localisation",
  },
  {
    title: "Design systems and scalable templates",
  },
  {
    title: "Workflow optimisation and automation",
  },
  {
    title: "After Effects scripting and plugin development",
  },
  {
    title: "Web design and no-code development (Framer, Webflow)",
  },
];

const currentTools = [
  "After Effects",
  "Photoshop",
  "Illustrator",
  "Figma",
  "Framer",
  "Webflow",
  "JavaScript",
  "Creative automation scripts",
];

const nextTools = ["Rive", "Spline"];

const sectionIntroClassName =
  "[font-family:'Satoshi'] text-[16px] font-medium leading-none text-foreground/90";

const sectionTitleClassName =
  "[font-family:'Satoshi'] text-[38px] font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[44px] lg:text-[48px]";

const sectionBodyClassName =
  "max-w-[44rem] [font-family:'Satoshi'] text-[24px] font-medium leading-[1.32] tracking-[-0.02em] text-foreground/90";

export default function About() {
  const heroSection = useInView({ threshold: 0.1, once: true });
  const philosophySection = useInView({ threshold: 0.1, once: true });
  const experienceSection = useInView({ threshold: 0.1, once: true });
  const focusSection = useInView({ threshold: 0.1, once: true });
  const stackSection = useInView({ threshold: 0.1, once: true });
  const nextSection = useInView({ threshold: 0.1, once: true });
  const ctaSection = useInView({ threshold: 0.1, once: true });

  return (
    <div className="[font-family:'Satoshi']">
      <section ref={heroSection.ref}>
        <div className="container-wide pt-24 pb-0 md:pt-28 lg:pt-[128px] lg:pb-0">
          <div className="border-b border-foreground/25 pb-[32px]">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
              <motion.p
                className="lg:col-span-2 [font-family:'Satoshi'] text-[16px] font-medium leading-none text-foreground/90"
                initial={{ opacity: 0 }}
                animate={heroSection.isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                About Me
              </motion.p>

              <div className="lg:col-start-4 lg:col-end-13">
                <motion.h1
                  className="max-w-[14ch] [font-family:'Satoshi'] text-[48px] font-medium leading-[1] tracking-[-0.035em] text-foreground"
                  initial={{ opacity: 0, y: 24 }}
                  animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Design with structure. Systems with taste.
                </motion.h1>

                <motion.div
                  className="mt-[32px] grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-x-6"
                  initial={{ opacity: 0, y: 18 }}
                  animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <p className="lg:col-span-8 [font-family:'Satoshi'] text-[24px] font-medium leading-[1.32] tracking-[-0.02em] text-foreground/90">
                    I build the systems behind creative work so production gets faster, cleaner, and harder to break.
                  </p>
                  <div className="flex items-start lg:col-span-4 lg:justify-end">
                    <div className="inline-flex h-10 items-center rounded-full border border-[#CACACA] px-6 [font-family:'Satoshi'] text-[16px] font-medium leading-none text-foreground/80">
                      Systems-first thinking
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={philosophySection.ref} className="container-wide pt-[64px] pb-[72px] lg:pb-[96px]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-16">
          <motion.p
            className="lg:col-span-2 text-[12px] font-medium uppercase tracking-[0.22em] text-foreground/70 sm:text-[13px]"
            initial={{ opacity: 0 }}
            animate={philosophySection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Approach / Philosophy
          </motion.p>

          <div className="lg:col-start-4 lg:col-end-13">
            <motion.h2
              className={sectionTitleClassName}
              initial={{ opacity: 0, y: 20 }}
              animate={philosophySection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              I don&apos;t like doing the same thing twice.
            </motion.h2>

            <motion.p
              className={`mt-8 ${sectionBodyClassName}`}
              initial={{ opacity: 0, y: 20 }}
              animate={philosophySection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              If something is repetitive, it can be improved or automated.
            </motion.p>

            <motion.p
              className={`mt-6 ${sectionBodyClassName}`}
              initial={{ opacity: 0, y: 20 }}
              animate={philosophySection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              My work sits between design and systems - building workflows, tools, and structures that make production faster, cleaner, and more reliable. Good design is important, but how it&apos;s made matters just as much.
            </motion.p>
          </div>

          <motion.div
            className="lg:col-start-4 lg:col-end-13 h-px w-full bg-foreground/20"
            initial={{ opacity: 0 }}
            animate={philosophySection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </section>

      <section ref={experienceSection.ref} className="container-wide pb-[72px] lg:pb-[96px]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-16">
          <motion.p
            className={sectionIntroClassName}
            initial={{ opacity: 0 }}
            animate={experienceSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Experience Snapshot
          </motion.p>

          <div className="lg:col-start-4 lg:col-end-13">
            <motion.h3
              className={sectionTitleClassName}
              initial={{ opacity: 0, y: 20 }}
              animate={experienceSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              5+ years in high-volume creative production, mostly in digital advertising.
            </motion.h3>

            <motion.p
              className={`mt-8 ${sectionBodyClassName}`}
              initial={{ opacity: 0, y: 20 }}
              animate={experienceSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Started in telecom, working on performance campaigns across multiple platforms and markets.
            </motion.p>

            <motion.p
              className={`mt-6 ${sectionBodyClassName}`}
              initial={{ opacity: 0, y: 20 }}
              animate={experienceSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Over time, I shifted towards building systems and automations - from templates and workflows to custom scripts and plugins that scale production.
            </motion.p>
          </div>

          <motion.div
            className="lg:col-start-4 lg:col-end-13 h-px w-full bg-foreground/20"
            initial={{ opacity: 0 }}
            animate={experienceSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </section>

      <section ref={focusSection.ref} className="container-wide pb-[72px] lg:pb-[96px]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-16">
          <motion.p
            className={sectionIntroClassName}
            initial={{ opacity: 0 }}
            animate={focusSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Key Focus Areas / Skills
          </motion.p>

          <div className="lg:col-start-4 lg:col-end-13">
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={focusSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {focusAreas.map((item, index) => (
                <div
                  key={item.title}
                  className="flex min-h-[172px] flex-col justify-between rounded-[20px] border border-[#CACACA] bg-card p-6"
                >
                  <span className="[font-family:'Satoshi'] text-[14px] font-medium leading-none text-foreground/60">
                    0{index + 1}
                  </span>
                  <p className="max-w-[16ch] [font-family:'Satoshi'] text-[24px] font-medium leading-[1.1] tracking-[-0.02em] text-foreground">
                    {item.title}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="lg:col-start-4 lg:col-end-13 h-px w-full bg-foreground/20"
            initial={{ opacity: 0 }}
            animate={focusSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </section>

      <section ref={stackSection.ref} className="container-wide pb-[72px] lg:pb-[96px]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-16">
          <motion.p
            className={sectionIntroClassName}
            initial={{ opacity: 0 }}
            animate={stackSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Tech Stack
          </motion.p>

          <div className="grid grid-cols-1 gap-6 lg:col-start-4 lg:col-end-13 lg:grid-cols-12">
            <motion.div
              className="rounded-[20px] border border-[#CACACA] bg-card p-6 lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={stackSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="[font-family:'Satoshi'] text-[16px] font-medium leading-none text-foreground/70">
                What I use
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {currentTools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex h-10 items-center rounded-full border border-[#CACACA] px-5 [font-family:'Satoshi'] text-[16px] font-medium leading-none text-foreground/85"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-[20px] border border-[#CACACA] bg-card p-6 lg:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              animate={stackSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="[font-family:'Satoshi'] text-[16px] font-medium leading-none text-foreground/70">
                Next to learn
              </p>

              <div className="mt-6 space-y-3">
                {nextTools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center justify-between rounded-full border border-[#CACACA] px-5 py-3"
                  >
                    <span className="[font-family:'Satoshi'] text-[16px] font-medium leading-none text-foreground">
                      {tool}
                    </span>
                    <span className="[font-family:'Satoshi'] text-[14px] font-medium leading-none text-foreground/60">
                      exploring
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-start-4 lg:col-end-13 h-px w-full bg-foreground/20"
            initial={{ opacity: 0 }}
            animate={stackSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </section>

      <section ref={nextSection.ref} className="container-wide pb-[72px] lg:pb-[96px]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-16">
          <motion.p
            className={sectionIntroClassName}
            initial={{ opacity: 0 }}
            animate={nextSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Personal Insight / What&apos;s Next
          </motion.p>

          <div className="lg:col-start-4 lg:col-end-13">
            <motion.h3
              className={sectionTitleClassName}
              initial={{ opacity: 0, y: 20 }}
              animate={nextSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Less manual work. More thinking.
            </motion.h3>

            <motion.p
              className={`mt-8 ${sectionBodyClassName}`}
              initial={{ opacity: 0, y: 20 }}
              animate={nextSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              I&apos;m interested in pushing further into the space between design and development. Building tools, improving workflows, and working on products that actually solve problems.
            </motion.p>
          </div>

          <motion.div
            className="lg:col-start-4 lg:col-end-13 h-px w-full bg-foreground/20"
            initial={{ opacity: 0 }}
            animate={nextSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </section>

      <section ref={ctaSection.ref} className="container-wide pb-[128px]">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-6">
          <motion.p
            className={sectionIntroClassName}
            initial={{ opacity: 0 }}
            animate={ctaSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Call to Action
          </motion.p>

          <motion.div
            className="lg:col-start-4 lg:col-end-10"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="max-w-[20ch] [font-family:'Satoshi'] text-[38px] font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[44px] lg:text-[48px]">
              If process, design, and efficiency matter, let&apos;s talk.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-start-10 lg:col-end-13 lg:self-end lg:justify-self-end"
            initial={{ opacity: 0, y: 12 }}
            animate={ctaSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link
              to="/contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 [font-family:'Satoshi'] text-[16px] font-normal leading-none text-primary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Start a conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
