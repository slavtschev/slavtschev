import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "@/components/ReloadLink";
import { usePageTitle } from "@/hooks/use-page-title";

type OutputCategory = "motion" | "identity" | "product" | "web";

type OutputProject = {
  title: string;
  date: string;
  category: OutputCategory;
  image: string;
  link: string;
};

const filters: { label: string; value: OutputCategory | "all" }[] = [
  { label: "ALL", value: "all" },
  { label: "MOTION", value: "motion" },
  { label: "IDENTITY", value: "identity" },
  { label: "PRODUCT", value: "product" },
  { label: "WEB", value: "web" },
];

const outputProjects: OutputProject[] = [
  {
    title: "Storytel",
    date: "2024–now",
    category: "motion",
    image: "/work/storytel.jpg",
    link: "/systems",
  },
  {
    title: "Yettel",
    date: "2018–2024",
    category: "identity",
    image: "/work/yettel.png",
    link: "/systems/yettel",
  },
  {
    title: "Localization platform",
    date: "Concept",
    category: "product",
    image: "/work/localization-platform.jpg",
    link: "/systems",
  },
  {
    title: "Photography sites",
    date: "Independent",
    category: "web",
    image: "/work/photography-sites.jpg",
    link: "/systems",
  },
];

export default function Outputs() {
  usePageTitle("Outputs");
  const [activeFilter, setActiveFilter] = useState<OutputCategory | "all">("all");
  const heroSection = useInView({ threshold: 0.1, once: true });
  const gridSection = useInView({ threshold: 0.1, once: true });

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return outputProjects;
    }

    return outputProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section ref={heroSection.ref} className="container-wide pt-24 pb-0 md:pt-28 lg:pt-[128px] lg:pb-0">
        <motion.h1
          className="web-headline text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Selected Outputs
        </motion.h1>

        <motion.div
          className="mt-[32px] grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-x-6"
          initial={{ opacity: 0, y: 14 }}
          animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="lg:col-span-2 text-[16px] font-medium leading-none text-foreground/90">
            Filters:
          </p>

          <div className="lg:col-start-4 lg:col-end-13 flex flex-nowrap justify-start gap-4 overflow-x-auto lg:flex-wrap lg:justify-end lg:overflow-visible">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`shrink-0 h-10 rounded-full border px-6 text-[16px] font-medium leading-none transition-colors ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-[#CACACA] bg-transparent text-foreground/85 hover:border-foreground"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="mt-[24px] w-full border-t border-foreground/20"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={heroSection.isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </section>

      <section ref={gridSection.ref} className="container-wide pt-[64px] pb-24 lg:pb-[128px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 gap-x-6 gap-y-20 lg:grid-cols-12 lg:gap-y-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${project.date}`}
                className="lg:col-span-4"
                initial={{ opacity: 0, y: 24 }}
                animate={gridSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link to={project.link} className="block h-full">
                  <article className="group h-full">
                    <div className="aspect-video overflow-hidden rounded-[20px] bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-4 grid min-h-[64px] grid-cols-[minmax(0,1fr)_auto] items-start gap-6">
                      <h2 className="web-title text-foreground">
                        {project.title}
                      </h2>
                      <p className="web-small shrink-0 pt-1 text-foreground/70">
                        {project.date}
                      </p>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
}

