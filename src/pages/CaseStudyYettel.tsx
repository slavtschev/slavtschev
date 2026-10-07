import { useLayoutEffect } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/components/ReloadLink";
import { useInView } from "@/hooks/use-in-view";
import { usePageTitle } from "@/hooks/use-page-title";
import {
  asset,
  context,
  hero,
  learning,
  mediaRadius,
  metaLabel,
  nextCaseStudy,
  production,
  revealEase,
  sectionBodyMuted,
  sectionGrid,
  sectionIntro,
  sectionIntroDark,
  sectionTitle,
  tv,
  xmas,
} from "@/components/case-studies/yettel/data";
import { FormatWall } from "@/components/case-studies/yettel/FormatWall";
import { ExampleDesk } from "@/components/case-studies/yettel/ExampleDesk";
import { TemplateStage } from "@/components/case-studies/yettel/TemplateStage";
import { TvCampaign } from "@/components/case-studies/yettel/TvCampaign";
import { ProductionTabs } from "@/components/case-studies/yettel/ProductionTabs";
import "@/components/case-studies/yettel/theme.css";

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.1, once: true });
  return (
    <motion.div
      ref={(node) => {
        ref.current = node;
      }}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: revealEase }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  intro,
  title,
  body,
  dark = false,
}: {
  intro: string;
  title: string;
  body?: string;
  dark?: boolean;
}) {
  return (
    <div className={sectionGrid}>
      <Reveal y={0} className={dark ? sectionIntroDark : sectionIntro}>
        {intro}
      </Reveal>
      <div className="lg:col-start-4 lg:col-end-13">
        <Reveal delay={0.08}>
          <h2 className={`${sectionTitle} max-w-[22ch] ${dark ? "text-white" : ""}`}>{title}</h2>
        </Reveal>
        {body && (
          <Reveal delay={0.15}>
            <p
              className={
                dark
                  ? "mt-6 max-w-[44rem] text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-white/70 sm:text-[24px] sm:leading-[1.28]"
                  : `mt-6 ${sectionBodyMuted}`
              }
            >
              {body}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}

export default function CaseStudyYettel() {
  usePageTitle("Yettel case study");

  // The page lives in Yettel's brand: re-point the design-system tokens while it is open.
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-yettel");
    return () => root.classList.remove("theme-yettel");
  }, []);

  return (
    <div className="bg-background font-sans text-foreground">
      {/* Hero */}
      <section className="container-wide pt-24 md:pt-28 lg:pt-[128px]">
        <div className={sectionGrid}>
          <Reveal y={0} className={sectionIntro}>
            Case Study
          </Reveal>
          <div className="lg:col-start-4 lg:col-end-13">
            <Reveal y={24}>
              <h1 className="max-w-[14ch] text-[56px] font-medium leading-[0.98] tracking-[-0.04em] text-foreground sm:text-[64px] lg:text-[90px]">
                {hero.titleStart}{" "}
                <span className="cs-tag whitespace-nowrap">{hero.titleHighlight}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-10 max-w-[28rem] text-[24px] font-medium leading-[1.25] tracking-[-0.025em] text-foreground/68">
                {hero.subtitle}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2} y={0}>
          <div className="mt-16 flex items-center justify-between gap-6 border-b border-foreground/25 pb-4 text-[14px] font-medium uppercase tracking-[0.04em] text-foreground/75 lg:mt-24">
            <p>{hero.meta.join(" · ")}</p>
            <p className="shrink-0">{hero.period}</p>
          </div>
        </Reveal>

        <Reveal delay={0.25} y={0}>
          <div
            className={`mt-8 aspect-[4/3] overflow-hidden bg-[hsl(var(--cs-deep))] sm:aspect-video lg:aspect-[21/9] ${mediaRadius}`}
          >
            <FormatWall />
          </div>
          <p className="mt-4 text-[14px] font-medium text-foreground/55">{hero.wallCaption}</p>
        </Reveal>
      </section>

      {/* Context */}
      <section className="container-wide py-[96px] lg:py-[128px]">
        <div className={sectionGrid}>
          <Reveal y={0} className={sectionIntro}>
            Context
          </Reveal>
          <div className="lg:col-start-4 lg:col-end-13">
            <Reveal>
              <p className="max-w-[52rem] text-[28px] font-medium leading-[1.14] tracking-[-0.03em] text-foreground/92 sm:text-[34px] sm:leading-[1.1]">
                {context.company}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={`mt-10 ${sectionBodyMuted}`}>
                {context.roleBefore}
                <span className="cs-tag">{context.roleHighlight}</span>
                {context.roleAfter}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The job */}
      <section className="cs-light cs-curve py-[88px] lg:py-[112px]">
        <div className="container-wide">
          <SectionHeader
            intro="The Job"
            title="Visuals, digital ads and a smoother design process."
            body="Six years of helping various teams at Yettel. Four kinds of work; pick one to see examples."
          />
          <Reveal className="mt-14" delay={0.1}>
            <ExampleDesk />
          </Reveal>
        </div>
      </section>

      {/* Everyday digital trading */}
      <section className="cs-deep relative overflow-hidden py-[88px] text-white lg:py-[112px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-8 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="container-wide relative">
          <SectionHeader
            dark
            intro="Everyday Digital Trading"
            title="New phone. Same template. Nine formats."
            body="Ads for devices from Apple, Samsung, Huawei and more. My approach: adaptable templates that follow the brand guidelines and display ad best practices, so every campaign is easy to adapt."
          />
          <Reveal className="mt-14" delay={0.1}>
            <TemplateStage />
          </Reveal>

          <div className="mt-20 grid grid-cols-1 items-end gap-y-8 lg:mt-28 lg:grid-cols-12 lg:gap-x-6">
            <Reveal className="lg:col-span-7">
              <div className={`overflow-hidden ${mediaRadius}`}>
                <img
                  src={asset("trading-vendors-collage")}
                  alt="Vendors showcase: square ads for Motorola, Nokia, Xiaomi, Samsung, Huawei, Apple and Realme devices"
                  loading="lazy"
                  className="block w-full"
                  style={{ aspectRatio: "1581 / 1600" }}
                />
              </div>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
              <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/60">Vendors Showcase</p>
              <p className="mt-5 text-[24px] font-medium leading-[1.25] tracking-[-0.02em] text-white/90">
                Motorola, Nokia, Xiaomi, Samsung, Huawei, Apple, Realme. Every device and every offer, following the
                brand guidelines.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Christmas campaign */}
      <section className="container-wide py-[96px] lg:py-[128px]">
        <SectionHeader intro={xmas.period} title={xmas.title} body={xmas.body} />

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          <Reveal>
            <p className={`${metaLabel} text-foreground/50`}>{xmas.stages[0].label}</p>
            <h3 className="mt-3 text-[24px] font-medium leading-[1.2] tracking-[-0.02em]">{xmas.stages[0].title}</h3>
            <img
              src={asset("xmas-kv")}
              alt="Key visual: 31 дни Коледа в приложението Yettel"
              loading="lazy"
              className="mt-6 block w-full rounded-[6px]"
              style={{ aspectRatio: "1 / 1" }}
            />
            <div className="mt-4 flex flex-wrap items-end gap-2">
              {xmas.awarenessFormats.map((f) => (
                <img
                  key={f.src}
                  src={f.src}
                  alt={`Awareness ad, ${f.label}`}
                  title={f.label}
                  loading="lazy"
                  className="h-[72px] rounded-[3px]"
                  style={{ aspectRatio: String(f.ratio) }}
                />
              ))}
            </div>
            <p className="mt-5 text-[14px] font-medium leading-[1.45] text-foreground/55">{xmas.stages[0].gloss}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className={`${metaLabel} text-foreground/50`}>{xmas.stages[1].label}</p>
            <h3 className="mt-3 text-[24px] font-medium leading-[1.2] tracking-[-0.02em]">{xmas.stages[1].title}</h3>
            <img
              src={asset("xmas-rt-1200x1200")}
              alt="Retargeting ad: Игра ли за изненади днес? В приложението Yettel"
              loading="lazy"
              className="mt-6 block w-full rounded-[6px]"
              style={{ aspectRatio: "1 / 1" }}
            />
            <img
              src={asset("xmas-rt-1200x628")}
              alt="Retargeting ad in 1200×628"
              loading="lazy"
              className="mt-4 block w-full rounded-[6px]"
              style={{ aspectRatio: "1400 / 733" }}
            />
            <p className="mt-5 text-[14px] font-medium leading-[1.45] text-foreground/55">{xmas.stages[1].gloss}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`${metaLabel} text-foreground/50`}>{xmas.stages[2].label}</p>
            <h3 className="mt-3 text-[24px] font-medium leading-[1.2] tracking-[-0.02em]">{xmas.stages[2].title}</h3>
            <div className="mt-6 flex justify-center rounded-[6px] bg-[hsl(var(--cs-light))] px-6 py-8">
              <img
                src={asset("xmas-incentive")}
                alt="Incentive screen: Игра ли 10 пъти? Play 10 days and enter the Samsung raffle"
                loading="lazy"
                className="block w-[min(100%,280px)]"
                style={{ aspectRatio: "600 / 1130" }}
              />
            </div>
            <p className="mt-5 text-[14px] font-medium leading-[1.45] text-foreground/55">{xmas.stages[2].gloss}</p>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <p className={`${metaLabel} text-foreground/50`}>Results</p>
          <div className="mt-6 grid grid-cols-1 gap-8 border-y border-foreground/15 py-10 sm:grid-cols-3 lg:gap-10">
            {xmas.results.map((result) => (
              <div key={result.label}>
                <p className="text-[54px] font-medium leading-[0.95] tracking-[-0.04em] text-foreground sm:text-[64px]">
                  {result.value}
                </p>
                <p className="mt-3 text-[19px] font-medium leading-[1.25] text-foreground/58">{result.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Yettel TV */}
      <section className="cs-light cs-curve py-[88px] lg:py-[112px]">
        <div className="container-wide">
          <SectionHeader intro={tv.kicker} title={tv.title} body={tv.body} />
          <Reveal className="mt-14" delay={0.1}>
            <TvCampaign />
          </Reveal>
        </div>
      </section>

      {/* Streamlined design production */}
      <section className="cs-deep relative overflow-hidden py-[88px] text-white lg:py-[112px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-12 bottom-10 h-44 w-44 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="container-wide relative">
          <SectionHeader dark intro={production.kicker} title={production.title} body={production.body} />
          <Reveal className="mt-14" delay={0.1}>
            <ProductionTabs />
          </Reveal>
        </div>
      </section>

      {/* What it gave me */}
      <section className="container-wide py-[96px] lg:py-[128px]">
        <div className={sectionGrid}>
          <Reveal y={0} className={sectionIntro}>
            What It Gave Me
          </Reveal>
          <div className="grid grid-cols-1 gap-y-10 lg:col-start-4 lg:col-end-13 lg:grid-cols-9 lg:gap-x-6">
            <Reveal className="lg:col-span-5">
              <h2 className={sectionTitle}>{learning.title}</h2>
            </Reveal>
            <Reveal className="space-y-6 lg:col-span-4" delay={0.1}>
              {learning.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[20px] font-medium leading-[1.35] tracking-[-0.01em] text-foreground/70">
                  {paragraph}
                </p>
              ))}
              <p className="border-t border-foreground/15 pt-6 text-[15px] font-medium leading-[1.5] text-foreground/50">
                {learning.witnessed}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="container-wide pb-[96px] lg:pb-[128px]">
        <div className="flex flex-wrap items-end justify-between gap-8 border-t border-foreground/25 pt-8">
          <div>
            <p className="text-[14px] font-medium uppercase tracking-[0.04em] text-foreground/75">Next Case Study</p>
            <Link
              to={nextCaseStudy.link}
              className="group mt-5 inline-flex items-center gap-4 text-[56px] font-medium leading-none tracking-[-0.04em] text-foreground sm:text-[72px]"
            >
              {nextCaseStudy.label}
              <ArrowUpRight
                className="h-12 w-12 text-accent transition-transform duration-300 ease-out group-hover:rotate-45 sm:h-16 sm:w-16"
                aria-hidden
              />
            </Link>
          </div>
          <Link
            to="/systems"
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-primary px-6 text-[16px] font-normal leading-none text-primary-foreground transition-colors"
          >
            All Case Studies
            <ArrowUpRight size={18} className="transition-transform duration-300 ease-out group-hover:rotate-45" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
