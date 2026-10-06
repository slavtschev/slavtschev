import { Link } from "@/components/ReloadLink";
import { SectionHeading } from "@/components/SectionHeading";
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
    link: "/systems",
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
    title: "Radiant",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1400&q=80",
    link: "/outputs",
    widthClass: "w-[80vw] sm:w-[42vw] lg:w-[26rem]",
  },
  {
    title: "Savings Interaction",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1400&q=80",
    link: "/outputs",
    widthClass: "w-[80vw] sm:w-[42vw] lg:w-[18rem]",
  },
  {
    title: "Crystal AI",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    link: "/outputs",
    widthClass: "w-[80vw] sm:w-[42vw] lg:w-[26rem]",
  },
  {
    title: "Mobile Wallet",
    image:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=1400&q=80",
    link: "/outputs",
    widthClass: "w-[80vw] sm:w-[42vw] lg:w-[18rem]",
  },
  {
    title: "Nova Commerce",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    link: "/outputs",
    widthClass: "w-[80vw] sm:w-[42vw] lg:w-[24rem]",
  },
  {
    title: "Pulse Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    link: "/outputs",
    widthClass: "w-[80vw] sm:w-[42vw] lg:w-[20rem]",
  },
];

const expertiseAreas = [
  {
    title: "Creative Systems & Automation",
    bullets: [
      "Scalable production frameworks",
      "Template architecture design",
      "Workflow optimization",
      "Asset management systems",
    ],
  },
  {
    title: "Motion & Video Production",
    bullets: [
      "Modular motion templates",
      "Video localization pipelines",
      "Social-first video content",
      "Animation systems design",
    ],
  },
  {
    title: "Digital Marketing Creatives",
    bullets: [
      "Display & programmatic ads",
      "Social media campaigns",
      "Email design systems",
      "Performance creative testing",
    ],
  },
  {
    title: "Web Design & Vibe Coding",
    bullets: [
      "Portfolio & landing pages",
      "Design system implementation",
      "Interactive prototypes",
      "Component-driven development",
    ],
  },
];

const coreSkillsTabs = [
  {
    label: "Creative Production",
    lead: "I do a mix of things and I try to make each skill support the others.",
    paragraph:
      "I have worked with major brands running high-volume campaigns where fast adaptation matters. My role combines concept, execution, and production systems so work ships consistently across channels.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=420&q=80",
        alt: "Creative setup with campaign notes",
      },
      {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=420&q=80",
        alt: "Team reviewing production plan",
      },
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=420&q=80",
        alt: "Studio desk with storyboard",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=420&q=80",
        alt: "Campaign analytics on monitor",
      },
      {
        src: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=420&q=80",
        alt: "Creative team workshop session",
      },
    ],
  },
  {
    label: "UX/UI Design",
    lead: "I turn complexity into interfaces that feel clear, fast, and intentional.",
    paragraph:
      "From early wireframes to polished UI systems, I focus on hierarchy, consistency, and real user behavior. The goal is always simple: reduce friction and improve outcomes.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=420&q=80",
        alt: "UI design boards and sketches",
      },
      {
        src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=420&q=80",
        alt: "Product interface mockups",
      },
      {
        src: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&w=420&q=80",
        alt: "Design system components",
      },
      {
        src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=420&q=80",
        alt: "Prototype testing on laptop",
      },
      {
        src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=420&q=80",
        alt: "Wireframe and UI flow review",
      },
    ],
  },
  {
    label: "Automation",
    lead: "I design workflows that remove repetitive work and protect creative quality.",
    paragraph:
      "By combining templates, no-code logic, and structured asset systems, I make teams faster without sacrificing control. Automation supports creativity instead of replacing it.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=420&q=80",
        alt: "Automated workflow dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=420&q=80",
        alt: "Process mapping on wall",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=420&q=80",
        alt: "Data pipeline charts",
      },
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=420&q=80",
        alt: "Code and automation scripts",
      },
      {
        src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=420&q=80",
        alt: "Automation nodes and process editor",
      },
    ],
  },
  {
    label: "No Code Development",
    lead: "I build functional digital products quickly with modern no-code tools.",
    paragraph:
      "Landing pages, content systems, and campaign tools can move from idea to launch in days. I use no-code stacks where speed and iteration are the highest priority.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=420&q=80",
        alt: "No-code interface builder",
      },
      {
        src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=420&q=80",
        alt: "Website blocks and components",
      },
      {
        src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=420&q=80",
        alt: "Rapid page prototyping session",
      },
      {
        src: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=420&q=80",
        alt: "Publishing workflow on dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=420&q=80",
        alt: "No-code website builder canvas",
      },
    ],
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
            />
          </div>
          <div className="pt-4">
            <h3 className="text-foreground text-[24px] font-medium leading-[1.1]">{title}</h3>
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
                className="text-[56px] sm:text-[64px] lg:text-[80px] font-medium leading-[1] tracking-[-0.035em] text-foreground"
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
                className="mt-8 max-w-[23rem] text-[24px] font-medium leading-[1.25] tracking-[-0.025em] text-foreground/68"
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={heroSection.isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
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
          className="text-[48px] font-medium leading-[1.1] tracking-[-0.035em] text-foreground text-center mx-auto max-w-4xl"
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
              className="lg:col-start-1 lg:col-span-1 text-[16px] font-medium uppercase leading-none tracking-[0.04em] text-foreground/90"
              initial={{ opacity: 0 }}
              animate={myWorkSection.isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              My Work
            </motion.p>

            <motion.h3
              className="lg:col-start-3 lg:col-end-10 w-full max-w-none text-[48px] font-medium leading-[1.04] tracking-[-0.03em] text-foreground"
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
                className="text-[14px] font-medium uppercase tracking-[0.08em] text-white/65"
                initial={{ opacity: 0 }}
                animate={coreSkillsSection.isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                Core Skills
              </motion.p>
              <motion.h3
                className="mt-16 max-w-[34rem] text-[44px] font-medium leading-[1.02] tracking-[-0.03em] text-white sm:text-[52px]"
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
                    className={`group w-full border-b border-white/25 py-4 text-left text-[48px] font-medium leading-[1.05] tracking-[-0.02em] transition-colors ${
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
                className="max-w-[39rem] lg:col-start-1 lg:col-span-6 text-[24px] font-normal leading-[1.25] text-white/90"
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
                className="grid w-max grid-cols-2 gap-4 lg:col-start-8 lg:col-span-5"
              >
                {coreSkillsTabs[activeCoreSkillTab].images.map((image) => (
                  <div key={image.src} className="h-[90px] w-[90px] overflow-hidden rounded-[20px] bg-white/10">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                  </div>
                ))}
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
              className="lg:col-span-2 text-[16px] font-normal uppercase tracking-[0.04em] text-foreground/65"
              initial={{ opacity: 0 }}
              animate={clientsSection.isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              WORKED WITH
            </motion.p>
            <motion.h3
              className="lg:col-start-4 lg:col-end-13 w-full max-w-none text-[44px] font-medium leading-[1.03] tracking-[-0.03em] text-foreground sm:text-[52px]"
              initial={{ opacity: 0, y: 20 }}
              animate={clientsSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              This is where I shaped my approach
            </motion.h3>
          </div>

          <motion.div
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={clientsSection.isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {clients.map((client, index) => (
              <motion.article
                key={client.name}
                className="group relative flex min-h-[17rem] items-center justify-center overflow-hidden rounded-[16px] border border-black/5 bg-white px-8 text-center sm:min-h-[18rem]"
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
                <p className="pointer-events-none absolute bottom-5 right-5 text-[13px] font-medium leading-none tracking-[0.01em] text-foreground/35 sm:text-[14px]">
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
            <h3 className="text-[48px] font-medium leading-[1.04] tracking-[-0.03em] text-foreground">
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
                          />
                        </div>
                        <h4 className="mt-3 pb-1 text-[22px] font-medium leading-[1.16] tracking-[-0.02em] text-foreground lg:text-[24px]">
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
