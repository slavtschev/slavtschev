import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "@/components/ReloadLink";
import { usePageTitle } from "@/hooks/use-page-title";

// TODO: this whole article is placeholder content. Replace the intro and every
// section below with my actual thinking on AI before this note goes live.
const sections = [
  {
    id: "where-it-fits",
    heading: "[Placeholder] Where AI fits in my process",
    body: "[Placeholder] A paragraph on where AI actually shows up in the day-to-day work goes here.",
  },
  {
    id: "what-stays-mine",
    heading: "[Placeholder] What stays mine",
    body: "[Placeholder] A paragraph on the decisions and judgment calls I don't hand off goes here.",
  },
  {
    id: "where-im-cautious",
    heading: "[Placeholder] Where I'm cautious",
    body: "[Placeholder] A paragraph on the limits and risks I watch for goes here.",
  },
  {
    id: "whats-next",
    heading: "[Placeholder] What's next",
    body: "[Placeholder] A paragraph on how this thinking might change goes here.",
  },
];

export default function NoteAiPhilosophy() {
  usePageTitle("My AI philosophy");

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

          <span className="web-label text-muted-foreground">AI · Process · 3 min read</span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="web-display text-foreground"
          >
            My AI philosophy.
          </motion.h1>

          <p className="web-lead max-w-[36ch] text-foreground/68">
            [Placeholder] A short note on how AI fits into my process and where I draw the line.
          </p>

          <div className="flex flex-col gap-1 pt-2">
            <span className="text-[16px] leading-none font-medium text-foreground">Dimitar Slavchev</span>
            <span className="web-label text-muted-foreground">Designer and creative technologist</span>
          </div>
        </div>
      </header>

      <div className="container-wide pt-16 lg:pt-24">
        <div className="mx-auto flex max-w-[52rem] flex-col gap-6">
          <p className="web-body text-muted-foreground">
            [Placeholder] An intro paragraph setting up the note goes here. This whole article is
            placeholder content, following the site's note template, until the real version replaces it.
          </p>

          {sections.map((section) => (
            <div key={section.id} className="flex flex-col gap-3 pt-4">
              <h2 id={section.id} className="web-title scroll-mt-28 text-foreground">
                {section.heading}
              </h2>
              <p className="web-body text-muted-foreground">{section.body}</p>
            </div>
          ))}

          <div className="flex flex-wrap gap-2 border-t border-border pt-6">
            {["AI", "Process"].map((tag) => (
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
          className="group flex flex-col justify-between gap-4 rounded-[12px] bg-card p-8 text-foreground no-underline"
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
