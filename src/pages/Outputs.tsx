import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, LayoutGrid, List } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "@/components/ReloadLink";
import { usePageTitle } from "@/hooks/use-page-title";

type OutputCategory = "motion" | "identity" | "product" | "web";

type OutputProject = {
  title: string;
  date: string;
  category: OutputCategory;
  categoryLabel: string;
  image: string;
  link: string;
  brief: string;
  role: string;
  tools: string;
  for: string;
  wide?: boolean;
};

const filters: { label: string; value: OutputCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Motion", value: "motion" },
  { label: "Identity", value: "identity" },
  { label: "Product", value: "product" },
  { label: "Web", value: "web" },
];

const outputProjects: OutputProject[] = [
  {
    title: "Storytel",
    date: "2024–now",
    category: "motion",
    categoryLabel: "Motion",
    image: "/work/storytel.jpg",
    link: "/systems",
    brief: "Motion design and creative production for campaigns localized into 20+ markets.",
    role: "Motion design & creative production",
    tools: "After Effects",
    for: "Storytel",
    wide: true,
  },
  {
    title: "Yettel",
    date: "2018–2024",
    category: "identity",
    categoryLabel: "Identity",
    image: "/work/yettel.png",
    link: "/systems/yettel",
    brief: "Six years setting up design systems, workflows and campaign production.",
    role: "Visual identity & design systems",
    tools: "Figma",
    for: "Yettel",
  },
  {
    title: "Localization platform",
    date: "Concept",
    category: "product",
    categoryLabel: "Product",
    image: "/work/localization-platform.jpg",
    link: "/systems",
    brief: "One place for every language and format of a campaign, with QA built in.",
    role: "Product design concept",
    tools: "Figma",
    for: "Personal project",
  },
  {
    title: "Photography sites",
    date: "Independent",
    category: "web",
    categoryLabel: "Web",
    image: "/work/photography-sites.jpg",
    link: "/systems",
    brief: "Portfolio sites for photographers, built by prompting and shipped to production.",
    role: "Web design & build, by prompting",
    tools: "Webflow, Vite, Astro",
    for: "Independent client sites",
  },
];

export default function Outputs() {
  usePageTitle("Outputs");
  const [activeFilter, setActiveFilter] = useState<OutputCategory | "all">("all");
  const [viewMode, setViewMode] = useState<"grid" | "index">("grid");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const heroSection = useInView({ threshold: 0.1, once: true });
  const gridSection = useInView({ threshold: 0.1, once: true });

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return outputProjects;
    }

    return outputProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const openProject = openIndex !== null ? outputProjects[openIndex] : null;

  const stepProject = (direction: 1 | -1) => {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current + direction + outputProjects.length) % outputProjects.length;
    });
  };

  return (
    <>
      <section ref={heroSection.ref} className="container-wide pt-24 pb-0 md:pt-28 lg:pt-[128px] lg:pb-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div
            className="flex max-w-[34rem] flex-col gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="web-label text-muted-foreground">Screens, sites and motion</span>
            <h1 className="web-display text-foreground">Outputs</h1>
          </motion.div>
          <motion.p
            className="web-lead max-w-[24rem] text-foreground/68"
            initial={{ opacity: 0, y: 16 }}
            animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            The smaller pieces, from client work and my own projects.
          </motion.p>
        </div>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-foreground py-6"
          initial={{ opacity: 0 }}
          animate={heroSection.isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div role="group" aria-label="Filter by category" className="flex flex-nowrap gap-2 overflow-x-auto sm:flex-wrap">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              const count =
                filter.value === "all"
                  ? outputProjects.length
                  : outputProjects.filter((p) => p.category === filter.value).length;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter.value);
                    setOpenIndex(null);
                  }}
                  aria-pressed={isActive}
                  className={`inline-flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-[16px] font-medium leading-none transition-colors ${
                    isActive ? "bg-foreground text-background" : "bg-card text-foreground hover:bg-card/70"
                  }`}
                >
                  {filter.label}
                  <span className={isActive ? "text-background/55" : "text-muted-foreground"}>{count}</span>
                </button>
              );
            })}
          </div>

          <div role="group" aria-label="View" className="flex gap-2">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              aria-pressed={viewMode === "grid"}
              className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-[16px] font-medium leading-none transition-colors ${
                viewMode === "grid" ? "bg-foreground text-background" : "bg-card text-foreground hover:bg-card/70"
              }`}
            >
              <LayoutGrid size={18} />
              Grid
            </button>
            <button
              type="button"
              onClick={() => setViewMode("index")}
              aria-pressed={viewMode === "index"}
              className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-[16px] font-medium leading-none transition-colors ${
                viewMode === "index" ? "bg-foreground text-background" : "bg-card text-foreground hover:bg-card/70"
              }`}
            >
              <List size={18} />
              Index
            </button>
          </div>
        </motion.div>
      </section>

      <section ref={gridSection.ref} className="container-wide pt-[64px] pb-24 lg:pb-[128px]">
        <AnimatePresence mode="wait" initial={false}>
          {openProject ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="inline-flex items-center gap-2 text-[16px] font-medium text-accent transition-colors hover:text-accent/80"
                >
                  <ArrowLeft size={18} />
                  All outputs
                </button>
                <div className="flex items-center gap-4">
                  <span className="web-label text-foreground">
                    No. {String((openIndex ?? 0) + 1).padStart(2, "0")} of {outputProjects.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => stepProject(-1)}
                    aria-label="Previous piece"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-card/70"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepProject(1)}
                    aria-label="Next piece"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:bg-foreground/90"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-start gap-12">
                <div className="min-w-[280px] flex-[1_0_60%] overflow-hidden rounded-xl bg-card">
                  <img
                    src={openProject.image}
                    alt={openProject.title}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-[280px] flex-[1_0_30%]">
                  <span className="web-label text-muted-foreground">
                    {openProject.categoryLabel} · {openProject.date}
                  </span>
                  <h2 className="web-title mt-3 text-foreground">{openProject.title}</h2>
                  <p className="web-body mt-3 text-muted-foreground">{openProject.brief}</p>

                  <dl className="mt-4 flex flex-col border-t border-foreground">
                    {[
                      { label: "Role", value: openProject.role },
                      { label: "Tools", value: openProject.tools },
                      { label: "For", value: openProject.for },
                    ].map((row) => (
                      <div key={row.label} className="flex items-baseline gap-4 border-b border-foreground/15 py-4">
                        <dt className="w-16 shrink-0 web-label text-muted-foreground">{row.label}</dt>
                        <dd className="web-body">{row.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    to={openProject.link}
                    className="group mt-4 inline-flex items-center gap-2 text-[16px] font-medium text-accent transition-colors hover:text-accent/80"
                  >
                    See the full piece
                    <ArrowUpRight size={18} className="transition-transform duration-300 ease-out group-hover:rotate-45" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : viewMode === "grid" ? (
            <motion.div
              key={`grid-${activeFilter}`}
              className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {visibleProjects.map((project, index) => (
                <motion.button
                  key={project.title}
                  type="button"
                  onClick={() => setOpenIndex(outputProjects.indexOf(project))}
                  className={`group flex flex-col gap-4 text-left ${project.wide ? "col-span-2" : ""}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={gridSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <span
                    className={`block w-full overflow-hidden rounded-xl bg-card ${project.wide ? "aspect-[25/16]" : "aspect-[3/4]"}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </span>
                  <span className="flex flex-col gap-2">
                    <span className="web-title text-foreground">{project.title}</span>
                    <span className="web-label text-muted-foreground">
                      {project.categoryLabel} · {project.date}
                    </span>
                  </span>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={`index-${activeFilter}`}
              className="flex flex-col border-t border-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {visibleProjects.map((project) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setOpenIndex(outputProjects.indexOf(project))}
                  className="group flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-foreground/15 py-6 text-left text-foreground transition-colors hover:text-accent"
                >
                  <span className="web-title flex-1 basis-[240px]">{project.title}</span>
                  <span className="web-label text-muted-foreground">
                    {project.categoryLabel} · {project.date}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 ease-out group-hover:rotate-45"
                    aria-hidden="true"
                  />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
