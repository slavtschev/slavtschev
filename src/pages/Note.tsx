import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "@/components/ReloadLink";
import { usePageTitle } from "@/hooks/use-page-title";

const tableOfContents = [
  { number: "01", name: "The problem", id: "the-problem" },
  { number: "02", name: "Building it by prompting", id: "building-it" },
  { number: "03", name: "What it does now", id: "what-it-does-now" },
  { number: "04", name: "What I'd do differently", id: "what-id-change" },
];

const extendScriptSnippet = `// Swap every text layer in the comp to one language
for (var i = 1; i <= comp.numLayers; i++) {
  var layer = comp.layer(i);
  if (!(layer instanceof TextLayer)) continue;
  var text = strings[lang][layer.name];
  if (text) layer.property("Source Text").setValue(text);
}`;

export default function Note() {
  usePageTitle("Vibe Flow: vibe coding in After Effects");

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

          <span className="web-label text-muted-foreground">
            After Effects · Vibe coding · 6 min read
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="web-display text-foreground"
          >
            Vibe Flow: vibe coding in After Effects
          </motion.h1>

          <p className="web-lead max-w-[36ch] text-foreground/68">
            How I built a localization plugin for After Effects by prompting, one step at a time.
          </p>

          <div className="flex flex-col gap-1 pt-2">
            <span className="text-[16px] leading-none font-medium text-foreground">Dimitar Slavchev</span>
            <span className="web-label text-muted-foreground">Designer and creative technologist</span>
          </div>
        </div>
      </header>

      <figure className="container-wide mt-16 mb-0 lg:mt-24">
        <span className="block aspect-video overflow-hidden rounded-[12px] bg-foreground">
          <img
            src="/notes/vibe-flow.jpg"
            alt="Vibe Flow running inside After Effects, rendering a master into 24 language versions"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </span>
        <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="web-label text-muted-foreground">Fig. 1</span>
          <span className="web-small text-muted-foreground">
            Vibe Flow in After Effects: 1 master, 24 languages.
          </span>
        </figcaption>
      </figure>

      <div className="container-wide pt-16 lg:pt-24">
        <div className="flex flex-wrap items-start gap-x-6 gap-y-12">
          <aside className="flex min-w-[240px] flex-1 basis-[240px] flex-col lg:max-w-[264px]">
            <span className="border-b border-foreground pb-4">
              <span className="web-label text-muted-foreground">In this note</span>
            </span>
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex gap-4 border-b border-foreground/15 py-4 transition-colors hover:text-accent"
              >
                <span className="web-label text-muted-foreground">{item.number}</span>
                <span className="web-small">{item.name}</span>
              </a>
            ))}
          </aside>

          <div className="mx-auto flex min-w-0 flex-[0_1_720px] flex-col gap-6">
            <h2 id="the-problem" className="web-title scroll-mt-28 text-foreground">
              The problem
            </h2>
            <p className="web-body text-muted-foreground">
              Every campaign shipped in one market first, then had to be rebuilt by hand in up to
              23 more. The deck, the comp and the copy were already final — what broke was the
              last mile: swapping text layers, re-timing captions that ran long in German or short
              in Thai, and re-rendering each version without anything drifting out of sync with the
              master.
            </p>
            <p className="web-body text-muted-foreground">
              That work was repetitive, easy to get wrong under deadline, and not where I wanted
              to spend my attention. It was also exactly the kind of problem a small, well-scoped
              script solves better than a person checking frames by eye.
            </p>

            <h2 id="building-it" className="web-title scroll-mt-28 pt-6 text-foreground">
              Building it by prompting
            </h2>
            <p className="web-body text-muted-foreground">
              I don't write ExtendScript day to day, so I described the plugin the way I'd brief a
              developer: what a comp looks like before localization, what "done" looks like after,
              and the edge cases that actually happen — layers with no translation yet, text that
              overflows its box, captions that need to shift because a language runs longer.
            </p>
            <p className="web-body text-muted-foreground">
              The first pass from the model walked every text layer in a composition and swapped
              its source text for the matching string in a language table. That alone replaced the
              slowest part of the job.
            </p>

            <div className="flex flex-col overflow-hidden rounded-[12px] bg-foreground">
              <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-white/10 px-6 py-4">
                <span className="web-label text-white/50">ExtendScript</span>
                <span className="web-small text-white/50">The core of the swap</span>
              </span>
              <pre className="overflow-x-auto p-6 font-mono text-[14px] leading-[1.6] text-white">
                {extendScriptSnippet}
              </pre>
            </div>

            <p className="web-body text-muted-foreground">
              What the model couldn't do: judge whether a re-timed caption still matched the voice
              in the final mix, or whether a language's line breaks looked intentional. That part
              stayed mine, every time.
            </p>

            <blockquote className="web-headline border-l-4 border-accent py-1 pl-6 text-foreground">
              I care about both the thing and the system behind the thing.
            </blockquote>

            <h2 id="what-it-does-now" className="web-title scroll-mt-28 pt-6 text-foreground">
              What it does now
            </h2>
            <p className="web-body text-muted-foreground">
              Vibe Flow takes one finished comp and a spreadsheet of strings, and returns a render
              queue of every language version with text, timing and captions already reconciled.
              A job that used to take a full day of manual rebuilding now takes the length of a
              render.
            </p>

            <h2 id="what-id-change" className="web-title scroll-mt-28 pt-6 text-foreground">
              What I'd do differently
            </h2>
            <p className="web-body text-muted-foreground">
              I'd give it a proper review step from the start instead of adding one after the
              first render went out with an untranslated layer still in English. Prompting gets
              you a working first version fast; it doesn't replace checking the output against
              what "correct" actually means for the job.
            </p>

            <div className="flex flex-wrap gap-2 border-t border-border pt-6">
              {["After Effects", "Vibe coding", "Localization"].map((tag) => (
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
      </div>

      <nav aria-label="More notes" className="container-wide pt-24 pb-24 lg:pt-32 lg:pb-32">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            to="/playground/digital-experiences"
            className="group flex flex-col gap-4 rounded-[12px] bg-card p-8 text-foreground no-underline"
          >
            <span className="web-label text-muted-foreground">Earlier note · 15 Jan 2026</span>
            <span className="flex items-start justify-between gap-4">
              <span className="web-title">What I look for when shaping clearer digital experiences</span>
              <ArrowUpRight
                size={18}
                className="shrink-0 transition-transform duration-300 ease-out group-hover:rotate-45"
                aria-hidden="true"
              />
            </span>
          </Link>

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
        </div>
      </nav>
    </article>
  );
}
