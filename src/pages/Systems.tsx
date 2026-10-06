import { useState } from "react";
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
    title: "Photographers Portfolios",
    link: "/systems",
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1400&q=80",
    tags: ["Web Design", "No code Development"],
  },
  {
    title: "Photographers Portfolios",
    link: "/systems",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1400&q=80",
    tags: ["Web Design", "No code Development"],
  },
  {
    title: "Photographers Portfolios",
    link: "/systems",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1400&q=80",
    tags: ["Web Design", "No code Development"],
  },
  {
    title: "Photographers Portfolios",
    link: "/systems",
    image:
      "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1400&q=80",
    tags: ["Web Design", "No code Development"],
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={link} className="block">
      <article className="relative cursor-pointer">
        <div
          className="relative aspect-video overflow-hidden rounded-[20px] bg-muted"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
        </div>

        <div className="pt-4 pb-14">
          <h3 className="[font-family:'Satoshi'] text-[36px] font-medium leading-[1.08] tracking-[-0.02em] text-foreground">
            {title}
          </h3>

          <div
            className={`mt-3 flex flex-wrap gap-2 transition-all duration-500 ease-[cubic-bezier(0.2,1,0.4,1)] ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-3 opacity-0"
            }`}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-[10px] border border-[#CACACA] bg-transparent px-5 py-2.5 [font-family:'Satoshi'] text-[14px] font-medium leading-none text-foreground/80"
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
            className="[font-family:'Satoshi'] text-[48px] font-medium leading-[1] tracking-[-0.035em] text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={heroSection.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            I Design Workflows, not just visuals
          </motion.h1>
        </div>

        <motion.div
          className="mt-[24px] flex items-center justify-between [font-family:'Satoshi'] text-[14px] font-medium uppercase tracking-[0.04em] text-foreground/75"
          initial={{ opacity: 0 }}
          animate={heroSection.isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p>My Projects</p>
          <p>2018-2026</p>
        </motion.div>
      </section>

      <section ref={gridSection.ref} className="container-wide pt-[64px] pb-[128px]">
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
