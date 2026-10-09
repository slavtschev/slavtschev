import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "@/components/ReloadLink";
import { usePageTitle } from "@/hooks/use-page-title";

export default function NoteDigitalExperiences() {
  usePageTitle("What I look for when shaping clearer digital experiences");

  return (
    <article>
      <header className="container-wide pt-24 pb-0 md:pt-28 lg:pt-[128px] lg:pb-0">
        <div className="flex max-w-[56rem] flex-col items-start gap-6">
          <Link
            to="/playground"
            className="inline-flex items-center gap-2 text-[16px] leading-none font-medium text-accent transition-colors hover:text-accent/80"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            All notes
          </Link>

          <span className="web-label text-muted-foreground">UX · Design systems · 4 min read</span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="web-display text-foreground"
          >
            What I look for when shaping clearer digital experiences.
          </motion.h1>

          <p className="web-lead max-w-[36ch] text-foreground/68">
            A short note on what clarity actually means when you're the one shaping the interface.
          </p>

          <div className="flex flex-col gap-1 pt-2">
            <span className="text-[16px] leading-none font-medium text-foreground">Dimitar Slavchev</span>
            <span className="web-label text-muted-foreground">Designer and creative technologist</span>
          </div>
        </div>
      </header>

      <figure className="container-wide mt-16 mb-0 lg:mt-24">
        <span className="block aspect-video overflow-hidden rounded-[8px] bg-foreground">
          <img
            src="/work/localization-platform.jpg"
            alt="The localization platform overview: languages, versions, items to review"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </span>
      </figure>

      <div className="container-wide pt-16 lg:pt-24">
        <div className="mx-auto flex max-w-[52rem] flex-col gap-6">
          <p className="web-body text-muted-foreground">
            Most interfaces don't fail because they're ugly. They fail because nobody decided what
            the interface was actually for, and every screen ends up solving a slightly different
            problem.
          </p>
          <p className="web-body text-muted-foreground">
            What I look for first is the single job a screen has to do. Everything that doesn't
            serve that job — a second call-to-action, an extra filter, a status nobody reads — is a
            tax on the one that does.
          </p>
          <p className="web-body text-muted-foreground">
            The tools matter less than that decision. Figma, Framer, a design system in a shared
            file: all of it is slower and sloppier without a clear idea of what "done" looks like
            for the person using the thing.
          </p>

          <div className="flex flex-wrap gap-2 border-t border-border pt-6">
            {["UX", "Design systems"].map((tag) => (
              <span
                key={tag}
                className="inline-flex h-8 items-center rounded-full bg-card px-4 text-[14px] font-medium text-foreground/68"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <nav aria-label="More notes" className="container-wide pt-24 pb-24 lg:pt-32 lg:pb-32">
        <Link
          to="/playground"
          className="group flex flex-col justify-between gap-4 rounded-[8px] bg-card p-8 text-foreground no-underline"
        >
          <span className="web-label text-muted-foreground">All notes</span>
          <span className="flex items-start justify-between gap-4">
            <span className="web-title">How I build, written as I go</span>
            <ArrowUpRight
              size={18}
              className="shrink-0 transition-transform duration-300 ease-out group-hover:rotate-45"
              aria-hidden="true"
            />
          </span>
        </Link>
      </nav>
    </article>
  );
}
