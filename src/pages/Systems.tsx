import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "@/components/ReloadLink";
import { usePageTitle } from "@/hooks/use-page-title";

type CaseStudy = {
  title: string;
  link: string;
  image: string;
  tags: string[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "Storytel",
    link: "/systems",
    image: "/work/storytel.jpg",
    tags: ["Motion", "Localization", "After Effects"],
  },
  {
    title: "Yettel",
    link: "/systems/yettel",
    image: "/work/yettel.png",
    tags: ["Identity", "Design systems", "Strategy"],
  },
  {
    title: "Localization platform",
    link: "/systems",
    image: "/work/localization-platform.jpg",
    tags: ["Product", "UX/UI"],
  },
  {
    title: "Photography sites",
    link: "/systems",
    image: "/work/photography-sites.jpg",
    tags: ["Web", "Vibe coding"],
  },
];

function CaseStudyCard({
  title,
  link,
  image,
  tags,
}: {
  title: string;
  link: string;
  image: string;
  tags: string[];
}) {
  return (
    <Link to={link} className="block">
      <article className="group relative cursor-pointer">
        <div className="relative aspect-video overflow-hidden rounded-[8px] bg-muted">
          <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
        </div>

        <div className="pt-4 pb-14">
          <h3 className="web-title text-foreground">
            {title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-2 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.4,1)] lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
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
  );
}

export default function Systems() {
  usePageTitle("Case Studies");
  const heroSection = useInView({ threshold: 0.1, once: true });
  const gridSection = useInView({ threshold: 0.1, once: true });

  return (
    <>
      <section ref={heroSection.ref} className="container-wide pt-24 pb-0 md:pt-28 lg:pt-[128px] lg:pb-0">
        <div className="border-b border-foreground/25 pb-[32px]">
          <motion.h1
            className="web-headline text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Case studies: the systems behind the work.
          </motion.h1>
        </div>

        <motion.div
          className="web-label mt-[24px] flex items-center justify-between text-foreground/75"
          initial={{ opacity: 0 }}
          animate={heroSection.isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p>My Projects</p>
          <p>2018-2026</p>
        </motion.div>
      </section>

      <section ref={gridSection.ref} className="container-wide pt-[64px] pb-24 lg:pb-[128px]">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-12 lg:gap-y-16">
          {caseStudies.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 28 }}
              animate={gridSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <CaseStudyCard {...project} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
