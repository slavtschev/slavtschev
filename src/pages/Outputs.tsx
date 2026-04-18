import { useMemo, useState } from "react";
import { Link } from "@/components/ReloadLink";

type OutputCategory =
  | "web-design"
  | "motion-design"
  | "ux-ui"
  | "development"
  | "dooh"
  | "performance-marketing-design";

type OutputProject = {
  title: string;
  date: string;
  category: OutputCategory;
  image: string;
  link: string;
};

const filters: { label: string; value: OutputCategory | "all" }[] = [
  { label: "ALL", value: "all" },
  { label: "WEB DESIGN", value: "web-design" },
  { label: "MOTION DESIGN", value: "motion-design" },
  { label: "UX/UI", value: "ux-ui" },
  { label: "DEVELOPMENT", value: "development" },
  { label: "DOOH", value: "dooh" },
  { label: "PERFORMANCE MARKETING DESIGN", value: "performance-marketing-design" },
];

const outputProjects: OutputProject[] = [
  {
    title: "Robust Present Ready",
    date: "03/2025",
    category: "performance-marketing-design",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1200&q=80",
    link: "/outputs",
  },
  {
    title: "Motion Launch Frames",
    date: "03/2025",
    category: "motion-design",
    image:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=1200&q=80",
    link: "/outputs",
  },
  {
    title: "Soda City Cup",
    date: "02/2025",
    category: "dooh",
    image:
      "https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&w=1200&q=80",
    link: "/outputs",
  },
  {
    title: "Editorial Website",
    date: "01/2025",
    category: "web-design",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    link: "/outputs",
  },
  {
    title: "Pulse Product Site",
    date: "12/2024",
    category: "development",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    link: "/outputs",
  },
  {
    title: "UX/UI Product Flow",
    date: "11/2024",
    category: "ux-ui",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    link: "/outputs",
  },
];

export default function Outputs() {
  const [activeFilter, setActiveFilter] = useState<OutputCategory | "all">("all");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return outputProjects;
    }

    return outputProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section className="container-wide pt-24 pb-0 md:pt-28 lg:pt-[128px] lg:pb-0">
        <h1 className="[font-family:'Satoshi'] text-[48px] font-medium leading-[1] tracking-[-0.035em] text-foreground">
          Selected Outputs
        </h1>

        <div className="mt-[32px] grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-x-6">
          <p className="lg:col-span-2 [font-family:'Satoshi'] text-[16px] font-medium leading-none text-foreground/90">
            Filters:
          </p>

          <div className="lg:col-start-4 lg:col-end-13 flex flex-nowrap gap-4 overflow-x-auto lg:justify-end">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`shrink-0 h-10 rounded-full border px-6 [font-family:'Satoshi'] text-[16px] font-medium leading-none transition-colors ${
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
        </div>

        <div className="mt-[24px] w-full border-t border-foreground/20" aria-hidden />
      </section>

      <section className="container-wide pt-[64px] pb-[128px]">
        <div className="grid grid-cols-1 gap-x-6 gap-y-20 lg:grid-cols-12 lg:gap-y-24">
          {visibleProjects.map((project) => (
            <Link key={`${project.title}-${project.date}`} to={project.link} className="block h-full lg:col-span-4">
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
                  <h2 className="[font-family:'Satoshi'] text-[24px] font-medium leading-[1.1] tracking-[-0.02em] text-foreground">
                    {project.title}
                  </h2>
                  <p className="shrink-0 pt-1 [font-family:'Satoshi'] text-[16px] font-medium leading-none text-foreground/70">
                    {project.date}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
