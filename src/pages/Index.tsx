import { Link } from "@/components/ReloadLink";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { usePageTitle } from "@/hooks/use-page-title";
import { Button } from "@/components/ui/button";

const featuredProjects: {
  title: string;
  description: string;
  hoverText: string;
  link: string;
  image: string;
  size: "large" | "medium" | "small";
  tags: string[];
}[] = [
  {
    title: "Storytel",
    description: "Motion design and creative production for campaigns localized into 20+ markets.",
    hoverText: "Motion design and creative production for campaigns localized into 20+ markets.",
    link: "/systems",
    image: "/work/storytel.jpg",
    size: "large",
    tags: ["Motion", "Localization", "After Effects"],
  },
  {
    title: "Localization platform",
    description: "One place for every language and format of a campaign, with QA built in.",
    hoverText: "One place for every language and format of a campaign, with QA built in.",
    link: "/systems",
    image: "/work/localization-platform.jpg",
    size: "small",
    tags: ["Product", "UX/UI"],
  },
  {
    title: "Yettel",
    description: "Visual identity, design systems and creative strategy, at Telenor and then Yettel.",
    hoverText: "Visual identity, design systems and creative strategy, at Telenor and then Yettel.",
    link: "/systems/yettel",
    image: "/work/yettel.png",
    size: "small",
    tags: ["Identity", "Design systems", "Strategy"],
  },
  {
    title: "Photography sites",
    description: "Portfolio sites for photographers, built by prompting and shipped to production.",
    hoverText: "Portfolio sites for photographers, built by prompting and shipped to production.",
    link: "/systems",
    image: "/work/photography-sites.jpg",
    size: "medium",
    tags: ["Web", "Vibe coding"],
  },
];

const clients = [
  {
    name: "Storytel",
    year: "2024 - ongoing",
    hoverText: "2024 - ongoing",
  },
  {
    name: "Yettel",
    year: "2022 - 2024",
    hoverText: "2022 - 2024",
  },
  {
    name: "Telenor",
    year: "2018 - 2022",
    hoverText: "2018 - 2022",
  },
  {
    name: "Athlon Technology",
    year: "2026",
    hoverText: "2026",
  },
  {
    name: "Colliers International",
    year: "2016 - 2018",
    hoverText: "2016 - 2018",
  },
  {
    name: "StreetPhoto Lab",
    year: "ongoing",
    hoverText: "ongoing",
  },
  {
    name: "Curly Ideas Studio",
    year: "2025",
    hoverText: "2025",
  },
  {
    name: "Three Hills Club",
    year: "2026",
    hoverText: "2026",
  },
];

const outputsSlides = [
  {
    title: "Storytel",
    image: "/work/storytel.jpg",
    link: "/systems",
    widthClass: "w-[80vw] sm:w-[42vw] lg:w-[26rem]",
  },
  {
    title: "Localization platform",
    image: "/work/localization-platform.jpg",
    link: "/systems",
    widthClass: "w-[80vw] sm:w-[42vw] lg:w-[18rem]",
  },
  {
    title: "Yettel",
    image: "/work/yettel.png",
    link: "/systems/yettel",
    widthClass: "w-[80vw] sm:w-[42vw] lg:w-[26rem]",
  },
  {
    title: "Photography sites",
    image: "/work/photography-sites.jpg",
    link: "/systems",
    widthClass: "w-[80vw] sm:w-[42vw] lg:w-[18rem]",
  },
];

const coreSkillsTabs = [
  {
    label: "Creative Production",
    lead: "I do a mix of things and I try to make each skill support the others.",
    paragraph:
      "Motion design and creative production for campaigns localized into 20+ markets, at Storytel. Concept, execution and the production system behind it, so work ships consistently across markets.",
    image: { src: "/work/storytel.jpg", alt: "A grid of campaign versions for Storytel, one per market" },
  },
  {
    label: "UX/UI Design",
    lead: "I turn complexity into interfaces that feel clear, fast, and intentional.",
    paragraph:
      "A concept for a localization platform: one place for every language and format of a campaign, with QA built in. Product thinking applied to the same localization problem Storytel's campaigns run into.",
    image: { src: "/work/localization-platform.jpg", alt: "The localization platform overview: languages, versions, items to review" },
  },
  {
    label: "Automation",
    lead: "I design workflows that remove repetitive work and protect creative quality.",
    paragraph:
      "Vibe Flow, an After Effects plugin I built by prompting: it swaps a master comp into every language version automatically, instead of by hand.",
    image: { src: "/notes/vibe-flow.jpg", alt: "Vibe Flow running inside After Effects, rendering language versions" },
  },
  {
    label: "No Code Development",
    lead: "I build functional digital products quickly with modern no-code tools.",
    paragraph:
      "Portfolio sites for photographers, built on Webflow, Vite and Astro by prompting and shipped to production, start to finish.",
    image: { src: "/work/photography-sites.jpg", alt: "Four photography and product sites in browser windows" },
  },
] as const;

function FeaturedCard({
  title,
  link,
  image,
  size,
  tags,
  isInView,
  index,
}: {
  title: string;
  link: string;
  image: string;
  size: "large" | "medium" | "small";
  tags: string[];
  isInView: boolean;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const aspectClasses = {
    large: "aspect-video",
    medium: "aspect-video",
    small: "aspect-video",
  };

  const colSpanClasses = {
    large: "lg:col-span-8",
    medium: "lg:col-span-8",
    small: "lg:col-span-4",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`block ${colSpanClasses[size]}`}
    >
      <Link to={link} className="block">
        <article className="relative cursor-pointer">
          <div
            className={`${aspectClasses[size]} relative overflow-hidden bg-muted rounded-lg`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="pt-4">
            <h3 className="web-title text-foreground">{title}</h3>
            <div
              className={`mt-3 flex flex-wrap gap-2 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.4,1)] ${
                isHovered ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
              }`}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-[10px] border border-[#CACACA] bg-transparent px-5 py-2.5 text-[14px] font-medium leading-none text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export default function Index() {
  usePageTitle("Dimitar Slavchev");
  const [activeCoreSkillTab, setActiveCoreSkillTab] = useState(0);
  const outputsTrackRef = useRef<HTMLDivElement | null>(null);
  const outputsRateRafRef = useRef<number | null>(null);

  // Viewport detection for different sections
  const heroSection = useInView({ threshold: 0.1, once: true });
  const headlineSection = useInView({ threshold: 0.1, once: true });
  const projectsSection = useInView({ threshold: 0.1, once: true });
  const myWorkSection = useInView({ threshold: 0.1, once: true });
  const coreSkillsSection = useInView({ threshold: 0.1, once: true });
  const clientsSection = useInView({ threshold: 0.1, once: true });
  const outputsSection = useInView({ threshold: 0.1, once: true });

  const tweenOutputsPlaybackRate = (targetRate: number, durationMs: number) => {
    if (outputsRateRafRef.current !== null) {
      window.cancelAnimationFrame(outputsRateRafRef.current);
      outputsRateRafRef.current = null;
    }

    const animation = outputsTrackRef.current?.getAnimations()[0];
    if (!animation) {
      return;
    }

    const startRate = animation.playbackRate;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      // Exponential decay gives a more natural brake-like deceleration.
      const decay = 1 - Math.exp(-6 * progress);
      const eased = decay / (1 - Math.exp(-6));
      animation.playbackRate = startRate + (targetRate - startRate) * eased;

      if (progress < 1) {
        outputsRateRafRef.current = window.requestAnimationFrame(step);
      } else {
        outputsRateRafRef.current = null;
      }
    };

    outputsRateRafRef.current = window.requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (outputsRateRafRef.current !== null) {
        window.cancelAnimationFrame(outputsRateRafRef.current);
      }
    };
  }, []);

  return (
    <>
      <section ref={heroSection.ref} className="relative h-[calc(100svh-5rem)] overflow-x-hidden">
        <div className="container-wide flex h-full flex-col">
          <div aria-hidden className="invisible flex-1" />

          <div className="grid items-start gap-y-10 pb-0 lg:grid-cols-[minmax(18rem,0.92fr)_minmax(0,1.8fr)] lg:grid-rows-[auto_minmax(0,1fr)] lg:gap-x-10 xl:gap-x-12">
            <div className="hidden lg:block" />

            <div className="w-full lg:col-start-2 lg:row-start-1">
              <motion.h1
                className="web-display text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                I design the work,
                <br />
                and the workflow.
              </motion.h1>
            </div>

            <div className="max-w-[24rem] lg:col-start-1 lg:row-start-2">
              <motion.div
                className="flex max-w-[23rem] flex-wrap gap-[10px]"
                initial={{ opacity: 0 }}
                animate={heroSection.isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center rounded-full bg-secondary/65 px-5 py-2 text-[14px] font-medium leading-none text-foreground/78">
                  Creative Production
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary/65 px-5 py-2 text-[14px] font-medium leading-none text-foreground/78">
                  UX/UI Design
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary/65 px-5 py-2 text-[14px] font-medium leading-none text-foreground/78">
                  Automation
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary/65 px-5 py-2 text-[14px] font-medium leading-none text-foreground/78">
                  No Code Development
                </span>
              </motion.div>

              <motion.p
                className="web-lead mt-8 max-w-[23rem] text-foreground/68"
                initial={{ opacity: 0, y: 10 }}
                animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                I care about how things are built and how to make them work better.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <Link
                  to="/systems"
                  className="group mt-7 inline-flex items-center gap-3 text-[20px] font-medium text-black transition-colors"
                >
                  <span>Take a look at my work</span>
                  <ArrowUpRight
                    size={26}
                    className="text-accent transition-transform duration-300 ease-out group-hover:rotate-45"
                  />
                </Link>
              </motion.div>
            </div>

            <div className="w-full lg:col-start-2 lg:row-start-2 lg:h-full lg:self-end">
              <motion.div
                className="aspect-video overflow-hidden rounded-[12px] rounded-tr-none bg-card lg:ml-auto lg:mr-[-5rem]"
                initial={{ opacity: 0 }}
                animate={heroSection.isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <video
                  src="/Media/showreel.mp4"
                  poster="/Media/showreel-poster.jpg"
                  aria-label="Showreel: Storytel campaigns, Vibe Flow in After Effects, a localization platform, photography sites and three apps"
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Headline Section */}
      <section ref={headlineSection.ref} className="container-wide pt-[128px] pb-32">
        <motion.h2
          className="web-headline text-foreground text-center mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={headlineSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Designer and creative technologist with 8 years in advertising and creative production.
        </motion.h2>
      </section>

      {/* Projects */}
      <section ref={projectsSection.ref} className="container-wide pt-0 pb-0">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-y-24">
          {/* Line 1: small left (4 cols), large right (8 cols) */}
          <FeaturedCard {...featuredProjects[1]} isInView={projectsSection.isInView} index={0} />
          <FeaturedCard {...featuredProjects[0]} isInView={projectsSection.isInView} index={1} />

          {/* Line 2: large left (8 cols), small right (4 cols) */}
          <FeaturedCard {...featuredProjects[3]} isInView={projectsSection.isInView} index={2} />
          <FeaturedCard {...featuredProjects[2]} isInView={projectsSection.isInView} index={3} />
        </div>
      </section>

      <section ref={myWorkSection.ref} className="py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:items-start lg:gap-x-6">
            <motion.p
              className="web-label lg:col-start-1 lg:col-span-1 text-foreground/90"
              initial={{ opacity: 0 }}
              animate={myWorkSection.isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              My Work
            </motion.p>

            <motion.h3
              className="web-headline lg:col-start-3 lg:col-end-10 w-full max-w-none text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={myWorkSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              I care about how things are built and how to make them work better. Take a look at my work.
            </motion.h3>

            <motion.div
              className="lg:col-start-11 lg:col-span-2 lg:justify-self-end"
              initial={{ opacity: 0, y: 10 }}
              animate={myWorkSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Button asChild className="group h-10 rounded-full px-6 text-[16px] leading-none font-normal">
                <Link to="/systems">
                  View My Work
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

      {/* Core Skills */}
      <section ref={coreSkillsSection.ref} className="bg-black pt-16 pb-24 text-white lg:pt-16 lg:pb-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-16">
            <div className="lg:col-start-1 lg:col-span-6">
              <motion.p
                className="web-label text-white/65"
                initial={{ opacity: 0 }}
                animate={coreSkillsSection.isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                Core Skills
              </motion.p>
              <motion.h3
                className="web-headline mt-16 max-w-[34rem] text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={coreSkillsSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                I do a <span className="bg-accent px-1.5 text-accent-foreground">mix of things</span> and I try to make each skill support the others.
              </motion.h3>
            </div>

            <div className="lg:col-start-8 lg:col-span-5">
              <div className="border-t border-white/25">
                {coreSkillsTabs.map((tab, index) => (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setActiveCoreSkillTab(index)}
                    className={`web-headline group w-full border-b border-white/25 py-4 text-left transition-colors ${
                      activeCoreSkillTab === index ? "bg-white/8 text-white" : "text-[#ABABAB] hover:text-zinc-100"
                    }`}
                    aria-pressed={activeCoreSkillTab === index}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span>{tab.label}</span>
                      <span className="relative h-7 w-7 shrink-0" aria-hidden>
                        <span
                          className={`absolute left-1/2 top-1/2 h-[1px] w-7 -translate-x-1/2 -translate-y-1/2 bg-current transform-gpu transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.18,0.9,0.22,1)] ${
                            activeCoreSkillTab === index ? "text-white" : "text-current"
                          }`}
                        />
                        <span
                          className={`absolute left-1/2 top-1/2 h-7 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-current origin-center transform-gpu transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.18,0.9,0.22,1)] ${
                            activeCoreSkillTab === index
                              ? "rotate-90 opacity-0"
                              : "rotate-0 opacity-100"
                          }`}
                        />
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={`core-skills-paragraph-${activeCoreSkillTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="web-lead max-w-[39rem] lg:col-start-1 lg:col-span-6 text-white/90"
              >
                {coreSkillsTabs[activeCoreSkillTab].paragraph}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`core-skills-images-${activeCoreSkillTab}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-square w-full max-w-[22rem] overflow-hidden rounded-[20px] bg-white/10 lg:col-start-8 lg:col-span-5"
              >
                <img
                  src={coreSkillsTabs[activeCoreSkillTab].image.src}
                  alt={coreSkillsTabs[activeCoreSkillTab].image.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section ref={clientsSection.ref} className="bg-[#efefef] py-24 lg:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-6">
            <motion.p
              className="web-label lg:col-span-2 text-foreground/65"
              initial={{ opacity: 0 }}
              animate={clientsSection.isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              WORKED WITH
            </motion.p>
            <motion.h3
              className="web-headline lg:col-start-4 lg:col-end-13 w-full max-w-none text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={clientsSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              This is where I shaped my approach
            </motion.h3>
          </div>

          <motion.div
            className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={clientsSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {clients.map((client, index) => (
              <motion.article
                key={client.name}
                className="group relative flex min-h-[9rem] items-center justify-center overflow-hidden rounded-[16px] border border-black/5 bg-white px-4 text-center sm:min-h-[17rem] sm:px-8 lg:min-h-[18rem]"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={clientsSection.isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <p className="text-[clamp(1.6rem,2.4vw,2.2rem)] font-bold leading-none tracking-[-0.02em] text-foreground transition-all duration-300 ease-out group-hover:opacity-20 group-hover:blur-[3px]">
                  {client.name}
                </p>
                <p className="pointer-events-none absolute inset-x-8 top-1/2 -translate-y-[56%] translate-y-3 text-[22px] font-medium leading-[1.1] tracking-[-0.02em] text-foreground opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  {client.hoverText}
                </p>
                <p className="pointer-events-none absolute bottom-5 right-5 text-[13px] font-medium leading-none tracking-[0.01em] text-muted-foreground sm:text-[14px]">
                  /{client.year}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Outputs Slider */}
      <section ref={outputsSection.ref} className="py-24 lg:py-28">
        <div className="container-wide">
          <motion.div
            className="max-w-[48rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={outputsSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="web-headline text-foreground">
              Check out my recent
              <br />
              work on
              <span className="ml-2">Outputs</span>.
            </h3>
          </motion.div>

          <div className="relative left-1/2 mt-14 w-screen -translate-x-1/2">
            <motion.div
              className={`outputs-marquee ${outputsSection.isInView ? "is-active" : ""}`}
              onMouseEnter={() => tweenOutputsPlaybackRate(0, 560)}
              onMouseLeave={() => tweenOutputsPlaybackRate(1, 420)}
              initial={{ opacity: 0 }}
              animate={outputsSection.isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div ref={outputsTrackRef} className="outputs-marquee-track">
              {[0, 1].map((groupIndex) => (
                <div key={groupIndex} className="outputs-marquee-group" aria-hidden={groupIndex === 1}>
                  {outputsSlides.map((project) => (
                    <Link key={`${project.title}-${groupIndex}`} to={project.link} className="block w-[74vw] shrink-0 sm:w-[44vw] lg:w-[22rem]">
                      <article className="group">
                        <div className="aspect-square overflow-hidden rounded-[10px] bg-[#dcdcdc]">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02] md:p-4"
                            loading="lazy"
                          />
                        </div>
                        <h4 className="web-title mt-3 pb-1 text-foreground">
                          {project.title}
                        </h4>
                      </article>
                    </Link>
                  ))}
                </div>
              ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
